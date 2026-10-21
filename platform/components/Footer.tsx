"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getDictionary, type Locale } from "@/lib/i18n";
import { useAdminLang } from "@/lib/admin-lang";
import { company, companyCityLine } from "@/lib/company";

function localPath(path: string, lang: Locale) {
  return path.replace(/^\/(de|fr|es|it|pt)\//, `/${lang}/`);
}

export function Footer() {
  const [year, setYear] = useState<string>("");
  const params = useParams();
  const isAdmin = usePathname()?.startsWith("/admin") ?? false;
  const adminLang = useAdminLang();
  const lang = isAdmin ? adminLang : (params?.lang as Locale) || "de";
  const t = getDictionary(lang);

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  const legalLinks = [
    { href: localPath("/de/impressum", lang), label: t.imprint },
    { href: localPath("/de/datenschutz", lang), label: t.privacy },
    { href: localPath("/de/cookies", lang), label: t.cookies },
    { href: localPath("/de/bedingungen", lang), label: t.terms },
    { href: localPath("/de/kreditinformationen", lang), label: t.creditInfo },
    { href: localPath("/de/widerruf", lang), label: t.withdrawal },
    { href: localPath("/de/beschwerden", lang), label: t.complaints },
  ];

  const serviceLinks = [
    { href: localPath("/de/kreditrechner", lang), label: t.calculator },
    { href: localPath("/de/antrag", lang), label: t.apply },
    { href: localPath("/de/ueber-uns", lang), label: t.about },
    { href: localPath("/de/partner", lang), label: t.partners },
    { href: localPath("/de/kontakt", lang), label: t.contact },
  ];

  return (
    <footer className="bg-surface border-t border-border mt-auto animate-fade-in">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <p className="font-heading font-bold text-lg text-primary">Velmora</p>
            <p className="mt-2 text-sm text-text-secondary max-w-sm">{t.footerTagline}</p>
          </div>
          <div>
            <p className="font-semibold text-sm text-text mb-3">{t.service}</p>
            <nav className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-text-secondary hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="font-semibold text-sm text-text mb-3">{t.legal}</p>
            <nav className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-text-secondary hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="font-semibold text-sm text-text mb-3">{t.contact}</p>
            <address className="not-italic flex flex-col gap-2 text-sm text-text-secondary">
              <span className="text-text font-medium">{company.name}</span>
              {company.street && <span>{company.street}</span>}
              {companyCityLine && <span>{companyCityLine}</span>}
              {company.phone && (
                <a href={`tel:${company.phone.replace(/[^+\d]/g, "")}`} className="hover:text-primary transition-colors">{company.phone}</a>
              )}
              <a href={`mailto:${company.email}`} className="hover:text-primary transition-colors break-all">{company.email}</a>
              <a href={`https://${company.website}`} className="hover:text-primary transition-colors">{company.website}</a>
            </address>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-xs text-text-secondary">{t.copyright.replace("{year}", year || "2026")}</p>
        </div>
      </div>
    </footer>
  );
}
