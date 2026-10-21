"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/Button";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import { setAdminLang, useAdminLang } from "@/lib/admin-lang";

function localPath(path: string, lang: Locale) {
  return path.replace(/^\/(de|fr|es|it|pt)\//, `/${lang}/`);
}

export function Header() {
  const [open, setOpen] = useState(false);
  const params = useParams();
  const isAdmin = usePathname()?.startsWith("/admin") ?? false;
  const adminLang = useAdminLang();
  const lang = isAdmin ? adminLang : (params?.lang as Locale) || "de";
  const t = getDictionary(lang);

  const navLinks = [
    { href: localPath("/de/finanzierung", lang), label: t.financing },
    { href: localPath("/de/kreditrechner", lang), label: t.calculator },
    { href: localPath("/de/so-funktioniert-es", lang), label: t.howItWorks },
    { href: localPath("/de/faq", lang), label: t.faq },
    { href: localPath("/de/kontakt", lang), label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 h-16 flex items-center justify-between">
        <Link href={localPath("/de", lang)} className="flex items-center">
          <img src="/images/velmora-logo.png" alt="Velmora" className="h-8 sm:h-10 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <select
            aria-label="Language"
            value={lang}
            onChange={(e) => {
              const newLang = e.target.value;
              if (isAdmin) {
                if (isLocale(newLang)) setAdminLang(newLang);
                return;
              }
              const currentPath = window.location.pathname;
              const newPath = currentPath.replace(/^\/(de|fr|es|it|pt)/, `/${newLang}`);
              window.location.href = newPath;
            }}
            className="h-8 sm:h-9 px-1 sm:px-2 rounded-lg border border-border bg-surface text-xs sm:text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/30 w-14 sm:w-auto"
          >
            {locales.map((l) => (
              <option key={l} value={l}>{l.toUpperCase()}</option>
            ))}
          </select>
          <Button href={localPath("/de/kreditrechner", lang)} variant="primary" className="max-sm:hidden h-10 px-4 text-sm">
            {t.calculateCredit}
          </Button>

          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            className="md:hidden p-1.5 sm:p-2 rounded-lg text-primary hover:bg-primary/5"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-surface shadow-lg animate-fade-in">
          <nav className="flex flex-col px-5 py-4 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-text hover:text-primary border-b border-border last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <Button href={localPath("/de/kreditrechner", lang)} variant="primary" className="mt-4 h-12">
              {t.calculateCredit}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
