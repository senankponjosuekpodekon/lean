import { Suspense } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/PageHeader";
import { LOAN_CONFIG, formatCurrency } from "@/lib/loan";
import { getInfoDictionary } from "@/lib/i18n-info";
import type { Locale } from "@/lib/i18n";

export default function FinanzierungPage({ params }: { params: Promise<{ lang: Locale }> }) {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" />}>
      <FinanzierungAsync params={params} />
    </Suspense>
  );
}

async function FinanzierungAsync({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const t = getInfoDictionary(lang);

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12 lg:py-20">
      <PageHeader title={t.financingTitle} description={t.financingDescription} />

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="flex flex-col gap-4">
          <h2 className="font-heading text-2xl font-bold text-primary">{t.financingPersonal}</h2>
          <p className="text-text-secondary">{t.financingPersonalText}</p>
        </Card>
        <Card className="flex flex-col gap-4">
          <h2 className="font-heading text-2xl font-bold text-primary">{t.financingVehicle}</h2>
          <p className="text-text-secondary">{t.financingVehicleText}</p>
        </Card>
        <Card className="flex flex-col gap-4">
          <h2 className="font-heading text-2xl font-bold text-primary">{t.financingRenovation}</h2>
          <p className="text-text-secondary">{t.financingRenovationText}</p>
        </Card>
        <Card className="flex flex-col gap-4">
          <h2 className="font-heading text-2xl font-bold text-primary">{t.financingBusiness}</h2>
          <p className="text-text-secondary">{t.financingBusinessText}</p>
        </Card>
      </div>

      <Card className="bg-warning/5 border-warning/20">
        <p className="text-text-secondary">
          <strong>Hinweis:</strong> Die hier gezeigten Produkte und Konditionen sind Beispiele. Vor Veröffentlichung müssen die verfügbaren Produkte, Plafonds, Zinsen und Kriterien geprüft und validiert werden.
        </p>
      </Card>
    </div>
  );
}
