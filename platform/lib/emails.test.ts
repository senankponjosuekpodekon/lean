import { describe, it, expect } from "vitest";
import { applicationEmails, contactEmails } from "./emails";

const app = {
  reference: "AN-42",
  firstName: "Marie",
  lastName: "Curie",
  email: "marie@example.com",
  phone: "+33 6 12 34 56 78",
  amountCents: 1500000,
  termMonths: 48,
  purpose: "Auto",
};

describe("applicationEmails", () => {
  it("sends a localized confirmation to the customer and a notification to the team", () => {
    const [customer, team] = applicationEmails(app, "fr", "https://velmora.test/admin", "pro@velmora.test");
    expect(customer.to).toBe("marie@example.com");
    expect(customer.subject).toContain("AN-42");
    expect(customer.text).toContain("Bonjour Marie Curie");
    expect(team.to).toBe("pro@velmora.test");
    expect(team.replyTo).toBe("marie@example.com");
    expect(team.text).toContain("+33 6 12 34 56 78");
    expect(team.text).toContain("https://velmora.test/admin");
  });

  it("skips the team notification when NOTIFY_EMAIL is unset", () => {
    expect(applicationEmails(app, "de", "https://velmora.test/admin")).toHaveLength(1);
  });
});

describe("contactEmails", () => {
  it("includes the original message in the team notification", () => {
    const [customer, team] = contactEmails(
      { name: "Luca", email: "luca@example.com", message: "Ciao!" },
      "it",
      "https://velmora.test/admin",
      "pro@velmora.test",
    );
    expect(customer.text).toContain("Gentile Luca");
    expect(team.text).toContain("Ciao!");
    expect(team.replyTo).toBe("luca@example.com");
  });
});
