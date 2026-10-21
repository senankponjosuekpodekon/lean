import Link from "next/link";
import { LegalDocument, LegalSection } from "@/components/LegalDocument";
import { companyDisplayName } from "@/lib/company";

export default function BedingungenPage() {
  return (
    <LegalDocument title="Allgemeine Geschäftsbedingungen" description="Bedingungen für die Nutzung von velmora-finanz.de und unseren Vermittlungsservice">
      <LegalSection title="§ 1 Geltungsbereich">
        <p>
          Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die Nutzung der Website velmora-finanz.de sowie für alle Leistungen, die {companyDisplayName}{" "}
          (nachfolgend „Velmora“ oder „wir“) gegenüber Nutzern (nachfolgend „Sie“) im Zusammenhang mit der Vermittlung von Finanzierungen erbringt.
          Abweichende Bedingungen des Nutzers finden keine Anwendung, sofern wir ihrer Geltung nicht ausdrücklich schriftlich zugestimmt haben.
        </p>
      </LegalSection>

      <LegalSection title="§ 2 Leistungsbeschreibung">
        <p>
          Velmora ist ein unabhängiger Vermittler von Verbraucherdarlehen. Wir nehmen Ihre Finanzierungsanfrage entgegen, prüfen sie auf Vollständigkeit und
          leiten sie an einen oder mehrere geeignete Kreditgeber weiter. <strong>Velmora ist selbst kein Kreditgeber</strong>, gewährt keine Darlehen und
          nimmt keine Kundengelder entgegen.
        </p>
        <p>
          Der Darlehensvertrag kommt ausschließlich zwischen Ihnen und dem jeweiligen Kreditgeber zu dessen Bedingungen zustande. Vor Vertragsschluss erhalten
          Sie vom Kreditgeber die gesetzlich vorgeschriebenen vorvertraglichen Informationen („Europäische Standardinformationen für Verbraucherkredite“).
        </p>
      </LegalSection>

      <LegalSection title="§ 3 Finanzierungsanfrage und Vertragsschluss">
        <p>
          Mit dem Absenden des Anfrageformulars beauftragen Sie uns, Ihre Anfrage zu prüfen und an geeignete Kreditgeber weiterzuleiten
          (Darlehensvermittlungsvertrag). Sie erhalten eine Eingangsbestätigung mit einer Referenznummer.
        </p>
        <p>
          Die Anfrage ist für Sie unverbindlich. Ein Anspruch auf Vermittlung oder Gewährung eines Darlehens besteht nicht. Die Entscheidung über die
          Kreditvergabe und deren Konditionen trifft allein der Kreditgeber nach Prüfung Ihrer Kreditwürdigkeit.
        </p>
      </LegalSection>

      <LegalSection title="§ 4 Kosten">
        <p>
          Unsere Vermittlungsleistung ist für Sie als Verbraucher kostenlos. Wir erhalten im Erfolgsfall eine Provision vom Kreditgeber. Über Art und Höhe dieser
          Vergütung informieren wir Sie vor Abschluss des Darlehensvertrags gemäß § 655a Abs. 2 BGB in Verbindung mit Art. 247 § 13 EGBGB. Die Vergütung wirkt
          sich nicht auf die vom Kreditgeber angebotenen Konditionen aus. Wir verlangen von Ihnen keine Vorauszahlungen, Bearbeitungsgebühren oder Auslagen.
        </p>
      </LegalSection>

      <LegalSection title="§ 5 Pflichten des Nutzers">
        <p>
          Sie verpflichten sich, im Anfrageformular vollständige und wahrheitsgemäße Angaben zu machen und uns über wesentliche Änderungen unverzüglich zu
          informieren. Unrichtige Angaben können zur Ablehnung der Anfrage durch den Kreditgeber führen. Die Nutzung der Website zu missbräuchlichen oder
          rechtswidrigen Zwecken, insbesondere das Übermitteln falscher Identitätsdaten, ist untersagt.
        </p>
      </LegalSection>

      <LegalSection title="§ 6 Kreditrechner und Informationen">
        <p>
          Die Ergebnisse des Kreditrechners und die auf der Website genannten Konditionen sind unverbindliche Beispielrechnungen zur Orientierung. Sie stellen
          kein Angebot dar. Verbindlich sind ausschließlich die Konditionen im Vertragsangebot des Kreditgebers.
        </p>
      </LegalSection>

      <LegalSection title="§ 7 Haftung">
        <p>
          Wir haften unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei der Verletzung von Leben, Körper oder Gesundheit. Bei leicht fahrlässiger
          Verletzung einer wesentlichen Vertragspflicht, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren
          Einhaltung Sie regelmäßig vertrauen dürfen, ist unsere Haftung auf den vertragstypisch vorhersehbaren Schaden begrenzt. Im Übrigen ist die Haftung bei
          leichter Fahrlässigkeit ausgeschlossen. Die Haftung nach dem Produkthaftungsgesetz bleibt unberührt.
        </p>
        <p>
          Wir übernehmen keine Haftung für Entscheidungen der Kreditgeber sowie für die ständige Verfügbarkeit der Website, soweit Störungen außerhalb unseres
          Einflussbereichs liegen.
        </p>
      </LegalSection>

      <LegalSection title="§ 8 Widerrufsrecht">
        <p>
          Als Verbraucher steht Ihnen ein gesetzliches Widerrufsrecht zu. Einzelheiten finden Sie in unserer <Link href="widerruf">Widerrufsbelehrung</Link>.
        </p>
      </LegalSection>

      <LegalSection title="§ 9 Datenschutz">
        <p>
          Wir verarbeiten Ihre personenbezogenen Daten ausschließlich nach Maßgabe der geltenden Datenschutzgesetze. Einzelheiten entnehmen Sie unserer{" "}
          <Link href="datenschutz">Datenschutzerklärung</Link>.
        </p>
      </LegalSection>

      <LegalSection title="§ 10 Schlussbestimmungen">
        <p>
          Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Gegenüber Verbrauchern gilt diese Rechtswahl nur insoweit, als
          dadurch nicht der Schutz entzogen wird, der durch zwingende Bestimmungen des Rechts des Staates ihres gewöhnlichen Aufenthalts gewährt wird.
        </p>
        <p>
          Ist der Nutzer Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist Gerichtsstand für alle
          Streitigkeiten der Sitz von Velmora.
        </p>
        <p>
          Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Informationen zur
          außergerichtlichen Streitbeilegung finden Sie auf unserer Seite <Link href="beschwerden">Beschwerden</Link>.
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
