"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { LocalizedLink } from "@/components/ui/LocalizedLink";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { LogoLink } from "@/components/ui/LogoLink";
import { Button } from "@/components/ui/Button";
import { useI18n } from "@/i18n/context";
import { pathnameWithoutLocale } from "@/i18n/utils";
import { cn } from "@/lib/utils";

const linkClass =
  "shrink-0 whitespace-nowrap rounded-lg px-2 py-1 text-[13px] font-medium text-zinc-300 transition-colors hover:bg-white/10 hover:text-white lg:px-2.5 xl:px-3";

const navButtonClass = "shrink-0 whitespace-nowrap py-1.5 px-4 text-[13px]";

const linkClassMobile =
  "rounded-lg px-4 py-3 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/10 hover:text-white";

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

  const showDarkBar = !isHome || pastHero;

  return (
    <header className="animate-nav-enter fixed top-0 right-0 left-0 z-50 px-3 pt-3 sm:px-4 xl:px-6">
      <div
        className={cn(
          "mx-auto w-full max-w-[100rem] rounded-xl px-1 py-0.5 transition-all duration-500",
          showDarkBar
            ? "border border-indigo-500/30 bg-zinc-950 shadow-[0_4px_28px_-8px_rgba(0,0,0,0.55)] backdrop-blur-md"
            : "border-transparent bg-transparent shadow-none"
        )}
      >
        <nav className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 px-3 py-1.5 xl:px-4">
          <LogoLink className="shrink-0 [&_img]:max-h-8 [&_img]:min-w-0 [&_img]:max-w-[128px] xl:[&_img]:max-h-9 xl:[&_img]:max-w-[155px]" />

          <div className="hidden justify-center overflow-x-auto lg:flex [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex flex-nowrap items-center">
              {constants.navLinks.map((link) => (
                <LocalizedLink
                  key={link.href}
                  href={link.href}
                  className={cn(
                    linkClass,
                    path === link.href && "bg-white/10 text-white"
                  )}
                >
                  {link.label}
                </LocalizedLink>
              ))}
            </div>
          </div>

          <div className="hidden shrink-0 items-center justify-end gap-1.5 lg:flex">
            <LanguageSwitcher locale={locale} />
            <Button href="/contact" variant="hero-ghost" size="sm" className={navButtonClass}>
              {ui.navbar.signIn}
            </Button>
            <Button href="/contact" variant="primary" size="sm" className={navButtonClass}>
              {ui.navbar.getStarted}
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="col-start-3 rounded-lg p-2 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
            aria-label={ui.common.toggleMenu}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {isOpen && (
          <div
            className={cn(
              "rounded-b-2xl px-4 py-4 lg:hidden",
              showDarkBar
                ? "border-t border-white/10"
                : "border-t border-white/20 bg-black/50 backdrop-blur-md"
            )}
          >
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
              <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4">
                <Button href="/contact" variant="hero-outline" size="sm">
                  {ui.navbar.signIn}
                </Button>
                <Button href="/contact" size="sm">
                  {ui.navbar.getStarted}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
