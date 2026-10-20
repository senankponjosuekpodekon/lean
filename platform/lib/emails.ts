import type { Locale } from "@/lib/i18n";
import type { MailMessage } from "@/lib/mailer";

interface ApplicationSummary {
  reference: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  amountCents: number;
  termMonths: number;
  purpose: string;
}

interface ContactSummary {
  name: string;
  email: string;
  message: string;
}

const formatAmount = (cents: number, locale: string) =>
  (cents / 100).toLocaleString(locale, { style: "currency", currency: "EUR" });

const customerCopy: Record<Locale, {
  appSubject: (ref: string) => string;
  appBody: (name: string, ref: string, amount: string, term: number) => string;
  contactSubject: string;
  contactBody: (name: string) => string;
  signature: string;
}> = {
  de: {
    appSubject: (ref) => `Ihre Kreditanfrage ${ref} ist eingegangen`,
    appBody: (name, ref, amount, term) =>
      `Guten Tag ${name},\n\nvielen Dank für Ihre Anfrage. Wir haben sie unter der Referenz ${ref} erhalten (${amount}, ${term} Monate).\nUnser Team prüft Ihre Unterlagen und meldet sich in Kürze bei Ihnen. Bitte geben Sie die Referenz bei Rückfragen an.`,
    contactSubject: "Wir haben Ihre Nachricht erhalten",
    contactBody: (name) => `Guten Tag ${name},\n\nvielen Dank für Ihre Nachricht. Unser Team antwortet Ihnen so schnell wie möglich.`,
    signature: "Mit freundlichen Grüßen\nIhr Velmora-Team",
  },
  fr: {
    appSubject: (ref) => `Votre demande de crédit ${ref} a bien été reçue`,
    appBody: (name, ref, amount, term) =>
      `Bonjour ${name},\n\nMerci pour votre demande. Nous l'avons bien reçue sous la référence ${ref} (${amount}, ${term} mois).\nNotre équipe étudie votre dossier et revient vers vous rapidement. Merci d'indiquer cette référence dans vos échanges.`,
    contactSubject: "Nous avons bien reçu votre message",
    contactBody: (name) => `Bonjour ${name},\n\nMerci pour votre message. Notre équipe vous répondra dans les meilleurs délais.`,
    signature: "Cordialement,\nL'équipe Velmora",
  },
  es: {
    appSubject: (ref) => `Hemos recibido su solicitud de crédito ${ref}`,
    appBody: (name, ref, amount, term) =>
      `Hola ${name}:\n\nGracias por su solicitud. La hemos recibido con la referencia ${ref} (${amount}, ${term} meses).\nNuestro equipo revisará su expediente y se pondrá en contacto con usted en breve. Indique esta referencia en sus consultas.`,
    contactSubject: "Hemos recibido su mensaje",
    contactBody: (name) => `Hola ${name}:\n\nGracias por su mensaje. Nuestro equipo le responderá lo antes posible.`,
    signature: "Atentamente,\nEl equipo de Velmora",
  },
  it: {
    appSubject: (ref) => `Abbiamo ricevuto la tua richiesta di finanziamento ${ref}`,
    appBody: (name, ref, amount, term) =>
      `Gentile ${name},\n\ngrazie per la tua richiesta. L'abbiamo ricevuta con il riferimento ${ref} (${amount}, ${term} mesi).\nIl nostro team esaminerà la pratica e ti contatterà a breve. Indica questo riferimento in ogni comunicazione.`,
    contactSubject: "Abbiamo ricevuto il tuo messaggio",
    contactBody: (name) => `Gentile ${name},\n\ngrazie per il tuo messaggio. Il nostro team ti risponderà il prima possibile.`,
    signature: "Cordiali saluti,\nIl team Velmora",
  },
  pt: {
    appSubject: (ref) => `Recebemos o seu pedido de crédito ${ref}`,
    appBody: (name, ref, amount, term) =>
      `Olá ${name},\n\nObrigado pelo seu pedido. Recebemo-lo com a referência ${ref} (${amount}, ${term} meses).\nA nossa equipa vai analisar o seu processo e entrará em contacto em breve. Indique esta referência nas suas comunicações.`,
    contactSubject: "Recebemos a sua mensagem",
    contactBody: (name) => `Olá ${name},\n\nObrigado pela sua mensagem. A nossa equipa responderá o mais rapidamente possível.`,
    signature: "Com os melhores cumprimentos,\nA equipa Velmora",
  },
};

const intlLocale: Record<Locale, string> = { de: "de-DE", fr: "fr-FR", es: "es-ES", it: "it-IT", pt: "pt-PT" };

export function applicationEmails(app: ApplicationSummary, lang: Locale, adminUrl: string, notifyEmail?: string): MailMessage[] {
  const fullName = `${app.firstName} ${app.lastName}`;
  const c = customerCopy[lang];
  const messages: MailMessage[] = [
    {
      to: app.email,
      subject: c.appSubject(app.reference),
      text: `${c.appBody(fullName, app.reference, formatAmount(app.amountCents, intlLocale[lang]), app.termMonths)}\n\n${c.signature}`,
    },
  ];
  if (notifyEmail) {
    messages.push({
      to: notifyEmail,
      replyTo: app.email,
      subject: `Neue Kreditanfrage ${app.reference} – ${fullName}`,
      text: [
        `Neue Kreditanfrage ${app.reference}`,
        "",
        `Name: ${fullName}`,
        `E-Mail: ${app.email}`,
        `Telefon: ${app.phone}`,
        `Betrag: ${formatAmount(app.amountCents, "de-DE")}`,
        `Laufzeit: ${app.termMonths} Monate`,
        `Zweck: ${app.purpose}`,
        `Sprache: ${lang}`,
        "",
        `Alle Details: ${adminUrl}`,
      ].join("\n"),
    });
  }
  return messages;
}

export function contactEmails(msg: ContactSummary, lang: Locale, adminUrl: string, notifyEmail?: string): MailMessage[] {
  const c = customerCopy[lang];
  const messages: MailMessage[] = [
    { to: msg.email, subject: c.contactSubject, text: `${c.contactBody(msg.name)}\n\n${c.signature}` },
  ];
  if (notifyEmail) {
    messages.push({
      to: notifyEmail,
      replyTo: msg.email,
      subject: `Neue Kontaktnachricht von ${msg.name}`,
      text: `Name: ${msg.name}\nE-Mail: ${msg.email}\nSprache: ${lang}\n\n${msg.message}\n\nAdmin: ${adminUrl}`,
    });
  }
  return messages;
}
