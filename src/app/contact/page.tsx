import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi PT Giga Vertex Technology — email, telepon, atau kirim pesan langsung melalui form kontak.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badge="Kontak"
        title="Hubungi Kami"
        description="Punya pertanyaan atau ingin diskusi project? Tim kami siap membantu Anda."
      />
      <ContactSection showHeader={false} />
      <CTASection />
    </>
  );
}
