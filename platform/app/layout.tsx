import type { Metadata } from "next";
import { Suspense } from "react";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Velmora — Financing, made clearer",
    template: "%s | Velmora",
  },
  description:
    "Velmora macht Finanzierung übersichtlicher. Informieren Sie sich, berechnen Sie eine unverbindliche Monatsrate und stellen Sie Ihre Anfrage online.",
  metadataBase: new URL("https://velmora-finanz.de"),
  alternates: {
    canonical: "/",
    languages: {
      de: "/de",
      fr: "/fr",
      es: "/es",
      it: "/it",
      pt: "/pt",
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://velmora-finanz.de",
    siteName: "Velmora",
    title: "Velmora — Financing, made clearer",
    description:
      "Finanzierung transparent vergleichen und unverbindlich anfragen.",
    images: ["/images/velmora-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velmora — Financing, made clearer",
    description:
      "Finanzierung transparent vergleichen und unverbindlich anfragen.",
    images: ["/images/velmora-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${manrope.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-text">
        <Suspense fallback={<header className="h-16 border-b border-border" />}>
          <Header />
        </Suspense>
        {children}
        <Suspense fallback={<footer className="h-24 border-t border-border" />}>
          <Footer />
        </Suspense>
        <Suspense fallback={null}>
          <WhatsAppButton />
        </Suspense>
      </body>
    </html>
  );
}
