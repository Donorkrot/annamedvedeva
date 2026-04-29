'use client';
import { useTranslation } from '@/components/LanguageProvider';
import Footer from '@/components/Footer';

function OfferRu() {
  return (
    <>
      <h1 className="offer-title">ПУБЛИЧНАЯ ОФЕРТА</h1>
      <div className="offer-body">
        <h2>1. Общие положения</h2>
        <p>Настоящий документ является публичной офертой в соответствии с законодательством Украины.</p>
        <p>Оферта размещена ФЛП Медведева Анна Анатольевна (3143101707) зарегистрированным в Украине (далее — Исполнитель).</p>
        <p>Оплата услуг означает полное согласие Пользователя с условиями настоящей Оферты.</p>

        <h2>2. Предмет оферты</h2>
        <p>Исполнитель предоставляет услуги:</p>
        <ul>
          <li>индивидуальные консультации (онлайн, офлайн, дистанционные)</li>
          <li>онлайн-курсы и программы</li>
          <li>групповые процессы</li>
          <li>ретриты и офлайн-мероприятия</li>
        </ul>
        <p>Услуги носят авторский, информационно-консультационный характер и не являются медицинской или психотерапевтической помощью.</p>

        <h2>3. Порядок оказания услуг</h2>
        <ul>
          <li>Услуги предоставляются через Zoom, Telegram или офлайн</li>
          <li>Доступ к материалам курсов предоставляется после оплаты</li>
          <li>Доступ к онлайн-программам может быть ограничен по времени (до 12 месяцев)</li>
          <li>Исполнитель вправе изменять формат и содержание услуг без ухудшения их сути</li>
        </ul>

        <h2>4. Стоимость и оплата</h2>
        <ul>
          <li>Стоимость услуг указывается на сайте</li>
          <li>Оплата производится через: WayForPay, PayPal, банковский перевод, наличные</li>
          <li>Комиссии платёжных систем оплачиваются Пользователем</li>
          <li>Возврат средств осуществляется за вычетом комиссий (до 7,5%)</li>
        </ul>

        <h2>5. Условия возврата</h2>

        <h3>5.1 Индивидуальные консультации</h3>
        <ul>
          <li>Перенос или отмена возможны в любое время при уведомлении</li>
          <li>Если Пользователь не явился и не предупредил, услуга считается оказанной, средства не возвращаются</li>
        </ul>

        <h3>5.2 Блок консультаций</h3>
        <ul>
          <li>Блок является невозвратным</li>
          <li>Срок использования — 1 месяц (если не согласовано иное)</li>
          <li>Неиспользованные консультации сгорают</li>
        </ul>

        <h3>5.3 Онлайн-курсы и программы</h3>
        <ul>
          <li>После получения доступа возврат не осуществляется</li>
          <li>При рассрочке обязательства по оплате сохраняются</li>
          <li>При прекращении участия доступ к материалам закрывается</li>
        </ul>

        <h3>5.4 Групповые процессы</h3>
        <ul>
          <li>Возврат возможен не позднее чем за 24 часа до начала</li>
          <li>Менее чем за 24 часа — возврат не осуществляется</li>
          <li>После начала — возврат невозможен</li>
        </ul>

        <h3>5.5 Ретриты</h3>
        <ul>
          <li>Бронирование — 30% от стоимости</li>
          <li>
            При отмене:
            <ul>
              <li>более чем за 30 дней — возврат возможен</li>
              <li>менее чем за 14 дней — бронь не возвращается</li>
            </ul>
          </li>
          <li>Участник может передать своё место другому лицу</li>
        </ul>

        <h2>6. Ответственность</h2>
        <ul>
          <li>Исполнитель не гарантирует конкретный результат</li>
          <li>Услуги носят субъективный характер</li>
          <li>Пользователь самостоятельно несёт ответственность за свои решения</li>
        </ul>

        <h2>7. Правила поведения</h2>
        <p>Пользователю запрещено:</p>
        <ul>
          <li>проявлять агрессию и оскорбления</li>
          <li>нарушать границы других участников</li>
          <li>распространять материалы без разрешения</li>
        </ul>
        <p>При нарушении Пользователь может быть удалён без возврата средств.</p>

        <h2>8. Интеллектуальная собственность</h2>
        <ul>
          <li>Все материалы являются собственностью Исполнителя</li>
          <li>
            Запрещено:
            <ul>
              <li>копирование</li>
              <li>распространение</li>
              <li>передача третьим лицам</li>
            </ul>
          </li>
        </ul>

        <h2>9. Видеосъёмка и контент</h2>
        <ul>
          <li>В групповых форматах может вестись запись</li>
          <li>Использование материалов возможно только с согласия участника</li>
        </ul>

        <h2>10. Отказ в оказании услуг</h2>
        <p>Исполнитель вправе:</p>
        <ul>
          <li>отказать в оказании услуг до начала</li>
          <li>прекратить оказание услуг при нарушении правил</li>
        </ul>
        <p>При отказе по инициативе Исполнителя средства возвращаются.</p>

        <h2>11. Форс-мажор</h2>
        <p>При обстоятельствах непреодолимой силы:</p>
        <ul>
          <li>сроки могут быть перенесены</li>
          <li>формат может быть изменён</li>
        </ul>

        <h2>12. Заключительные положения</h2>
        <ul>
          <li>Оферта действует бессрочно</li>
          <li>Актуальная версия размещается на сайте</li>
          <li>Споры решаются по законодательству Украины</li>
        </ul>
      </div>
    </>
  );
}

