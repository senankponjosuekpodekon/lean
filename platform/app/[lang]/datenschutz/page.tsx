import Link from "next/link";
import { CompanyAddress, LegalDocument, LegalSection } from "@/components/LegalDocument";

export default function DatenschutzPage() {
  return (
    <LegalDocument title="Datenschutzerklärung" description="Informationen zur Verarbeitung Ihrer personenbezogenen Daten nach Art. 13 und 14 DSGVO">
      <LegalSection title="1. Verantwortlicher">
        <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
        <CompanyAddress withContact />
        <p>Für alle Fragen zum Datenschutz und zur Ausübung Ihrer Rechte erreichen Sie uns unter der oben genannten E-Mail-Adresse.</p>
      </LegalSection>

      <LegalSection title="2. Überblick">
        <p>
          Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung unserer Website, zur Bearbeitung Ihrer Anfragen und zur Vermittlung einer
          Finanzierung erforderlich ist oder Sie eingewilligt haben. Wir verkaufen keine Daten, setzen keine Analyse- oder Werbe-Tracker ein und erstellen keine
          Nutzerprofile. Die Übertragung aller Daten erfolgt verschlüsselt über TLS (HTTPS).
        </p>
      </LegalSection>

      <LegalSection title="3. Bereitstellung der Website und Server-Logfiles">
        <p>
          Bei jedem Aufruf unserer Website verarbeitet unser Hosting-Anbieter automatisch Daten, die Ihr Browser übermittelt: IP-Adresse, Datum und Uhrzeit des
          Abrufs, aufgerufene Seite, Referrer-URL, Browsertyp und -version sowie Betriebssystem. Diese Daten sind für die Auslieferung der Website, die
          Gewährleistung der Sicherheit und die Abwehr von Angriffen erforderlich.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt im sicheren und stabilen Betrieb der Website. Die Logdaten werden
          nach kurzer Zeit, spätestens nach 30 Tagen, gelöscht, sofern sie nicht zur Aufklärung eines Sicherheitsvorfalls benötigt werden.
        </p>
        <h3>Hosting</h3>
        <p>
          Unsere Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, gehostet. Mit Vercel besteht ein Vertrag über die
          Auftragsverarbeitung nach Art. 28 DSGVO. Eine Übermittlung in die USA erfolgt auf Grundlage des EU-US Data Privacy Framework (Art. 45 DSGVO) sowie
          ergänzend der EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO).
        </p>
      </LegalSection>

      <LegalSection title="4. Finanzierungsanfrage">
        <p>Wenn Sie über unser Online-Formular eine Finanzierungsanfrage stellen, verarbeiten wir folgende Daten:</p>
        <ul>
          <li><strong>Vorhaben:</strong> gewünschter Kreditbetrag, Laufzeit, Verwendungszweck und Beschreibung,</li>
          <li><strong>Persönliche Angaben:</strong> Vor- und Nachname, Geburtsdatum, Anschrift, E-Mail-Adresse und Telefonnummer,</li>
          <li><strong>Finanzielle Situation:</strong> berufliche Situation, Arbeitgeber, Beschäftigungsdauer, monatliches Nettoeinkommen, monatliche Ausgaben und bestehende Kredite,</li>
          <li><strong>Unterlagen:</strong> Angaben dazu, welche Nachweise Sie bereitstellen können.</li>
        </ul>
        <p>
          Zweck der Verarbeitung ist die Prüfung Ihrer Anfrage, die Kontaktaufnahme mit Ihnen und die Vermittlung eines passenden Kreditangebots. Rechtsgrundlage
          ist Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen auf Ihre Anfrage). Die Angaben sind für die Bearbeitung erforderlich; ohne sie
          können wir Ihre Anfrage nicht bearbeiten.
        </p>
        <h3>Weitergabe an Kreditgeber</h3>
        <p>
          Zur Vermittlung übermitteln wir Ihre Angaben an einen oder mehrere ausgewählte Kreditgeber. Diese entscheiden in eigener Verantwortung über die
          Kreditvergabe und sind gesetzlich verpflichtet, Ihre Kreditwürdigkeit zu prüfen (§ 505a BGB). Hierzu können die Kreditgeber Auskünfte bei
          Auskunfteien wie der SCHUFA Holding AG einholen. Über diese Verarbeitung informiert Sie der jeweilige Kreditgeber gesondert. Wir selbst treffen keine
          automatisierten Einzelentscheidungen im Sinne von Art. 22 DSGVO.
        </p>
      </LegalSection>

      <LegalSection title="5. Kontaktformular, E-Mail und Telefon">
        <p>
          Wenn Sie uns über das Kontaktformular, per E-Mail oder telefonisch kontaktieren, verarbeiten wir Ihren Namen, Ihre Kontaktdaten und den Inhalt Ihrer
          Nachricht, um Ihr Anliegen zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage auf einen Vertrag zielt, im Übrigen
          Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt in der Beantwortung von Anfragen.
        </p>
      </LegalSection>

      <LegalSection title="6. E-Mail-Benachrichtigungen">
        <p>
          Nach dem Absenden eines Formulars erhalten Sie eine automatische Eingangsbestätigung per E-Mail. Für den Versand nutzen wir den E-Mail-Dienst Resend
          (Anbieter mit Sitz in den USA). Dabei werden Ihre E-Mail-Adresse, Ihr Name und der Inhalt der Benachrichtigung verarbeitet. Mit dem Anbieter besteht ein
          Vertrag über die Auftragsverarbeitung nach Art. 28 DSGVO; die Übermittlung in die USA erfolgt auf Grundlage der EU-Standardvertragsklauseln
          (Art. 46 Abs. 2 lit. c DSGVO). Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
        </p>
      </LegalSection>

      <LegalSection title="7. Kontakt über WhatsApp">
        <p>
          Auf unserer Website bieten wir einen Button zur Kontaktaufnahme über WhatsApp an. Erst wenn Sie diesen anklicken, werden Sie zu WhatsApp weitergeleitet;
          vorher werden keine Daten an WhatsApp übertragen. Anbieter ist die WhatsApp Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland. WhatsApp
          verarbeitet dabei Daten in eigener Verantwortung, unter Umständen auch in den USA. Die Nutzung ist freiwillig; Rechtsgrundlage für unsere Kommunikation
          ist Art. 6 Abs. 1 lit. a DSGVO (Ihre Einwilligung durch aktive Kontaktaufnahme). Wir empfehlen, über WhatsApp keine sensiblen Finanzdaten zu
          übermitteln. Weitere Informationen finden Sie in der{" "}
          <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener noreferrer">Datenschutzrichtlinie von WhatsApp</a>.
        </p>
      </LegalSection>

      <LegalSection title="8. Speicherung in der Datenbank">
        <p>
          Finanzierungsanfragen und Kontaktnachrichten werden in einer gesicherten Datenbank gespeichert, die von einem Auftragsverarbeiter nach Art. 28 DSGVO
          betrieben wird. Der Zugriff ist auf befugte Mitarbeiter beschränkt und durch Passwort geschützt.
        </p>
      </LegalSection>

      <LegalSection title="9. Cookies und lokale Speicherung">
        <p>
          Auf den öffentlichen Seiten setzen wir keine Cookies zu Analyse- oder Werbezwecken ein. Die Schriftarten werden lokal von unserem Server geladen.
          Einzelheiten zu den technisch notwendigen Speicherungen im Verwaltungsbereich finden Sie in unserer <Link href="cookies">Cookie-Richtlinie</Link>.
        </p>
      </LegalSection>

      <LegalSection title="10. Speicherdauer">
        <p>Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen Zweck erforderlich ist:</p>
        <ul>
          <li>Kontaktnachrichten löschen wir, sobald Ihr Anliegen abschließend bearbeitet ist und keine weitere Kommunikation zu erwarten ist.</li>
          <li>Finanzierungsanfragen, die nicht zu einem Vertragsabschluss führen, löschen wir spätestens sechs Monate nach Abschluss der Bearbeitung.</li>
          <li>Kommt ein Vertrag zustande, bewahren wir die Daten entsprechend den gesetzlichen Aufbewahrungsfristen auf (bis zu sechs Jahre nach § 257 HGB bzw. bis zu zehn Jahre nach § 147 AO).</li>
        </ul>
      </LegalSection>

      <LegalSection title="11. Ihre Rechte">
        <p>Sie haben jederzeit das Recht auf:</p>
        <ul>
          <li>Auskunft über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO),</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO),</li>
          <li>Löschung Ihrer Daten (Art. 17 DSGVO),</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO),</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO),</li>
          <li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO).</li>
        </ul>
        <h3>Widerspruchsrecht nach Art. 21 DSGVO</h3>
        <p>
          <strong>
            Soweit wir Ihre Daten auf Grundlage berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO) verarbeiten, können Sie dieser Verarbeitung aus Gründen, die
            sich aus Ihrer besonderen Situation ergeben, jederzeit widersprechen. Wir verarbeiten Ihre Daten dann nicht mehr, es sei denn, wir können zwingende
            schutzwürdige Gründe nachweisen, die Ihre Interessen überwiegen.
          </strong>
        </p>
        <h3>Beschwerderecht</h3>
        <p>
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, insbesondere in dem Mitgliedstaat Ihres gewöhnlichen Aufenthalts, Ihres
          Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes (Art. 77 DSGVO).
        </p>
      </LegalSection>

      <LegalSection title="12. Datensicherheit">
        <p>
          Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten gegen Verlust, Manipulation und unbefugten Zugriff zu schützen, darunter
          TLS-Verschlüsselung, Zugriffsbeschränkungen und passwortgeschützte Verwaltungszugänge. Unsere Maßnahmen werden entsprechend der technischen Entwicklung
          fortlaufend verbessert.
        </p>
      </LegalSection>

      <LegalSection title="13. Änderungen dieser Datenschutzerklärung">
        <p>
          Wir passen diese Datenschutzerklärung an, wenn sich unsere Verarbeitungen oder die Rechtslage ändern. Es gilt jeweils die auf dieser Seite
          veröffentlichte Fassung.
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
