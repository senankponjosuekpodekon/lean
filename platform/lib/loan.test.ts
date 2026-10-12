import { describe, it, expect } from "vitest";
import { calculateLoan, parseAmountToCents } from "./loan";

describe("calculateLoan", () => {
  it("calculates the reference example correctly", () => {
    const result = calculateLoan({
      amountCents: 1_000_000, // 10 000 €
      annualRatePercent: 3,
      termMonths: 60,
    });

    expect(result.monthlyPaymentCents).toBe(17_969); // ~179,69 €
    expect(result.totalPaymentCents).toBe(1_078_140); // ~10 781,40 €
    expect(result.totalInterestCents).toBe(78_140); // ~781,40 €
  });

  it("handles zero interest rate", () => {
    const result = calculateLoan({
      amountCents: 12_000_00,
      annualRatePercent: 0,
      termMonths: 12,
    });

    expect(result.monthlyPaymentCents).toBe(12_000_00 / 12);
    expect(result.totalInterestCents).toBe(0);
  });

  it("throws for invalid amounts", () => {
    expect(() =>
      calculateLoan({ amountCents: 0, annualRatePercent: 3, termMonths: 12 })
    ).toThrow();
  });

  it("throws for invalid term", () => {
    expect(() =>
      calculateLoan({ amountCents: 1_000_000, annualRatePercent: 3, termMonths: 0 })
    ).toThrow();
  });
});

describe("parseAmountToCents", () => {
  it("parses euros with comma", () => {
    expect(parseAmountToCents("10.000,50")).toBe(1_000_050);
  });

  it("parses plain euros", () => {
    expect(parseAmountToCents("5000")).toBe(500_000);
  });
});
