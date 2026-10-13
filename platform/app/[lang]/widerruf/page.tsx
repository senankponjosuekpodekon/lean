import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/PageHeader";

export default function WiderrufPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12 lg:py-20">
      <PageHeader
        title="Widerruf"
        description="Informationen zum Widerrufsrecht für Kreditverträge gemäß geltendem Recht."
      />

      <div className="max-w-3xl mx-auto space-y-6">
        <Card>
          <h2 className="font-heading text-xl font-semibold text-primary mb-2">Geltung des Widerrufsrechts</h2>
          <p className="text-text-secondary">
            Verbraucher haben für bestimmte Kreditverträge ein gesetzliches Widerrufsrecht. Die genauen Voraussetzungen und Fristen ergeben sich aus dem jeweiligen nationalen Verbraucherkreditrecht.
          </p>
        </Card>

        <Card>
          <h2 className="font-heading text-xl font-semibold text-primary mb-2">Widerrufserklärung</h2>
          <p className="text-text-secondary">
            Um Ihren Widerruf zu erklären, genügt eine eindeutige Mitteilung an den Kreditgeber oder an uns. Die Kontaktdaten werden Ihnen mit dem Vertragsangebot mitgeteilt.
          </p>
        </Card>

        <Card>
          <h2 className="font-heading text-xl font-semibold text-primary mb-2">Folgen des Widerrufs</h2>
          <p className="text-text-secondary">
            Nach einem wirksamen Widerruf sind die empfangenen Leistungen zurückzugewähren. Verzinsung und Nebenleistungen richten sich nach den gesetzlichen Bestimmungen des geltenden Rechts.
          </p>
        </Card>
      </div>
    </div>
  );
}
