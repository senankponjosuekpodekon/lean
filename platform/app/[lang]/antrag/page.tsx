import { localizedMetadata } from "@/lib/seo";
import { getFormDictionary } from "@/lib/i18n-form";
import { isLocale } from "@/lib/i18n";
import AntragPage from "./client";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getFormDictionary(lang);
  return localizedMetadata({ lang, route: "antrag", title: t.formTitle, description: t.formSubtitle });
}

export default function Page() {
  return <AntragPage />;
}
