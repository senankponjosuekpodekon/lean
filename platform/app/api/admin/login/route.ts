import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import { createAdminSessionToken } from "@/lib/admin-auth";
import { clientIp, rateLimit } from "@/lib/rate-limit";

export async function POST(request: Request) {
  if (!rateLimit(`admin-login:${clientIp(request)}`, 5, 60_000)) {
    return NextResponse.json({ error: "Too many attempts" }, { status: 429 });
  }

  const isProd = process.env.NODE_ENV === "production";
  const secret = process.env.ADMIN_SESSION_SECRET;
  const expected = process.env.ADMIN_PASSWORD || (isProd ? undefined : "admin2026");
  if (!expected || (isProd && (!secret || secret.length < 16))) {
    console.error(
      "Admin login misconfigured: ADMIN_PASSWORD is unset and/or ADMIN_SESSION_SECRET is missing or shorter than 16 characters"
    );
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }

  try {
    const { password } = await request.json();
    const supplied = Buffer.from(typeof password === "string" ? password : "", "utf8");
    const expectedBuf = Buffer.from(expected, "utf8");
    if (supplied.length !== expectedBuf.length || !timingSafeEqual(supplied, expectedBuf)) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    const token = createAdminSessionToken();
    if (!token) {
      return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
    (await cookies()).set("admin_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 8,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
