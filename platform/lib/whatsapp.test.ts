import { describe, it, expect } from "vitest";
import { toWhatsAppNumber, whatsAppLink } from "./whatsapp";

describe("toWhatsAppNumber", () => {
  it("keeps international numbers with +", () => {
    expect(toWhatsAppNumber("+33 6 12 34 56 78")).toBe("33612345678");
  });
  it("strips the 00 international prefix", () => {
    expect(toWhatsAppNumber("0049 151 2345678")).toBe("491512345678");
  });
  it("assumes Germany for national numbers", () => {
    expect(toWhatsAppNumber("0151 / 234-5678")).toBe("491512345678");
  });
});

describe("whatsAppLink", () => {
  it("builds a wa.me link with encoded text", () => {
    expect(whatsAppLink("+49 151 2345678", "Hallo AN-1")).toBe("https://wa.me/491512345678?text=Hallo%20AN-1");
  });
  it("rejects too-short numbers", () => {
    expect(whatsAppLink("123")).toBeNull();
  });
});
