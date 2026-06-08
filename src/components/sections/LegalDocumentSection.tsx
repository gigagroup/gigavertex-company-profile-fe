"use client";

import { LocalizedLink } from "@/components/ui/LocalizedLink";
import { useI18n } from "@/i18n/context";
import type { LegalDocument } from "@/lib/legal";

type LegalDocumentSectionProps = {
  document: LegalDocument;
};

export function LegalDocumentSection({ document }: LegalDocumentSectionProps) {
  const { content } = useI18n();
  const { legal: legalUi } = content.ui;
  const { meta, sections } = document;

  return (
    <section className="pb-20 pt-36 lg:pb-28 lg:pt-40">
      <div className="site-container">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.14em] text-indigo-600 uppercase">
            {legalUi.lastUpdated}: {meta.lastUpdated}
          </p>
          <h1 className="font-display mt-4 text-4xl font-normal tracking-tight text-zinc-900 sm:text-5xl">
            {meta.title}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-zinc-600">{meta.intro}</p>

          <nav
            aria-label="Legal document links"
            className="mt-8 flex flex-wrap gap-x-4 gap-y-2 border-b border-zinc-200 pb-6 text-sm"
          >
            <LocalizedLink
              href="/legal/terms-of-service"
              className="text-zinc-500 transition-colors hover:text-indigo-600"
            >
              {legalUi.termsOfService}
            </LocalizedLink>
            <LocalizedLink
              href="/legal/privacy-policy"
              className="text-zinc-500 transition-colors hover:text-indigo-600"
            >
              {legalUi.privacyPolicy}
            </LocalizedLink>
            <LocalizedLink
              href="/legal/refund-policy"
              className="text-zinc-500 transition-colors hover:text-indigo-600"
            >
              {legalUi.refundPolicy}
            </LocalizedLink>
          </nav>

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-32">
                <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
                  {section.title}
                </h2>

                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.items && (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 sm:text-base">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.subsections?.map((subsection, index) => (
                  <div key={`${section.id}-${index}`} className="mt-5">
                    {subsection.title && (
                      <h3 className="text-base font-semibold text-zinc-800">
                        {subsection.title}
                      </h3>
                    )}
                    {subsection.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                    {subsection.items && (
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 sm:text-base">
                        {subsection.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
