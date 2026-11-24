import { localizedMetadata } from "@/lib/seo";
import { getDictionary, isLocale } from "@/lib/i18n";
import KreditrechnerPage from "./client";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  return localizedMetadata({ lang, route: "kreditrechner", title: t.calcTitle, description: t.calcDescription });
}

export default function Page() {
  return <KreditrechnerPage />;
}
