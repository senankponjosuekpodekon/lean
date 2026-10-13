import { NextResponse } from "next/server";
import { createApplication, listApplications, updateStatus, type Application } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const required = ["amountCents", "termMonths", "purpose", "firstName", "lastName", "email", "phone"];
    for (const field of required) {
      if (!(field in body)) {
        return NextResponse.json({ error: `Missing field: ${field}` }, { status: 400 });
      }
    }
    const app = await createApplication(body);
    return NextResponse.json({ reference: app.reference, status: app.status, createdAt: app.createdAt }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json(listApplications());
}

export async function PATCH(request: Request) {
  try {
    const { reference, status, statusLabel } = await request.json();
    if (!reference || !status) {
      return NextResponse.json({ error: "Missing reference or status" }, { status: 400 });
    }
    const updated = updateStatus(reference, status as Application["status"], statusLabel || status);
    if (!updated) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
