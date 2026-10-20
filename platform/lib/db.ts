import { Pool, type QueryResult } from "pg";

export type ApplicationDetails = Record<string, string | string[]>;

export interface Application {
  id: string;
  reference: string;
  status: "received" | "reviewing" | "missing_info" | "in_analysis" | "decision_communicated" | "closed";
  amountCents: number;
  termMonths: number;
  purpose: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  statusLabel: string;
  details: ApplicationDetails;
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  handled: boolean;
  createdAt: string;
}

export interface SiteSettings {
  whatsappEnabled: boolean;
  whatsappNumber: string;
}

const pool = new Pool({
  connectionString: process.env.PRISMA_DATABASE_URL || process.env.POSTGRES_URL,
  ssl: process.env.PRISMA_DATABASE_URL?.includes("sslmode=require") ? { rejectUnauthorized: false } : false,
});

let schemaReady: Promise<void> | null = null;

function ensureSchema() {
  schemaReady ??= (async () => {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS applications (
        id SERIAL PRIMARY KEY,
        reference TEXT UNIQUE NOT NULL,
        status TEXT NOT NULL,
        amount_cents INTEGER NOT NULL,
        term_months INTEGER NOT NULL,
        purpose TEXT NOT NULL,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        status_label TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW()
      )
    `);
    await pool.query(`ALTER TABLE applications ADD COLUMN IF NOT EXISTS details JSONB NOT NULL DEFAULT '{}'::jsonb`);
    await pool.query(`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        handled BOOLEAN NOT NULL DEFAULT FALSE,
        created_at TIMESTAMPTZ DEFAULT NOW()
      )
    `);
    await pool.query(`
      CREATE TABLE IF NOT EXISTS site_settings (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL
      )
    `);
  })().catch((err) => {
    schemaReady = null;
    throw err;
  });
  return schemaReady;
}

async function query(text: string, params?: unknown[]): Promise<QueryResult<Record<string, unknown>>> {
  await ensureSchema();
  return pool.query(text, params);
}

function rowToApp(row: Record<string, unknown>): Application {
  return {
    id: String(row.id),
    reference: String(row.reference),
    status: String(row.status) as Application["status"],
    amountCents: Number(row.amount_cents),
    termMonths: Number(row.term_months),
    purpose: String(row.purpose),
    firstName: String(row.first_name),
    lastName: String(row.last_name),
    email: String(row.email),
    phone: String(row.phone),
    statusLabel: String(row.status_label),
    details: (row.details as ApplicationDetails | null) ?? {},
    createdAt: new Date(String(row.created_at)).toISOString(),
  };
}

function rowToMessage(row: Record<string, unknown>): ContactMessage {
  return {
    id: String(row.id),
    name: String(row.name),
    email: String(row.email),
    message: String(row.message),
    handled: Boolean(row.handled),
    createdAt: new Date(String(row.created_at)).toISOString(),
  };
}

export async function createApplication(
  data: Omit<Application, "id" | "reference" | "createdAt" | "status" | "statusLabel">
): Promise<Application> {
  const reference = `AN-${Date.now()}`;
  const result = await query(
    `INSERT INTO applications (reference, status, amount_cents, term_months, purpose, first_name, last_name, email, phone, status_label, details)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
     RETURNING *`,
    [reference, "received", data.amountCents, data.termMonths, data.purpose, data.firstName, data.lastName, data.email, data.phone, "Eingegangen", JSON.stringify(data.details)]
  );
  return rowToApp(result.rows[0]);
}

export async function listApplications(): Promise<Application[]> {
  const result = await query(`SELECT * FROM applications ORDER BY created_at DESC`);
  return result.rows.map(rowToApp);
}

export async function updateStatus(reference: string, status: Application["status"], statusLabel: string): Promise<Application | null> {
  const result = await query(
    `UPDATE applications SET status = $1, status_label = $2 WHERE reference = $3 RETURNING *`,
    [status, statusLabel, reference]
  );
  if (result.rows.length === 0) return null;
  return rowToApp(result.rows[0]);
}

export async function createContactMessage(data: Pick<ContactMessage, "name" | "email" | "message">): Promise<ContactMessage> {
  const result = await query(
    `INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3) RETURNING *`,
    [data.name, data.email, data.message]
  );
  return rowToMessage(result.rows[0]);
}

export async function listContactMessages(): Promise<ContactMessage[]> {
  const result = await query(`SELECT * FROM contact_messages ORDER BY created_at DESC`);
  return result.rows.map(rowToMessage);
}

export async function setContactMessageHandled(id: string, handled: boolean): Promise<ContactMessage | null> {
  const result = await query(`UPDATE contact_messages SET handled = $1 WHERE id = $2 RETURNING *`, [handled, id]);
  if (result.rows.length === 0) return null;
  return rowToMessage(result.rows[0]);
}

export async function getSettings(): Promise<SiteSettings> {
  const result = await query(`SELECT key, value FROM site_settings`);
  const map = new Map(result.rows.map((r) => [String(r.key), String(r.value)]));
  return {
    whatsappEnabled: map.get("whatsapp_enabled") === "true",
    whatsappNumber: map.get("whatsapp_number") ?? "",
  };
}

export async function updateSettings(settings: SiteSettings): Promise<SiteSettings> {
  const entries: [string, string][] = [
    ["whatsapp_enabled", String(settings.whatsappEnabled)],
    ["whatsapp_number", settings.whatsappNumber],
  ];
  for (const [key, value] of entries) {
    await query(
      `INSERT INTO site_settings (key, value) VALUES ($1, $2) ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value`,
      [key, value]
    );
  }
  return getSettings();
}
