'use client';

import { useEffect } from 'react';

export default function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -4% 0px' }
    );
    els.forEach((el) => io.observe(el));

    // Also observe any newly added .reveal elements
    const mo = new MutationObserver(() => {
      document.querySelectorAll<HTMLElement>('.reveal:not(.in)').forEach((el) => {
        io.observe(el);
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
