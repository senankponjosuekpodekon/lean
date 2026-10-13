"use client";

import { Suspense, useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Slider } from "@/components/ui/Slider";
import { Input } from "@/components/ui/Input";
import { calculateLoan, formatCurrency, LOAN_CONFIG, centsToEuros, parseAmountToCents } from "@/lib/loan";
import { useParams } from "next/navigation";
import { getDictionary, type Locale } from "@/lib/i18n";
import Link from "next/link";

function localPath(path: string, lang: Locale) {
  return path.replace(/^\/(de|fr|es|it|pt)\//, `/${lang}/`);
}

export default function KreditrechnerPage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" />}>
      <KreditrechnerInner />
    </Suspense>
  );
}

function KreditrechnerInner() {
  const [amountCents, setAmountCents] = useState<number>(LOAN_CONFIG.defaultAmountCents);
  const [term, setTerm] = useState<number>(LOAN_CONFIG.defaultTerm);
  const params = useParams();
  const lang = (params?.lang as Locale) || "de";
  const t = getDictionary(lang);

  const result = useMemo(() => {
    try {
      return calculateLoan({ amountCents, annualRatePercent: LOAN_CONFIG.annualRatePercent, termMonths: term });
    } catch {
      return null;
    }
  }, [amountCents, term]);

  const amountInputValue = (amountCents / 100).toFixed(0);

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12 lg:py-20 animate-fade-in-up">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="font-heading text-3xl lg:text-5xl font-bold text-primary">{t.calcTitle}</h1>
        <p className="mt-4 text-lg text-text-secondary">{t.calcDescription}</p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8 items-start">
        <Card className="lg:col-span-3 space-y-8">
          <Slider
            label={t.amount}
            min={LOAN_CONFIG.minAmountCents / 100}
            max={LOAN_CONFIG.maxAmountCents / 100}
            step={500}
            value={Math.round(amountCents / 100)}
            onChange={(v) => setAmountCents(v * 100)}
            formatValue={(v) => `${v.toLocaleString("de-DE")} €`}
          />

          <div className="grid sm:grid-cols-2 gap-4">
            <Input
              label={t.amount}
              name="amount"
              type="text"
              value={amountInputValue}
              onChange={(v) => setAmountCents(parseAmountToCents(v))}
              placeholder="10000"
            />
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text">{t.duration}</label>
              <select
                value={term}
                onChange={(e) => setTerm(Number(e.target.value))}
                className="h-12 px-4 rounded-lg border border-border bg-surface text-text focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                {LOAN_CONFIG.availableTerms.map((termValue) => (
                  <option key={termValue} value={termValue}>
                    {termValue} {termValue === 1 ? t.month : t.months}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-background border border-border">
            <p className="text-sm text-text-secondary">
              {t.nominalRate}: <span className="font-semibold text-primary">{LOAN_CONFIG.annualRatePercent} %</span>
            </p>
            <p className="text-xs text-text-secondary mt-1">{t.configurableValue}</p>
          </div>
        </Card>

        <Card className="lg:col-span-2 bg-primary/5 border-primary/10">
          <h2 className="font-heading text-xl font-bold text-primary mb-6">{t.result}</h2>
          {result ? (
            <div className="space-y-4">
              <div>
                <p className="text-sm text-text-secondary">{t.estimatedMonthlyPayment}</p>
                <p className="font-heading text-4xl font-bold text-primary">{formatCurrency(result.monthlyPaymentCents)}</p>
              </div>
              <div className="pt-4 border-t border-border space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">{t.amount}</span>
                  <span className="font-medium text-text">{formatCurrency(result.principalCents)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">{t.duration}</span>
                  <span className="font-medium text-text">{result.termMonths} {result.termMonths === 1 ? t.month : t.months}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">{t.estimatedTotal}</span>
                  <span className="font-medium text-text">{formatCurrency(result.totalPaymentCents)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">{t.estimatedInterest}</span>
                  <span className="font-medium text-text">{formatCurrency(result.totalInterestCents)}</span>
                </div>
              </div>
              <p className="text-xs text-text-secondary pt-4">{t.calcDisclaimer}</p>
            </div>
          ) : (
            <p className="text-error">{t.invalidInput}</p>
          )}

          <div className="mt-8">
            <Link href={localPath(`/de/antrag?amount=${centsToEuros(amountCents)}&term=${term}`, lang)}>
              <Button className="w-full">{t.apply}</Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
