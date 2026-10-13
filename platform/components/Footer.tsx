"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const legalLinks = [
  { href: "/de/impressum", label: "Impressum" },
  { href: "/de/datenschutz", label: "Datenschutz" },
  { href: "/de/cookies", label: "Cookies" },
  { href: "/de/bedingungen", label: "AGB" },
  { href: "/de/kreditinformationen", label: "Kreditinformationen" },
  { href: "/de/widerruf", label: "Widerruf" },
  { href: "/de/beschwerden", label: "Beschwerden" },
];

const serviceLinks = [
  { href: "/de/kreditrechner", label: "Kreditrechner" },
  { href: "/de/antrag", label: "Anfrage" },
  { href: "/de/ueber-uns", label: "Über uns" },
  { href: "/de/partner", label: "Partner" },
  { href: "/de/kontakt", label: "Kontakt" },
];

export function Footer() {
  const [year, setYear] = useState<string>("");

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  return (
    <footer className="bg-surface border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-heading font-bold text-lg text-primary">Finanzierung.DE</p>
            <p className="mt-2 text-sm text-text-secondary max-w-sm">
              Klarheit, Transparenz und verständliche Informationen zu Ihrer Finanzierungsanfrage.
            </p>
          </div>
          <div>
            <p className="font-semibold text-sm text-text mb-3">Service</p>
            <nav className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-text-secondary hover:text-primary">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="font-semibold text-sm text-text mb-3">Rechtliches</p>
            <nav className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-text-secondary hover:text-primary">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-xs text-text-secondary">
            © {year || "2026"} Beispielmarke. Rechtliche Angaben müssen vor Veröffentlichung bestätigt werden.
          </p>
        </div>
      </div>
    </footer>
  );
}
