import Link from "next/link";
import { LegalDocument, LegalSection } from "@/components/LegalDocument";
import { calculateLoan, LOAN_CONFIG } from "@/lib/loan";

const euro = (cents: number) =>
  (cents / 100).toLocaleString("de-DE", { style: "currency", currency: "EUR" });
const percent = (value: number) => value.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function KreditinformationenPage() {
  const example = calculateLoan({
    amountCents: LOAN_CONFIG.defaultAmountCents,
    annualRatePercent: LOAN_CONFIG.annualRatePercent,
    termMonths: LOAN_CONFIG.defaultTerm,
  });
  const effectiveRate = (Math.pow(1 + LOAN_CONFIG.annualRatePercent / 1200, 12) - 1) * 100;

  return (
    <LegalDocument title="Informationen zum Kredit" description="Wichtige Informationen zu Ratenkrediten, Kosten und Ihren Rechten als Verbraucher">
      <LegalSection title="1. Unsere Rolle als Kreditvermittler">
        <p>
          Velmora ist ein unabhängiger Kreditvermittler und arbeitet mit mehreren Kreditgebern zusammen. Wir gewähren selbst keine Darlehen. Der
          Darlehensvertrag wird ausschließlich mit dem jeweiligen Kreditgeber geschlossen. Für Sie als Verbraucher ist unsere Vermittlung kostenlos; wir
          erhalten im Erfolgsfall eine Vergütung vom Kreditgeber.
        </p>
      </LegalSection>

      <LegalSection title="2. Kreditart">
        <p>
          Vermittelt werden Ratenkredite (Verbraucherdarlehen nach §§ 491 ff. BGB) mit festem Sollzinssatz für die gesamte Laufzeit und gleichbleibenden
          monatlichen Raten. Verfügbar sind Beträge von {euro(LOAN_CONFIG.minAmountCents)} bis {euro(LOAN_CONFIG.maxAmountCents)} und Laufzeiten von{" "}
          {LOAN_CONFIG.availableTerms[0]} bis {LOAN_CONFIG.availableTerms[LOAN_CONFIG.availableTerms.length - 1]} Monaten.
        </p>
      </LegalSection>

      <LegalSection title="3. Repräsentatives Beispiel">
        <div className="rounded-xl border border-border bg-background p-4">
          <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <div><dt className="text-text-secondary">Nettodarlehensbetrag</dt><dd className="text-text font-semibold">{euro(example.principalCents)}</dd></div>
            <div><dt className="text-text-secondary">Vertragslaufzeit</dt><dd className="text-text font-semibold">{example.termMonths} Monate</dd></div>
            <div><dt className="text-text-secondary">Gebundener Sollzinssatz</dt><dd className="text-text font-semibold">{percent(LOAN_CONFIG.annualRatePercent)} % p. a.</dd></div>
            <div><dt className="text-text-secondary">Effektiver Jahreszins</dt><dd className="text-text font-semibold">{percent(effectiveRate)} %</dd></div>
            <div><dt className="text-text-secondary">Monatliche Rate</dt><dd className="text-text font-semibold">{euro(example.monthlyPaymentCents)}</dd></div>
            <div><dt className="text-text-secondary">Zinskosten</dt><dd className="text-text font-semibold">{euro(example.totalInterestCents)}</dd></div>
            <div className="sm:col-span-2"><dt className="text-text-secondary">Zu zahlender Gesamtbetrag</dt><dd className="text-text font-semibold">{euro(example.totalPaymentCents)}</dd></div>
          </dl>
        </div>
        <p>
          Die tatsächlichen Konditionen sind bonitätsabhängig und werden vom Kreditgeber nach Prüfung Ihrer Anfrage festgelegt. Weitere Berechnungen können Sie
          mit unserem <Link href="kreditrechner">Kreditrechner</Link> durchführen.
        </p>
      </LegalSection>

      <LegalSection title="4. Kosten des Kredits">
        <p>
          Die Gesamtkosten des Kredits setzen sich aus den Sollzinsen und etwaigen vom Kreditgeber erhobenen Kosten zusammen. Der effektive Jahreszins drückt
          diese Gesamtkosten als jährlichen Prozentsatz des Nettodarlehensbetrags aus und ermöglicht den Vergleich verschiedener Angebote. Eine
          Restschuldversicherung oder andere Zusatzprodukte sind nicht Voraussetzung für die Kreditvergabe.
        </p>
      </LegalSection>

      <LegalSection title="5. Vorvertragliche Informationen">
        <p>
          Vor Abschluss eines Darlehensvertrags stellt Ihnen der Kreditgeber die „Europäischen Standardinformationen für Verbraucherkredite“ zur Verfügung
          (§ 491a BGB, Art. 247 EGBGB). Diese enthalten alle wesentlichen Angaben wie Sollzinssatz, effektiven Jahreszins, Gesamtbetrag, Ratenhöhe, Kosten und
          Ihr Widerrufsrecht. Bitte lesen Sie diese Unterlagen vor Ihrer Entscheidung sorgfältig; Sie haben Anspruch auf angemessene Erläuterung (§ 491a Abs. 3
          BGB).
        </p>
      </LegalSection>

      <LegalSection title="6. Kreditwürdigkeitsprüfung">
        <p>
          Der Kreditgeber ist gesetzlich verpflichtet, vor Vertragsschluss Ihre Kreditwürdigkeit zu prüfen (§ 505a BGB). Dazu werden Ihre Angaben zu Einkommen,
          Ausgaben und bestehenden Verbindlichkeiten herangezogen; der Kreditgeber kann zudem Auskünfte bei Auskunfteien einholen. Wird Ihre Anfrage aufgrund
          einer solchen Auskunft abgelehnt, werden Sie darüber informiert.
        </p>
      </LegalSection>

      <LegalSection title="7. Vorzeitige Rückzahlung">
        <p>
          Sie können Ihren Kredit jederzeit ganz oder teilweise vorzeitig zurückzahlen (§ 500 Abs. 2 BGB). Der Kreditgeber kann in diesem Fall eine
          Vorfälligkeitsentschädigung verlangen. Diese beträgt höchstens 1 % des vorzeitig zurückgezahlten Betrags bzw. 0,5 %, wenn die Restlaufzeit ein Jahr
          nicht überschreitet, und darf die bis zum vereinbarten Ende anfallenden Sollzinsen nicht übersteigen (§ 502 BGB).
        </p>
      </LegalSection>

      <LegalSection title="8. Folgen von Zahlungsverzug">
        <p>
          Werden Raten nicht fristgerecht gezahlt, kann der Kreditgeber Verzugszinsen und Mahnkosten verlangen. Bei erheblichem Zahlungsrückstand ist der
          Kreditgeber unter den Voraussetzungen des § 498 BGB berechtigt, den Vertrag zu kündigen und die gesamte Restschuld fällig zu stellen. Zahlungsausfälle
          können zudem an Auskunfteien gemeldet werden und künftige Kreditaufnahmen erschweren. Sollten Sie Zahlungsschwierigkeiten erwarten, wenden Sie sich
          bitte frühzeitig an Ihren Kreditgeber.
        </p>
      </LegalSection>

      <LegalSection title="9. Widerrufsrecht">
        <p>
          Einen Verbraucherdarlehensvertrag können Sie innerhalb von 14 Tagen ohne Angabe von Gründen widerrufen (§ 495 BGB). Einzelheiten entnehmen Sie der
          Widerrufsinformation Ihres Kreditgebers sowie unserer <Link href="widerruf">Widerrufsbelehrung</Link>.
        </p>
      </LegalSection>

      <LegalSection title="10. Verantwortungsvolle Kreditaufnahme">
        <p>
          Ein Kredit sollte zu Ihrer finanziellen Situation passen. Wählen Sie eine monatliche Rate, die Sie auch bei unerwarteten Ausgaben dauerhaft tragen
          können. Bei finanziellen Schwierigkeiten bieten anerkannte Schuldnerberatungsstellen kostenlose und vertrauliche Unterstützung.
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
