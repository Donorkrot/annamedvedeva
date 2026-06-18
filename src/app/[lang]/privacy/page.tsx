'use client';
import { useEffect } from "react";
import Image from "next/image";
import { useTranslation } from '@/components/LanguageProvider';
import Footer from '@/components/Footer';

const ASSET_VERSION = '20260420-privacy';
const v = (p: string) => `${p}?v=${ASSET_VERSION}`;

function privacyPath(lang: string): string {
  const langDir = lang === 'ru' ? '' : `/${lang}`;
  return v(`/images/backgrounds/privacy${langDir}/privacy.jpg`);
}

function PrivacyRu() {
  return (
    <>
      <h1 className="legal-mobile-title">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</h1>
      <div className="legal-mobile-body">
        <h2>1. Общие положения</h2>
        <p>Настоящая Политика конфиденциальности регулирует обработку персональных данных пользователя при использовании сайта и услуг.</p>
        <p>Оператором персональных данных является:</p>
        <p>ФЛП Медведева Анна Анатольевна (3143101707) зарегистрированный в Украине.</p>
        <p>Контактные данные: admin@anna-medvedeva.space</p>
        <p>Используя сайт и услуги, пользователь соглашается с данной Политикой.</p>

        <h2>2. Какие данные собираются</h2>
        <p>Оператор может собирать:</p>
        <ul>
          <li>имя</li>
          <li>email</li>
          <li>номер телефона</li>
          <li>аккаунты в Telegram / Instagram</li>
          <li>платежные данные (через сторонние сервисы)</li>
          <li>переписку с пользователем</li>
          <li>аудио/голосовые сообщения (в рамках оказания услуг)</li>
          <li>видео/фото (при участии в групповых процессах и мероприятиях — с согласия)</li>
        </ul>

        <h2>3. Цели обработки данных</h2>
        <p>Данные используются для:</p>
        <ul>
          <li>оказания услуг</li>
          <li>связи с пользователем</li>
          <li>обработки оплат</li>
          <li>предоставления доступа к продуктам</li>
          <li>отправки информационных и маркетинговых рассылок</li>
          <li>улучшения качества услуг</li>
        </ul>

        <h2>4. Хранение и защита данных</h2>
        <ul>
          <li>Данные хранятся в электронном виде</li>
          <li>Оператор принимает разумные меры для защиты данных</li>
          <li>Переписка может храниться без ограничения срока</li>
          <li>Записи индивидуальных консультаций не хранятся после передачи клиенту</li>
        </ul>

        <h2>5. Передача третьим лицам</h2>
        <p>Данные могут передаваться:</p>
        <ul>
          <li>платёжным системам (WayForPay, PayPal и др.)</li>
          <li>сервисам связи (Zoom, Telegram)</li>
          <li>при необходимости — в рамках закона</li>
        </ul>
        <p>Оператор не продаёт данные третьим лицам.</p>

        <h2>6. Рассылки</h2>
        <p>Пользователь может получать:</p>
        <ul>
          <li>email-рассылки</li>
          <li>уведомления в мессенджерах</li>
        </ul>
        <p>Пользователь может отказаться от рассылки в любой момент.</p>

        <h2>7. Использование отзывов и кейсов</h2>
        <ul>
          <li>Отзывы могут использоваться только с согласия пользователя</li>
          <li>Кейсы используются в обезличенном виде</li>
        </ul>

        <h2>8. Права пользователя</h2>
        <p>Пользователь имеет право:</p>
        <ul>
          <li>запросить доступ к своим данным</li>
          <li>требовать их удаление</li>
          <li>отозвать согласие на обработку</li>
        </ul>

        <h2>9. Изменения политики</h2>
        <p>Оператор имеет право изменять Политику.</p>
        <p>Актуальная версия всегда размещается на сайте.</p>
      </div>
    </>
  );
}

