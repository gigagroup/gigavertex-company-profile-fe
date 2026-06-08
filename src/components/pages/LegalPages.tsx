"use client";

import { LegalDocumentSection } from "@/components/sections/LegalDocumentSection";
import { useI18n } from "@/i18n/context";

type LegalPageKey = "termsOfService" | "privacyPolicy" | "refundPolicy";

function LegalPage({ documentKey }: { documentKey: LegalPageKey }) {
  const { content } = useI18n();
  const document = content.legal[documentKey];

  return <LegalDocumentSection document={document} />;
}

export function TermsOfServicePage() {
  return <LegalPage documentKey="termsOfService" />;
}

export function PrivacyPolicyPage() {
  return <LegalPage documentKey="privacyPolicy" />;
}

export function RefundPolicyPage() {
  return <LegalPage documentKey="refundPolicy" />;
}
