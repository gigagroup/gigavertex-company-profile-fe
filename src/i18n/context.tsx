"use client";

import { createContext, useContext, useEffect } from "react";
import type { Locale } from "@/i18n/config";
import type { Content } from "@/i18n/get-content";

type I18nContextValue = {
  locale: Locale;
  content: Content;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  locale,
  content,
  children,
}: {
  locale: Locale;
  content: Content;
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <I18nContext.Provider value={{ locale, content }}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
