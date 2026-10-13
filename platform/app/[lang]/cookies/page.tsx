import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/PageHeader";

export default function CookiesPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12 lg:py-20">
      <PageHeader
        title="Cookies"
        description="Informationen zur Verwendung von Cookies und ähnlichen Technologien."
      />

      <div className="max-w-3xl mx-auto space-y-6">
        <Card>
          <h2 className="font-heading text-xl font-semibold text-primary mb-2">Erforderliche Cookies</h2>
          <p className="text-text-secondary">
            Technisch notwendige Cookies gewährleisten die Funktionalität der Website. Sie können nicht deaktiviert werden.
          </p>
        </Card>

        <Card>
          <h2 className="font-heading text-xl font-semibold text-primary mb-2">Analyse- und Marketingcookies</h2>
          <p className="text-text-secondary">
            Sofern eingesetzt, werden diese Cookies nur nach Ihrer ausdrücklichen Einwilligung aktiviert. Sie dienen der Verbesserung der Nutzungserfahrung oder der Reichweitenmessung.
          </p>
        </Card>

        <Card>
          <h2 className="font-heading text-xl font-semibold text-primary mb-2">Verwaltung der Zustimmung</h2>
          <p className="text-text-secondary">
            Eine vollständige Cookie-Einwilligungsverwaltung wird vor dem Livegang implementiert, sobald die Analyse- und Werbemaßnahmen definiert sind.
          </p>
        </Card>
      </div>
    </div>
  );
}