function OfferUa() {
  return (
    <>
      <h1 className="offer-title">ПУБЛІЧНА ОФЕРТА</h1>
      <div className="offer-body">
        <h2>1. Загальні положення</h2>
        <p>Цей документ є публічною офертою відповідно до законодавства України.</p>
        <p>Оферта надається ФОП Медведєва Ганна Анатоліївна (3143101707) (далі — Виконавець).</p>
        <p>Оплата послуг означає повну та безумовну згоду Користувача з умовами цієї Оферти.</p>

        <h2>2. Предмет оферти</h2>
        <p>Виконавець надає такі послуги:</p>
        <ul>
          <li>індивідуальні консультації (онлайн, офлайн, дистанційні)</li>
          <li>онлайн-курси та програми</li>
          <li>групові процеси</li>
          <li>ретрити та офлайн-заходи</li>
        </ul>
        <p>Послуги мають авторський, інформаційно-консультаційний характер та не є медичною або психотерапевтичною допомогою.</p>

        <h2>3. Порядок надання послуг</h2>
        <ul>
          <li>Послуги надаються через Zoom, Telegram або офлайн</li>
          <li>Доступ до матеріалів курсів надається після оплати</li>
          <li>Доступ до онлайн-програм може бути обмежений у часі (до 12 місяців)</li>
          <li>Виконавець має право змінювати формат і зміст послуг без погіршення їх суті</li>
        </ul>

        <h2>4. Вартість та оплата</h2>
        <ul>
          <li>Вартість послуг зазначається на сайті</li>
          <li>Оплата здійснюється через: WayForPay, PayPal, банківський переказ, готівку</li>
          <li>Комісії платіжних систем оплачуються Користувачем</li>
          <li>Повернення коштів здійснюється з утриманням комісій (до 7,5%)</li>
        </ul>

        <h2>5. Умови повернення</h2>

        <h3>5.1 Індивідуальні консультації</h3>
        <ul>
          <li>Перенесення або скасування можливі у будь-який час за попередженням</li>
          <li>Якщо Користувач не з’явився та не попередив, послуга вважається наданою, кошти не повертаються</li>
        </ul>

        <h3>5.2 Пакет консультацій</h3>
        <ul>
          <li>Пакет є неповерненим</li>
          <li>Строк використання — 1 місяць (якщо не погоджено інше)</li>
          <li>Невикористані консультації анулюються</li>
        </ul>

        <h3>5.3 Онлайн-курси та програми</h3>
        <ul>
          <li>Після надання доступу повернення не здійснюється</li>
          <li>У разі розстрочки зобов’язання щодо оплати зберігаються</li>
          <li>У разі припинення участі доступ до матеріалів закривається</li>
        </ul>

        <h3>5.4 Групові процеси</h3>
        <ul>
          <li>Повернення можливе не пізніше ніж за 24 години до початку</li>
          <li>Менше ніж за 24 години — повернення не здійснюється</li>
          <li>Після початку — повернення неможливе</li>
        </ul>

        <h3>5.5 Ретрити</h3>
        <ul>
          <li>Бронювання становить 30% від вартості</li>
          <li>
            У разі скасування:
            <ul>
              <li>більш ніж за 30 днів — повернення можливе</li>
              <li>менш ніж за 14 днів — бронь не повертається</li>
            </ul>
          </li>
          <li>Учасник має право передати своє місце іншій особі</li>
        </ul>

        <h2>6. Відповідальність</h2>
        <ul>
          <li>Виконавець не гарантує конкретного результату</li>
          <li>Послуги мають суб’єктивний характер</li>
          <li>Користувач самостійно несе відповідальність за свої рішення</li>
        </ul>

        <h2>7. Правила поведінки</h2>
        <p>Користувачу заборонено:</p>
        <ul>
          <li>проявляти агресію та образи</li>
          <li>порушувати особисті межі інших учасників</li>
          <li>поширювати матеріали без дозволу</li>
        </ul>
        <p>У разі порушення Користувач може бути видалений без повернення коштів.</p>

        <h2>8. Інтелектуальна власність</h2>
        <ul>
          <li>Усі матеріали є власністю Виконавця</li>
          <li>
            Заборонено:
            <ul>
              <li>копіювання</li>
              <li>розповсюдження</li>
              <li>передача третім особам</li>
            </ul>
          </li>
        </ul>

        <h2>9. Відеозйомка та контент</h2>
        <ul>
          <li>У групових форматах може здійснюватися запис</li>
          <li>Використання матеріалів можливе лише за згодою учасника</li>
        </ul>

        <h2>10. Відмова у наданні послуг</h2>
        <p>Виконавець має право:</p>
        <ul>
          <li>відмовити у наданні послуг до початку</li>
          <li>припинити надання послуг у разі порушення правил</li>
        </ul>
        <p>У разі відмови з боку Виконавця кошти повертаються.</p>

        <h2>11. Форс-мажор</h2>
        <p>У разі обставин непереборної сили:</p>
        <ul>
          <li>строки можуть бути перенесені</li>
          <li>формат може бути змінений</li>
        </ul>

        <h2>12. Прикінцеві положення</h2>
        <ul>
          <li>Оферта діє безстроково</li>
          <li>Актуальна версія розміщується на сайті</li>
          <li>Спори вирішуються відповідно до законодавства України</li>
        </ul>
      </div>
    </>
  );
}

