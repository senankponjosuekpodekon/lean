import Link from "next/link";
import { LegalDocument, LegalSection } from "@/components/LegalDocument";

const storage = [
  { name: "admin_session", type: "Cookie (HTTP-only)", purpose: "Hält die Anmeldung im internen Verwaltungsbereich aufrecht.", duration: "Bis zur Abmeldung, höchstens 8 Stunden", scope: "Nur Verwaltungsbereich" },
  { name: "velmora-admin-lang", type: "Local Storage", purpose: "Speichert die im Verwaltungsbereich gewählte Sprache.", duration: "Bis zur Löschung im Browser", scope: "Nur Verwaltungsbereich" },
];

export default function CookiesPage() {
  return (
    <LegalDocument title="Cookie-Richtlinie" description="Informationen zum Einsatz von Cookies und vergleichbaren Technologien auf velmora-finanz.de">
      <LegalSection title="1. Was sind Cookies?">
        <p>
          Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Endgerät gespeichert werden. Vergleichbare Technologien wie der Local Storage
          Ihres Browsers erfüllen ähnliche Funktionen. Rechtsgrundlage für das Speichern von und den Zugriff auf Informationen in Ihrem Endgerät ist § 25
          Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz (TDDDG).
        </p>
      </LegalSection>

      <LegalSection title="2. Unser Grundsatz">
        <p>
          Auf den öffentlichen Seiten von velmora-finanz.de setzen wir <strong>keine Analyse-, Tracking- oder Marketing-Cookies</strong> ein. Es findet keine
          Reichweitenmessung, kein Profiling und keine Weitergabe von Nutzungsdaten zu Werbezwecken statt. Die Schriftarten der Website werden von unserem
          eigenen Server ausgeliefert; beim Seitenaufruf werden daher keine Daten an externe Schriftarten-Dienste übermittelt.
        </p>
        <p>Aus diesem Grund ist für den Besuch unserer Website kein Cookie-Einwilligungsbanner erforderlich.</p>
      </LegalSection>

      <LegalSection title="3. Technisch notwendige Speicherungen">
        <p>
          Ausschließlich im internen, passwortgeschützten Verwaltungsbereich werden die folgenden technisch notwendigen Informationen gespeichert. Sie sind nach
          § 25 Abs. 2 Nr. 2 TDDDG ohne Einwilligung zulässig, da sie für den ausdrücklich gewünschten Dienst unbedingt erforderlich sind.
        </p>
        <div className="grid gap-4">
          {storage.map((s) => (
            <dl key={s.name} className="rounded-xl border border-border p-4 grid gap-x-4 gap-y-2 text-sm sm:grid-cols-[9rem_1fr]">
              <dt className="font-semibold text-text">Name</dt>
              <dd className="font-mono text-xs text-text break-all">{s.name}</dd>
              <dt className="font-semibold text-text">Art</dt>
              <dd>{s.type}</dd>
              <dt className="font-semibold text-text">Zweck</dt>
              <dd>{s.purpose} {s.scope}.</dd>
              <dt className="font-semibold text-text">Speicherdauer</dt>
              <dd>{s.duration}</dd>
            </dl>
          ))}
        </div>
      </LegalSection>

      <LegalSection title="4. Externe Dienste">
        <p>
          Wenn Sie den WhatsApp-Kontaktbutton anklicken, werden Sie zu WhatsApp weitergeleitet. Erst ab diesem Zeitpunkt gelten die Cookie- und
          Datenschutzbestimmungen von WhatsApp Ireland Limited. Vor dem Klick werden keine Daten an WhatsApp übertragen.
        </p>
      </LegalSection>

      <LegalSection title="5. Cookies verwalten und löschen">
        <p>
          Sie können Cookies und Local-Storage-Einträge jederzeit über die Einstellungen Ihres Browsers einsehen, blockieren oder löschen. Das Blockieren der
          oben genannten Speicherungen beeinträchtigt die öffentlichen Seiten nicht; lediglich die Anmeldung im Verwaltungsbereich ist dann nicht möglich.
        </p>
      </LegalSection>

      <LegalSection title="6. Änderungen">
        <p>
          Sollten wir künftig zusätzliche Cookies oder vergleichbare Technologien einsetzen, die einer Einwilligung bedürfen, werden wir diese Richtlinie
          aktualisieren und Ihre Einwilligung vorab einholen. Weitere Informationen zur Verarbeitung personenbezogener Daten finden Sie in unserer{" "}
          <Link href="datenschutz">Datenschutzerklärung</Link>.
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
