import { Suspense, type ReactNode } from "react";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { HtmlLang } from "@/components/HtmlLang";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

async function LangGuard({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <>
      {/* The root <html lang="de"> is static. The inline script fixes the language as the
          HTML streams (before hydration); HtmlLang keeps it correct on client-side
          navigations, where the script does not re-run. */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang=${JSON.stringify(lang)}`,
        }}
      />
      <HtmlLang lang={lang} />
      {children}
    </>
  );
}

export default function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  return (
    <Suspense fallback={null}>
      <LangGuard params={params}>{children}</LangGuard>
    </Suspense>
  );
}
