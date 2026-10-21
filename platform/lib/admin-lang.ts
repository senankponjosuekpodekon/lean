import { useSyncExternalStore } from "react";
import { defaultLocale, isLocale, type Locale } from "./i18n";

const LANG_KEY = "velmora-admin-lang";
const LANG_EVENT = "velmora-admin-lang-change";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(LANG_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(LANG_EVENT, callback);
  };
}

function getAdminLang(): Locale {
  const stored = localStorage.getItem(LANG_KEY);
  if (stored && isLocale(stored)) return stored;
  const browser = navigator.language.slice(0, 2);
  return isLocale(browser) ? browser : defaultLocale;
}

export function setAdminLang(lang: Locale) {
  localStorage.setItem(LANG_KEY, lang);
  window.dispatchEvent(new Event(LANG_EVENT));
}

export function useAdminLang(): Locale {
  return useSyncExternalStore(subscribe, getAdminLang, () => defaultLocale);
}
