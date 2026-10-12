"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Slider } from "@/components/ui/Slider";
import { Input } from "@/components/ui/Input";
import {
  calculateLoan,
  formatCurrency,
  LOAN_CONFIG,
  centsToEuros,
  parseAmountToCents,
} from "@/lib/loan";
import Link from "next/link";

export default function KreditrechnerPage() {
  const [amountCents, setAmountCents] = useState<number>(LOAN_CONFIG.defaultAmountCents);
  const [term, setTerm] = useState<number>(LOAN_CONFIG.defaultTerm);

  const result = useMemo(() => {
    try {
      return calculateLoan({
        amountCents,
        annualRatePercent: LOAN_CONFIG.annualRatePercent,
        termMonths: term,
      });
    } catch {
      return null;
    }
  }, [amountCents, term]);

  const amountInputValue = (amountCents / 100).toFixed(0);

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12 lg:py-20">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="font-heading text-3xl lg:text-5xl font-bold text-primary">
          Berechnen Sie Ihre mögliche Monatsrate
        </h1>
        <p className="mt-4 text-lg text-text-secondary">
          Passen Sie den Kreditbetrag und die Laufzeit an, um eine unverbindliche Schätzung zu erhalten.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8 items-start">
        {/* Controls */}
        <Card className="lg:col-span-3 space-y-8">
          <Slider
            label="Gewünschter Kreditbetrag"
            min={LOAN_CONFIG.minAmountCents / 100}
            max={LOAN_CONFIG.maxAmountCents / 100}
            step={500}
            value={Math.round(amountCents / 100)}
            onChange={(v) => setAmountCents(v * 100)}
            formatValue={(v) => `${v.toLocaleString("de-DE")} €`}
          />

          <div className="grid sm:grid-cols-2 gap-4">
            <Input
              label="Kreditbetrag (€)"
              name="amount"
              type="text"
              value={amountInputValue}
              onChange={(v) => setAmountCents(parseAmountToCents(v))}
              placeholder="10000"
            />
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-text">Laufzeit (Monate)</label>
              <select
                value={term}
                onChange={(e) => setTerm(Number(e.target.value))}
                className="h-12 px-4 rounded-xl border border-border bg-surface text-text focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {LOAN_CONFIG.availableTerms.map((t) => (
                  <option key={t} value={t}>
                    {t} Monate
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-background border border-border">
            <p className="text-sm text-text-secondary">
              Nominalzins (p.a.):{" "}
              <span className="font-semibold text-primary">
                {LOAN_CONFIG.annualRatePercent} %
              </span>
            </p>
            <p className="text-xs text-text-secondary mt-1">
              Konfigurierbarer Wert. Muss vor Veröffentlichung bestätigt werden.
            </p>
          </div>
        </Card>

        {/* Results */}
        <Card className="lg:col-span-2 bg-primary/5 border-primary/10">
          <h2 className="font-heading text-xl font-bold text-primary mb-6">Ergebnis</h2>
          {result ? (
            <div className="space-y-4">
              <div>
                <p className="text-sm text-text-secondary">Voraussichtliche Monatsrate</p>
                <p className="font-heading text-4xl font-bold text-primary">
                  {formatCurrency(result.monthlyPaymentCents)}
                </p>
              </div>
              <div className="pt-4 border-t border-border space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Kreditbetrag</span>
                  <span className="font-medium text-text">{formatCurrency(result.principalCents)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Laufzeit</span>
                  <span className="font-medium text-text">{result.termMonths} Monate</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Geschätzte Gesamtzahlung</span>
                  <span className="font-medium text-text">{formatCurrency(result.totalPaymentCents)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Geschätzte Zinskosten</span>
                  <span className="font-medium text-text">{formatCurrency(result.totalInterestCents)}</span>
                </div>
              </div>
              <p className="text-xs text-text-secondary pt-4">
                Diese Berechnung ist unverbindlich und stellt kein Kreditangebot dar. Die tatsächlichen Konditionen hängen von der Prüfung Ihrer Anfrage und den vertraglich vereinbarten Bedingungen ab.
              </p>
            </div>
          ) : (
            <p className="text-error">Bitte überprüfen Sie die Eingabewerte.</p>
          )}

          <div className="mt-8">
            <Link href={`/de/antrag?amount=${centsToEuros(amountCents)}&term=${term}`}>
              <Button className="w-full">Finanzierung anfragen</Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
