'use client';
import { useEffect, useRef, useState } from 'react';

/**
 * Лента текстовых отзывов («Первая ступень»).
 *
 * Поведение:
 *  - карточки уникальны (без дублей);
 *  - на десктопе ряд центрируется, на узких экранах листается свайпом
 *    (нативный горизонтальный overflow-scroll);
 *  - тап по карточке открывает полный текст отзыва в лайтбоксе;
 *  - свайп не считается тапом — лайтбокс при пролистывании не открывается.
 *
 * Карточка показывает имя автора и текст с мягким затуханием снизу; полный
 * текст раскрывается в лайтбоксе. Чтобы добавить отзыв — допишите объект в
 * REVIEWS (абзацы разделяйте пустой строкой).
 */
type Review = { author: string; verified?: boolean; text: string };

const REVIEWS: Review[] = [
  {
    author: 'Участница потока',
    text: `В октябре началось обучение, и я точно знала, что мне туда надо — ноль сомнений, что у меня бывает очень редко. У нас собралась супер мощная группа, было много теории и очень много практики. В основном я практиковала с девочками с курса, прошла две супервизии и вижу, какой большой прогресс сделала за это время.

В первую очередь я училась для себя. Для меня это база: способ лучше понимать себя, свои сценарии, тело, выборы и то, как я создаю свою реальность… и как всё же перескакивать между ветками реальности 😀 (красная зона для логики).

Сейчас мне хочется практиковать метод за пределами нашей маленькой группы. И, если честно, для меня вопрос не столько в том, как именно назвать метод. Главный критерий — происходят ли после работы изменения в реальности.

Первый раз я услышала про этот тип расстановок от Ани в феврале 2025 года, когда мы случайно сели рядом в трансфере на ретрите у Пемы. После самого ретрита, если честно, не случилось чего-то «такого», а вот резонанс с Аней произошёл мгновенно — и я сказала, что хочу у неё учиться.

В прошлом году я поехала на первый ретрит в мае (и моё лето просто полетело в лучших смыслах этого слова), потом в августе — на тему про отношения, и уже через неделю после него эти самые отношения свалились мне на голову оттуда, откуда я совсем не ждала. Так же произошло и с работой, да и много других «синхронистичностей».`,
  },
  {
    author: 'Мария Захарченко',
    text: `Когда я шла на курс к Ане по управлению реальностью, какая-то моя часть всё-таки надеялась, что будет магия и быстрые ответы, переходы и квантовые скачки. В результате я получила проход в честность, взрослость, ответственность за свою жизнь и выборы.

Я знатно приземлилась, чуток ударилась об реальность и начала её строить из совсем другой точки. И да, жизнь действительно меняется — но только когда ты внутри по-честному посмотрел в себя. И удовольствия такая жизнь приносит в разы больше ❤️

Я благодарна Ане за чистоту работы, безопасность и любовь ко всем нашим земным и внеземным частям 😅`,
  },
  {
    author: 'Иоанна Георгиевская',
    verified: true,
    text: `Много эмоций, мало слов. И тем не менее мы правда проникли в ДНК реальности.

Мы живём в совершенно сумасшедшем мире, где можно проснуться в одной реальности, а на следующий день оказаться уже в другой. И те технологии, которые мы здесь рассматривали и применяли, помогают находить самый тонкий и самый точный проход в лучший вариант развития событий в этой быстро меняющейся реальности.

Я искренне считаю, что мы попали в поле великолепной Анны невероятно вовремя. И для меня это, по-хорошему, единственный инструмент, который сейчас действительно работает для управления своей жизнью, своим миром, своими эмоциями и реальными событиями.

За это время произошло очень многое.`,
  },
];

/** Разбивает текст на абзацы (пустая строка — разделитель). */
function paragraphs(text: string): string[] {
  return text.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
}

/** Первая буква имени для аватара-инициала. */
function initial(name: string): string {
  return name.trim().charAt(0).toUpperCase();
}

export default function ReviewsMarquee() {
  // для различения «тап» vs «свайп»
  const downX = useRef(0);
  const downY = useRef(0);
  const moved = useRef(false);

  const [lightbox, setLightbox] = useState<number | null>(null);

  // Esc закрывает лайтбокс + блокировка прокрутки фона.
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  const onPointerDown = (e: React.PointerEvent) => {
    downX.current = e.clientX;
    downY.current = e.clientY;
    moved.current = false;
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (Math.abs(e.clientX - downX.current) > 8 || Math.abs(e.clientY - downY.current) > 8) {
      moved.current = true;
    }
  };

  const openCard = (idx: number) => {
    if (moved.current) return;          // это был свайп, не тап
    setLightbox(idx);
  };

  const closeLightbox = () => setLightbox(null);

  return (
    <>
      <div className="reviews-marquee">
        <div
          className="reviews-scroller"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
        >
          <div className="reviews-track">
            {REVIEWS.map((r, i) => (
              <button
                type="button"
                className="review-card review-card--text"
                key={i}
                aria-label={`Открыть отзыв: ${r.author}`}
                onClick={() => openCard(i)}
              >
                <span className="review-card__quote" aria-hidden="true">“</span>
                <div className="review-card__body">
                  {paragraphs(r.text).map((p, pi) => (
                    <p className="review-card__text" key={pi}>{p}</p>
                  ))}
                </div>
                <span className="review-card__more">Читать&nbsp;полностью</span>
                <div className="review-card__foot">
                  <span className="review-card__avatar" aria-hidden="true">{initial(r.author)}</span>
                  <span className="review-card__author">
                    {r.author}
                    {r.verified && <span className="review-card__verified" aria-hidden="true">★</span>}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {lightbox !== null && (
        <div className="review-lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
          <button type="button" className="review-lightbox__close" aria-label="Закрыть" onClick={closeLightbox}>
            ×
          </button>
          <div className="review-lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <div className="review-lightbox__card">
              <div className="review-lightbox__head">
                <span className="review-card__avatar" aria-hidden="true">{initial(REVIEWS[lightbox].author)}</span>
                <span className="review-lightbox__author">
                  {REVIEWS[lightbox].author}
                  {REVIEWS[lightbox].verified && <span className="review-card__verified" aria-hidden="true">★</span>}
                </span>
              </div>
              <span className="review-lightbox__quote" aria-hidden="true">“</span>
              <div className="review-lightbox__text">
                {paragraphs(REVIEWS[lightbox].text).map((p, pi) => (
                  <p key={pi}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
