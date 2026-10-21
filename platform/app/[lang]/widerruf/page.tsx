import { CompanyAddress, LegalDocument, LegalSection } from "@/components/LegalDocument";
import { company, companyCityLine, companyDisplayName } from "@/lib/company";

export default function WiderrufPage() {
  return (
    <LegalDocument title="Widerrufsbelehrung" description="Ihr gesetzliches Widerrufsrecht als Verbraucher">
      <LegalSection title="A. Widerrufsrecht für den Vermittlungsvertrag">
        <p>
          Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen den mit uns geschlossenen Vertrag über die Vermittlung eines Darlehens zu
          widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses, das heißt ab dem Absenden Ihrer Finanzierungsanfrage.
        </p>
        <p>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns</p>
        <CompanyAddress withContact />
        <p>
          mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen,
          informieren. Sie können dafür das untenstehende Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist. Zur Wahrung der
          Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
        </p>
        <h3>Folgen des Widerrufs</h3>
        <p>
          Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen
          ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf bei uns eingegangen ist. Da unsere Vermittlungsleistung für Sie unentgeltlich ist,
          entstehen Ihnen durch den Widerruf keine Kosten. Ihre Anfrage wird nach Eingang des Widerrufs nicht weiter bearbeitet und nicht mehr an Kreditgeber
          übermittelt.
        </p>
      </LegalSection>

      <LegalSection title="B. Widerrufsrecht für den Darlehensvertrag">
        <p>
          Einen über uns vermittelten Verbraucherdarlehensvertrag können Sie gegenüber dem Kreditgeber innerhalb von vierzehn Tagen ohne Angabe von Gründen
          widerrufen (§§ 355, 495 BGB). Die Frist beginnt nach Abschluss des Vertrags, jedoch nicht, bevor Sie alle gesetzlichen Pflichtangaben nach § 492
          Abs. 2 BGB erhalten haben.
        </p>
        <p>
          Maßgeblich ist die Widerrufsinformation in Ihrem Darlehensvertrag. Der Widerruf ist an den dort genannten Kreditgeber zu richten. Nach einem Widerruf
          ist ein bereits ausgezahltes Darlehen spätestens innerhalb von 30 Tagen zurückzuzahlen; für den Zeitraum zwischen Auszahlung und Rückzahlung ist der
          vereinbarte Sollzins zu entrichten. Mit dem Widerruf des Darlehensvertrags sind Sie auch an damit verbundene Verträge nicht mehr gebunden.
        </p>
      </LegalSection>

      <LegalSection title="Muster-Widerrufsformular">
        <p>Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses Formular aus und senden Sie es zurück.</p>
        <div className="rounded-xl border border-border bg-background p-4 space-y-3 text-sm">
          <p>
            An {companyDisplayName}
            {company.street && <>, {company.street}</>}
            {companyCityLine && <>, {companyCityLine}</>}, E-Mail: {company.email}
          </p>
          <p>Hiermit widerrufe(n) ich/wir den von mir/uns abgeschlossenen Vertrag über die Erbringung der folgenden Dienstleistung: Darlehensvermittlung</p>
          <p>Referenznummer der Anfrage: ____________________</p>
          <p>Beantragt am: ____________________</p>
          <p>Name des/der Verbraucher(s): ____________________</p>
          <p>Anschrift des/der Verbraucher(s): ____________________</p>
          <p>Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier): ____________________</p>
          <p>Datum: ____________________</p>
        </div>
      </LegalSection>
    </LegalDocument>
  );
}
