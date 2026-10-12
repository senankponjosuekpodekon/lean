import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/PageHeader";

const faqs = [
  {
    q: "Ist die Berechnung verbindlich?",
    a: "Nein. Der Kreditrechner liefert eine unverbindliche Schätzung auf Basis der eingegebenen Werte. Maßgeblich sind die tatsächlichen Konditionen und ein gegebenenfalls abgeschlossener Vertrag.",
  },
  {
    q: "Wird jede Anfrage angenommen?",
    a: "Nein. Jede Anfrage unterliegt der erforderlichen Prüfung und einer Entscheidung des zuständigen Kreditgebers.",
  },
  {
    q: "Welche Unterlagen werden benötigt?",
    a: "Die benötigten Unterlagen hängen vom Finanzierungsprodukt und der individuellen Situation ab. Sie werden im jeweiligen Prozess mitgeteilt.",
  },
  {
    q: "Welche Kosten können entstehen?",
    a: "Mögliche Kosten müssen anhand des konkreten Produkts ausgewiesen werden. Prüfen Sie die vorvertraglichen Informationen, insbesondere den effektiven Jahreszins und die Gesamtkosten.",
  },
  {
    q: "Wie werden meine Daten geschützt?",
    a: "Informationen zur Verarbeitung, zu Speicherfristen und zu Ihren Rechten finden Sie in den Datenschutzhinweisen.",
  },
  {
    q: "Wie kann ich den Kundenservice erreichen?",
    a: "Nutzen Sie das Kontaktformular. Bitte beachten Sie, dass aktuell noch keine öffentlichen Telefonnummer oder E-Mail-Adresse hinterlegt ist.",
  },
];

export default function FaqPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12 lg:py-20">
      <PageHeader
        title="Häufige Fragen zur Finanzierung"
        description="Antworten zu den wichtigsten Fragen vor einer Finanzierungsanfrage."
      />

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((item) => (
          <Card key={item.q}>
            <h2 className="font-heading text-lg font-semibold text-primary">{item.q}</h2>
            <p className="mt-2 text-text-secondary">{item.a}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
