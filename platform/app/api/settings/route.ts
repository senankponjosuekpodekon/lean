import { NextResponse, connection } from "next/server";
import { getSettings, updateSettings } from "@/lib/db";
import { requireAdmin, verifyAdminSession } from "@/lib/admin-auth";
import { toWhatsAppNumber } from "@/lib/whatsapp";

export async function GET() {
  await connection();
  try {
    const settings = await getSettings();
    if (await verifyAdminSession()) {
      return NextResponse.json(settings);
    }
    const enabled = settings.whatsappEnabled && toWhatsAppNumber(settings.whatsappNumber).length >= 8;
    return NextResponse.json({ whatsappEnabled: enabled, whatsappNumber: enabled ? settings.whatsappNumber : "" });
  } catch (error) {
    console.error("getSettings failed:", error);
    return NextResponse.json({ whatsappEnabled: false, whatsappNumber: "" });
  }
}

export async function PUT(request: Request) {
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
  const { whatsappEnabled, whatsappNumber } = body;
  if (typeof whatsappEnabled !== "boolean" || typeof whatsappNumber !== "string" || whatsappNumber.length > 40) {
    return NextResponse.json({ error: "Invalid settings" }, { status: 400 });
  }
  if (whatsappEnabled && toWhatsAppNumber(whatsappNumber).length < 8) {
    return NextResponse.json({ error: "Invalid WhatsApp number" }, { status: 400 });
  }
  try {
    return NextResponse.json(await updateSettings({ whatsappEnabled, whatsappNumber: whatsappNumber.trim() }));
  } catch (error) {
    console.error("updateSettings failed:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
