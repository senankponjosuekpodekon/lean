import { after, NextResponse } from "next/server";
import { createApplication, listApplications, updateStatus, type Application, type ApplicationDetails } from "@/lib/db";
import { requireAdmin } from "@/lib/admin-auth";
import { applicationEmails } from "@/lib/emails";
import { defaultLocale, isLocale } from "@/lib/i18n";
import { sendMails } from "@/lib/mailer";

const STATUSES: Application["status"][] = ["received", "reviewing", "missing_info", "in_analysis", "decision_communicated", "closed"];
const DETAIL_FIELDS = ["description", "birthDate", "street", "zip", "city", "status", "occupation", "employer", "tenure", "income", "expenses", "existingLoans"];

const isNonEmptyString = (v: unknown, max = 500): v is string => typeof v === "string" && v.trim().length > 0 && v.length <= max;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { amountCents, termMonths, purpose, firstName, lastName, email, phone } = body;
  if (!Number.isInteger(amountCents) || (amountCents as number) <= 0 || !Number.isInteger(termMonths) || (termMonths as number) <= 0) {
    return NextResponse.json({ error: "Invalid amount or term" }, { status: 400 });
  }
  for (const [field, value] of Object.entries({ purpose, firstName, lastName, email, phone })) {
    if (!isNonEmptyString(value, 200)) {
      return NextResponse.json({ error: `Missing field: ${field}` }, { status: 400 });
    }
  }
  if (!(email as string).includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const details: ApplicationDetails = {};
  for (const field of DETAIL_FIELDS) {
    const value = body[field];
    if (typeof value === "string" && value.trim()) details[field] = value.slice(0, 1000);
  }
  if (Array.isArray(body.documents)) {
    details.documents = body.documents.filter((d): d is string => typeof d === "string").slice(0, 20);
  }

  try {
    const app = await createApplication({
      amountCents: amountCents as number,
      termMonths: termMonths as number,
      purpose: purpose as string,
      firstName: firstName as string,
      lastName: lastName as string,
      email: email as string,
      phone: phone as string,
      details,
    });
    const lang = typeof body.lang === "string" && isLocale(body.lang) ? body.lang : defaultLocale;
    const adminUrl = `${process.env.SITE_URL || new URL(request.url).origin}/admin`;
    after(() => sendMails(applicationEmails(app, lang, adminUrl, process.env.NOTIFY_EMAIL)));
    return NextResponse.json({ reference: app.reference, status: app.status, createdAt: app.createdAt }, { status: 201 });
  } catch (error) {
    console.error("createApplication failed:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await requireAdmin();
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    return NextResponse.json(await listApplications());
  } catch (error) {
    console.error("listApplications failed:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    await requireAdmin();
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
  const { reference, status, statusLabel } = body;
  if (typeof reference !== "string" || !STATUSES.includes(status as Application["status"])) {
    return NextResponse.json({ error: "Missing reference or invalid status" }, { status: 400 });
  }
  try {
    const updated = await updateStatus(reference, status as Application["status"], typeof statusLabel === "string" ? statusLabel : String(status));
    if (!updated) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }
    return NextResponse.json(updated);
  } catch (error) {
    console.error("updateStatus failed:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
