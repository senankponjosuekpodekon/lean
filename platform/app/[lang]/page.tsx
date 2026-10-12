import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { LOAN_CONFIG, formatCurrency } from "@/lib/loan";

const benefits = [
  {
    title: "Transparente Konditionen",
    description: "Zinssatz, Laufzeit und Gesamtkosten werden klar ausgewiesen — ohne versteckte Gebühren.",
  },
  {
    title: "Schnelle unverbindliche Anfrage",
    description: "In wenigen Minuten online. Sie erhalten eine Rückmeldung nach Prüfung Ihrer Angaben.",
  },
  {
    title: "Flexibel planen",
    description: "Beträge und Laufzeiten anpassen, bevor Sie eine Anfrage stellen.",
  },
];

const offers = [
  {
    title: "Ratenkredit",
    amount: `ab ${formatCurrency(LOAN_CONFIG.minAmountCents)}`,
    term: "12 – 120 Monate",
    rate: `${LOAN_CONFIG.annualRatePercent} % p.a. (nominal, konfigurierbar)`,
    cta: "Jetzt berechnen",
    href: "/de/kreditrechner",
  },
  {
    title: "Fahrzeugfinanzierung",
    amount: "Für Gebraucht- und Neufahrzeuge",
    term: "Individuelle Laufzeit",
    rate: "Konditionen nach Prüfung",
    cta: "Anfrage starten",
    href: "/de/antrag",
  },
  {
    title: "Renovierungskredit",
    amount: "Für Wohnraum- und Sanierungsvorhaben",
    term: "Individuelle Laufzeit",
    rate: "Konditionen nach Prüfung",
    cta: "Anfrage starten",
    href: "/de/antrag",
  },
];

const trust = [
  { label: "Online-Anfrage", value: "24/7 möglich" },
  { label: "Voraussichtliche Laufzeit", value: "12 – 120 Monate" },
  { label: "Datenschutz", value: "Sichere Übermittlung" },
];

