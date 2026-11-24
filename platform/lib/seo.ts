import type { Metadata } from "next";
import { locales, defaultLocale, type Locale } from "./i18n";

export const baseUrl = "https://velmora-finanz.de";

const ogLocales: Record<Locale, string> = {
  de: "de_DE",
  fr: "fr_FR",
  es: "es_ES",
  it: "it_IT",
  pt: "pt_PT",
};

export function localizedPath(lang: Locale, route: string) {
  return route ? `/${lang}/${route}` : `/${lang}`;
}

export function localizedAlternates(lang: Locale, route: string) {
  return {
    canonical: localizedPath(lang, route),
    languages: {
      ...Object.fromEntries(locales.map((l) => [l, localizedPath(l, route)])),
      "x-default": localizedPath(defaultLocale, route),
    },
  };
}

export function localizedMetadata({
  lang,
  route,
  title,
  description,
}: {
  lang: Locale;
  route: string;
  title: string;
  description: string;
}): Metadata {
  const url = `${baseUrl}${localizedPath(lang, route)}`;
  return {
    title,
    description,
    alternates: localizedAlternates(lang, route),
    openGraph: {
      type: "website",
      locale: ogLocales[lang],
      url,
      siteName: "Velmora",
      title,
      description,
      images: ["/images/velmora-logo.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/velmora-logo.png"],
    },
  };
}
