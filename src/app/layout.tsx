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
      <head>
        {/* Mobile viewport lock — site is built pixel-perfect at Figma's 375
            base. Fixed `width=375` makes the browser render at 375 logical px
            and natively scale to fit any phone (360–430). More reliable than
            CSS `zoom` which has iOS Safari quirks. Desktop keeps device-width. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var m=document.querySelector('meta[name=viewport]');if(!m){m=document.createElement('meta');m.name='viewport';document.head.appendChild(m);}function set(){var w=window.innerWidth;m.content=w<=768?'width=375, initial-scale='+(w/375).toFixed(4)+', maximum-scale='+(w/375).toFixed(4)+', user-scalable=no':'width=device-width, initial-scale=1, maximum-scale=1';}set();window.addEventListener('resize',set);window.addEventListener('orientationchange',set);})();`,
          }}
        />
      </head>
      <body><LanguageProvider><Header />{children}</LanguageProvider></body>
    </html>
  );
}
