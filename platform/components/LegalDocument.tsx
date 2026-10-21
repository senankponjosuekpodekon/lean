import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/PageHeader";
import { company, companyCityLine, companyDisplayName } from "@/lib/company";

export const LEGAL_UPDATED = "Oktober 2026";

export function LegalDocument({ title, description, children }: { title: string; description?: string; children: ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12 lg:py-20">
      <PageHeader title={title} description={description} />
      <Card className="max-w-3xl mx-auto space-y-8 lg:p-10">
        {children}
        <p className="text-sm text-text-secondary pt-6 border-t border-border">Stand: {LEGAL_UPDATED}</p>
      </Card>
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3 text-text-secondary leading-relaxed [&_a]:text-primary [&_a]:underline [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1 [&_strong]:text-text [&_h3]:font-semibold [&_h3]:text-text [&_h3]:pt-2">
      <h2 className="font-heading text-xl font-semibold text-primary">{title}</h2>
      {children}
    </section>
  );
}

export function CompanyAddress({ withContact = false }: { withContact?: boolean }) {
  return (
    <address className="not-italic">
      {companyDisplayName}
      {company.street && <><br />{company.street}</>}
      {companyCityLine && <><br />{companyCityLine}</>}
      <br />{company.country}
      {withContact && company.phone && <><br />Telefon: <a href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}>{company.phone}</a></>}
      {withContact && <><br />E-Mail: <a href={`mailto:${company.email}`}>{company.email}</a></>}
    </address>
  );
}
