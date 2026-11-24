import { localizedMetadata } from "@/lib/seo";
import { getPageDictionary } from "@/lib/i18n-pages";
import { isLocale } from "@/lib/i18n";
import KontaktPage from "./client";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getPageDictionary(lang);
  return localizedMetadata({ lang, route: "kontakt", title: t.contactTitle, description: t.contactDescription });
}

export default function Page() {
  return <KontaktPage />;
}
