import { NextResponse } from "next/server";
import { createApplication, listApplications, updateStatus, type Application } from "@/lib/db";
import { requireAdmin } from "@/lib/admin-auth";

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
  try {
    await requireAdmin();
    return NextResponse.json(listApplications());
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function PATCH(request: Request) {
  try {
    await requireAdmin();
    const { reference, status, statusLabel } = await request.json();
    if (!reference || !status) {
      return NextResponse.json({ error: "Missing reference or status" }, { status: 400 });
    }
    const updated = updateStatus(reference, status as Application["status"], statusLabel || status);
    if (!updated) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }
    return NextResponse.json(updated);
  } catch (error) {
    if ((error as Error).message === "Unauthorized") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
