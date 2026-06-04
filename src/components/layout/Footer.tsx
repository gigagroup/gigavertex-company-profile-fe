import Link from "next/link";
import { Sparkles, Mail, Phone, MapPin, Globe, Share2, MessageCircle, PlayCircle } from "lucide-react";
import { company, navLinks, products } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#060609]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div>
                <span className="text-sm font-bold text-white">{company.shortName}</span>
                <span className="block text-[10px] tracking-widest text-zinc-500 uppercase">
                  Technology
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              {company.description}
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Globe, href: company.social.linkedin, label: "LinkedIn" },
                { icon: Share2, href: company.social.instagram, label: "Instagram" },
                { icon: MessageCircle, href: company.social.twitter, label: "Twitter" },
                { icon: PlayCircle, href: company.social.youtube, label: "YouTube" },
              ].map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 bg-white/5 text-zinc-500 transition-all hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Navigasi</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 transition-colors hover:text-cyan-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Produk</h4>
            <ul className="space-y-3">
              {products.slice(0, 6).map((product) => (
                <li key={product.name}>
                  <Link
                    href="/products"
                    className="text-sm text-zinc-500 transition-colors hover:text-cyan-400"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                <a
                  href={`mailto:${company.email}`}
                  className="text-sm text-zinc-500 transition-colors hover:text-cyan-400"
                >
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                <a
                  href={`tel:${company.phone}`}
                  className="text-sm text-zinc-500 transition-colors hover:text-cyan-400"
                >
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                <span className="text-sm text-zinc-500">{company.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-zinc-600">
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-zinc-600 transition-colors hover:text-zinc-400">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-zinc-600 transition-colors hover:text-zinc-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
