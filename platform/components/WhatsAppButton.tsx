"use client";

import { useEffect, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import { getDictionary, type Locale } from "@/lib/i18n";
import { whatsAppLink } from "@/lib/whatsapp";

export function WhatsAppButton() {
  const params = useParams();
  const pathname = usePathname();
  const lang = (params?.lang as Locale) || "de";
  const t = getDictionary(lang);
  const [href, setHref] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/settings", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled) setHref(data?.whatsappEnabled ? whatsAppLink(data.whatsappNumber) : null);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [pathname]);

  if (!href || pathname?.startsWith("/admin")) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsappChat}
      title={t.whatsappChat}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-7 w-7 fill-current">
        <path d="M16.004 3C8.832 3 3 8.832 3 16c0 2.293.6 4.533 1.74 6.507L3 29l6.66-1.707A12.94 12.94 0 0 0 16.004 29C23.172 29 29 23.168 29 16S23.172 3 16.004 3Zm0 23.64c-2.004 0-3.966-.54-5.68-1.56l-.407-.24-3.953 1.013 1.053-3.853-.267-.4A10.6 10.6 0 0 1 5.36 16c0-5.867 4.773-10.64 10.644-10.64 5.866 0 10.636 4.773 10.636 10.64 0 5.866-4.77 10.64-10.636 10.64Zm5.84-7.973c-.32-.16-1.893-.933-2.187-1.04-.293-.107-.506-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.352-.498-2.574-1.588-.951-.849-1.594-1.897-1.78-2.217-.187-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.214.053-.4-.027-.56-.08-.16-.72-1.734-.986-2.374-.26-.624-.524-.54-.72-.55l-.613-.01c-.214 0-.56.08-.854.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.147 3.093 1.307 3.306.16.214 2.256 3.444 5.466 4.83.764.33 1.36.527 1.825.674.767.244 1.465.21 2.017.127.615-.092 1.893-.774 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.134-.293-.214-.613-.374Z" />
      </svg>
    </a>
  );
}
