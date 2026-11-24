import { cookies } from "next/headers";
import { createHmac, randomBytes, timingSafeEqual } from "crypto";

const SESSION_KEY = "admin_session";
const SESSION_TTL_MS = 8 * 60 * 60 * 1000;

function getSecret(): string | null {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (secret && secret.length >= 16) return secret;
  return process.env.NODE_ENV === "production" ? null : "velmora-dev-secret-local-only";
}

function sign(payload: string, secret: string): string {
  return createHmac("sha256", secret).update(payload).digest("hex");
}

export function createAdminSessionToken(): string | null {
  const secret = getSecret();
  if (!secret) return null;
  const payload = `${randomBytes(16).toString("hex")}.${Date.now() + SESSION_TTL_MS}`;
  return `${payload}.${sign(payload, secret)}`;
}

export async function verifyAdminSession(): Promise<boolean> {
  const secret = getSecret();
  const cookie = (await cookies()).get(SESSION_KEY)?.value;
  if (!secret || !cookie) return false;

  const lastDot = cookie.lastIndexOf(".");
  if (lastDot <= 0) return false;
  const payload = cookie.slice(0, lastDot);
  const signature = Buffer.from(cookie.slice(lastDot + 1), "utf8");
  const expected = Buffer.from(sign(payload, secret), "utf8");
  if (signature.length !== expected.length || !timingSafeEqual(signature, expected)) {
    return false;
  }

  const expiresAt = Number(payload.slice(payload.lastIndexOf(".") + 1));
  return Number.isFinite(expiresAt) && expiresAt > Date.now();
}

export async function requireAdmin() {
  if (!(await verifyAdminSession())) {
    throw new Error("Unauthorized");
  }
}
