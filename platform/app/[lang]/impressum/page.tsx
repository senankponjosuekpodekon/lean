import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/PageHeader";

export default function ImpressumPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12 lg:py-20">
      <PageHeader title="Impressum" />

      <Card className="max-w-3xl mx-auto space-y-6">
        <div>
          <h2 className="font-heading text-xl font-semibold text-primary">Verantwortlich</h2>
          <p className="mt-2 text-text-secondary">Beispielmarke (Name noch zu definieren)</p>
          <p className="text-text-secondary">Adresse und Rechtsform müssen vor Veröffentlichung eingetragen werden.</p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-semibold text-primary">Kontakt</h2>
          <p className="mt-2 text-text-secondary">E-Mail, Telefon und Postanschrift werden noch hinterlegt.</p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-semibold text-primary">Registereintrag</h2>
          <p className="mt-2 text-text-secondary">Handelsregister-/Vereinsregisterangaben sind vor Veröffentlichung zu prüfen.</p>
        </div>

        <div className="p-4 rounded-xl bg-warning/5 border border-warning/20">
          <p className="text-text-secondary">
            Diese Seite ist ein Platzhalter. Die vollständigen und rechtsgültigen Impressumsangaben müssen vor dem Go-Life erstellt werden.
          </p>
        </div>
      </Card>
    </div>
  );
}
