import { Pool, type QueryResult } from "pg";

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
  createdAt: string;
}

const pool = new Pool({
  connectionString: process.env.PRISMA_DATABASE_URL || process.env.POSTGRES_URL,
  ssl: process.env.PRISMA_DATABASE_URL?.includes("sslmode=require") ? { rejectUnauthorized: false } : false,
});

const initTable = async () => {
  try {
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
  } catch (err) {
    console.error("Database init error:", err);
  }
};

initTable();

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
    createdAt: new Date(String(row.created_at)).toISOString(),
  };
}

export async function createApplication(data: Omit<Application, "id" | "reference" | "createdAt" | "status" | "statusLabel">): Promise<Application> {
  const reference = `AN-${Date.now()}`;
  const result: QueryResult<Record<string, unknown>> = await pool.query(
    `INSERT INTO applications (reference, status, amount_cents, term_months, purpose, first_name, last_name, email, phone, status_label)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
     RETURNING *`,
    [reference, "received", data.amountCents, data.termMonths, data.purpose, data.firstName, data.lastName, data.email, data.phone, "Eingegangen"]
  );
  return rowToApp(result.rows[0]);
}

export async function listApplications(): Promise<Application[]> {
  const result: QueryResult<Record<string, unknown>> = await pool.query(
    `SELECT * FROM applications ORDER BY created_at DESC`
  );
  return result.rows.map(rowToApp);
}

export async function updateStatus(reference: string, status: Application["status"], statusLabel: string): Promise<Application | null> {
  const result: QueryResult<Record<string, unknown>> = await pool.query(
    `UPDATE applications SET status = $1, status_label = $2 WHERE reference = $3 RETURNING *`,
    [status, statusLabel, reference]
  );
  if (result.rows.length === 0) return null;
  return rowToApp(result.rows[0]);
}