const faq = [
  {
    q: "Ist die Berechnung verbindlich?",
    a: "Nein. Der Kreditrechner zeigt eine unverbindliche Schätzung. Maßgebend sind die tatsächlichen Konditionen nach Prüfung.",
  },
  {
    q: "Wie schnell erhalte ich eine Rückmeldung?",
    a: "Die Bearbeitungsdauer hängt vom Produkt und der Vollständigkeit Ihrer Angaben ab.",
  },
  {
    q: "Ist eine Zusage garantiert?",
    a: "Nein. Jede Anfrage wird individuell geprüft. Eine Finanzierung erfolgt nur nach Annahme durch den Kreditgeber.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 lg:gap-28">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5 lg:px-12 pt-16 lg:pt-28 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col gap-8">
              <span className="inline-flex self-start items-center px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold tracking-wide">
                FINANZIERUNG ONLINE ANFRAGEN
              </span>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold text-primary leading-[1.1]">
                Ihr Vorhaben. Unsere Finanzierung. Klar berechnet.
              </h1>
              <p className="text-lg lg:text-xl text-text-secondary max-w-xl leading-relaxed">
                Berechnen Sie in wenigen Sekunden eine mögliche Monatsrate und stellen Sie Ihre Anfrage bequem online — unverbindlich und transparent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/de/kreditrechner" className="h-14 px-8 text-base">
                  Monatsrate berechnen
                </Button>
                <Button href="/de/antrag" variant="outline" className="h-14 px-8 text-base">
                  Finanzierung anfragen
                </Button>
              </div>
              <p className="text-sm text-text-secondary">
                Eine Anfrage ist unverbindlich. Eine Finanzierung erfolgt nur nach Prüfung und Annahme durch den zuständigen Kreditgeber.
              </p>
            </div>

            <Card className="bg-surface border-border shadow-lg p-8 lg:p-10">
              <div className="flex flex-col gap-6">
                <p className="font-heading text-2xl font-bold text-primary">Beispielrechnung</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="p-3 rounded-lg bg-background">
                    <p className="text-text-secondary">Kreditbetrag</p>
                    <p className="font-semibold text-text">10.000 €</p>
                  </div>
                  <div className="p-3 rounded-lg bg-background">
                    <p className="text-text-secondary">Laufzeit</p>
                    <p className="font-semibold text-text">60 Monate</p>
                  </div>
                  <div className="p-3 rounded-lg bg-background">
                    <p className="text-text-secondary">Nominalzins</p>
                    <p className="font-semibold text-text">3 % p.a.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-background">
                    <p className="text-text-secondary">Mögliche Rate</p>
                    <p className="font-semibold text-text">~179,69 €</p>
                  </div>
                </div>
                <p className="text-xs text-text-secondary">
                  Diese Werte dienen als Beispiel. Konfigurierbare Werte müssen vor Veröffentlichung bestätigt werden.
                </p>
              </div>
            </Card>
          </div>

          {/* Trust bar */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {trust.map((t) => (
              <Card key={t.label} className="text-center py-5">
                <p className="text-sm text-text-secondary">{t.label}</p>
                <p className="font-heading text-lg font-bold text-primary mt-1">{t.value}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Offers */}
      <section className="max-w-7xl mx-auto px-5 lg:px-12 w-full">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-primary">Finanzierungslösungen im Überblick</h2>
          <p className="mt-4 text-lg text-text-secondary">Wählen Sie die passende Sparte — oder stellen Sie direkt eine individuelle Anfrage.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <Card key={offer.title} className="flex flex-col gap-5 p-8 border-border hover:shadow-lg transition-shadow">
              <h3 className="font-heading text-2xl font-bold text-primary">{offer.title}</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>{offer.amount}</li>
                <li>Laufzeit: {offer.term}</li>
                <li>Zins: {offer.rate}</li>
              </ul>
              <Button href={offer.href} variant={offer.href === "/de/kreditrechner" ? "primary" : "outline"} className="mt-auto">
                {offer.cta}
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-5 lg:px-12 w-full">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-primary">Warum diese Plattform?</h2>
          <p className="mt-4 text-lg text-text-secondary">Klarheit, Geschwindigkeit und Schutz Ihrer Daten stehen an erster Stelle.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <Card key={b.title} className="p-8">
              <h3 className="font-heading text-xl font-bold text-primary mb-3">{b.title}</h3>
              <p className="text-text-secondary leading-relaxed">{b.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-5 lg:px-12 w-full">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-primary">In drei Schritten zur Anfrage</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: "01", title: "Berechnen", desc: "Passen Sie Betrag und Laufzeit an." },
            { step: "02", title: "Anfragen", desc: "Füllen Sie das Formular in wenigen Minuten aus." },
            { step: "03", title: "Entscheidung", desc: "Erhalten Sie nach Prüfung eine Rückmeldung." },
          ].map((s) => (
            <Card key={s.step} className="relative p-8">
              <span className="absolute top-4 right-4 font-heading text-5xl font-bold text-accent/10">{s.step}</span>
              <h3 className="font-heading text-xl font-bold text-primary mb-2">{s.title}</h3>
              <p className="text-text-secondary">{s.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-5 lg:px-12 w-full">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-primary">Häufige Fragen</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faq.map((item) => (
            <Card key={item.q} className="p-6">
              <h3 className="font-heading text-lg font-semibold text-primary">{item.q}</h3>
              <p className="mt-2 text-text-secondary leading-relaxed">{item.a}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-5 lg:px-12 pb-20 w-full">
        <Card className="text-center bg-gradient-to-br from-primary/5 to-accent/5 border-primary/10 p-10 lg:p-16">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-primary">Bereit, Ihr Vorhaben zu planen?</h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Berechnen Sie zunächst eine unverbindliche Monatsrate und prüfen Sie, welche Finanzierung zu Ihrer Situation passt.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/de/kreditrechner" className="h-14 px-8 text-base">
              Monatsrate berechnen
            </Button>
            <Button href="/de/antrag" variant="outline" className="h-14 px-8 text-base">
              Anfrage starten
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}
