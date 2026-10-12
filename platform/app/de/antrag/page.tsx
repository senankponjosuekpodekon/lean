"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { calculateLoan, formatCurrency, LOAN_CONFIG, parseAmountToCents } from "@/lib/loan";
import Link from "next/link";

type Step = 1 | 2 | 3 | 4 | 5;

const purposes = [
  "Persönliches Vorhaben",
  "Fahrzeug",
  "Renovierung",
  "Berufliches Projekt",
  "Investition",
  "Liquiditätsbedarf",
  "Sonstiges",
];

const employmentStatuses = [
  "Angestellt",
  "Selbstständig",
  "Unternehmer/in",
  "Beamte/r",
  "Im Ruhestand",
  "Sonstiges",
];

export default function AntragPage() {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState<"idle" | "loading" | "success" | "error">("idle");

  const [amountCents, setAmountCents] = useState<number>(LOAN_CONFIG.defaultAmountCents);
  const [term, setTerm] = useState<number>(LOAN_CONFIG.defaultTerm);
  const [purpose, setPurpose] = useState(purposes[0]);
  const [description, setDescription] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [status, setStatus] = useState(employmentStatuses[0]);
  const [occupation, setOccupation] = useState("");
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");

  const [confirmed, setConfirmed] = useState(false);
  const [privacy, setPrivacy] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const amount = Number(params.get("amount"));
    const t = Number(params.get("term"));
    if (!Number.isNaN(amount) && amount > 0) {
      setAmountCents(Math.round(amount * 100));
    }
    if (!Number.isNaN(t) && LOAN_CONFIG.availableTerms.includes(t)) {
      setTerm(t);
    }
  }, []);

  const loanResult = useMemo(() => {
    try {
      return calculateLoan({ amountCents, annualRatePercent: LOAN_CONFIG.annualRatePercent, termMonths: term });
    } catch {
      return null;
    }
  }, [amountCents, term]);

  const validateStep = () => {
    if (step === 1) {
      return amountCents >= LOAN_CONFIG.minAmountCents && LOAN_CONFIG.availableTerms.includes(term);
    }
    if (step === 2) {
      return firstName && lastName && email.includes("@") && phone;
    }
    if (step === 3) {
      return occupation && income && expenses;
    }
    if (step === 4) {
      return confirmed && privacy;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep() && step < 5) {
      setStep((s) => (s + 1) as Step);
    }
  };

  const prevStep = () => {
    if (step > 1) setStep((s) => (s - 1) as Step);
  };

  const submit = async () => {
    setSubmitted("loading");
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmitted("success");
  };

  if (submitted === "success") {
    return (
      <div className="max-w-3xl mx-auto px-5 lg:px-12 py-20">
        <Card className="text-center bg-success/5 border-success/20">
          <h1 className="font-heading text-2xl lg:text-4xl font-bold text-success">Vielen Dank für Ihre Anfrage</h1>
          <p className="mt-4 text-text-secondary">
            Ihre Anfrage wurde erfolgreich übermittelt. Wir prüfen die übermittelten Angaben und informieren Sie über die nächsten Schritte, sofern eine weitere Bearbeitung möglich ist.
          </p>
          <div className="mt-6 space-y-2 text-text-secondary">
            <p>Referenz: AN-2026-001</p>
            <p>Datum: {new Date().toLocaleDateString("de-DE")}</p>
          </div>
          <div className="mt-8">
            <Button href="/de">Zur Startseite</Button>
          </div>
        </Card>
      </div>
    );
  }

  if (submitted === "error") {
    return (
      <div className="max-w-3xl mx-auto px-5 lg:px-12 py-20">
        <Card className="text-center bg-error/5 border-error/20">
          <h1 className="font-heading text-2xl lg:text-4xl font-bold text-error">Ihre Anfrage konnte nicht übermittelt werden</h1>
          <p className="mt-4 text-text-secondary">
            Beim Übermitteln Ihrer Anfrage ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button onClick={() => setSubmitted("idle")}>Erneut versuchen</Button>
            <Button href="/de/kontakt" variant="outline">Kontakt aufnehmen</Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12 lg:py-20">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="font-heading text-3xl lg:text-5xl font-bold text-primary">Finanzierung anfragen</h1>
        <p className="mt-4 text-text-secondary">Bitte füllen Sie die folgenden Schritte aus. Sie können Ihre Angaben vor dem Absenden überprüfen.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stepper */}
          <div className="flex items-center justify-between mb-6">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex flex-col items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    s <= step ? "bg-accent text-white" : "bg-border text-text-secondary"
                  }`}
                >
                  {s}
                </div>
                <span className="hidden sm:block text-xs text-text-secondary">
                  {s === 1 && "Finanzierung"}
                  {s === 2 && "Persönliches"}
                  {s === 3 && "Situation"}
                  {s === 4 && "Prüfen"}
                </span>
              </div>
            ))}
          </div>

          <Card>
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="font-heading text-2xl font-bold text-primary">Welche Finanzierung wünschen Sie?</h2>
                <Input
                  label="Gewünschter Kreditbetrag (€)"
                  name="amount"
                  type="text"
                  value={(amountCents / 100).toString()}
                  onChange={(v) => setAmountCents(parseAmountToCents(v))}
                />
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text">Gewünschte Laufzeit</label>
                  <select
                    value={term}
                    onChange={(e) => setTerm(Number(e.target.value))}
                    className="h-12 px-4 rounded-xl border border-border bg-surface text-text focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    {LOAN_CONFIG.availableTerms.map((t) => (
                      <option key={t} value={t}>{t} Monate</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text">Verwendungszweck</label>
                  <select
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    className="h-12 px-4 rounded-xl border border-border bg-surface text-text focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    {purposes.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
                <Input
                  label="Beschreibung des Vorhabens (optional)"
                  name="description"
                  value={description}
                  onChange={setDescription}
                />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="font-heading text-2xl font-bold text-primary">Ihre persönlichen Angaben</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input label="Vorname" name="firstName" value={firstName} onChange={setFirstName} required />
                  <Input label="Nachname" name="lastName" value={lastName} onChange={setLastName} required />
                </div>
                <Input label="Geburtsdatum" name="birthDate" type="date" value="" onChange={() => {}} />
                <Input label="Straße und Hausnummer" name="street" value="" onChange={() => {}} />
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input label="Postleitzahl" name="zip" value="" onChange={() => {}} />
                  <Input label="Wohnort" name="city" value="" onChange={() => {}} />
                </div>
                <Input label="E-Mail-Adresse" name="email" type="email" value={email} onChange={setEmail} required />
                <Input label="Telefonnummer" name="phone" type="tel" value={phone} onChange={setPhone} required />
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="font-heading text-2xl font-bold text-primary">Ihre berufliche und finanzielle Situation</h2>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text">Beruflicher Status</label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="h-12 px-4 rounded-xl border border-border bg-surface text-text focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    {employmentStatuses.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <Input label="Beruf oder Tätigkeit" name="occupation" value={occupation} onChange={setOccupation} required />
                <Input label="Monatliches Nettoeinkommen (€)" name="income" type="text" value={income} onChange={setIncome} required />
                <Input label="Monatliche Fixkosten (€)" name="expenses" type="text" value={expenses} onChange={setExpenses} required />
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <h2 className="font-heading text-2xl font-bold text-primary">Bitte prüfen Sie Ihre Angaben</h2>
                <div className="space-y-3 text-sm">
                  <p><strong>Kreditbetrag:</strong> {formatCurrency(amountCents)}</p>
                  <p><strong>Laufzeit:</strong> {term} Monate</p>
                  <p><strong>Verwendungszweck:</strong> {purpose}</p>
                  <p><strong>Name:</strong> {firstName} {lastName}</p>
                  <p><strong>E-Mail:</strong> {email}</p>
                  <p><strong>Telefon:</strong> {phone}</p>
                  <p><strong>Beruflicher Status:</strong> {status}</p>
                  <p><strong>Beruf:</strong> {occupation}</p>
                </div>
                <div className="flex flex-col gap-3 pt-4">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={confirmed}
                      onChange={(e) => setConfirmed(e.target.checked)}
                      className="mt-1 h-4 w-4 accent-accent"
                    />
                    <span className="text-sm text-text">
                      Ich bestätige, dass meine Angaben nach bestem Wissen richtig und vollständig sind.
                    </span>
                  </label>
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={privacy}
                      onChange={(e) => setPrivacy(e.target.checked)}
                      className="mt-1 h-4 w-4 accent-accent"
                    />
                    <span className="text-sm text-text">
                      Ich habe die <Link href="/de/datenschutz" className="text-accent hover:underline">Datenschutzhinweise</Link> gelesen.
                    </span>
                  </label>
                </div>
                <p className="text-sm text-text-secondary">
                  Das Absenden Ihrer Anfrage garantiert keine Kreditzusage. Eine Entscheidung erfolgt erst nach der erforderlichen Prüfung.
                </p>
              </div>
            )}

            <div className="flex justify-between mt-8">
              {step > 1 ? (
                <Button onClick={prevStep} variant="outline" className="w-auto">
                  Zurück
                </Button>
              ) : (
                <div />
              )}
              {step < 4 ? (
                <Button onClick={nextStep} className="w-auto">
                  Weiter
                </Button>
              ) : (
                <Button onClick={submit} disabled={submitted === "loading"} className="w-auto">
                  {submitted === "loading" ? "Wird gesendet..." : "Anfrage sicher absenden"}
                </Button>
              )}
            </div>
          </Card>
        </div>

        {/* Summary */}
        <Card className="bg-primary/5 border-primary/10">
          <h2 className="font-heading text-xl font-bold text-primary mb-4">Zusammenfassung</h2>
          {loanResult ? (
            <div className="space-y-3">
              <div>
                <p className="text-sm text-text-secondary">Kreditbetrag</p>
                <p className="font-semibold text-text">{formatCurrency(loanResult.principalCents)}</p>
              </div>
              <div>
                <p className="text-sm text-text-secondary">Laufzeit</p>
                <p className="font-semibold text-text">{loanResult.termMonths} Monate</p>
              </div>
              <div>
                <p className="text-sm text-text-secondary">Voraussichtliche Monatsrate</p>
                <p className="font-heading text-3xl font-bold text-primary">{formatCurrency(loanResult.monthlyPaymentCents)}</p>
              </div>
              <div className="pt-3 border-t border-border">
                <p className="text-sm text-text-secondary">Geschätzte Gesamtzahlung</p>
                <p className="font-semibold text-text">{formatCurrency(loanResult.totalPaymentCents)}</p>
              </div>
            </div>
          ) : (
            <p className="text-error">Ungültige Finanzierungsangaben.</p>
          )}
        </Card>
      </div>
    </div>
  );
}
