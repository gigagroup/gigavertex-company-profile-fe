import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import { company } from "@/lib/constants";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: `${company.shortName} — ${company.tagline}`,
    template: `%s | ${company.shortName}`,
  },
  description: company.description,
  keywords: [
    "AI",
    "artificial intelligence",
    "penyedia produk AI",
    "SaaS platform",
    "Giga Vertex",
    "video generation",
    "photo generation",
    "SaaS",
    "Indonesia",
  ],
  icons: {
    icon: [{ url: "/assets/images/logo-gigavertex-favicon.png", type: "image/png" }],
    shortcut: "/assets/images/logo-gigavertex-favicon.png",
    apple: "/assets/images/logo-gigavertex-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${jakarta.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-zinc-900">
        <div
          className="pointer-events-none fixed inset-0 -z-10"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.08), transparent), radial-gradient(ellipse 60% 40% at 100% 0%, rgba(139,92,246,0.05), transparent), linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)",
          }}
        />
        {children}
      </body>
    </html>
  );
}
