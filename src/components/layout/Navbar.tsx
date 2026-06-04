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
  "rounded-lg px-4 py-2 text-[13px] font-medium tracking-wide text-zinc-300 transition-colors hover:bg-white/10 hover:text-white";

const linkClassMobile =
  "rounded-lg px-4 py-3 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/10 hover:text-white";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";
  const onHero = isHome && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="animate-nav-enter fixed top-0 right-0 left-0 z-50 px-4 pt-4 lg:px-8">
      <div
        className={cn(
          "mx-auto max-w-7xl rounded-2xl px-2 py-2 transition-all duration-500",
          onHero ? "navbar-dark-overlay" : "navbar-dark"
        )}
      >
        <nav className="flex items-center justify-between px-4 py-3 lg:px-6">
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
            <Button href="/contact" variant="hero-ghost" size="sm">
              Masuk
            </Button>
            <Button href="/pricing" variant="primary" size="sm">
              Mulai Sekarang
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2.5 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {isOpen && (
          <div className="rounded-b-2xl border-t border-white/10 px-4 py-4 lg:hidden">
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
