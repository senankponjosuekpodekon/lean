import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/PageHeader";

const markets = [
  { code: "DE", name: "Deutschland", status: "Geplant als erster Markt" },
  { code: "FR", name: "Frankreich", status: "Geplant für spätere Ausweitung" },
  { code: "ES", name: "Spanien", status: "Geplant für spätere Ausweitung" },
  { code: "IT", name: "Italien", status: "Geplant für spätere Ausweitung" },
  { code: "PT", name: "Portugal", status: "Geplant für spätere Ausweitung" },
];

export default function LaenderPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12 lg:py-20">
      <PageHeader
        title="Länder und Verfügbarkeit"
        description="In welchen Ländern der Service vorgesehen ist und welche Voraussetzungen gelten."
      />

      <div className="max-w-3xl mx-auto space-y-4">
        {markets.map((m) => (
          <Card key={m.code} className="flex justify-between items-center">
            <div>
              <h2 className="font-heading text-lg font-semibold text-primary">{m.name}</h2>
              <p className="text-sm text-text-secondary">{m.status}</p>
            </div>
            <span className="text-sm font-bold text-text-secondary">{m.code}</span>
          </Card>
        ))}
      </div>

      <Card className="mt-8 bg-warning/5 border-warning/20">
        <p className="text-text-secondary">
          Die tatsächliche Verfügbarkeit hängt von der rechtlichen und operativen Freigabe für jeden Markt ab. Öffnungen außerhalb Deutschlands erfolgen nur nach Validierung der lokalen Anforderungen.
        </p>
      </Card>
    </div>
  );
}
