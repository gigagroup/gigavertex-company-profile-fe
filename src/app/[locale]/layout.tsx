import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { I18nProvider } from "@/i18n/context";
import { isLocale, type Locale } from "@/i18n/config";
import { getContent } from "@/i18n/get-content";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const content = getContent(locale);

  return (
    <I18nProvider locale={locale} content={content}>
      <Navbar />
      <main className="min-w-0 flex-1 overflow-x-hidden">{children}</main>
      <Footer />
    </I18nProvider>
  );
}
