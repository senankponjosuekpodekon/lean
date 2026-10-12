/**
 * Calculateur de mensualités pour prêt amortissable à mensualités constantes.
 * Les montants sont traités en centimes pour éviter les erreurs de flottants binaires.
 * Cette fonction est un prototype ; les règles d'arrondi, frais et TAEG doivent être validées
 * par le responsable du produit avant publication.
 */

export interface LoanParams {
  amountCents: number; // capital en centimes
  annualRatePercent: number; // taux nominal annuel en pourcentage, ex: 3 pour 3%
  termMonths: number; // nombre de mensualités
  feesCents?: number; // frais fixes en centimes
}

export interface LoanResult {
  monthlyPaymentCents: number;
  totalPaymentCents: number;
  totalInterestCents: number;
  feesCents: number;
  principalCents: number;
  termMonths: number;
  annualRatePercent: number;
}

export function calculateLoan(params: LoanParams): LoanResult {
  const { amountCents, annualRatePercent, termMonths, feesCents = 0 } = params;

  if (amountCents <= 0) {
    throw new Error("Le montant emprunté doit être positif.");
  }
  if (termMonths <= 0) {
    throw new Error("La durée doit être positive.");
  }

  const monthlyRate = annualRatePercent / 100 / 12;

  let monthlyPaymentCents: number;
  if (monthlyRate === 0) {
    monthlyPaymentCents = Math.round(amountCents / termMonths);
  } else {
    const payment =
      (amountCents * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -termMonths));
    monthlyPaymentCents = Math.round(payment);
  }

  const totalPaymentCents = monthlyPaymentCents * termMonths + feesCents;
  const totalInterestCents = totalPaymentCents - amountCents - feesCents;

  return {
    monthlyPaymentCents,
    totalPaymentCents,
    totalInterestCents,
    feesCents,
    principalCents: amountCents,
    termMonths,
    annualRatePercent,
  };
}

export function formatCurrency(cents: number, locale = "de-DE"): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(cents / 100);
}

export function parseAmountToCents(value: string): number {
  const cleaned = value.replace(/\s/g, "");
  const lastDot = cleaned.lastIndexOf(".");
  const lastComma = cleaned.lastIndexOf(",");
  const lastSeparator = Math.max(lastDot, lastComma);

  let normalized: string;
  if (lastSeparator === -1) {
    normalized = cleaned;
  } else {
    const before = cleaned.slice(0, lastSeparator).replace(/[.,]/g, "");
    const after = cleaned.slice(lastSeparator + 1);
    normalized = `${before}.${after}`;
  }

  const amount = Number(normalized);
  if (Number.isNaN(amount)) return 0;
  return Math.round(amount * 100);
}

export function centsToEuros(cents: number): number {
  return cents / 100;
}

// Données de configuration du produit (paramètres à valider avant publication)
export const LOAN_CONFIG = {
  minAmountCents: 500_000, // 5 000 €
  maxAmountCents: 10_000_000, // 100 000 € (exemple)
  defaultAmountCents: 1_000_000, // 10 000 €
  annualRatePercent: 3, // configurable
  availableTerms: [12, 24, 36, 48, 60, 84, 120] as readonly number[],
  defaultTerm: 60,
};
