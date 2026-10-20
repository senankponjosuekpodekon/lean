"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { getAdminDictionary } from "@/lib/i18n-admin";
import { whatsAppLink } from "@/lib/whatsapp";

interface Application {
  reference: string;
  status: string;
  statusLabel: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  amountCents: number;
  termMonths: number;
  purpose: string;
  details: Record<string, string | string[]>;
  createdAt: string;
}

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  handled: boolean;
  createdAt: string;
}

type Tab = "applications" | "messages" | "settings";

const formatDate = (iso: string) => new Date(iso).toLocaleString("de-DE");

export default function AdminPage() {
  const t = getAdminDictionary();
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);
  const [tab, setTab] = useState<Tab>("applications");
  const [applications, setApplications] = useState<Application[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [whatsappEnabled, setWhatsappEnabled] = useState(false);
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [settingsStatus, setSettingsStatus] = useState<"idle" | "saved" | "error">("idle");

  const loadAll = async () => {
    const [appsRes, msgsRes, settingsRes] = await Promise.all([
      fetch("/api/applications"),
      fetch("/api/contact"),
      fetch("/api/settings"),
    ]);
    if (appsRes.status === 401 || msgsRes.status === 401) {
      setAuthenticated(false);
      return;
    }
    setLoadError(!appsRes.ok || !msgsRes.ok);
    if (appsRes.ok) setApplications(await appsRes.json());
    if (msgsRes.ok) setMessages(await msgsRes.json());
    if (settingsRes.ok) {
      const s = await settingsRes.json();
      setWhatsappEnabled(Boolean(s.whatsappEnabled));
      setWhatsappNumber(s.whatsappNumber ?? "");
    }
  };

  useEffect(() => {
    fetch("/api/admin/me")
      .then((res) => {
        if (res.ok) {
          setAuthenticated(true);
          loadAll();
        }
      })
      .finally(() => setChecking(false));
  }, []);

  const login = async () => {
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setAuthenticated(true);
      setPassword("");
      loadAll();
    } else {
      alert(t.wrongPassword);
    }
  };

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthenticated(false);
    setApplications([]);
    setMessages([]);
  };

  const updateStatus = async (reference: string, status: string, label: string) => {
    setLoading(true);
    const res = await fetch("/api/applications", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reference, status, statusLabel: label }),
    });
    if (res.ok) await loadAll();
    setLoading(false);
  };

  const setHandled = async (id: string, handled: boolean) => {
    setLoading(true);
    const res = await fetch("/api/contact", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, handled }),
    });
    if (res.ok) await loadAll();
    setLoading(false);
  };

  const saveSettings = async () => {
    setLoading(true);
    const res = await fetch("/api/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ whatsappEnabled, whatsappNumber }),
    });
    setSettingsStatus(res.ok ? "saved" : "error");
    setLoading(false);
  };

  const mailto = (email: string, subject: string, body: string) =>
    `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  if (checking) {
    return <div className="max-w-md mx-auto px-5 py-20 text-center text-text-secondary">{t.loginTitle}</div>;
  }

  if (!authenticated) {
    return (
      <div className="max-w-md mx-auto px-5 py-20">
        <Card className="p-6 space-y-4">
          <h1 className="font-heading text-2xl font-bold text-primary">{t.loginTitle}</h1>
          <p className="text-sm text-text-secondary">{t.loginNote}</p>
          <Input label={t.passwordLabel} name="password" type="password" value={password} onChange={setPassword} />
          <Button onClick={login}>{t.loginButton}</Button>
        </Card>
      </div>
    );
  }

  const openMessages = messages.filter((m) => !m.handled).length;
  const tabs: { id: Tab; label: string }[] = [
    { id: "applications", label: `${t.tabApplications} (${applications.length})` },
    { id: "messages", label: `${t.tabMessages} (${openMessages})` },
    { id: "settings", label: t.tabSettings },
  ];

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-heading text-3xl font-bold text-primary">{t.overviewTitle}</h1>
        <Button onClick={logout} variant="outline" className="h-10 px-4 text-sm">Logout</Button>
      </div>

      <div role="tablist" className="flex flex-wrap gap-2 mb-6">
        {tabs.map((item) => (
          <button
            key={item.id}
            role="tab"
            aria-selected={tab === item.id}
            onClick={() => setTab(item.id)}
            className={`h-10 px-4 rounded-xl text-sm font-semibold border transition-colors ${
              tab === item.id ? "bg-primary text-white border-primary" : "bg-surface text-primary border-border hover:border-primary"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {loadError && <p role="alert" className="mb-4 text-sm text-error">{t.loadError}</p>}

      {tab === "applications" && (
        <Card className="overflow-x-auto p-0">
          <table className="w-full text-sm">
            <thead className="bg-background border-b border-border">
              <tr>
                <th className="text-left p-3 font-semibold text-text">{t.reference}</th>
                <th className="text-left p-3 font-semibold text-text">{t.name}</th>
                <th className="text-left p-3 font-semibold text-text">{t.amount}</th>
                <th className="text-left p-3 font-semibold text-text">{t.purpose}</th>
                <th className="text-left p-3 font-semibold text-text">{t.status}</th>
                <th className="text-left p-3 font-semibold text-text">{t.actions}</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => {
                const fullName = `${app.firstName} ${app.lastName}`;
                const greeting = t.replyGreeting(fullName, app.reference);
                const wa = whatsAppLink(app.phone, greeting);
                const isOpen = expanded === app.reference;
                return [
                  <tr key={app.reference} className="border-b border-border">
                    <td className="p-3 text-text whitespace-nowrap">{app.reference}</td>
                    <td className="p-3 text-text">{fullName}</td>
                    <td className="p-3 text-text whitespace-nowrap">{(app.amountCents / 100).toLocaleString("de-DE")} €</td>
                    <td className="p-3 text-text-secondary">{app.purpose}</td>
                    <td className="p-3 text-text-secondary">{app.statusLabel}</td>
                    <td className="p-3">
                      <div className="flex flex-wrap gap-2">
                        <Button onClick={() => setExpanded(isOpen ? null : app.reference)} variant="outline" className="h-8 px-3 text-xs">
                          {isOpen ? t.hideDetails : t.details}
                        </Button>
                        <Button onClick={() => updateStatus(app.reference, "reviewing", "In Prüfung")} className="h-8 px-3 text-xs" disabled={loading}>{t.review}</Button>
                        <Button onClick={() => updateStatus(app.reference, "in_analysis", "In Analyse")} className="h-8 px-3 text-xs" disabled={loading}>{t.analysis}</Button>
                        <Button onClick={() => updateStatus(app.reference, "closed", "Abgeschlossen")} className="h-8 px-3 text-xs" disabled={loading}>{t.close}</Button>
                      </div>
                    </td>
                  </tr>,
                  isOpen && (
                    <tr key={`${app.reference}-details`} className="border-b border-border bg-background/60">
                      <td colSpan={6} className="p-4">
                        <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 mb-4">
                          <div><dt className="text-xs text-text-secondary">{t.email}</dt><dd className="text-text break-all">{app.email}</dd></div>
                          <div><dt className="text-xs text-text-secondary">{t.phone}</dt><dd className="text-text">{app.phone}</dd></div>
                          <div><dt className="text-xs text-text-secondary">{t.term}</dt><dd className="text-text">{app.termMonths} {t.months}</dd></div>
                          <div><dt className="text-xs text-text-secondary">{t.createdAt}</dt><dd className="text-text">{formatDate(app.createdAt)}</dd></div>
                          {Object.entries(app.details ?? {}).map(([key, value]) => (
                            <div key={key}>
                              <dt className="text-xs text-text-secondary">{t.detailLabels[key] ?? key}</dt>
                              <dd className="text-text">{Array.isArray(value) ? value.join(", ") : value}</dd>
                            </div>
                          ))}
                        </dl>
                        <div className="flex flex-wrap gap-2">
                          <Button href={mailto(app.email, `${t.reference} ${app.reference}`, greeting)} className="h-9 px-4 text-sm">{t.replyEmail}</Button>
                          {wa && (
                            <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-9 px-4 rounded-xl text-sm font-semibold bg-[#25D366] text-white hover:opacity-90">
                              {t.replyWhatsApp}
                            </a>
                          )}
                        </div>
                      </td>
                    </tr>
                  ),
                ];
              })}
              {applications.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-6 text-center text-text-secondary">{t.empty}</td>
                </tr>
              )}
            </tbody>
          </table>
        </Card>
      )}

      {tab === "messages" && (
        <div className="space-y-4">
          {messages.length === 0 && <Card className="text-center text-text-secondary">{t.messagesEmpty}</Card>}
          {messages.map((msg) => (
            <Card key={msg.id} className={msg.handled ? "opacity-70" : ""}>
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <p className="font-semibold text-text">{msg.name}</p>
                  <p className="text-sm text-text-secondary break-all">{msg.email} · {formatDate(msg.createdAt)}</p>
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${msg.handled ? "bg-success/10 text-success" : "bg-accent/30 text-primary"}`}>
                  {msg.handled ? t.handled : t.open}
                </span>
              </div>
              <p className="whitespace-pre-wrap text-text mb-4">{msg.message}</p>
              <div className="flex flex-wrap gap-2">
                <Button href={mailto(msg.email, "Velmora", t.replyGreeting(msg.name))} className="h-9 px-4 text-sm">{t.replyEmail}</Button>
                <Button onClick={() => setHandled(msg.id, !msg.handled)} variant="outline" className="h-9 px-4 text-sm" disabled={loading}>
                  {msg.handled ? t.markOpen : t.markHandled}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {tab === "settings" && (
        <Card className="max-w-xl space-y-4">
          <h2 className="font-heading text-xl font-bold text-primary">{t.whatsappTitle}</h2>
          <label className="flex items-center gap-3 text-text">
            <input
              type="checkbox"
              checked={whatsappEnabled}
              onChange={(e) => {
                setWhatsappEnabled(e.target.checked);
                setSettingsStatus("idle");
              }}
              className="h-5 w-5 accent-primary"
            />
            {t.whatsappEnabled}
          </label>
          <Input
            label={t.whatsappNumber}
            name="whatsappNumber"
            type="tel"
            value={whatsappNumber}
            onChange={(v) => {
              setWhatsappNumber(v);
              setSettingsStatus("idle");
            }}
          />
          <Button onClick={saveSettings} disabled={loading}>{t.save}</Button>
          {settingsStatus === "saved" && <p className="text-sm text-success">{t.saved}</p>}
          {settingsStatus === "error" && <p role="alert" className="text-sm text-error">{t.saveError}</p>}
        </Card>
      )}
    </div>
  );
}
