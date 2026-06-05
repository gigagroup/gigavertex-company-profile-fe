"use client";

import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import { type Locale, localeNames, locales } from "@/i18n/config";
import { switchLocalePath } from "@/i18n/utils";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  locale: Locale;
  className?: string;
};

export function LanguageSwitcher({ locale, className }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleSwitch = (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    router.push(switchLocalePath(pathname, nextLocale));
  };

  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-lg border border-white/15 bg-white/5 p-0.5",
        className
      )}
      role="group"
      aria-label="Language switcher"
    >
      <Globe className="ml-1.5 h-3.5 w-3.5 text-zinc-400" aria-hidden />
      {locales.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => handleSwitch(item)}
          className={cn(
            "rounded-md px-2 py-1 text-[11px] font-semibold tracking-wide transition-colors",
            item === locale
              ? "bg-white/15 text-white"
              : "text-zinc-400 hover:bg-white/10 hover:text-white"
          )}
          aria-pressed={item === locale}
        >
          {localeNames[item]}
        </button>
      ))}
    </div>
  );
}
