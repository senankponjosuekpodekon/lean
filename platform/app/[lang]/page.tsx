import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { LOAN_CONFIG, calculateLoan, formatCurrency } from "@/lib/loan";

const example = calculateLoan({
  amountCents: LOAN_CONFIG.defaultAmountCents,
  annualRatePercent: LOAN_CONFIG.annualRatePercent,
  termMonths: LOAN_CONFIG.defaultTerm,
  feesCents: 0,
});

const transparency = [
  { title: "Conditions claires", desc: "Zinssatz, Laufzeit und Gesamtkosten werden vor einer Anfrage offengelegt." },
  { title: "Coût estimé", desc: "Der Rechner zeigt eine unverbindliche Schätzung auf Basis der eingegebenen Werte." },
  { title: "Données protégées", desc: "Persönliche Angaben werden verschlüsselt übertragen und nur an zuständige Prüfer weitergegeben." },
];

const solutions = [
  { label: "Persönliches Projekt", desc: "Freizeit, Bildung, Mobilität oder sonstige Ausgaben" },
  { label: "Fahrzeug", desc: "Gebraucht- oder Neufahrzeug, je nach Produktverfügbarkeit" },
  { label: "Renovierung", desc: "Wohnraum- und Sanierungsvorhaben" },
  { label: "Berufliche Aktivität", desc: "Investitionen oder Betriebsmittel für selbstständige Tätigkeiten" },
];

const steps = [
  { title: "Simulation", desc: "Berechnen Sie eine unverbindliche Monatsrate." },
  { title: "Demande", desc: "Senden Sie Ihre Anfrage über das Online-Formular." },
  { title: "Vérification", desc: "Ihre Angaben und ggf. Unterlagen werden geprüft." },
  { title: "Proposition", desc: "Bei Akzeptanz erhalten Sie die Konditionsinformationen." },
];

const faq = [
  { q: "Ist die Berechnung verbindlich?", a: "Nein. Der Rechner zeigt eine unverbindliche Schätzung. Maßgebend sind die tatsächlichen Konditionen nach Prüfung." },
  { q: "Gibt es eine Zusagegarantie?", a: "Nein. Jede Anfrage wird individuell geprüft. Eine Finanzierung erfolgt nur nach Annahme durch den Kreditgeber." },
  { q: "Welche Dokumente werden benötigt?", a: "Je nach Produkt und individueller Situation können Einkommensnachweise, Identitätsnachweise oder weitere Unterlagen angefordert werden." },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 lg:gap-28">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-5 lg:px-12 pt-12 lg:pt-20 pb-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-primary leading-[1.1]">
              Finanzierung, klar und transparent.
            </h1>
            <p className="text-lg lg:text-xl text-text-secondary max-w-xl leading-relaxed">
              Informieren Sie sich, berechnen Sie eine mögliche Monatsrate und stellen Sie Ihre Anfrage — ohne versteckte Versprechen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/de/kreditrechner">Kredit berechnen</Button>
              <Button href="/de/so-funktioniert-es" variant="outline">So funktioniert's</Button>
            </div>
          </div>

          <Card className="p-8">
            <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide">Simulation indicative</p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="p-3 rounded-lg bg-background">
                <p className="text-sm text-text-secondary">Montant souhaité</p>
                <p className="font-semibold text-text">{formatCurrency(LOAN_CONFIG.defaultAmountCents)}</p>
              </div>
              <div className="p-3 rounded-lg bg-background">
                <p className="text-sm text-text-secondary">Durée</p>
                <p className="font-semibold text-text">{LOAN_CONFIG.defaultTerm} mois</p>
              </div>
              <div className="p-3 rounded-lg bg-background col-span-2">
                <p className="text-sm text-text-secondary">Mensualité estimée</p>
                <p className="font-heading text-2xl font-bold text-primary">{formatCurrency(example.monthlyPaymentCents)}</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-text-secondary">
              Exemple théorique à {LOAN_CONFIG.annualRatePercent} % nominal annuel, hors frais. À confirmer selon les conditions réelles.
            </p>
          </Card>
        </div>
      </section>

      {/* Transparence */}
      <section className="max-w-7xl mx-auto px-5 lg:px-12 w-full">
        <div className="grid md:grid-cols-3 gap-6">
          {transparency.map((t) => (
            <Card key={t.title} className="p-6">
              <h2 className="font-heading text-lg font-bold text-primary mb-2">{t.title}</h2>
              <p className="text-text-secondary text-sm">{t.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section className="max-w-7xl mx-auto px-5 lg:px-12 w-full">
        <h2 className="font-heading text-3xl lg:text-5xl font-bold text-primary text-center">Welches Projekt planen Sie?</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {solutions.map((s) => (
            <Card key={s.label} className="px-6 py-4">
              <p className="font-semibold text-primary">{s.label}</p>
              <p className="text-sm text-text-secondary">{s.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Étapes */}
      <section className="max-w-7xl mx-auto px-5 lg:px-12 w-full">
        <h2 className="font-heading text-3xl lg:text-5xl font-bold text-primary text-center">So funktioniert die Anfrage</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <Card key={s.title} className="relative p-6">
              <span className="absolute top-4 right-4 font-heading text-4xl font-bold text-accent/20">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-heading text-lg font-bold text-primary mb-2">{s.title}</h3>
              <p className="text-text-secondary text-sm">{s.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-5 lg:px-12 w-full">
        <h2 className="font-heading text-3xl lg:text-5xl font-bold text-primary text-center">Häufige Fragen</h2>
        <div className="mt-8 max-w-3xl mx-auto space-y-4">
          {faq.map((item) => (
            <Card key={item.q} className="p-6">
              <h3 className="font-heading text-lg font-semibold text-primary">{item.q}</h3>
              <p className="mt-2 text-text-secondary leading-relaxed">{item.a}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 lg:px-12 pb-20 w-full">
        <Card className="text-center p-10 lg:p-16 bg-accent-secondary/30 border-primary/10">
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-primary">Bereit, Ihre Finanzierung zu planen?</h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Berechnen Sie zunächst eine unverbindliche Monatsrate und prüfen Sie, welche Option zu Ihrer Situation passt.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/de/kreditrechner">Kredit berechnen</Button>
            <Button href="/de/antrag" variant="outline">Anfrage starten</Button>
          </div>
        </Card>
      </section>
    </div>
  );
}
