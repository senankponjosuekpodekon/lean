export interface Application {
  id: string;
  reference: string;
  status: "received" | "reviewing" | "missing_info" | "in_analysis" | "decision_communicated" | "closed";
  amountCents: number;
  termMonths: number;
  purpose: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  statusLabel: string;
  createdAt: string;
}

const applications: Application[] = [];

export function createApplication(data: Omit<Application, "id" | "reference" | "createdAt" | "status" | "statusLabel">): Application {
  const id = `app-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  const application: Application = {
    ...data,
    id,
    reference: `AN-${Date.now()}`,
    status: "received",
    statusLabel: "Eingegangen",
    createdAt: new Date().toISOString(),
  };
  applications.push(application);
  return application;
}

export function listApplications(): Application[] {
  return [...applications].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export function updateStatus(reference: string, status: Application["status"], statusLabel: string): Application | null {
  const app = applications.find((a) => a.reference === reference);
  if (!app) return null;
  app.status = status;
  app.statusLabel = statusLabel;
  return app;
}
