import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { LOAN_CONFIG, calculateLoan, formatCurrency } from "@/lib/loan";
import { getDictionary, type Locale } from "@/lib/i18n";

export default function HomePage({ params }: { params: Promise<{ lang: Locale }> }) {
  return (
    <Suspense fallback={<div className="min-h-[50vh]" />}>
      <HomeAsync params={params} />
    </Suspense>
  );
}

async function HomeAsync({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const t = getDictionary(lang);

  const example = calculateLoan({
    amountCents: LOAN_CONFIG.defaultAmountCents,
    annualRatePercent: LOAN_CONFIG.annualRatePercent,
    termMonths: LOAN_CONFIG.defaultTerm,
    feesCents: 0,
  });

  const local = (path: string) => path.replace(/^\/(de|fr|es|it|pt)\//, `/${lang}/`);

  const transparency = [
    { title: t.clearConditions, desc: t.clearConditionsDesc },
    { title: t.estimatedCost, desc: t.estimatedCostDesc },
    { title: t.dataProtected, desc: t.dataProtectedDesc },
  ];

  const solutions = [
    { key: "personal", label: t.personalProject, desc: t.personalProjectDesc, image: "/images/project-personal.jpg" },
    { key: "vehicle", label: t.vehicle, desc: t.vehicleDesc, image: "/images/project-vehicle.jpg" },
    { key: "renovation", label: t.renovation, desc: t.renovationDesc, image: "/images/project-renovation.jpg" },
    { key: "business", label: t.business, desc: t.businessDesc, image: "/images/project-business.jpg" },
  ];

  const steps = [
    { title: t.stepSimulation, desc: t.stepSimulationDesc, icon: "/icons/icon-simulation.svg" },
    { title: t.stepRequest, desc: t.stepRequestDesc, icon: "/icons/icon-request.svg" },
    { title: t.stepVerification, desc: t.stepVerificationDesc, icon: "/icons/icon-verification.svg" },
    { title: t.stepProposal, desc: t.stepProposalDesc, icon: "/icons/icon-proposal.svg" },
  ];

  const faq = [
    { q: t.faqBinding, a: t.faqBindingAnswer },
    { q: t.faqGuarantee, a: t.faqGuaranteeAnswer },
    { q: t.faqDocuments, a: t.faqDocumentsAnswer },
  ];

  return (
    <div className="flex flex-col gap-20 lg:gap-28">
      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-5 lg:px-12 pt-12 lg:pt-20 pb-8 w-full animate-fade-in-up rounded-3xl overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <img src="/images/hero-bg.jpg" alt="" aria-hidden="true" className="w-full h-full object-cover opacity-50" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-primary leading-[1.1]">
              {t.tagline}
            </h1>
            <p className="text-lg lg:text-xl text-text-secondary max-w-xl leading-relaxed">
              {t.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={local("/de/kreditrechner")}>{t.calculateCredit}</Button>
              <Button href={local("/de/so-funktioniert-es")} variant="outline">{t.howItWorks}</Button>
            </div>
          </div>

          <Card className="p-8 animate-fade-in-up stagger-1">
            <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide">{t.exampleSimulation}</p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="p-3 rounded-lg bg-background">
                <p className="text-sm text-text-secondary">{t.amount}</p>
                <p className="font-semibold text-text">{formatCurrency(LOAN_CONFIG.defaultAmountCents)}</p>
              </div>
              <div className="p-3 rounded-lg bg-background">
                <p className="text-sm text-text-secondary">{t.duration}</p>
                <p className="font-semibold text-text">{LOAN_CONFIG.defaultTerm} mois</p>
              </div>
              <div className="p-3 rounded-lg bg-background col-span-2">
                <p className="text-sm text-text-secondary">{t.estimatedMonthly}</p>
                <p className="font-heading text-2xl font-bold text-primary">{formatCurrency(example.monthlyPaymentCents)}</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-text-secondary">
              {t.exampleDisclaimer.replace("{rate}", String(LOAN_CONFIG.annualRatePercent))}
            </p>
          </Card>
        </div>
      </section>

      {/* Transparence */}
      <section className="w-full bg-surface rounded-3xl py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-12">
          <div className="grid md:grid-cols-3 gap-6">
          {transparency.map((t, i) => (
            <Card key={t.title} className={`p-6 animate-fade-in-up stagger-${i + 1}`}>
              <h2 className="font-heading text-lg font-bold text-primary mb-2">{t.title}</h2>
              <p className="text-text-secondary text-sm">{t.desc}</p>
            </Card>
          ))}
        </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="w-full bg-accent-secondary/30 rounded-3xl py-12 lg:py-20 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-5 lg:px-12">
          <div className="text-center mb-10">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-primary">{t.whichProject}</h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">{t.solutionsSubtitle}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s, i) => (
            <Card key={s.key} className={`flex flex-col items-center text-center p-6 hover:shadow-md transition-shadow animate-fade-in-up stagger-${i + 1}`}>
              <img src={s.image} alt={s.label} width="240" height="160" className="w-full h-32 object-cover rounded-xl mb-5" />
              <h3 className="font-heading text-xl font-bold text-primary mb-2">{s.label}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{s.desc}</p>
            </Card>
          ))}
        </div>
        </div>
      </section>

      {/* Étapes */}
      <section className="w-full bg-surface rounded-3xl py-12 lg:py-20 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-5 lg:px-12">
          <div className="text-center mb-10">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-primary">{t.howItWorksTitle}</h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">{t.stepsSubtitle}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <Card key={s.title} className={`relative p-6 animate-fade-in-up stagger-${i + 1}`}>
              <span className="absolute top-4 right-4 font-heading text-4xl font-bold text-accent/20">{String(i + 1).padStart(2, "0")}</span>
              <div className="w-12 h-12 rounded-xl bg-accent-secondary/50 flex items-center justify-center mb-4">
                <img src={s.icon} alt={s.title} width="28" height="28" className="opacity-90" />
              </div>
              <h3 className="font-heading text-lg font-bold text-primary mb-2">{s.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{s.desc}</p>
            </Card>
          ))}
        </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-accent-secondary/30 rounded-3xl py-12 lg:py-20 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-5 lg:px-12">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-primary text-center">{t.faqTitle}</h2>
        <div className="mt-8 max-w-3xl mx-auto space-y-4">
          {faq.map((item, i) => (
            <Card key={item.q} className={`p-6 animate-fade-in-up stagger-${i + 1}`}>
              <h3 className="font-heading text-lg font-semibold text-primary">{item.q}</h3>
              <p className="mt-2 text-text-secondary leading-relaxed">{item.a}</p>
            </Card>
          ))}
        </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 lg:px-12 pb-20 w-full animate-fade-in-up">
        <Card className="text-center p-10 lg:p-16 bg-accent-secondary/30 border-primary/10">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-primary">{t.ready}</h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">{t.readyDesc}</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button href={local("/de/kreditrechner")}>{t.calculateCredit}</Button>
            <Button href={local("/de/antrag")} variant="outline">{t.apply}</Button>
          </div>
        </Card>
      </section>
    </div>
  );
}
