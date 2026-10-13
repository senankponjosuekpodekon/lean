import { Suspense } from "react";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/PageHeader";
import { getPageDictionary } from "@/lib/i18n-pages";
import type { Locale } from "@/lib/i18n";

export default function FaqPage({ params }: { params: Promise<{ lang: Locale }> }) {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" />}>
      <FaqAsync params={params} />
    </Suspense>
  );
}

async function FaqAsync({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const t = getPageDictionary(lang);

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12 lg:py-20">
      <PageHeader title={t.faqTitle} description={t.faqDescription} />
      <div className="max-w-3xl mx-auto space-y-6">
        {t.faqs.map((item) => (
          <Card key={item.q}>
            <h2 className="font-heading text-lg font-semibold text-primary">{item.q}</h2>
            <p className="mt-2 text-text-secondary">{item.a}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
