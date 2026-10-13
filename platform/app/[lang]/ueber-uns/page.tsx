import { Suspense } from "react";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/PageHeader";
import { getInfoDictionary } from "@/lib/i18n-info";
import type { Locale } from "@/lib/i18n";

export default function UeberUnsPage({ params }: { params: Promise<{ lang: Locale }> }) {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" />}>
      <UeberUnsAsync params={params} />
    </Suspense>
  );
}

async function UeberUnsAsync({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const t = getInfoDictionary(lang);

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12 lg:py-20">
      <PageHeader title={t.aboutTitle} description={t.aboutDescription} />
      <div className="max-w-3xl mx-auto space-y-6">
        <Card>
          <h2 className="font-heading text-xl font-semibold text-primary mb-2">{t.aboutIdentity}</h2>
          <p className="text-text-secondary">{t.aboutIdentityText}</p>
        </Card>
        <Card>
          <h2 className="font-heading text-xl font-semibold text-primary mb-2">{t.aboutRole}</h2>
          <p className="text-text-secondary">{t.aboutRoleText}</p>
        </Card>
        <Card>
          <h2 className="font-heading text-xl font-semibold text-primary mb-2">{t.aboutPrivacy}</h2>
          <p className="text-text-secondary">{t.aboutPrivacyText}</p>
        </Card>
      </div>
    </div>
  );
}