function OfferEn() {
  return (
    <>
      <h1 className="offer-title">PUBLIC OFFER</h1>
      <div className="offer-body">
        <h2>1. General Provisions</h2>
        <p>This document constitutes a public offer in accordance with the legislation of Ukraine.</p>
        <p>The offer is provided by Sole Proprietor (FOP) Hanna Medvedieva Anatoliivna (3143101707) (hereinafter referred to as the &ldquo;Provider&rdquo;).</p>
        <p>Payment for services constitutes full and unconditional acceptance of the terms of this Offer by the User.</p>

        <h2>2. Subject of the Offer</h2>
        <p>The Provider offers the following services:</p>
        <ul>
          <li>individual consultations (online, offline, remote)</li>
          <li>online courses and programs</li>
          <li>group sessions</li>
          <li>retreats and offline events</li>
        </ul>
        <p>The services are of an authorial, informational, and consultative nature and do not constitute medical or psychotherapeutic assistance.</p>

        <h2>3. Service Delivery Procedure</h2>
        <ul>
          <li>Services are provided via Zoom, Telegram, or offline.</li>
          <li>Access to course materials is granted after payment.</li>
          <li>Access to online programs may be time-limited (up to 12 months).</li>
          <li>The Provider reserves the right to change the format and content of services without altering their essence.</li>
        </ul>

        <h2>4. Pricing and Payment</h2>
        <ul>
          <li>The cost of services is indicated on the website.</li>
          <li>Payment is made via: WayForPay, PayPal, bank transfer, or cash.</li>
          <li>Payment system fees are covered by the User.</li>
          <li>Refunds are made with deduction of fees (up to 7.5%).</li>
        </ul>

        <h2>5. Refund Policy</h2>

        <h3>5.1 Individual Consultations</h3>
        <ul>
          <li>Rescheduling or cancellation is possible at any time with prior notice.</li>
          <li>If the User does not attend and fails to notify in advance, the service is considered provided and no refund is issued.</li>
        </ul>

        <h3>5.2 Consultation Packages</h3>
        <ul>
          <li>Packages are non-refundable.</li>
          <li>The usage period is 1 month (unless otherwise agreed).</li>
          <li>Unused consultations are forfeited.</li>
        </ul>

        <h3>5.3 Online Courses and Programs</h3>
        <ul>
          <li>No refunds are issued after access is granted.</li>
          <li>In case of installment payments, payment obligations remain.</li>
          <li>If participation is terminated, access to materials is revoked.</li>
        </ul>

        <h3>5.4 Group Sessions</h3>
        <ul>
          <li>Refunds are possible no later than 24 hours before the start.</li>
          <li>Less than 24 hours — no refund.</li>
          <li>After the start — no refund.</li>
        </ul>

        <h3>5.5 Retreats</h3>
        <ul>
          <li>A deposit of 30% of the total cost is required.</li>
          <li>
            In case of cancellation:
            <ul>
              <li>more than 30 days prior — refund possible</li>
              <li>less than 14 days — deposit is non-refundable</li>
            </ul>
          </li>
          <li>The participant has the right to transfer their spot to another person.</li>
        </ul>

        <h2>6. Liability</h2>
        <ul>
          <li>The Provider does not guarantee specific results.</li>
          <li>Services are of a subjective nature.</li>
          <li>The User is solely responsible for their decisions.</li>
        </ul>

        <h2>7. Code of Conduct</h2>
        <p>The User is prohibited from:</p>
        <ul>
          <li>displaying aggression or insults</li>
          <li>violating personal boundaries of other participants</li>
          <li>distributing materials without permission</li>
        </ul>
        <p>In case of violation, the User may be removed without refund.</p>

        <h2>8. Intellectual Property</h2>
        <ul>
          <li>All materials are the property of the Provider.</li>
          <li>
            It is prohibited to:
            <ul>
              <li>copy</li>
              <li>distribute</li>
              <li>transfer to third parties</li>
            </ul>
          </li>
        </ul>

        <h2>9. Video Recording and Content</h2>
        <ul>
          <li>Group sessions may be recorded.</li>
          <li>Use of materials is allowed only with the participant&rsquo;s consent.</li>
        </ul>

        <h2>10. Refusal to Provide Services</h2>
        <p>The Provider has the right to:</p>
        <ul>
          <li>refuse to provide services before they begin</li>
          <li>terminate services in case of rule violations</li>
        </ul>
        <p>If the Provider refuses, funds will be refunded.</p>

        <h2>11. Force Majeure</h2>
        <p>In the event of force majeure circumstances:</p>
        <ul>
          <li>deadlines may be extended</li>
          <li>the format of services may be changed</li>
        </ul>

        <h2>12. Final Provisions</h2>
        <ul>
          <li>This Offer is valid indefinitely.</li>
          <li>The current version is published on the website.</li>
          <li>Disputes are resolved in accordance with the legislation of Ukraine.</li>
        </ul>
      </div>
    </>
  );
}

export default function OfferPage() {
  const { lang } = useTranslation();
  return (
    <main className="offer-page">
      <article className="offer-article">
        {lang === 'ua' ? <OfferUa /> : lang === 'en' ? <OfferEn /> : <OfferRu />}
      </article>
      <Footer />
    </main>
  );
}
