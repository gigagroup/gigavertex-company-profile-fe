"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { LogoLink } from "@/components/ui/LogoLink";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const linkClass =
  "rounded-lg px-4 py-1 text-[13px] font-medium tracking-wide text-zinc-300 transition-colors hover:bg-white/10 hover:text-white";

const navButtonClass = "py-1.5";

const linkClassMobile =
  "rounded-lg px-4 py-3 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/10 hover:text-white";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
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
    <header className="animate-nav-enter fixed top-0 right-0 left-0 z-50 px-4 pt-3 lg:px-8">
      <div
        className={cn(
          "mx-auto max-w-7xl rounded-xl px-1 py-0.5 transition-all duration-500",
          showDarkBar
            ? "border border-indigo-500/30 bg-zinc-950 shadow-[0_4px_28px_-8px_rgba(0,0,0,0.55)] backdrop-blur-md"
            : "border-transparent bg-transparent shadow-none"
        )}
      >
        <nav className="flex items-center justify-between px-3 py-1.5 lg:px-5">
          <LogoLink />

          <div className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  linkClass,
                  pathname === link.href && "bg-white/10 text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <Button href="/contact" variant="hero-ghost" size="sm" className={navButtonClass}>
              Masuk
            </Button>
            <Button href="/pricing" variant="primary" size="sm" className={navButtonClass}>
              Mulai Sekarang
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
            aria-label="Toggle menu"
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
            <div className="flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    linkClassMobile,
                    pathname === link.href && "bg-white/10 text-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4">
                <Button href="/contact" variant="hero-outline" size="sm">
                  Masuk
                </Button>
                <Button href="/pricing" size="sm">
                  Mulai Sekarang
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
