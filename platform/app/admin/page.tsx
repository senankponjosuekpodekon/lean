"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { getAdminDictionary } from "@/lib/i18n-admin";

interface Application {
  reference: string;
  status: string;
  statusLabel: string;
  firstName: string;
  lastName: string;
  amountCents: number;
  termMonths: number;
  purpose: string;
  createdAt: string;
}

export default function AdminPage() {
  const t = getAdminDictionary();
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchApplications = async () => {
    const res = await fetch("/api/applications");
    if (res.ok) {
      setApplications(await res.json());
    } else if (res.status === 401) {
      setAuthenticated(false);
    }
  };

  useEffect(() => {
    fetch("/api/admin/me")
      .then((res) => {
        if (res.ok) {
          setAuthenticated(true);
          fetchApplications();
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
      fetchApplications();
    } else {
      alert(t.wrongPassword);
    }
  };

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthenticated(false);
    setApplications([]);
  };

  const updateStatus = async (reference: string, status: string, label: string) => {
    setLoading(true);
    const res = await fetch("/api/applications", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reference, status, statusLabel: label }),
    });
    if (res.ok) {
      await fetchApplications();
    }
    setLoading(false);
  };

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

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-heading text-3xl font-bold text-primary">{t.overviewTitle}</h1>
        <Button onClick={logout} variant="outline" className="h-10 px-4 text-sm">Logout</Button>
      </div>
      <Card className="overflow-hidden">
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
            {applications.map((app) => (
              <tr key={app.reference} className="border-b border-border last:border-0">
                <td className="p-3 text-text">{app.reference}</td>
                <td className="p-3 text-text">{app.firstName} {app.lastName}</td>
                <td className="p-3 text-text">{(app.amountCents / 100).toLocaleString("de-DE")} €</td>
                <td className="p-3 text-text-secondary">{app.purpose}</td>
                <td className="p-3 text-text-secondary">{app.statusLabel}</td>
                <td className="p-3 flex flex-wrap gap-2">
                  <Button onClick={() => updateStatus(app.reference, "reviewing", "In Prüfung")} className="h-8 px-3 text-xs" disabled={loading}>{t.review}</Button>
                  <Button onClick={() => updateStatus(app.reference, "in_analysis", "In Analyse")} className="h-8 px-3 text-xs" disabled={loading}>{t.analysis}</Button>
                  <Button onClick={() => updateStatus(app.reference, "closed", "Abgeschlossen")} className="h-8 px-3 text-xs" disabled={loading}>{t.close}</Button>
                </td>
              </tr>
            ))}
            {applications.length === 0 && (
              <tr>
                <td colSpan={6} className="p-6 text-center text-text-secondary">{t.empty}</td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
