'use client';
import { useState, useRef, useEffect } from 'react';

/* Click-to-play YouTube facade.
   Shows the video poster (i.ytimg.com thumbnail) with a play button until
   the user actually wants to watch — at which point the real iframe is
   inserted with `autoplay=1` so it starts immediately on the first click.

   Why a facade instead of <iframe> directly:
   · YouTube's bot/abuse detection sometimes throws a "confirm you're not
     a bot" interstitial for iframes loaded from non-warm origins (Vercel
     preview, fresh deploys, IPs new to YT). The facade defers iframe
     loading until an explicit user gesture, which YT counts as a real
     interaction and skips the challenge.
   · Page-load weight drops by ~500KB per video (no YT player JS until
     someone actually presses play).
   · Cumulative Layout Shift stays at 0 — the facade is the same size as
     the iframe.

   The facade swaps out for the real iframe on click, so once playing the
   experience is identical to a normal embed. */
type Props = {
  /** YouTube video ID, e.g. "i6vCzyWnE-o". */
  id: string;
  /** Accessible title — also used as the iframe title attribute. */
  title: string;
  /** Optional className applied to the wrapper. */
  className?: string;
};

export default function LiteYouTube({ id, title, className = '' }: Props) {
  const [active, setActive] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Once the iframe is mounted, focus it so keyboard users can interact.
  // Using a ref rather than autoFocus to avoid layout-shift focus jumps.
  useEffect(() => {
    if (active && buttonRef.current) {
      const iframe = buttonRef.current.parentElement?.querySelector('iframe');
      iframe?.focus();
    }
  }, [active]);

  // Multi-resolution thumbnail set. maxres isn't always available; YT's
  // default fallback resolves to a 120×90 grey placeholder, which is ugly,
  // so we ladder down through hq → sd → mq.
  const poster = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
  const posterFallback = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  // youtube-nocookie + the params below produce the cleanest player:
  //   rel=0          — no related videos at the end
  //   modestbranding=1 — minimise YT logo
  //   playsinline=1  — iOS plays inline rather than launching the YT app
  //   autoplay=1     — start as soon as the iframe is mounted (this is
  //                   user-gesture-initiated so browsers allow it)
  //   color=white    — white progress bar (matches the brand)
  //   iv_load_policy=3 — hide annotations
  const src =
    `https://www.youtube-nocookie.com/embed/${id}` +
    `?autoplay=1&rel=0&modestbranding=1&playsinline=1&color=white&iv_load_policy=3`;

  return (
    <div className={`lyt ${className}`} data-active={active ? 'true' : 'false'}>
      {active ? (
        <iframe
          src={src}
          title={title}
          loading="eager"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button
          ref={buttonRef}
          type="button"
          aria-label={`Воспроизвести: ${title}`}
          className="lyt__btn"
          onClick={() => setActive(true)}
          style={{
            backgroundImage: `url("${poster}"), url("${posterFallback}")`,
          }}
        >
          <span className="lyt__play" aria-hidden="true">
            <svg viewBox="0 0 68 48" width="68" height="48">
              <path
                d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
                fill="#f00"
              />
              <path d="M45 24 27 14v20" fill="#fff" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
