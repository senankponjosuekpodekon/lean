import { CompanyAddress, LegalDocument, LegalSection } from "@/components/LegalDocument";
import { company, companyCityLine, companyDisplayName } from "@/lib/company";

export default function ImpressumPage() {
  return (
    <LegalDocument title="Impressum" description="Anbieterkennzeichnung gemäß § 5 Digitale-Dienste-Gesetz (DDG)">
      <LegalSection title="Diensteanbieter">
        <CompanyAddress />
        {company.representative && <p>Vertreten durch: {company.representative}</p>}
      </LegalSection>

      <LegalSection title="Kontakt">
        <p>
          {company.phone && <>Telefon: <a href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}>{company.phone}</a><br /></>}
          E-Mail: <a href={`mailto:${company.email}`}>{company.email}</a>
          <br />
          Internet: <a href={`https://${company.website}`}>{company.website}</a>
        </p>
      </LegalSection>

      {(company.registerCourt || company.registerNumber) && (
        <LegalSection title="Registereintrag">
          <p>
            {company.registerCourt && <>Registergericht: {company.registerCourt}<br /></>}
            {company.registerNumber && <>Registernummer: {company.registerNumber}</>}
          </p>
        </LegalSection>
      )}

      {company.vatId && (
        <LegalSection title="Umsatzsteuer-Identifikationsnummer">
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: {company.vatId}</p>
        </LegalSection>
      )}

      {(company.brokerRegistration || company.supervisoryAuthority) && (
        <LegalSection title="Gewerberechtliche Erlaubnis und Vermittlerregister">
          <p>
            Darlehensvermittler mit Erlaubnis nach § 34c Abs. 1 Gewerbeordnung (GewO).
            {company.supervisoryAuthority && <><br />Zuständige Aufsichtsbehörde: {company.supervisoryAuthority}</>}
            {company.brokerRegistration && <><br />Registrierungsnummer: {company.brokerRegistration}</>}
          </p>
          <p>Berufsrechtliche Regelungen: Gewerbeordnung (GewO), Makler- und Bauträgerverordnung (MaBV), §§ 655a ff. Bürgerliches Gesetzbuch (BGB). Die Vorschriften sind unter <a href="https://www.gesetze-im-internet.de" target="_blank" rel="noopener noreferrer">www.gesetze-im-internet.de</a> abrufbar.</p>
        </LegalSection>
      )}

      <LegalSection title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
        <p>
          {company.representative || companyDisplayName}
          {company.street && <><br />{company.street}</>}
          {companyCityLine && <><br />{companyCityLine}</>}
        </p>
      </LegalSection>

      <LegalSection title="Verbraucherstreitbeilegung">
        <p>
          Bei Streitigkeiten aus Darlehensvermittlungsverträgen können Verbraucher die Schlichtungsstelle der Deutschen Bundesbank anrufen
          (Postfach 10 06 02, 60006 Frankfurt am Main, <a href="https://www.bundesbank.de/schlichtungsstelle" target="_blank" rel="noopener noreferrer">www.bundesbank.de/schlichtungsstelle</a>).
          Weitere Informationen finden Sie auf unserer Seite zu Beschwerden.
        </p>
      </LegalSection>

      <LegalSection title="Haftung für Inhalte">
        <p>
          Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir
          jedoch keine Gewähr. Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch
          nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Bei Bekanntwerden entsprechender Rechtsverletzungen entfernen wir diese Inhalte umgehend.
        </p>
        <p>
          Die auf dieser Website dargestellten Konditionen und Berechnungen dienen der Orientierung und stellen kein verbindliches Angebot dar. Verbindlich sind
          ausschließlich die Vertragsunterlagen des jeweiligen Kreditgebers.
        </p>
      </LegalSection>

      <LegalSection title="Haftung für Links">
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets
          der jeweilige Anbieter oder Betreiber verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft;
          rechtswidrige Inhalte waren zu diesem Zeitpunkt nicht erkennbar. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links umgehend.
        </p>
      </LegalSection>

      <LegalSection title="Urheberrecht">
        <p>
          Die durch den Betreiber erstellten Inhalte, Texte, Grafiken und Marken auf dieser Website unterliegen dem deutschen Urheber- und Markenrecht. Die
          Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der vorherigen schriftlichen
          Zustimmung des Betreibers.
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
