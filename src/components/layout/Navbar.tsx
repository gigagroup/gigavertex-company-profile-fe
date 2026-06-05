"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { LocalizedLink } from "@/components/ui/LocalizedLink";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { LogoLink } from "@/components/ui/LogoLink";
import { useI18n } from "@/i18n/context";
import { pathnameWithoutLocale } from "@/i18n/utils";
import { cn } from "@/lib/utils";

const linkClass =
  "rounded-lg px-2 py-1 text-xs font-medium text-zinc-300 transition-colors hover:bg-white/10 hover:text-white xl:px-2.5 xl:text-[13px]";

const linkClassMobile =
  "rounded-lg px-4 py-3 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/10 hover:text-white";

const darkBarClass =
  "border border-indigo-500/30 bg-zinc-950 shadow-[0_4px_28px_-8px_rgba(0,0,0,0.55)] backdrop-blur-md";

export function Navbar() {
  const { locale, content } = useI18n();
  const { constants, ui } = content;
  const pathname = usePathname();
  const path = pathnameWithoutLocale(pathname);
  const isHome = path === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [pastHero, setPastHero] = useState(!isHome);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isHome) {
      setPastHero(true);
      return;
    }

    const hero = document.getElementById("home-hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [isHome, pathname]);

  const showDarkBar = !isHome || pastHero || isOpen;

  return (
    <header className="animate-nav-enter fixed top-0 right-0 left-0 z-50 pt-3">
      <div className="site-container">
        <div
          className={cn(
            "min-w-0 rounded-xl px-2 py-0.5 transition-all duration-500 sm:px-3",
            showDarkBar ? darkBarClass : "border-transparent bg-transparent shadow-none"
          )}
        >
          <nav className="flex min-w-0 items-center gap-2 py-1.5 lg:gap-3">
            <LogoLink className="shrink-0 [&_img]:max-h-8 [&_img]:min-w-0 [&_img]:max-w-[100px] xl:[&_img]:max-h-9 xl:[&_img]:max-w-[140px]" />

            <div className="hidden min-w-0 flex-1 lg:block">
              <ul className="flex flex-wrap items-center justify-center gap-x-0.5 gap-y-1 xl:gap-x-1">
                {constants.navLinks.map((link) => (
                  <li key={link.href}>
                    <LocalizedLink
                      href={link.href}
                      className={cn(
                        linkClass,
                        "inline-block whitespace-nowrap",
                        path === link.href && "bg-white/10 text-white"
                      )}
                    >
                      {link.label}
                    </LocalizedLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden shrink-0 lg:flex">
              <LanguageSwitcher locale={locale} />
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-auto shrink-0 rounded-lg p-2 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
              aria-label={ui.common.toggleMenu}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>

          {isOpen && (
            <div className="rounded-b-2xl border-t border-white/10 bg-zinc-950 px-3 py-4 sm:px-4 lg:hidden">
              <div className="mb-4 flex justify-end">
                <LanguageSwitcher locale={locale} />
              </div>
              <div className="flex flex-col gap-0.5">
                {constants.navLinks.map((link) => (
                  <LocalizedLink
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      linkClassMobile,
                      path === link.href && "bg-white/10 text-white"
                    )}
                  >
                    {link.label}
                  </LocalizedLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
