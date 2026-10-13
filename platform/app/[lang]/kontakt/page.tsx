"use client";

import { Suspense, useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { PageHeader } from "@/components/PageHeader";
import { getPageDictionary } from "@/lib/i18n-pages";
import type { Locale } from "@/lib/i18n";

export default function KontaktPage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" />}>
      <KontaktInner />
    </Suspense>
  );
}

function KontaktInner() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const params = useParams();
  const lang = (params?.lang as Locale) || "de";
  const t = getPageDictionary(lang);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12 lg:py-20">
      <PageHeader title={t.contactTitle} description={t.contactDescription} />

      <div className="max-w-2xl mx-auto">
        {sent ? (
          <Card className="bg-success/5 border-success/20 text-center">
            <h2 className="font-heading text-2xl font-bold text-success">{t.sendButton}</h2>
            <p className="mt-2 text-text-secondary">{t.contactNote}</p>
          </Card>
        ) : (
          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input label={t.nameLabel} name="name" value={name} onChange={setName} required />
              <Input label={t.emailLabel} name="email" type="email" value={email} onChange={setEmail} required />
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-text">{t.messageLabel}</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="px-4 py-3 rounded-xl border border-border bg-surface text-text focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <p className="text-xs text-text-secondary">{t.contactNote}</p>
              <Button type="submit" className="w-full">{t.sendButton}</Button>
            </form>
          </Card>
        )}
      </div>
    </div>
  );
}
