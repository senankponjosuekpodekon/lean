import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/PageHeader";

export default function UeberUnsPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12 lg:py-20">
      <PageHeader
        title="Über uns"
        description="Transparenz über unsere Rolle, unseren Ansatz und den Umgang mit Ihren Daten."
      />

      <div className="max-w-3xl mx-auto space-y-6">
        <Card>
          <h2 className="font-heading text-xl font-semibold text-primary mb-2">Rechtliche Identität</h2>
          <p className="text-text-secondary">
            Beispielmarke Muster GmbH · Musterstraße 1 · 12345 Musterstadt · Deutschland. Die tatsächlichen Angaben müssen vor der Veröffentlichung bestätigt werden.
          </p>
        </Card>

        <Card>
          <h2 className="font-heading text-xl font-semibold text-primary mb-2">Unsere Rolle</h2>
          <p className="text-text-secondary">
            Wir fungieren als unabhängiger Intermediär und leiten vollständige Finanzierungsanfragen an geprüfte Kreditgeber weiter. Wir selbst gewähren keine Kredite.
          </p>
        </Card>

        <Card>
          <h2 className="font-heading text-xl font-semibold text-primary mb-2">Datenschutz & Transparenz</h2>
          <p className="text-text-secondary">
            Persönliche Daten werden nur für die Bearbeitung der Anfrage erhoben, verschlüsselt übertragen und nur an die für die Prüfung zuständigen Stellen weitergegeben.
          </p>
        </Card>
      </div>
    </div>
  );
}
