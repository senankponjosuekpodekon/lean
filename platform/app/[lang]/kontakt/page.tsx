"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { PageHeader } from "@/components/PageHeader";

export default function KontaktPage() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12 lg:py-20">
      <PageHeader
        title="Wie können wir Ihnen helfen?"
        description="Kontaktieren Sie uns bei Fragen zum Ablauf oder zu den verfügbaren Informationen."
      />

      <div className="max-w-2xl mx-auto">
        {sent ? (
          <Card className="bg-success/5 border-success/20 text-center">
            <h2 className="font-heading text-2xl font-bold text-success">Nachricht gesendet</h2>
            <p className="mt-2 text-text-secondary">Vielen Dank für Ihre Nachricht. Wir werden sie schnellstmöglich bearbeiten.</p>
          </Card>
        ) : (
          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input label="Name" name="name" value="" onChange={() => {}} />
              <Input label="E-Mail-Adresse" name="email" type="email" value={email} onChange={setEmail} required />
              <Input label="Betreff" name="subject" value={subject} onChange={setSubject} required />
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-text">Nachricht</label>
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
              <p className="text-xs text-text-secondary">
                Bitte senden Sie keine Bankdaten oder vertraulichen Dokumente über dieses Formular.
              </p>
              <Button type="submit" className="w-full">Nachricht senden</Button>
            </form>
          </Card>
        )}
      </div>
    </div>
  );
}
