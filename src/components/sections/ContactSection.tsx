"use client";

import { useState } from "react";
import { Send, Mail, Phone, MapPin, Clock } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/constants";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="Kontak"
          title="Hubungi Kami"
          description="Punya pertanyaan atau ingin diskusi project? Tim kami siap membantu Anda."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <AnimateIn variant="left" className="space-y-6 lg:col-span-2">
            {[
              { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
              { icon: Phone, label: "Telepon", value: company.phone, href: `tel:${company.phone}` },
              { icon: MapPin, label: "Alamat", value: company.address },
              { icon: Clock, label: "Jam Operasional", value: "Senin - Jumat, 09:00 - 18:00 WIB" },
            ].map((item, i) => (
              <AnimateIn key={item.label} delay={i * 80} variant="left">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-medium tracking-wider text-zinc-600 uppercase">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-zinc-300 transition-colors hover:text-cyan-400"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-sm text-zinc-300">{item.value}</div>
                  )}
                </div>
              </div>
              </AnimateIn>
            ))}
          </AnimateIn>

          <AnimateIn variant="right" delay={100} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/5 bg-[#111118] p-8"
            >
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <Send className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Pesan Terkirim!</h3>
                  <p className="mt-2 text-sm text-zinc-500">
                    Terima kasih! Tim kami akan menghubungi Anda segera.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-zinc-400">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-cyan-500/50 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-zinc-400">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-cyan-500/50 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="mb-2 block text-sm font-medium text-zinc-400">
                      Subjek
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Konsultasi Project AI"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-cyan-500/50 focus:outline-none"
                    />
                  </div>
                  <div className="mt-6">
                    <label className="mb-2 block text-sm font-medium text-zinc-400">
                      Pesan
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Ceritakan kebutuhan project Anda..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-cyan-500/50 focus:outline-none"
                    />
                  </div>
                  <div className="mt-6">
                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      <Send className="h-4 w-4" />
                      Kirim Pesan
                    </Button>
                  </div>
                </>
              )}
            </form>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
