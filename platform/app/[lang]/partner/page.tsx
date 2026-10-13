import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/PageHeader";

export default function PartnerPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12 lg:py-20">
      <PageHeader
        title="Partner und Vermittlungsmodell"
        description="Informationen zu unserem Netzwerk von Kreditgebern und zur Art der Zusammenarbeit."
      />

      <div className="max-w-3xl mx-auto space-y-6">
        <Card>
          <h2 className="font-heading text-xl font-semibold text-primary mb-2">Unabhängiger Intermediär</h2>
          <p className="text-text-secondary">
            Wir arbeiten mit mehreren Kreditgebern zusammen. Die Auswahl erfolgt nach dem für Ihre Anfrage passenden Produkt und den Kriterien des jeweiligen Partners.
          </p>
        </Card>

        <Card>
          <h2 className="font-heading text-xl font-semibold text-primary mb-2">Auflistung der Partner</h2>
          <p className="text-text-secondary">
            Die vollständige und aktuelle Liste der Kooperationspartner wird hier veröffentlicht, sobald die Vertragsbeziehungen rechtsverbindlich bestehen.
          </p>
        </Card>

        <Card>
          <h2 className="font-heading text-xl font-semibold text-primary mb-2">Vergütung</h2>
          <p className="text-text-secondary">
            Für den Nutzer entstehen durch die Vermittlung grundsätzlich keine zusätzlichen Kosten. Eventuelle Vermittlungsprovisionen werden vor der Annahme eines Angebots offengelegt.
          </p>
        </Card>
      </div>
    </div>
  );
}
