import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/PageHeader";

export default function DatenschutzPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12 lg:py-20">
      <PageHeader title="Datenschutz" />

      <Card className="max-w-3xl mx-auto space-y-6">
        <div>
          <h2 className="font-heading text-xl font-semibold text-primary">Grundsätze</h2>
          <p className="mt-2 text-text-secondary">
            Personenbezogene Daten werden nur nach Bestätigung der Verantwortlichkeit, der Zwecke und der Rechtsgrundlage verarbeitet.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-semibold text-primary">Daten im Anfrageprozess</h2>
          <p className="mt-2 text-text-secondary">
            Für eine Finanzierungsanfrage werden nur die Daten erhoben, die für die Prüfung erforderlich sind. Justificatifs werden nur angefordert, wenn der Prozess dies vorsieht.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-semibold text-primary">Ihre Rechte</h2>
          <p className="mt-2 text-text-secondary">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-warning/5 border border-warning/20">
          <p className="text-text-secondary">
            Diese Seite ist ein Platzhalter. Der rechtsgültige Datenschutzhinweis muss vor dem Go-Live erstellt und geprüft werden.
          </p>
        </div>
      </Card>
    </div>
  );
}
