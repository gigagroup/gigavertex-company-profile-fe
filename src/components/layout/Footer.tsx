import Link from "next/link";
import { Mail, Phone, MapPin, Globe, Share2, MessageCircle, PlayCircle } from "lucide-react";
import { LogoLink } from "@/components/ui/LogoLink";
import { company, navLinks, products } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <LogoLink size="md" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-zinc-600">
              {company.description}
            </p>
            <div className="mt-8 flex gap-2">
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
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-500 transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold tracking-[0.15em] text-zinc-500 uppercase">
              Navigasi
            </h4>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-600 transition-colors hover:text-indigo-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold tracking-[0.15em] text-zinc-500 uppercase">
              Produk
            </h4>
            <ul className="space-y-3.5">
              {products.slice(0, 6).map((product) => (
                <li key={product.name}>
                  <Link
                    href="/products"
                    className="text-sm text-zinc-600 transition-colors hover:text-indigo-600"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold tracking-[0.15em] text-zinc-500 uppercase">
              Kontak
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                <a
                  href={`mailto:${company.email}`}
                  className="text-sm text-zinc-600 transition-colors hover:text-indigo-600"
                >
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                <a
                  href={`tel:${company.phone}`}
                  className="text-sm text-zinc-600 transition-colors hover:text-indigo-600"
                >
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                <span className="text-sm text-zinc-600">{company.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-8 sm:flex-row">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-sm text-zinc-500 transition-colors hover:text-zinc-700">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-zinc-500 transition-colors hover:text-zinc-700">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
