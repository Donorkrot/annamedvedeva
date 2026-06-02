/**
 * Проверка номера телефона. Люди вводят номер по-разному — с кодом страны и без.
 * Принимаем украинские форматы (точная длина, чтобы не пропускать неполные номера):
 *   +380 67 123 45 67  → 12 цифр, начинается с 380
 *   +38 (067) 123-45-67 → тоже нормализуется в 380… (12 цифр)
 *   067 123 45 67      → 10 цифр, начинается с 0
 *   67 123 45 67       → 9 цифр (без кода и без 0)
 * Для явных международных номеров (введён «+», но не украинский) — диапазон E.164 (8–15 цифр).
 */
export function isValidPhone(raw: string): boolean {
  const trimmed = (raw || '').trim();
  const hasPlus = trimmed.startsWith('+');
  const digits = trimmed.replace(/\D/g, '');
  if (!digits) return false;

  if (digits.startsWith('380')) return digits.length === 12; // с кодом 380
  if (digits.startsWith('0')) return digits.length === 10;   // местный формат с 0
  if (!hasPlus && digits.length === 9) return true;          // голый номер абонента UA

  if (hasPlus) return digits.length >= 8 && digits.length <= 15; // международный
  return false;
}
