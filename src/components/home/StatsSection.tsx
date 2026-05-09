'use client';

import { useEffect, useRef, useState } from 'react';

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen] as const;
}

function useCounter(target: number, { duration = 1600, when = true } = {}) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!when) return;
    const start = performance.now();
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, when]);
  return val;
}

const STATS = [
  { val: 20, suffix: '+', label: 'Sites shipped', note: 'Across different industries' },
  { val: 312, suffix: '%', label: 'Avg. lead lift', note: 'First 90 days post-launch' },
  { val: 98, suffix: '/100', label: 'PageSpeed', note: 'On every site we ship' },
  { val: 21, suffix: ' days', label: 'Avg. timeline', note: 'From kickoff to launch' },
];

function StatCell({
  val,
  suffix,
  label,
  note,
  seen,
  index,
  last,
}: {
  val: number;
  suffix: string;
  label: string;
  note: string;
  seen: boolean;
  index: number;
  last: boolean;
}) {
  const n = useCounter(val, { when: seen, duration: 1800 + index * 150 });
  const pretty = val < 10 ? n.toFixed(1) : Math.round(n);
  return (
    <div
      style={{
        padding: '48px 28px',
        borderRight: last ? 'none' : '1px solid var(--line)',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: 'var(--ink-mute)',
          letterSpacing: '0.16em',
          marginBottom: 16,
        }}
      >
        0{index + 1} / 04
      </div>
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 500,
          fontSize: 'clamp(48px, 5vw, 88px)',
          letterSpacing: '-0.03em',
          lineHeight: 1,
          color: 'var(--ink)',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {pretty}
        <span style={{ color: 'var(--accent)' }}>{suffix}</span>
      </div>
      <div
        style={{
          marginTop: 18,
          fontFamily: 'var(--font-display)',
          fontSize: 18,
          letterSpacing: '-0.01em',
          color: 'var(--ink)',
        }}
      >
        {label}
      </div>
      <div className="body-sm" style={{ marginTop: 6 }}>
        {note}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const [ref, seen] = useInView(0.3);

  return (
    <section
      ref={ref}
      style={{
        paddingTop: 'calc(var(--section-y) * 0.72)',
        paddingBottom: 'clamp(16px, 2vw, 28px)',
      }}
    >
      <div className="ds-container">
        <div
          className="reveal"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 48,
          }}
        >
          <div className="eyebrow">
            <span className="dot" />
            The numbers
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              color: 'var(--ink-mute)',
            }}
          >
            (03) — Receipts
          </div>
        </div>

        <div
          className="stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            borderTop: '1px solid var(--line)',
            borderBottom: '1px solid var(--line)',
          }}
        >
          {STATS.map((s, i) => (
            <StatCell
              key={s.label}
              {...s}
              seen={seen}
              index={i}
              last={i === STATS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
