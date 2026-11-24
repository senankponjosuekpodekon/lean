import { Suspense } from "react";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/PageHeader";
import { getPageDictionary } from "@/lib/i18n-pages";
import type { Locale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/seo";
import { isLocale } from "@/lib/i18n";

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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: lang,
    mainEntity: t.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12 lg:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getPageDictionary(lang);
  return localizedMetadata({ lang, route: "faq", title: t.faqTitle, description: t.faqDescription });
}
