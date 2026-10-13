import type { Metadata } from "next";
import { Suspense } from "react";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Velmora — Financing, made clearer",
  description: "Informieren Sie sich über Finanzierungsmöglichkeiten, berechnen Sie eine unverbindliche Monatsrate und stellen Sie Ihre Anfrage online.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${poppins.variable} ${openSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-text">
        <Suspense fallback={<header className="h-16 border-b border-border" />}>
          <Header />
        </Suspense>
        {children}
        <Suspense fallback={<footer className="h-24 border-t border-border" />}>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
