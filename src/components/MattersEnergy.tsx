'use client';
import type { CSSProperties } from 'react';

/**
 * Анимированный слой энергии для блока 4 («Что важно»).
 * Накладывается поверх статичного фона (две руки + светящийся круг),
 * между фоном (z-index:0) и текстом (z-index:2). Использует mix-blend-mode:
 * screen — золотой свет «добавляется» к тёмному изображению, как живая энергия.
 *
 * Геометрия потока (откуда → центр → куда) задаётся CSS-переменными на
 * `.matters-fx` и переопределяется для мобильной (диагональной) композиции
 * в globals.css. Все частицы анимируются только transform/opacity → GPU.
 *
 * Конфиг детерминирован (seed = индекс), чтобы SSR и клиент совпали
 * и не было hydration mismatch.
 */
const seeded = (i: number, seed: number) => (n: number) => {
  const x = Math.sin((i + seed) * 127.1 + n * 311.7) * 43758.5453;
  return x - Math.floor(x);
};

// Частицы-поток: текут от кончиков пальцев одной руки через круг к другой.
const makeFlow = (count: number, seed: number) =>
  Array.from({ length: count }, (_, i) => {
    const r = seeded(i, seed);
    const dur = +(5.5 + r(1) * 5).toFixed(2);            // 5.5–10.5s
    return {
      jx: Math.round((r(2) - 0.5) * 28),                  // px — толщина ленты по X
      jy: Math.round((r(3) - 0.5) * 40),                  // px — толщина ленты по Y
      size: +(1.6 + r(4) * 3).toFixed(2),
      op: +(0.5 + r(5) * 0.45).toFixed(2),
      dur,
      delay: +(-r(6) * dur).toFixed(2),                   // десинхронизация
      rev: r(7) > 0.5,                                    // половина — в обратную сторону
    };
  });

// Звёздная пыль над руками — мерцает на месте с лёгким дрейфом.
const makeSpark = (count: number, seed: number) =>
  Array.from({ length: count }, (_, i) => {
    const r = seeded(i, seed);
    const dur = +(3 + r(6) * 4).toFixed(2);
    return {
      left: +(8 + r(1) * 84).toFixed(2),                  // %
      top: +(30 + r(2) * 44).toFixed(2),                  // % — полоса, где руки
      size: +(1 + r(3) * 2.4).toFixed(2),
      opMin: +(0.05 + r(4) * 0.15).toFixed(2),
      opMax: +(0.5 + r(5) * 0.4).toFixed(2),
      dur,
      delay: +(-r(7) * dur).toFixed(2),
      amp: Math.round(6 + r(8) * 14),                     // px — амплитуда дрейфа
    };
  });

const FLOW = makeFlow(56, 0);
const SPARKS = makeSpark(54, 4200);

export default function MattersEnergy() {
  return (
    <div className="matters-fx" aria-hidden="true">
      {/* Светящееся ядро в центре круга — мягкая пульсация */}
      <span className="matters-core-glow" />
      {/* Вихрь внутри круга — медленное вращение */}
      <span className="matters-core-swirl" />

      {/* Поток энергии: частицы текут рука → круг → рука и обратно */}
      <div className="matters-flow">
        {FLOW.map((p, i) => (
          <span
            key={`f${i}`}
            className={`matters-flow-dot${p.rev ? ' matters-flow-dot--rev' : ''}`}
            style={{
              ['--jx' as string]: `${p.jx}px`,
              ['--jy' as string]: `${p.jy}px`,
              ['--op' as string]: p.op,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.dur}s`,
              animationDelay: `${p.delay}s`,
            } as CSSProperties}
          />
        ))}
      </div>

      {/* Звёздная пыль над руками */}
      <div className="matters-sparks">
        {SPARKS.map((p, i) => (
          <span
            key={`s${i}`}
            className="matters-spark"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.dur}s, ${p.dur}s`,
              animationDelay: `${p.delay}s, ${p.delay}s`,
              ['--op-min' as string]: p.opMin,
              ['--op-max' as string]: p.opMax,
              ['--amp' as string]: `${p.amp}px`,
            } as CSSProperties}
          />
        ))}
      </div>
    </div>
  );
}
