import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/PageHeader";
import { LOAN_CONFIG, formatCurrency } from "@/lib/loan";

export default function FinanzierungPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12 lg:py-20">
      <PageHeader
        title="Finanzierungsmöglichkeiten im Überblick"
        description="Informieren Sie sich über die verfügbaren Finanzierungslösungen und prüfen Sie, welche davon zu Ihrem Vorhaben passen könnte."
      />

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="flex flex-col gap-4">
          <h2 className="font-heading text-2xl font-bold text-primary">Standardfinanzierung</h2>
          <p className="text-text-secondary">Für verschiedene private und berufliche Vorhaben.</p>
          <ul className="space-y-2 text-text-secondary">
            <li>Mindestbetrag: {formatCurrency(LOAN_CONFIG.minAmountCents)}</li>
            <li>Laufzeiten: {LOAN_CONFIG.availableTerms.join(", ")} Monate</li>
            <li>Nominalzins: {LOAN_CONFIG.annualRatePercent} % p.a. (konfigurierbar)</li>
          </ul>
          <Button href="/de/kreditrechner" variant="outline" className="mt-auto">
            Monatsrate berechnen
          </Button>
        </Card>

        <Card className="flex flex-col gap-4">
          <h2 className="font-heading text-2xl font-bold text-primary">Individuelle Anfrage</h2>
          <p className="text-text-secondary">
            Wenn kein Standardprodukt passt, können Sie eine individuelle Anfrage stellen.
          </p>
          <p className="text-text-secondary">
            Die tatsächlichen Konditionen werden nach Prüfung Ihrer Angaben mitgeteilt.
          </p>
          <Button href="/de/antrag" className="mt-auto">
            Finanzierung anfragen
          </Button>
        </Card>
      </div>

      <Card className="bg-warning/5 border-warning/20">
        <p className="text-text-secondary">
          <strong>Hinweis:</strong> Die hier gezeigten Produkte und Konditionen sind Beispiele. Vor Veröffentlichung müssen die verfügbaren Produkte, Plafonds, Zinsen und Kriterien geprüft und validiert werden.
        </p>
      </Card>
    </div>
  );
}
