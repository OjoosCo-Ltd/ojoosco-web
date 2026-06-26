import type { Metadata } from "next";
import { Be_Vietnam_Pro, Inter, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ojoosco | Human-Centred Technology Ventures",
  description:
    "Ojoosco builds technology ventures designed around human intent, empathy, and meaningful connection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${beVietnam.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
