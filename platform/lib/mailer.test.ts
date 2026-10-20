import { afterEach, describe, it, expect, vi } from "vitest";
import { isMailConfigured, sendMail } from "./mailer";

const env = (vars: Record<string, string>) => vars as NodeJS.ProcessEnv;
const message = { to: "a@example.com", subject: "Hi\r\nBcc: evil@example.com", text: "Body", replyTo: "b@example.com" };

afterEach(() => vi.unstubAllGlobals());

describe("sendMail", () => {
  it("does nothing when no provider is configured", async () => {
    expect(isMailConfigured(env({}))).toBe(false);
    expect(await sendMail(message, env({}))).toBe(false);
  });

  it("posts to Resend with a single-line subject", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response("{}", { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);
    const sent = await sendMail(message, env({ MAIL_FROM: "Velmora <no-reply@velmora.test>", RESEND_API_KEY: "re_test" }));
    expect(sent).toBe(true);
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("https://api.resend.com/emails");
    const payload = JSON.parse(init.body);
    expect(payload).toMatchObject({ to: ["a@example.com"], reply_to: "b@example.com", subject: "Hi Bcc: evil@example.com" });
  });

  it("throws when Resend rejects the request", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("bad", { status: 422 })));
    await expect(sendMail(message, env({ MAIL_FROM: "x@velmora.test", RESEND_API_KEY: "re_test" }))).rejects.toThrow("422");
  });
});
