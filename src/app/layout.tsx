import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import Header from "@/components/Header";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin", "cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Reality DNA | Анна Медведева — Новый Интеллект Реальности",
  description:
    "Академия Управления Состоянием. Стабильность и управление реальностью в эпоху AI.",
  icons: {
    icon: "/images/icons/logo-1.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${raleway.variable}`}>
      <body><LanguageProvider><Header />{children}</LanguageProvider></body>
    </html>
  );
}
