'use client';
import Link from 'next/link';
import { useTranslation } from '@/components/LanguageProvider';
import Footer from '@/components/Footer';

/**
 * /thank-you — страница «Спасибо», на которую WayForPay
 * редиректит после успешной оплаты (returnUrl).
 *
 * URL для returnUrl в кнопке WayForPay:
 *   https://annamedvedeva-test.vercel.app/thank-you
 */
export default function ThankYouPage() {
  const { tr } = useTranslation();

  return (
    <main>
      <section className="thanks-section">
        {/* Декоративные «искры» как на других секциях */}
        <div className="thanks-bg" aria-hidden="true" />

        <div className="thanks-content">
          {/* Галочка-чекмарк */}
          <div className="thanks-check" aria-hidden="true">
            <svg width="100%" height="100%" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="38" stroke="#de8b23" strokeWidth="1.5" opacity="0.55" />
              <path
                d="M24 41.5 L35.5 53 L57 30"
                stroke="#de8b23"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>

          <h1 className="thanks-title">{tr('thanks_title')}</h1>
          <p className="thanks-subtitle">{tr('thanks_subtitle')}</p>
          <p className="thanks-body">{tr('thanks_body')}</p>

          <div className="thanks-cta">
            <Link href="/" className="thanks-btn thanks-btn-primary">
              {tr('thanks_cta_home')}
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
