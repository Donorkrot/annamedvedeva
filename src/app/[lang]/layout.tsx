import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import Header from "@/components/Header";
import { SITE, absUrl, altLanguages, canonicalFor } from "@/lib/seo";
import { LOCALES, HTML_LANG, OG_LOCALE } from "@/lib/i18n";
import type { Lang } from "@/lib/translations";

// Google Analytics 4 — Measurement ID (поток данных)
const GA_MEASUREMENT_ID = "G-KGZ17SHLEL";

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

// Все три локали пре-рендерятся статически.
export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

// metadataBase нужен Next.js для резолва относительных URL в OG/canonical.
// Без него Next выводит warning при сборке. Используем production-домен.
// generateMetadata — чтобы canonical/hreflang/og:locale зависели от локали.
export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const { lang } = params;
  return {
  metadataBase: new URL(SITE.url),
  // Title-шаблон: на main используется default; per-page title подставляется
  // через `title.template` (см. per-route layout.tsx).
  title: {
    default: SITE.baseTitle,
    template: `%s | ${SITE.brand}`,
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  authors: [{ name: SITE.authorName, url: SITE.url }],
  creator: SITE.authorName,
  publisher: SITE.brand,
  category: 'health',

  // Canonical + hreflang для главной (per-route layouts перебивают)
  alternates: {
    canonical: canonicalFor('/', lang),
    languages: altLanguages('/'),
  },

  // Open Graph — для Facebook, LinkedIn, Telegram превью
  openGraph: {
    type: 'website',
    locale: OG_LOCALE[lang],
    alternateLocale: [...SITE.alternateLocales],
    url: canonicalFor('/', lang),
    siteName: SITE.brand,
    title: SITE.baseTitle,
    description: SITE.description,
    images: [
      {
        url: absUrl(SITE.ogImage),
        width: 1200,
        height: 630,
        alt: `${SITE.brand} — ${SITE.authorName}`,
      },
    ],
  },

  // Twitter Cards — для X / Telegram preview
  twitter: {
    card: 'summary_large_image',
    title: SITE.baseTitle,
    description: SITE.description,
    images: [absUrl(SITE.ogImage)],
    creator: '@medvedieva_anna',
  },

  // robots — разрешаем индексацию всего сайта
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  // Иконки и favicon
  icons: {
    icon: [
      { url: '/images/icons/logo-1.png', type: 'image/png' },
    ],
    apple: '/images/icons/logo-1.png',
  },

  // formatDetection — отключаем авто-парсинг телефонов в iOS Safari
  // (мы сами форматируем номера и оборачиваем в tel: ссылки где нужно)
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  // verification — meta-теги подтверждения прав в Google Search Console и
  // Яндекс.Вебмастере. Коды задаются в SITE.verification (src/lib/seo.ts);
  // пустые значения не выводятся (|| undefined).
  verification: {
    google: SITE.verification.google || undefined,
    yandex: SITE.verification.yandex || undefined,
  },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // maximumScale removed — WCAG 1.4.4 requires that users can pinch-zoom for
  // reflow. The fluid vw layout already gives identical proportions on every
  // viewport, so there's no design reason to lock zoom. Auto-zoom on input
  // focus is prevented by setting all input font-size to 16px, not by
  // capping max scale.
  viewportFit: "cover",
  // Цвет адресной строки на мобильных браузерах (соответствует hero bg)
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#332000" },
    { media: "(prefers-color-scheme: dark)", color: "#1a0d05" },
  ],
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Lang };
}) {
  const lang = params.lang;
  return (
    <html
      lang={HTML_LANG[lang] ?? 'ru'}
      data-lang={lang}
      className={`${cormorant.variable} ${raleway.variable}`}
    >
      <head>
        {/* Mobile is now truly fluid: every px value inside
            `@media (max-width: 768px)` was converted to vw relative to the
            375 Figma base (scripts/px-to-vw.mjs). The dynamic viewport meta
            lock is no longer needed — content scales by CSS units alone, so
            iPhone 16 / Pro Max / small Android all see identical proportions
            without depending on viewport-meta tricks. */}
      </head>
      <body>
        <LanguageProvider lang={lang}><Header />{children}</LanguageProvider>

        {/* Google Analytics 4 (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
