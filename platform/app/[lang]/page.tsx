import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const benefits = [
  {
    title: "Transparente Konditionen",
    description: "Zinssatz, Laufzeit und mögliche zusätzliche Kosten werden nachvollziehbar dargestellt.",
  },
  {
    title: "Online-Anfrage",
    description: "Übermitteln Sie Ihre Anfrage Schritt für Schritt über ein übersichtliches Online-Formular.",
  },
  {
    title: "Individuelle Prüfung",
    description: "Die Entscheidung richtet sich nach Ihrer Situation und den geltenden Vergabekriterien.",
  },
];

const steps = [
  "Anfrage starten",
  "Angaben prüfen",
  "Unterlagen einreichen, sofern erforderlich",
  "Prüfung abwarten",
  "Entscheidung erhalten",
];

const usages = [
  { title: "Persönliches Vorhaben" },
  { title: "Fahrzeug" },
  { title: "Renovierung" },
  { title: "Berufliches Projekt" },
  { title: "Liquiditätsbedarf" },
];

const shortFaq = [
  {
    q: "Ist die Monatsrate verbindlich?",
    a: "Nein. Die Berechnung ist unverbindlich und stellt kein Kreditangebot dar.",
  },
  {
    q: "Ist eine Zusage garantiert?",
    a: "Nein. Jede Anfrage unterliegt der Prüfung und der Entscheidung des zuständigen Kreditgebers.",
  },
  {
    q: "Welche Unterlagen können erforderlich sein?",
    a: "Die benötigten Unterlagen hängen vom Finanzierungsprodukt und Ihrer individuellen Situation ab.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 lg:gap-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-5 lg:px-12 pt-12 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <span className="inline-flex self-start items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold">
              FINANZIERUNG ONLINE ANFRAGEN
            </span>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-primary leading-tight">
              Finanzierung, die zu Ihrem Vorhaben passt.
            </h1>
            <p className="text-lg text-text-secondary max-w-xl">
              Informieren Sie sich über unsere Finanzierungsmöglichkeiten, berechnen Sie eine unverbindliche Monatsrate und stellen Sie Ihre Anfrage online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/de/antrag">Finanzierung anfragen</Button>
              <Button href="/de/kreditrechner" variant="outline">
                Monatsrate berechnen
              </Button>
            </div>
            <p className="text-sm text-text-secondary">
              Eine Anfrage ist unverbindlich. Eine Finanzierung erfolgt nur nach Prüfung und Annahme durch den zuständigen Kreditgeber.
            </p>
          </div>
          <Card className="bg-gradient-to-br from-accent/5 to-primary/5 p-8 lg:p-12">
            <div className="flex flex-col gap-4">
              <p className="font-heading text-2xl font-bold text-primary">Beispielrechnung</p>
              <div className="space-y-2 text-text-secondary">
                <p>Kreditbetrag: 10.000 €</p>
                <p>Laufzeit: 60 Monate</p>
                <p>Nominalzins: 3 % p.a.</p>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-text-secondary">Mögliche Monatsrate</p>
                <p className="font-heading text-3xl font-bold text-primary">~179,69 €</p>
              </div>
              <p className="text-xs text-text-secondary">
                Diese Angaben dienen als Beispiel. Konfigurierbare Werte müssen vor Veröffentlichung bestätigt werden.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl lg:text-4xl font-bold text-primary">Klarheit von Anfang an</h2>
          <p className="mt-2 text-text-secondary">Die wichtigsten Informationen zu Ihrer Finanzierung auf einen Blick.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <Card key={b.title} className="flex flex-col gap-3">
              <h3 className="font-heading text-xl font-semibold text-primary">{b.title}</h3>
              <p className="text-text-secondary">{b.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl lg:text-4xl font-bold text-primary">In fünf Schritten zu Ihrer Anfrage</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <Card key={step} className="text-center">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white text-sm font-bold mb-3">
                {index + 1}
              </span>
              <p className="font-medium text-text">{step}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/de/ablauf" variant="outline">Ablauf ansehen</Button>
        </div>
      </section>

      {/* Usages */}
      <section className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl lg:text-4xl font-bold text-primary">Wofür planen Sie eine Finanzierung?</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {usages.map((u) => (
            <Card key={u.title} className="text-center hover:shadow-md transition-shadow">
              <p className="font-semibold text-primary">{u.title}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Transparency */}
      <section className="max-w-7xl mx-auto px-5 lg:px-12">
        <Card className="bg-primary/5 border-primary/10">
          <div className="max-w-3xl">
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-primary">
              Finanzielle Entscheidungen verdienen klare Informationen.
            </h2>
            <p className="mt-4 text-text-secondary">
              Bevor Sie eine Entscheidung treffen, sollen Sie die wesentlichen Konditionen verstehen. Deshalb stellen wir Zinssatz, Laufzeit, mögliche Kosten und den Ablauf der Prüfung nachvollziehbar dar.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/de/kreditinformationen" className="text-accent font-medium hover:underline">
                Informationen zum Kredit
              </Link>
              <Link href="/de/datenschutz" className="text-accent font-medium hover:underline">
                Datenschutz
              </Link>
              <Link href="/de/faq" className="text-accent font-medium hover:underline">
                Häufige Fragen
              </Link>
            </div>
          </div>
        </Card>
      </section>

      {/* Testimonials disabled — replaced by trust cards */}
      <section className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl lg:text-4xl font-bold text-primary">Was Sie vor einer Anfrage wissen sollten</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Keine automatische Zusage", desc: "Jede Anfrage wird individuell geprüft." },
            { title: "Klare Informationen", desc: "Konditionen werden transparent dargestellt." },
            { title: "Sorgfältige Prüfung", desc: "Der zuständige Kreditgeber prüft Ihre Angaben." },
          ].map((card) => (
            <Card key={card.title} className="flex flex-col gap-2">
              <h3 className="font-heading text-lg font-semibold text-primary">{card.title}</h3>
              <p className="text-text-secondary">{card.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl lg:text-4xl font-bold text-primary">Häufige Fragen</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {shortFaq.map((item) => (
            <Card key={item.q} className="">
              <h3 className="font-heading font-semibold text-primary">{item.q}</h3>
              <p className="mt-2 text-text-secondary">{item.a}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/de/faq" variant="outline">Alle Fragen ansehen</Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-5 lg:px-12 pb-16">
        <Card className="text-center bg-accent/5 border-accent/10">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-primary">Sie möchten Ihr Vorhaben planen?</h2>
          <p className="mt-2 text-text-secondary">Informieren Sie sich über die Bedingungen und berechnen Sie zunächst eine unverbindliche Monatsrate.</p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/de/kreditrechner" variant="outline">Monatsrate berechnen</Button>
            <Button href="/de/antrag">Finanzierung anfragen</Button>
          </div>
        </Card>
      </section>
    </div>
  );
}
