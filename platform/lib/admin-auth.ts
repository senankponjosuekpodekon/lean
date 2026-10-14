import { cookies } from "next/headers";
import { createHmac } from "crypto";

const SESSION_KEY = "admin_session";

function getSecret() {
  return process.env.ADMIN_SESSION_SECRET || "velmora-dev-secret-change-in-production";
}

export function signAdminSession() {
  return createHmac("sha256", getSecret()).update("admin").digest("hex");
}

export async function verifyAdminSession() {
  const cookie = (await cookies()).get(SESSION_KEY)?.value;
  if (!cookie) return false;
  try {
    return cookie === signAdminSession();
  } catch {
    return false;
  }
}

export async function requireAdmin() {
  if (!(await verifyAdminSession())) {
    throw new Error("Unauthorized");
  }
}
