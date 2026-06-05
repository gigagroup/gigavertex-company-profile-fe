"use client";

import { Megaphone, Music2, Search } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionFooterLink } from "@/components/ui/SectionFooterLink";
import { useI18n } from "@/i18n/context";

const icons: Record<string, LucideIcon> = {
  meta: Megaphone,
  tiktok: Music2,
  google: Search,
};

export function AdsStrategyHomePreviewSection() {
  const { content } = useI18n();
  const { adsStrategyMeta, adsChannels } = content.ads;
  const { ads: adsUi } = content.ui;

  return (
    <section className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge={adsStrategyMeta.badge}
          title={adsUi.homeTitle}
          description={adsUi.homeDesc}
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {adsChannels.map((channel, i) => {
            const Icon = icons[channel.id] ?? Megaphone;
            return (
              <AnimateIn key={channel.id} delay={i * 70} variant="scale">
                <div className="glass-card h-full rounded-2xl p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-indigo-50 text-indigo-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-zinc-900">{channel.name}</h3>
                  <p className="mt-1 text-xs text-indigo-600">{channel.platform}</p>
                  <p className="mt-1 text-[10px] font-medium tracking-wide text-zinc-500 uppercase">
                    {channel.phase}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {channel.summary}
                  </p>
                </div>
              </AnimateIn>
            );
          })}
        </div>

        <SectionFooterLink href="/strategi-iklan" label={adsUi.detailLink} />
      </div>
    </section>
  );
}
