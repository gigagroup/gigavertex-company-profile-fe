import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionFooterLink } from "@/components/ui/SectionFooterLink";
import { company } from "@/lib/constants";

const contactItems = [
  { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
  {
    icon: Phone,
    label: "Telepon / WA",
    value: company.phone,
    href: company.whatsapp,
  },
  { icon: MapPin, label: "Alamat", value: company.address },
  { icon: Clock, label: "Jam Operasional", value: "Senin - Jumat, 09:00 - 18:00 WIB" },
];

export function ContactHomePreviewSection() {
  return (
    <section className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="Kontak"
          title="Hubungi Kami"
          description="Punya pertanyaan, ingin demo produk, atau diskusi kerjasama? Tim kami siap membantu."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {contactItems.map((item, i) => (
            <AnimateIn key={item.label} delay={i * 50} variant="scale">
              <div className="glass-card flex gap-4 rounded-2xl p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-indigo-50 text-indigo-600">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-medium tracking-wider text-zinc-500 uppercase">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-1 block text-sm text-zinc-800 transition-colors hover:text-indigo-600"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="mt-1 text-sm text-zinc-800">{item.value}</div>
                  )}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={200} className="mt-8 flex justify-center">
          <Link
            href="/contact"
            className="btn-primary-glow inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium text-white"
          >
            Kirim pesan / formulir kontak
            <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimateIn>

        <SectionFooterLink href="/contact" label="Ke halaman kontak" />
      </div>
    </section>
  );
}