function PrivacyUa() {
  return (
    <>
      <h1 className="legal-mobile-title">ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ</h1>
      <div className="legal-mobile-body">
        <h2>1. Загальні положення</h2>
        <p>Ця Політика конфіденційності регулює обробку персональних даних користувача при використанні сайту та послуг.</p>
        <p>Оператором персональних даних є:</p>
        <p>ФОП Медведєва Ганна Анатоліївна (3143101707), зареєстрований в Україні.</p>
        <p>Контакт: admin@anna-medvedeva.space</p>
        <p>Використовуючи сайт і послуги, користувач надає згоду на обробку своїх персональних даних відповідно до цієї Політики.</p>

        <h2>2. Які дані збираються</h2>
        <p>Оператор може збирати такі персональні дані:</p>
        <ul>
          <li>ім&rsquo;я</li>
          <li>email</li>
          <li>номер телефону</li>
          <li>акаунти в Telegram / Instagram</li>
          <li>платіжні дані (через сторонні платіжні сервіси)</li>
          <li>листування з користувачем</li>
          <li>аудіо- та голосові повідомлення (в рамках надання послуг)</li>
          <li>відео та фото (при участі у групових процесах і заходах — за згодою користувача)</li>
        </ul>

        <h2>3. Цілі обробки даних</h2>
        <p>Персональні дані використовуються для:</p>
        <ul>
          <li>надання послуг</li>
          <li>комунікації з користувачем</li>
          <li>обробки платежів</li>
          <li>надання доступу до програм і матеріалів</li>
          <li>здійснення інформаційних та маркетингових розсилок</li>
          <li>покращення якості послуг</li>
        </ul>

        <h2>4. Зберігання та захист даних</h2>
        <ul>
          <li>Дані зберігаються в електронному вигляді</li>
          <li>Оператор вживає розумних організаційних і технічних заходів для захисту персональних даних</li>
          <li>Листування з користувачем може зберігатися без обмеження строку</li>
          <li>Записи індивідуальних консультацій не зберігаються після їх передачі користувачу</li>
        </ul>

        <h2>5. Передача даних третім особам</h2>
        <p>Персональні дані можуть передаватися:</p>
        <ul>
          <li>платіжним системам (WayForPay, PayPal та ін.)</li>
          <li>сервісам зв&rsquo;язку (Zoom, Telegram тощо)</li>
          <li>у випадках, передбачених законодавством</li>
        </ul>
        <p>Оператор не здійснює продаж або передачу персональних даних третім особам з маркетинговою метою.</p>

        <h2>6. Розсилки</h2>
        <p>Користувач може отримувати:</p>
        <ul>
          <li>email-розсилки</li>
          <li>повідомлення в месенджерах</li>
        </ul>
        <p>Користувач має право відмовитися від розсилок у будь-який момент.</p>

        <h2>7. Використання відгуків і кейсів</h2>
        <ul>
          <li>Відгуки можуть використовуватися лише за згодою користувача</li>
          <li>Кейси використовуються в анонімному вигляді без ідентифікації особи</li>
        </ul>

        <h2>8. Права користувача</h2>
        <p>Користувач має право:</p>
        <ul>
          <li>отримати інформацію про свої персональні дані</li>
          <li>вимагати їх зміну або видалення</li>
          <li>відкликати згоду на обробку даних</li>
        </ul>

        <h2>9. Зміни політики</h2>
        <p>Оператор має право змінювати цю Політику конфіденційності.</p>
        <p>Актуальна версія завжди розміщується на сайті.</p>
      </div>
    </>
  );
}

