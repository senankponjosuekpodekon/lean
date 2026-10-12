import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/PageHeader";
import { LOAN_CONFIG } from "@/lib/loan";

export default function KreditinformationenPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12 lg:py-20">
      <PageHeader
        title="Informationen zum Kredit"
        description="Vorvertragliche Informationen und Hinweise zur Finanzierung."
      />

      <Card className="max-w-3xl mx-auto space-y-6">
        <div>
          <h2 className="font-heading text-xl font-semibold text-primary">Kredittyp</h2>
          <p className="mt-2 text-text-secondary">Ratenkredit mit unverbindlicher Online-Anfrage. Die endgültigen Konditionen erhalten Sie nach Prüfung.</p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-semibold text-primary">Parametervorschau</h2>
          <ul className="mt-2 space-y-1 text-text-secondary">
            <li>Nominalzins: {LOAN_CONFIG.annualRatePercent} % p.a. (konfigurierbar)</li>
            <li>Laufzeiten: {LOAN_CONFIG.availableTerms.join(", ")} Monate</li>
            <li>Mindestbetrag: ab 5.000 €</li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-xl font-semibold text-primary">Widerrufsrecht</h2>
          <p className="mt-2 text-text-secondary">Informationen zum Widerrufsrecht werden hier eingefügt, sobald der Kreditgeber und das Produkt bestätigt sind.</p>
        </div>

        <div className="p-4 rounded-xl bg-warning/5 border border-warning/20">
          <p className="text-text-secondary">
            Diese Seite ist ein Platzhalter. Die vollständigen vorvertraglichen Informationen (APR, Gesamtkosten, Widerruf, Rückzahlungsmodalitäten) müssen vor dem Go-Life validiert werden.
          </p>
        </div>
      </Card>
    </div>
  );
}
