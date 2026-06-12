import type { Metadata } from 'next';
import AccountClient from '@/components/AccountClient';

/**
 * /account — личный кабинет (заглушка). Закрыт от индексации: это приватная
 * зона за «авторизацией», в robots.txt путь /account уже в disallow, здесь
 * дополнительно ставим noindex на уровне страницы.
 */
export const metadata: Metadata = {
  title: 'Личный кабинет',
  robots: { index: false, follow: false },
};

export default function AccountPage() {
  return <AccountClient />;
}
