import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/PageHeader";

const steps = [
  { title: "Simulation", desc: "Berechnen Sie eine unverbindliche Monatsrate." },
  { title: "Anfrage senden", desc: "Füllen Sie das Online-Formular Schritt für Schritt aus." },
  { title: "Angaben prüfen", desc: "Überprüfen Sie Ihre Angaben vor dem Absenden." },
  { title: "Unterlagen einreichen", desc: "Falls erforderlich, reichen Sie die nötigen Dokumente ein." },
  { title: "Prüfung abwarten", desc: "Der zuständige Kreditgeber prüft Ihre Anfrage." },
  { title: "Entscheidung erhalten", desc: "Sie erhalten die Entscheidung und die geltenden Konditionen." },
];

export default function AblaufPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12 lg:py-20">
      <PageHeader
        title="So funktioniert Ihre Finanzierungsanfrage"
        description="Von der ersten Berechnung bis zur Entscheidung: Hier erfahren Sie, welche Schritte vorgesehen sind."
      />

      <div className="max-w-3xl mx-auto space-y-6">
        {steps.map((step, index) => (
          <Card key={step.title} className="flex gap-4 items-start">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-white font-bold shrink-0">
              {index + 1}
            </span>
            <div>
              <h2 className="font-heading text-xl font-semibold text-primary">{step.title}</h2>
              <p className="text-text-secondary mt-1">{step.desc}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
        <Button href="/de/kreditrechner" variant="outline">Kreditrechner öffnen</Button>
        <Button href="/de/antrag">Finanzierung anfragen</Button>
      </div>

      <Card className="mt-12 bg-warning/5 border-warning/20">
        <p className="text-text-secondary">
          Keine der hier genannten Schritte garantiert eine Zusage oder ein fixes Datum für die Auszahlung. Die tatsächliche Dauer hängt vom Produkt und von Ihrer individuellen Situation ab.
        </p>
      </Card>
    </div>
  );
}
