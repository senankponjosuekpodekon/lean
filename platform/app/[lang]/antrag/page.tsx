"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { calculateLoan, formatCurrency, LOAN_CONFIG, parseAmountToCents } from "@/lib/loan";
import { getFormDictionary, type Locale } from "@/lib/i18n-form";
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

const documents = [
  "Lohnabrechnung oder Einkommensnachweis",
  "Kopie des Personalausweises/Reisepasses",
  "Mietvertrag oder Eigentumsnachweis",
  "Kontoauszüge der letzten 3 Monate",
];

export default function AntragPage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" />}>
      <AntragInner />
    </Suspense>
  );
}

function AntragInner() {
  const params = useParams();
  const lang = (params?.lang as Locale) || "de";
  const t = getFormDictionary(lang);

  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState<"idle" | "loading" | "success" | "error">("idle");

  const [amountCents, setAmountCents] = useState<number>(LOAN_CONFIG.defaultAmountCents);
  const [term, setTerm] = useState<number>(LOAN_CONFIG.defaultTerm);
  const [purpose, setPurpose] = useState(purposes[0]);
  const [description, setDescription] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [street, setStreet] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [status, setStatus] = useState(employmentStatuses[0]);
  const [occupation, setOccupation] = useState("");
  const [employer, setEmployer] = useState("");
  const [tenure, setTenure] = useState("");
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [existingLoans, setExistingLoans] = useState("");

  const [selectedDocs, setSelectedDocs] = useState<string[]>([]);
  const [confirmed, setConfirmed] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [reference, setReference] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const query = new URLSearchParams(window.location.search);
    const amount = Number(query.get("amount"));
    const t = Number(query.get("term"));
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
      return firstName && lastName && birthDate && street && zip && city && email.includes("@") && phone;
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
    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amountCents,
          termMonths: term,
          purpose,
          firstName,
          lastName,
          email,
          phone,
          status,
          occupation,
          income,
          expenses,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setReference(data.reference);
        setSubmitted("success");
      } else {
        setSubmitted("error");
      }
    } catch {
      setSubmitted("error");
    }
  };

  if (submitted === "success") {
    return (
      <div className="max-w-3xl mx-auto px-5 lg:px-12 py-20 animate-fade-in-up">
        <Card className="text-center bg-success/5 border-success/20">
          <h1 className="font-heading text-2xl lg:text-4xl font-bold text-success">{t.successTitle}</h1>
          <p className="mt-4 text-text-secondary">{t.successMessage}</p>
          <div className="mt-6 space-y-2 text-text-secondary">
            <p>{t.successReference}: {reference || "AN-2026-001"}</p>
            <p>{t.successDate}: {new Date().toLocaleDateString(lang === "de" ? "de-DE" : lang)}</p>
          </div>
          <p className="mt-4 text-sm text-text-secondary">{t.successDisclaimer}</p>
          <div className="mt-8">
            <Button href={`/${lang}`}>{t.homeButton}</Button>
          </div>
        </Card>
      </div>
    );
  }

  if (submitted === "error") {
    return (
      <div className="max-w-3xl mx-auto px-5 lg:px-12 py-20">
        <Card className="text-center bg-error/5 border-error/20">
          <h1 className="font-heading text-2xl lg:text-4xl font-bold text-error">{t.errorTitle}</h1>
          <p className="mt-4 text-text-secondary">{t.errorMessage}</p>
          <div className="mt-6 flex justify-center gap-4">
            <Button onClick={() => setSubmitted("idle")}>{t.retryButton}</Button>
            <Button href={`/${lang}/kontakt`} variant="outline">{t.contactButton}</Button>
          </div>
        </Card>
      </div>
    );
  }

  const stepLabels: Record<number, string> = {
    1: t.stepProject,
    2: t.stepPersonal,
    3: t.stepFinance,
    4: t.stepDocuments,
    5: t.stepReview,
  };

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12 lg:py-20">
      <div className="max-w-3xl mx-auto text-center mb-10 animate-fade-in-up">
        <h1 className="font-heading text-3xl lg:text-5xl font-bold text-primary">{t.formTitle}</h1>
        <p className="mt-4 text-text-secondary">{t.formSubtitle}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between mb-6">
            {[1, 2, 3, 4, 5].map((s) => (
              <div key={s} className="flex flex-col items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${s <= step ? "bg-accent text-white" : "bg-border text-text-secondary"}`}>
                  {s}
                </div>
                <span className="hidden sm:block text-xs text-text-secondary">{stepLabels[s]}</span>
              </div>
            ))}
          </div>

          <Card className="animate-fade-in">
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="font-heading text-2xl font-bold text-primary">{t.projectTitle}</h2>
                <Input label={t.loanAmountLabel} name="amount" type="text" value={(amountCents / 100).toString()} onChange={(v) => setAmountCents(parseAmountToCents(v))} />
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text">{t.termLabel}</label>
                  <select value={term} onChange={(e) => setTerm(Number(e.target.value))} className="h-12 px-4 rounded-lg border border-border bg-surface text-text focus:outline-none focus:ring-2 focus:ring-primary/30">
                    {LOAN_CONFIG.availableTerms.map((t) => (
                      <option key={t} value={t}>{t} Monate</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text">{t.purposeLabel}</label>
                  <select value={purpose} onChange={(e) => setPurpose(e.target.value)} className="h-12 px-4 rounded-lg border border-border bg-surface text-text focus:outline-none focus:ring-2 focus:ring-primary/30">
                    {purposes.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
                <Input label={t.descriptionLabel} name="description" value={description} onChange={setDescription} />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="font-heading text-2xl font-bold text-primary">{t.personalTitle}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input label={t.firstNameLabel} name="firstName" value={firstName} onChange={setFirstName} required />
                  <Input label={t.lastNameLabel} name="lastName" value={lastName} onChange={setLastName} required />
                </div>
                <Input label={t.birthDateLabel} name="birthDate" type="date" value={birthDate} onChange={setBirthDate} required />
                <Input label={t.streetLabel} name="street" value={street} onChange={setStreet} required />
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input label={t.zipLabel} name="zip" value={zip} onChange={setZip} required />
                  <Input label={t.cityLabel} name="city" value={city} onChange={setCity} required />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input label={t.emailLabel} name="email" type="email" value={email} onChange={setEmail} required />
                  <Input label={t.phoneLabel} name="phone" type="tel" value={phone} onChange={setPhone} required />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="font-heading text-2xl font-bold text-primary">{t.financeTitle}</h2>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text">{t.statusLabel}</label>
                  <select value={status} onChange={(e) => setStatus(e.target.value)} className="h-12 px-4 rounded-lg border border-border bg-surface text-text focus:outline-none focus:ring-2 focus:ring-primary/30">
                    {employmentStatuses.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <Input label={t.occupationLabel} name="occupation" value={occupation} onChange={setOccupation} required />
                <Input label={t.employerLabel} name="employer" value={employer} onChange={setEmployer} />
                <Input label={t.tenureLabel} name="tenure" value={tenure} onChange={setTenure} />
                <Input label={t.incomeLabel} name="income" type="text" value={income} onChange={setIncome} required />
                <Input label={t.expensesLabel} name="expenses" type="text" value={expenses} onChange={setExpenses} required />
                <Input label={t.existingLoansLabel} name="existingLoans" type="text" value={existingLoans} onChange={setExistingLoans} />
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <h2 className="font-heading text-2xl font-bold text-primary">{t.documentsTitle}</h2>
                <p className="text-text-secondary">{t.documentsHint}</p>
                <div className="flex flex-col gap-3">
                  {documents.map((doc) => (
                    <label key={doc} className="flex items-start gap-3 p-3 rounded-lg border border-border bg-background hover:bg-accent-secondary/20 transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedDocs.includes(doc)}
                        onChange={(e) => {
                          if (e.target.checked) setSelectedDocs((prev) => [...prev, doc]);
                          else setSelectedDocs((prev) => prev.filter((d) => d !== doc));
                        }}
                        className="mt-1 h-4 w-4 accent-accent"
                      />
                      <span className="text-sm text-text">{doc}</span>
                    </label>
                  ))}
                </div>
                <div className="flex flex-col gap-3 pt-4">
                  <label className="flex items-start gap-3">
                    <input type="checkbox" checked={confirmed} onChange={(e) => setConfirmed(e.target.checked)} className="mt-1 h-4 w-4 accent-accent" />
                    <span className="text-sm text-text">{t.confirmLabel}</span>
                  </label>
                  <label className="flex items-start gap-3">
                    <input type="checkbox" checked={privacy} onChange={(e) => setPrivacy(e.target.checked)} className="mt-1 h-4 w-4 accent-accent" />
                    <span className="text-sm text-text">{t.privacyLabel}</span>
                  </label>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-6">
                <h2 className="font-heading text-2xl font-bold text-primary">{t.reviewTitle}</h2>
                <div className="space-y-3 text-sm">
                  <p><strong>{t.reviewAmount}:</strong> {formatCurrency(amountCents)}</p>
                  <p><strong>{t.reviewTerm}:</strong> {term} Monate</p>
                  <p><strong>{t.reviewPurpose}:</strong> {purpose}</p>
                  <p><strong>Name:</strong> {firstName} {lastName}</p>
                  <p><strong>{t.emailLabel}:</strong> {email}</p>
                  <p><strong>{t.phoneLabel}:</strong> {phone}</p>
                  <p><strong>{t.statusLabel}:</strong> {status}</p>
                  <p><strong>{t.occupationLabel}:</strong> {occupation}</p>
                  {selectedDocs.length > 0 && (
                    <p><strong>{t.documentsTitle}:</strong> {selectedDocs.join(", ")}</p>
                  )}
                </div>
                <p className="text-sm text-text-secondary">{t.reviewDisclaimer}</p>
              </div>
            )}

            <div className="flex justify-between mt-8">
              {step > 1 ? (
                <Button onClick={prevStep} variant="outline" className="w-auto">{t.backButton}</Button>
              ) : (
                <div />
              )}
              {step < 5 ? (
                <Button onClick={nextStep} className="w-auto">{t.nextButton}</Button>
              ) : (
                <Button onClick={submit} disabled={submitted === "loading"} className="w-auto">
                  {submitted === "loading" ? t.submittingButton : t.submitButton}
                </Button>
              )}
            </div>
          </Card>
        </div>

        <Card className="bg-primary/5 border-primary/10 animate-fade-in-up stagger-2">
          <h2 className="font-heading text-xl font-bold text-primary mb-4">{t.reviewTitle}</h2>
          {loanResult ? (
            <div className="space-y-3">
              <div>
                <p className="text-sm text-text-secondary">{t.reviewAmount}</p>
                <p className="font-semibold text-text">{formatCurrency(loanResult.principalCents)}</p>
              </div>
              <div>
                <p className="text-sm text-text-secondary">{t.reviewTerm}</p>
                <p className="font-semibold text-text">{loanResult.termMonths} Monate</p>
              </div>
              <div>
                <p className="text-sm text-text-secondary">{t.estimatedPayment}</p>
                <p className="font-heading text-3xl font-bold text-primary">{formatCurrency(loanResult.monthlyPaymentCents)}</p>
              </div>
              <div className="pt-3 border-t border-border">
                <p className="text-sm text-text-secondary">{t.reviewTotal || "Geschätzte Gesamtzahlung"}</p>
                <p className="font-semibold text-text">{formatCurrency(loanResult.totalPaymentCents)}</p>
              </div>
            </div>
          ) : (
            <p className="text-error">{t.invalidLoan}</p>
          )}
        </Card>
      </div>
    </div>
  );
}
