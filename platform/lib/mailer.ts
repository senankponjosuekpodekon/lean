import nodemailer, { type Transporter } from "nodemailer";

export interface MailMessage {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
}

let smtpTransport: Transporter | null = null;

const oneLine = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

export function isMailConfigured(env: NodeJS.ProcessEnv = process.env): boolean {
  return Boolean(env.MAIL_FROM && (env.RESEND_API_KEY || env.SMTP_HOST));
}

export async function sendMail(message: MailMessage, env: NodeJS.ProcessEnv = process.env): Promise<boolean> {
  if (!isMailConfigured(env)) return false;
  const from = env.MAIL_FROM as string;
  const subject = oneLine(message.subject);
  const to = oneLine(message.to);
  const replyTo = message.replyTo ? oneLine(message.replyTo) : undefined;

  if (env.RESEND_API_KEY) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], subject, text: message.text, ...(replyTo ? { reply_to: replyTo } : {}) }),
    });
    if (!res.ok) throw new Error(`Resend responded ${res.status}: ${await res.text()}`);
    return true;
  }

  const port = Number(env.SMTP_PORT || 587);
  smtpTransport ??= nodemailer.createTransport({
    host: env.SMTP_HOST,
    port,
    secure: env.SMTP_SECURE ? env.SMTP_SECURE === "true" : port === 465,
    auth: env.SMTP_USER ? { user: env.SMTP_USER, pass: env.SMTP_PASSWORD } : undefined,
  });
  await smtpTransport.sendMail({ from, to, subject, text: message.text, replyTo });
  return true;
}

export async function sendMails(messages: MailMessage[]): Promise<void> {
  const results = await Promise.allSettled(messages.map((m) => sendMail(m)));
  for (const result of results) {
    if (result.status === "rejected") console.error("sendMail failed:", result.reason);
  }
}
