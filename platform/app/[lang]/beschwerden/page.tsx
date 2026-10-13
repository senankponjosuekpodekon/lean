import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/PageHeader";

export default function BeschwerdenPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12 lg:py-20">
      <PageHeader
        title="Beschwerden"
        description="So erreichen Sie uns, wenn Sie mit unserem Service nicht zufrieden sind."
      />

      <div className="max-w-3xl mx-auto space-y-6">
        <Card>
          <h2 className="font-heading text-xl font-semibold text-primary mb-2">Kontakt für Beschwerden</h2>
          <p className="text-text-secondary">
            Beschwerden können schriftlich oder per E-Mail an die im Impressum angegebenen Kontaktdaten gerichtet werden. Wir bestätigen den Eingang innerhalb der gesetzlich vorgesehenen Frist.
          </p>
        </Card>

        <Card>
          <h2 className="font-heading text-xl font-semibold text-primary mb-2">Verfahren</h2>
          <p className="text-text-secondary">
            Jede Beschwerde wird dokumentiert, geprüft und neutral bearbeitet. Sie erhalten eine schriftliche Stellungnahme zu dem Ergebnis.
          </p>
        </Card>

        <Card>
          <h2 className="font-heading text-xl font-semibold text-primary mb-2">Weitere Stellen</h2>
          <p className="text-text-secondary">
            Sollten Sie mit der internen Bearbeitung nicht einverstanden sein, können Sie sich an die zuständigen Aufsichts- oder Schlichtungsstellen wenden, sofern diese für den jeweiligen Fall zuständig sind.
          </p>
        </Card>
      </div>
    </div>
  );
}
