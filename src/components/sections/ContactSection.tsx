"use client";

import { useState } from "react";
import { Send, Mail, Phone, MapPin, Clock } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { useI18n } from "@/i18n/context";

type ContactSectionProps = {
  showHeader?: boolean;
};

export function ContactSection({ showHeader = true }: ContactSectionProps) {
  const { content } = useI18n();
  const { company } = content.constants;
  const { contact } = content.ui;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-spacing relative">
      <div className="site-container">
        {showHeader && (
          <SectionHeader
            badge={contact.badge}
            title={contact.title}
            description={contact.description}
          />
        )}

        <div className="grid gap-12 lg:grid-cols-5">
          <AnimateIn variant="left" className="space-y-6 lg:col-span-2">
            {[
              { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
              {
                icon: Phone,
                label: contact.phoneLabel,
                value: company.phone,
                href: company.whatsapp,
              },
              { icon: MapPin, label: "Alamat", value: company.address },
              { icon: Clock, label: contact.hoursLabel, value: contact.hoursValue },
            ].map((item, i) => (
              <AnimateIn key={item.label} delay={i * 80} variant="left">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-indigo-50 text-indigo-600">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-medium tracking-wider text-zinc-600 uppercase">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-zinc-700 transition-colors hover:text-indigo-600"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-sm text-zinc-700">{item.value}</div>
                  )}
                </div>
              </div>
              </AnimateIn>
            ))}
          </AnimateIn>

          <AnimateIn variant="right" delay={100} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-8 lg:p-10"
            >
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <Send className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900">{contact.sentTitle}</h3>
                  <p className="mt-2 text-sm text-zinc-500">{contact.sentDesc}</p>
                </div>
              ) : (
                <>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-zinc-600">
                        {contact.fullName}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-sm text-zinc-900 placeholder:text-zinc-600 transition-colors focus:border-indigo-500/40 focus:outline-none focus:ring-1 focus:ring-indigo-500/20"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-zinc-600">
                        {contact.email}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-sm text-zinc-900 placeholder:text-zinc-600 transition-colors focus:border-indigo-500/40 focus:outline-none focus:ring-1 focus:ring-indigo-500/20"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="mb-2 block text-sm font-medium text-zinc-600">
                      {contact.subject}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={contact.subjectPlaceholder}
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-sm text-zinc-900 placeholder:text-zinc-600 transition-colors focus:border-indigo-500/40 focus:outline-none focus:ring-1 focus:ring-indigo-500/20"
                    />
                  </div>
                  <div className="mt-6">
                    <label className="mb-2 block text-sm font-medium text-zinc-600">
                      {contact.message}
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder={contact.messagePlaceholder}
                      className="w-full resize-none rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-sm text-zinc-900 placeholder:text-zinc-600 transition-colors focus:border-indigo-500/40 focus:outline-none focus:ring-1 focus:ring-indigo-500/20"
                    />
                  </div>
                  <div className="mt-6">
                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      <Send className="h-4 w-4" />
                      {contact.send}
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
