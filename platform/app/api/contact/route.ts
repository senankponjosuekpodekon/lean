import { after, NextResponse } from "next/server";
import { createContactMessage, listContactMessages, setContactMessageHandled } from "@/lib/db";
import { requireAdmin } from "@/lib/admin-auth";
import { contactEmails } from "@/lib/emails";
import { defaultLocale, isLocale } from "@/lib/i18n";
import { sendMails } from "@/lib/mailer";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
  const { name, email, message } = body;
  if (
    typeof name !== "string" || !name.trim() || name.length > 200 ||
    typeof email !== "string" || !email.includes("@") || email.length > 200 ||
    typeof message !== "string" || !message.trim() || message.length > 5000
  ) {
    return NextResponse.json({ error: "Invalid fields" }, { status: 400 });
  }
  try {
    const saved = await createContactMessage({ name: name.trim(), email: email.trim(), message: message.trim() });
    const lang = typeof body.lang === "string" && isLocale(body.lang) ? body.lang : defaultLocale;
    const adminUrl = `${process.env.SITE_URL || new URL(request.url).origin}/admin`;
    after(() => sendMails(contactEmails(saved, lang, adminUrl, process.env.NOTIFY_EMAIL)));
    return NextResponse.json({ id: saved.id }, { status: 201 });
  } catch (error) {
    console.error("createContactMessage failed:", error);
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
    return NextResponse.json(await listContactMessages());
  } catch (error) {
    console.error("listContactMessages failed:", error);
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
  const { id, handled } = body;
  if ((typeof id !== "string" && typeof id !== "number") || typeof handled !== "boolean") {
    return NextResponse.json({ error: "Missing id or handled" }, { status: 400 });
  }
  try {
    const updated = await setContactMessageHandled(String(id), handled);
    if (!updated) return NextResponse.json({ error: "Message not found" }, { status: 404 });
    return NextResponse.json(updated);
  } catch (error) {
    console.error("setContactMessageHandled failed:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
