import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/PageHeader";

export default function BedingungenPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12 lg:py-20">
      <PageHeader title="Bedingungen" />

      <Card className="max-w-3xl mx-auto space-y-6">
        <div>
          <h2 className="font-heading text-xl font-semibold text-primary">Geltungsbereich</h2>
          <p className="mt-2 text-text-secondary">
            Diese Bedingungen regeln die Nutzung der Website. Die Vertragsbedingungen für ein Finanzierungsprodukt werden separat ausgehändigt.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-semibold text-primary">Keine Zusage</h2>
          <p className="mt-2 text-text-secondary">
            Die Nutzung der Website und die Übermittlung einer Anfrage begründen keinen Anspruch auf einen Kredit.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-semibold text-primary">Haftungsausschluss</h2>
          <p className="mt-2 text-text-secondary">
            Die bereitgestellten Informationen dienen der Orientierung. Für rechtsverbindliche Angaben gelten die vom Kreditgeber bestätigten Unterlagen.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-warning/5 border border-warning/20">
          <p className="text-text-secondary">
            Diese Seite ist ein Platzhalter. Die vollständigen AGB müssen vor dem Go-Live juristisch geprüft werden.
          </p>
        </div>
      </Card>
    </div>
  );
}
