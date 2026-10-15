import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

const baseUrl = "https://velmora-finanz.de";

const routes = [
  "",
  "antrag",
  "bedingungen",
  "beschwerden",
  "cookies",
  "datenschutz",
  "faq",
  "finanzierung",
  "impressum",
  "kontakt",
  "kreditinformationen",
  "kreditrechner",
  "laender",
  "partner",
  "so-funktioniert-es",
  "ueber-uns",
  "widerruf",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      const path = route ? `/${locale}/${route}` : `/${locale}`;
      entries.push({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}${path.replace(/^\/${locale}/, `/${l}`)}`])
          ),
        },
      });
    }
  }

  return entries;
}