function PrivacyEn() {
  return (
    <>
      <h1 className="legal-mobile-title">PRIVACY POLICY</h1>
      <div className="legal-mobile-body">
        <h2>1. General Provisions</h2>
        <p>This Privacy Policy governs the processing of the User&rsquo;s personal data when using the website and services.</p>
        <p>The Data Controller:</p>
        <p>Sole Proprietor (FOP) Hanna Medvedieva Anatoliivna (3143101707), registered in Ukraine.</p>
        <p>Contact: admin@anna-medvedeva.space</p>
        <p>By using the website and services, the User consents to the processing of their personal data in accordance with this Policy.</p>

        <h2>2. Data Collected</h2>
        <p>The Data Controller may collect the following personal data:</p>
        <ul>
          <li>name</li>
          <li>email address</li>
          <li>phone number</li>
          <li>Telegram / Instagram accounts</li>
          <li>payment details (via third-party payment services)</li>
          <li>correspondence with the User</li>
          <li>audio and voice messages (within the scope of service provision)</li>
          <li>video and photos (when participating in group sessions and events — with the User&rsquo;s consent)</li>
        </ul>

        <h2>3. Purpose of Data Processing</h2>
        <p>Personal data is used for:</p>
        <ul>
          <li>providing services</li>
          <li>communicating with the User</li>
          <li>processing payments</li>
          <li>granting access to programs and materials</li>
          <li>sending informational and marketing communications</li>
          <li>improving service quality</li>
        </ul>

        <h2>4. Data Storage and Protection</h2>
        <ul>
          <li>Data is stored electronically</li>
          <li>The Data Controller takes reasonable organizational and technical measures to protect personal data</li>
          <li>Correspondence with the User may be stored indefinitely</li>
          <li>Recordings of individual consultations are not stored after being delivered to the User</li>
        </ul>

        <h2>5. Transfer of Data to Third Parties</h2>
        <p>Personal data may be shared with:</p>
        <ul>
          <li>payment systems (WayForPay, PayPal, etc.)</li>
          <li>service providers used to deliver services (Zoom, Telegram, etc.)</li>
          <li>in cases provided for by applicable law</li>
        </ul>
        <p>The Data Controller does not sell or transfer personal data to third parties for marketing purposes.</p>

        <h2>6. Communications</h2>
        <p>The User may receive:</p>
        <ul>
          <li>email newsletters</li>
          <li>messages via messengers</li>
        </ul>
        <p>The User has the right to opt out of communications at any time.</p>

        <h2>7. Use of Testimonials and Case Studies</h2>
        <ul>
          <li>Testimonials may be used only with the User&rsquo;s consent</li>
          <li>Case studies are used in anonymized form without identifying the individual</li>
        </ul>

        <h2>8. User Rights</h2>
        <p>The User has the right to:</p>
        <ul>
          <li>obtain information about their personal data</li>
          <li>request correction or deletion of their data</li>
          <li>withdraw consent to the processing of personal data</li>
        </ul>

        <h2>9. Policy Changes</h2>
        <p>The Data Controller reserves the right to amend this Privacy Policy.</p>
        <p>The current version is always published on the website.</p>
      </div>
    </>
  );
}

export default function PrivacyPage() {
  const { lang } = useTranslation();

  // Privacy page bg (mobile cream card / desktop JPG with cream bg) makes the
  // global transparent header text invisible. Force a dark bg while this
  // page is mounted; cleanup restores normal behaviour on navigation.
  useEffect(() => {
    const style = document.createElement('style');
    style.setAttribute('data-privacy-header-fix', '');
    style.textContent = '.site-header { background: rgba(26, 13, 5, 0.95) !important; }';
    document.head.appendChild(style);
    return () => { style.remove(); };
  }, []);

  return (
    <main>
      {/* Desktop — keep existing JPG */}
      <section
        className="consult-section desktop-only"
        style={{ aspectRatio: '4320 / 4185', background: '#f5f0eb' }}
      >
        <div className="s10-bg">
          <Image
            src={privacyPath(lang)}
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            quality={90}
            priority
          />
        </div>
      </section>

      {/* Mobile — readable HTML per Figma 368:430 */}
      <article className="legal-mobile mobile-only">
        <div className="legal-mobile-card">
          {lang === 'ua' ? <PrivacyUa /> : lang === 'en' ? <PrivacyEn /> : <PrivacyRu />}
        </div>
      </article>

      <Footer />
    </main>
  );
}
