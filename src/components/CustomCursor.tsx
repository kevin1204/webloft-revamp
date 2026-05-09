'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion — skip cursor entirely for accessibility
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let dx = -100, dy = -100;
    let rx = -100, ry = -100;
    let mx = -100, my = -100;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const tick = () => {
      dx += (mx - dx) * 0.6;
      dy += (my - dy) * 0.6;
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      dot.style.transform = `translate3d(${dx - 3}px, ${dy - 3}px, 0)`;
      ring.style.transform = `translate3d(${rx - 16}px, ${ry - 16}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(tick);

    // Event delegation — one listener pair on document handles all interactive elements,
    // including dynamically added ones, without accumulating duplicate listeners.
    const SELECTORS = 'a, button, .ds-btn, .service-row, .ds-card';

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest(SELECTORS)) {
        ring.style.width = '56px';
        ring.style.height = '56px';
        ring.style.borderColor = 'var(--accent)';
      }
    };

    const onOut = (e: MouseEvent) => {
      const target = e.target as Element;
      const related = e.relatedTarget as Element | null;
      // Only collapse ring when leaving the interactive zone entirely
      if (target.closest(SELECTORS) && !related?.closest(SELECTORS)) {
        ring.style.width = '32px';
        ring.style.height = '32px';
        ring.style.borderColor = 'color-mix(in oklch, var(--ink), transparent 60%)';
      }
    };

    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
