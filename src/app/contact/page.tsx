import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi PT Tera Vertex Technology — email, telepon, atau kirim pesan langsung melalui form kontak.",
};

export default function ContactPage() {
  return <ContactSection />;
}
