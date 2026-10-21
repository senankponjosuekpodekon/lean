import { CompanyAddress, LegalDocument, LegalSection } from "@/components/LegalDocument";

export default function BeschwerdenPage() {
  return (
    <LegalDocument title="Beschwerdemanagement" description="So bearbeiten wir Ihre Beschwerde – transparent, fair und zügig.">
      <LegalSection title="1. Unser Anspruch">
        <p>
          Ihre Zufriedenheit ist uns wichtig. Sollten Sie mit unserer Leistung, der Bearbeitung Ihrer Finanzierungsanfrage oder der Kommunikation mit uns nicht
          zufrieden sein, nehmen wir Ihre Beschwerde ernst und bearbeiten sie unentgeltlich, unparteiisch und vertraulich.
        </p>
      </LegalSection>

      <LegalSection title="2. So reichen Sie eine Beschwerde ein">
        <p>Sie können Ihre Beschwerde schriftlich oder per E-Mail an uns richten:</p>
        <CompanyAddress withContact />
        <p>Damit wir Ihr Anliegen schnell bearbeiten können, bitten wir um folgende Angaben:</p>
        <ul>
          <li>Ihren vollständigen Namen und Ihre Kontaktdaten,</li>
          <li>die Referenznummer Ihrer Anfrage (sofern vorhanden, z. B. „AN-…“),</li>
          <li>eine Beschreibung des Sachverhalts und den Zeitpunkt des Vorfalls,</li>
          <li>Ihr Anliegen bzw. die von Ihnen gewünschte Lösung,</li>
          <li>gegebenenfalls Kopien relevanter Unterlagen.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Ablauf der Bearbeitung">
        <ol>
          <li><strong>Eingangsbestätigung:</strong> Wir bestätigen den Eingang Ihrer Beschwerde in der Regel innerhalb von drei Werktagen.</li>
          <li><strong>Prüfung:</strong> Ihre Beschwerde wird dokumentiert und von einer Person geprüft, die nicht unmittelbar an dem beanstandeten Vorgang beteiligt war.</li>
          <li><strong>Antwort:</strong> Sie erhalten in der Regel innerhalb von 15 Werktagen eine begründete schriftliche Stellungnahme. Ist dies im Einzelfall nicht möglich, informieren wir Sie über die Gründe der Verzögerung und den voraussichtlichen Zeitpunkt unserer Antwort.</li>
        </ol>
      </LegalSection>

      <LegalSection title="4. Beschwerden über einen Kreditgeber">
        <p>
          Betrifft Ihre Beschwerde die Kreditentscheidung, den Darlehensvertrag oder dessen Abwicklung, ist der jeweilige Kreditgeber zuständig. Wir leiten Ihre
          Beschwerde auf Wunsch an den Kreditgeber weiter und unterstützen Sie bei der Klärung.
        </p>
      </LegalSection>

      <LegalSection title="5. Außergerichtliche Streitbeilegung">
        <p>Sind Sie mit dem Ergebnis unserer Prüfung nicht einverstanden, stehen Ihnen folgende Stellen zur Verfügung:</p>
        <h3>Schlichtungsstelle der Deutschen Bundesbank</h3>
        <p>
          Zuständig für Streitigkeiten aus Darlehensvermittlungs- und Verbraucherdarlehensverträgen.
          <br />Postfach 10 06 02, 60006 Frankfurt am Main
          <br />E-Mail: <a href="mailto:schlichtung@bundesbank.de">schlichtung@bundesbank.de</a>
          <br />Internet: <a href="https://www.bundesbank.de/schlichtungsstelle" target="_blank" rel="noopener noreferrer">www.bundesbank.de/schlichtungsstelle</a>
        </p>
        <h3>Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin)</h3>
        <p>
          Für Beschwerden über beaufsichtigte Kreditinstitute.
          <br />Graurheindorfer Straße 108, 53117 Bonn
          <br />Internet: <a href="https://www.bafin.de" target="_blank" rel="noopener noreferrer">www.bafin.de</a>
        </p>
        <p>
          Die Teilnahme an einem Schlichtungsverfahren ist für Sie kostenfrei. Ihr Recht, die ordentlichen Gerichte anzurufen, bleibt davon unberührt.
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
