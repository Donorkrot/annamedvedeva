'use client';
import { useEffect, useState } from 'react';

/**
 * Клиентская заглушка авторизации.
 *
 * На проекте нет auth-бэкенда (есть только /api/lead и /api/wayforpay), поэтому
 * «вход/регистрация» реализованы как фронтовый stub: сессия пользователя живёт
 * в localStorage. Этого достаточно для первичной заглушки личного кабинета —
 * когда появится реальный бэкенд, нужно будет заменить только тело функций
 * setUser/getUser/logout и handle-обработчики в AuthModal.
 */

export interface AuthUser {
  name: string;
  email: string;
  /** Метка времени регистрации/входа (ms). Заполняется через args/Date снаружи нельзя — ставим в браузере. */
  since?: number;
}

const KEY = 'rdna_user';
const EVENT = 'rdna-auth-change';

export function getUser(): AuthUser | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as AuthUser) : null;
  } catch {
    return null;
  }
}

export function setUser(user: AuthUser | null): void {
  if (typeof window === 'undefined') return;
  try {
    if (user) localStorage.setItem(KEY, JSON.stringify(user));
    else localStorage.removeItem(KEY);
  } catch {
    /* приватный режим / переполнение — молча игнорируем */
  }
  window.dispatchEvent(new Event(EVENT));
}

export function logout(): void {
  setUser(null);
}

/**
 * React-хук состояния авторизации. `ready` становится true после первого
 * чтения localStorage на клиенте — до этого не редиректим и не рендерим
 * контент, чтобы не мигало при гидратации.
 */
export function useAuth(): { user: AuthUser | null; ready: boolean } {
  const [user, setUserState] = useState<AuthUser | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const sync = () => setUserState(getUser());
    sync();
    setReady(true);
    window.addEventListener(EVENT, sync);
    window.addEventListener('storage', sync); // синхронизация между вкладками
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  return { user, ready };
}
