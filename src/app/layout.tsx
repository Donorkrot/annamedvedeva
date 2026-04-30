import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import Header from "@/components/Header";

// Weight lists were grepped against globals.css — drop unused weights so the
// browser doesn't pull woff2 files it never renders. Audit:
//   --font-heading (Cormorant) actual uses: 300, 400, 500, 600
//   --font-body    (Raleway)   actual uses: 200, 300, 400, 500, 600
// Re-audit before adding new weighty styles.
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin", "cyrillic"],
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
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
  // maximumScale removed — WCAG 1.4.4 requires that users can pinch-zoom for
  // reflow. The fluid vw layout already gives identical proportions on every
  // viewport, so there's no design reason to lock zoom. Auto-zoom on input
  // focus is prevented by setting all input font-size to 16px, not by
  // capping max scale.
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${raleway.variable}`}>
      <head>
        {/* Mobile is now truly fluid: every px value inside
            `@media (max-width: 768px)` was converted to vw relative to the
            375 Figma base (scripts/px-to-vw.mjs). The dynamic viewport meta
            lock is no longer needed — content scales by CSS units alone, so
            iPhone 16 / Pro Max / small Android all see identical proportions
            without depending on viewport-meta tricks. */}
      </head>
      <body><LanguageProvider><Header />{children}</LanguageProvider></body>
    </html>
  );
}
