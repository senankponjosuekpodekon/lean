"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/Button";

const navLinks = [
  { href: "/de/finanzierung", label: "Finanzierung" },
  { href: "/de/kreditrechner", label: "Kreditrechner" },
  { href: "/de/so-funktioniert-es", label: "So funktioniert's" },
  { href: "/de/faq", label: "FAQ" },
  { href: "/de/kontakt", label: "Kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 h-16 flex items-center justify-between">
        <Link href="/de" className="font-heading font-bold text-xl text-primary">
          Finanzierung.DE
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

        <div className="flex items-center gap-4">
          <span className="text-sm text-text-secondary hidden sm:inline">DE</span>
          <Button href="/de/kreditrechner" variant="primary" className="hidden sm:flex h-10 px-4 text-sm">
            Kredit berechnen
          </Button>

          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            className="md:hidden p-2 rounded-lg text-primary hover:bg-primary/5"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="md:hidden border-t border-border bg-surface">
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
            <Button href="/de/kreditrechner" variant="primary" className="mt-4 h-12">
              Kredit berechnen
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
