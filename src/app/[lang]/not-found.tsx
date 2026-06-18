import type { Metadata } from 'next';
import Link from 'next/link';

/**
 * Кастомная страница 404.
 *  - App Router отдаёт реальный HTTP 404 для этого файла;
 *  - noindex (страница ошибки не должна попадать в индекс);
 *  - НЕ редиректит автоматически — пользователь сам выбирает, куда перейти;
 *  - даёт понятное сообщение + ссылки на ключевые разделы.
 * Глобальный <Header/> приходит из root layout, поэтому навигация доступна.
 */
export const metadata: Metadata = {
  title: { absolute: 'Страница не найдена (404) — Reality DNA' },
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="notfound">
      <div className="notfound__inner">
        <p className="notfound__code" aria-hidden="true">404</p>
        <h1 className="notfound__title">Страница не найдена</h1>
        <p className="notfound__text">
          Возможно, ссылка устарела или адрес введён с ошибкой. Вернитесь на
          главную или перейдите к обучению и консультациям.
        </p>
        <div className="notfound__links">
          <Link href="/" className="notfound__btn notfound__btn--primary">
            На главную
          </Link>
          <Link href="/academy" className="notfound__btn">
            Академия Reality DNA
          </Link>
          <Link href="/consultation" className="notfound__btn">
            Консультация
          </Link>
        </div>
      </div>
    </main>
  );
}
