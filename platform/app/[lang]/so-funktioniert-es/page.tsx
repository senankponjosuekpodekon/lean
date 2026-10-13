import { Suspense } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/PageHeader";
import { getInfoDictionary } from "@/lib/i18n-info";
import type { Locale } from "@/lib/i18n";

export default function AblaufPage({ params }: { params: Promise<{ lang: Locale }> }) {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" />}>
      <AblaufAsync params={params} />
    </Suspense>
  );
}

async function AblaufAsync({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const t = getInfoDictionary(lang);

  const steps = [
    { title: t.processStep1, desc: t.processStep1Text },
    { title: t.processStep2, desc: t.processStep2Text },
    { title: t.processStep3, desc: t.processStep3Text },
    { title: t.processStep4, desc: t.processStep4Text },
  ];

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12 lg:py-20">
      <PageHeader title={t.processTitle} description={t.processDescription} />

      <div className="max-w-3xl mx-auto space-y-6">
        {steps.map((step, index) => (
          <Card key={step.title} className="flex gap-4 items-start">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-white font-bold shrink-0">
              {index + 1}
            </span>
            <div>
              <h2 className="font-heading text-xl font-semibold text-primary">{step.title}</h2>
              <p className="text-text-secondary mt-1">{step.desc}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
        <Button href={`/${lang}/kreditrechner`} variant="outline">{t.processStep1.split(".")[1]}</Button>
        <Button href={`/${lang}/antrag`}>{t.processStep2.split(".")[1]}</Button>
      </div>

      <Card className="mt-12 bg-warning/5 border-warning/20">
        <p className="text-text-secondary">{t.processDisclaimer}</p>
      </Card>
    </div>
  );
}
