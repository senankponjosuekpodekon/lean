import Link from "next/link";
import { Button } from "./ui/Button";

const navLinks = [
  { href: "/de/finanzierung", label: "Finanzierung" },
  { href: "/de/kreditrechner", label: "Kreditrechner" },
  { href: "/de/ablauf", label: "Ablauf" },
  { href: "/de/faq", label: "FAQ" },
  { href: "/de/kontakt", label: "Kontakt" },
];

export function Header() {
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
          <span className="text-sm text-text-secondary">DE</span>
          <Button href="/de/antrag" variant="primary" className="hidden sm:flex h-10 px-4 text-sm">
            Kredit beantragen
          </Button>
        </div>
      </div>
    </header>
  );
}
