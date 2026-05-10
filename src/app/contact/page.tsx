'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { trackContactFormSubmission } from '@/lib/analytics';

const TURNSTILE_SITE_KEY = '0x4AAAAAACMuI6UiH_wsKL5g';
const CALENDLY_URL = 'https://calendly.com/webloftstudio-info/30min';
const TOTAL_STEPS = 3;

const SERVICE_OPTIONS = [
  'New website',
  'Redesign',
  'Webflow',
  'Landing page',
  'SEO',
  'Lead automation',
  'AI chatbot',
  'Maintenance',
];

const PAYMENT_OPTIONS = ['Monthly plan', 'One-time project', 'Not sure yet'];

const BUDGET_OPTIONS = [
  'Under $1,000',
  '$1,000 – $2,500',
  '$2,500 – $5,000',
  '$5,000+',
  'Prefer monthly',
  'Not sure yet',
];

interface TurnstileOptions {
  sitekey: string;
  callback?: (token: string) => void;
  'error-callback'?: () => void;
  'expired-callback'?: () => void;
}
interface Turnstile {
  render: (element: HTMLElement, options: TurnstileOptions) => string;
  reset: (widgetId: string) => void;
}
interface WindowWithTurnstile extends Window {
  turnstile?: Turnstile;
}

type FormStatus = { type: 'success' | 'error' | 'loading' | null; message: string };

function ContactLine({ label, value, href }: { label: string; value: string; href?: string }) {
  const Tag = href ? 'a' : 'div';
  return (
    <Tag
      href={href}
      style={{ display: 'block', padding: '16px 0', borderBottom: '1px solid var(--line)' }}
    >
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: 'var(--ink-mute)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: 6,
        }}
      >
        {label}
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: 'var(--ink)' }}>
        {value}
      </div>
    </Tag>
  );
}

function CalendlyCard() {
  return (
    <div
      className="contact-calendly-card"
      style={{
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid var(--line)',
        borderRadius: 'var(--r-lg)',
        background:
          'linear-gradient(145deg, color-mix(in oklch, var(--bg-elev), var(--accent) 4%), var(--bg-elev))',
        padding: '30px 28px 26px',
        marginTop: 28,
        boxShadow: '0 24px 80px rgba(0, 0, 0, 0.22)',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 98,
          height: 98,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 18,
            right: -32,
            width: 132,
            padding: '7px 0',
            background: 'var(--accent)',
            color: 'var(--accent-ink)',
            fontFamily: 'var(--font-mono)',
            fontSize: 8,
            letterSpacing: '0.08em',
            textAlign: 'center',
            textTransform: 'uppercase',
            transform: 'rotate(45deg)',
          }}
        >
          Calendly
        </div>
      </div>

      <div style={{ display: 'grid', justifyItems: 'center', textAlign: 'center' }}>
        <div
          style={{
            position: 'relative',
            width: 112,
            height: 112,
            borderRadius: 999,
            overflow: 'hidden',
            border: '1px solid color-mix(in oklch, var(--accent), transparent 35%)',
            boxShadow: '0 0 0 6px color-mix(in oklch, var(--accent), transparent 88%)',
            marginBottom: 20,
            background: 'var(--accent)',
          }}
        >
          <Image
            src="/kevin4.png"
            alt="Kevin O., Founder and CEO of Webloft Studio"
            fill
            sizes="(max-width: 640px) 96px, 112px"
            quality={100}
            style={{ objectFit: 'cover', objectPosition: 'center 24%' }}
            priority={false}
          />
        </div>

        <h2
          style={{
            margin: 0,
            color: 'var(--ink)',
            fontFamily: 'var(--font-display)',
            fontSize: 20,
            lineHeight: 1.1,
          }}
        >
          Kevin O.
        </h2>
        <p
          style={{
            margin: '6px 0 0',
            color: 'var(--ink-mute)',
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          Founder &amp; CEO
        </p>
        <p className="body-sm" style={{ maxWidth: 310, margin: '18px 0 22px' }}>
          Book a time that works for you and we&apos;ll map the fastest path from
          website idea to measurable growth.
        </p>
      </div>

      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-calendly-link"
        style={{
          display: 'grid',
          gridTemplateColumns: '36px 1fr 18px',
          alignItems: 'center',
          gap: 14,
          padding: '18px 0 0',
          borderTop: '1px solid var(--line)',
          color: 'var(--ink)',
          textDecoration: 'none',
          transition: 'color 0.25s var(--ease), transform 0.25s var(--ease)',
        }}
      >
        <span
          aria-hidden="true"
          style={{
            width: 20,
            height: 20,
            borderRadius: 999,
            background: 'var(--accent)',
            boxShadow: '0 0 0 10px color-mix(in oklch, var(--accent), transparent 90%)',
            justifySelf: 'center',
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 17,
            lineHeight: 1.15,
          }}
        >
          Reserve a 30-minute slot
        </span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M5 3l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}

export default function ContactPage() {
  const formLoadTime = useRef<number>(Date.now());
  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);
  const turnstileToken = useRef<string | null>(null);

  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>({ type: null, message: '' });

  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    services: [] as string[],
    paymentPreference: '',
    budgetRange: '',
    message: '',
    website: '', // honeypot
  });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const toggleService = (s: string) =>
    setForm((f) => ({
      ...f,
      services: f.services.includes(s)
        ? f.services.filter((x) => x !== s)
        : [...f.services, s],
    }));

  const canNext =
    step === 0
      ? form.name.trim().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
      : step === 1
      ? form.services.length > 0
      : step === 2
      ? form.message.trim().length >= 10
      : true;

  const next = () => setStep((s) => Math.min(TOTAL_STEPS - 1, s + 1));
  const prev = () => setStep((s) => Math.max(0, s - 1));

  // Load Turnstile on step 2
  useEffect(() => {
    if (step !== 2) return;
    const windowWithTurnstile = window as WindowWithTurnstile;

    const initWidget = () => {
      if (turnstileRef.current && windowWithTurnstile.turnstile && !turnstileWidgetId.current) {
        const id = windowWithTurnstile.turnstile.render(turnstileRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token) => { turnstileToken.current = token; },
          'error-callback': () => { turnstileToken.current = null; },
          'expired-callback': () => { turnstileToken.current = null; },
        });
        turnstileWidgetId.current = id;
      }
    };

    if (document.querySelector('script[src*="turnstile"]')) {
      initWidget();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    script.onload = initWidget;
    document.body.appendChild(script);
  }, [step]);

  const handleSubmit = async () => {
    if (!form.message.trim() || form.message.trim().length < 10) return;
    if (!turnstileToken.current) {
      setFormStatus({
        type: 'error',
        message: 'Please wait for security verification to complete.',
      });
      return;
    }

    setFormStatus({ type: 'loading', message: 'Sending your message…' });

    try {
      const timeSpent = Math.floor((Date.now() - formLoadTime.current) / 1000);
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          projectType: form.services.join(', ') || 'General inquiry',
          budget: form.budgetRange || form.paymentPreference || 'Not specified',
          message: form.message,
          website: form.website,
          turnstileToken: turnstileToken.current,
          timeSpent,
        }),
      });
      const result = await res.json();

      if (res.ok) {
        trackContactFormSubmission('contact_form', true);
        setSent(true);
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (err) {
      console.error(err);
      setFormStatus({
        type: 'error',
        message: 'There was an error sending your message. Please try again.',
      });
      trackContactFormSubmission('contact_form', false);
      const windowWithTurnstile = window as WindowWithTurnstile;
      if (turnstileWidgetId.current && windowWithTurnstile.turnstile) {
        windowWithTurnstile.turnstile.reset(turnstileWidgetId.current);
        turnstileToken.current = null;
      }
    }
  };

  const pillStyle = (active: boolean) => ({
    padding: '12px 18px',
    borderRadius: 99,
    border: `1px solid ${active ? 'var(--accent)' : 'var(--line-strong)'}`,
    background: active ? 'var(--accent)' : 'transparent',
    color: active ? 'var(--accent-ink)' : 'var(--ink-dim)',
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    letterSpacing: '0.06em',
    textTransform: 'uppercase' as const,
    cursor: 'pointer',
    transition: 'all 0.3s var(--ease)',
  });

  return (
    <>
      {/* ── 1A + 1B: Custom page header with two-line headline and updated subtext ── */}
      <section className="page-header-section">
        <div className="ds-container">
          {/* Eyebrow row */}
          <div
            className="reveal"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: 64,
              flexWrap: 'wrap',
              gap: 24,
            }}
          >
            <div className="eyebrow">
              <span className="dot" />
              Start a project
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: 'var(--ink-mute)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              (04) — Contact
            </div>
          </div>

          {/* 1A — Two-line headline */}
          <h1
            className="h-display reveal"
            style={{ fontSize: 'clamp(56px, 8vw, 144px)', margin: 0 }}
          >
            <span style={{ display: 'block' }}>Let&apos;s build something</span>
            <span
              className="italic-serif"
              style={{ display: 'block', color: 'var(--accent)' }}
            >
              worth talking about.
            </span>
          </h1>

          {/* 1B — Updated subtext: primary + secondary */}
          <div className="reveal" style={{ marginTop: 48, maxWidth: 640 }}>
            <p className="body-lg" style={{ margin: 0 }}>
              Three quick questions, then we&apos;ll review your project and send you clear
              next steps — usually within a few hours.
            </p>
            <p
              className="body-sm"
              style={{ marginTop: 12, color: 'var(--ink-mute)' }}
            >
              Prefer a call?{' '}
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--accent)',
                  textDecoration: 'none',
                  borderBottom: '1px solid color-mix(in oklch, var(--accent), transparent 60%)',
                  paddingBottom: 1,
                  transition: 'border-color 0.2s',
                }}
              >
                Choose a time on Kevin&apos;s calendar →
              </a>
            </p>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: 'var(--section-y)' }}>
        <div className="ds-container">
          <div
            className="contact-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.4fr',
              gap: 80,
              alignItems: 'start',
            }}
          >
            {/* ── Left column ── */}
            <div className="reveal" style={{ position: 'sticky', top: 120 }}>
              <div className="eyebrow" style={{ marginBottom: 24 }}>
                <span className="dot" />
                Direct lines
              </div>
              <ContactLine
                label="Email"
                value="info@webloftstudio.com"
                href="mailto:info@webloftstudio.com"
              />
              <ContactLine label="London" value="695 Talbot St" />
              <ContactLine label="Hours" value="Mon–Fri · 9–6 EST" />

              {/* 1D — What happens next (between Direct Lines and Availability) */}
              <div style={{ padding: '16px 0', borderBottom: '1px solid var(--line)' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: 'var(--ink-mute)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: 16,
                  }}
                >
                  ● What happens next
                </div>
                <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    'We review your project details and goals.',
                    'We reply with clear next steps — no pitch, no pressure.',
                    'If it\u2019s a good fit, we move into a focused discovery session together.',
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 11,
                          color: 'var(--accent)',
                          letterSpacing: '0.08em',
                          flexShrink: 0,
                          marginTop: 1,
                        }}
                      >
                        {i + 1}.
                      </span>
                      <span className="body-sm" style={{ color: 'var(--ink-dim)' }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              <div style={{ borderTop: '1px solid var(--line)', margin: '32px 0' }} />

              {/* 1C — Updated availability block */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  color: 'var(--ink-mute)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: 12,
                }}
              >
                ● Availability
              </div>
              <p className="body-sm">
                Now booking new projects for Q3 2026. We take on a limited number of projects
                each month to make sure every client gets our full attention.
              </p>

              <CalendlyCard />
            </div>

            {/* ── Right column: form card ── */}
            <div>
              {/* Form card */}
              <div
                className="reveal"
                style={{
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--r-lg)',
                  background: 'var(--bg-elev)',
                  padding: 'clamp(28px, 4vw, 56px)',
                  minHeight: 580,
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                {/* honeypot */}
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={(e) => update('website', e.target.value)}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                {sent ? (
                  /* Success screen */
                  <div
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      padding: '40px 0',
                    }}
                  >
                    <div
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: 99,
                        background: 'var(--accent)',
                        color: 'var(--accent-ink)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 32,
                      }}
                    >
                      <svg width="32" height="32" viewBox="0 0 32 32">
                        <path
                          d="M6 16.5L13 23L26 9"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3
                      className="h-2"
                      style={{ fontSize: 'clamp(28px, 3vw, 44px)', marginBottom: 16 }}
                    >
                      Got it.{' '}
                      <span className="italic-serif" style={{ color: 'var(--accent)' }}>
                        Talk soon.
                      </span>
                    </h3>
                    <p className="body-lg" style={{ maxWidth: 440 }}>
                      We&apos;ll review your inquiry and reply within a few hours with clear
                      next steps.
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Progress bar */}
                    <div style={{ display: 'flex', gap: 6, marginBottom: 40 }}>
                      {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                        <div
                          key={i}
                          style={{
                            flex: 1,
                            height: 3,
                            background: i <= step ? 'var(--accent)' : 'var(--line-strong)',
                            transition: 'background 0.4s var(--ease)',
                            borderRadius: 2,
                          }}
                        />
                      ))}
                    </div>

                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 11,
                        color: 'var(--ink-mute)',
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        marginBottom: 24,
                      }}
                    >
                      Step {step + 1} of {TOTAL_STEPS}
                    </div>

                    {/* Error banner */}
                    {formStatus.type === 'error' && (
                      <div
                        style={{
                          padding: '14px 20px',
                          borderRadius: 'var(--r-md)',
                          border: '1px solid oklch(from var(--accent) 60% 0.15 30)',
                          background: 'oklch(from var(--accent) 10% 0.03 30 / 0.2)',
                          color: 'var(--ink)',
                          fontFamily: 'var(--font-body)',
                          fontSize: 14,
                          marginBottom: 24,
                        }}
                      >
                        {formStatus.message}
                      </div>
                    )}

                    {/* Step 0 — Who are you */}
                    {step === 0 && (
                      <div>
                        <h3
                          className="h-2"
                          style={{ marginBottom: 32, fontSize: 'clamp(28px, 3vw, 40px)' }}
                        >
                          Who are you?
                        </h3>
                        {[
                          { label: 'Your name', key: 'name', type: 'text', placeholder: 'Maria Voss' },
                          { label: 'Email', key: 'email', type: 'email', placeholder: 'maria@northsideplumbing.com' },
                          { label: 'Company', key: 'company', type: 'text', placeholder: 'Northside Plumbing' },
                        ].map(({ label, key, type, placeholder }) => (
                          <div key={key} style={{ marginBottom: 20 }}>
                            <label className="ds-input-label">{label}</label>
                            <input
                              type={type}
                              value={form[key as keyof typeof form] as string}
                              onChange={(e) => update(key, e.target.value)}
                              placeholder={placeholder}
                              className="ds-input"
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Step 1 — What do you need (Part 2 changes applied) */}
                    {step === 1 && (
                      <div>
                        <h3
                          className="h-2"
                          style={{ marginBottom: 32, fontSize: 'clamp(28px, 3vw, 40px)' }}
                        >
                          What do you need?
                        </h3>

                        {/* 2B — Services (unchanged) */}
                        <div className="ds-input-label" style={{ marginBottom: 16 }}>
                          Services · pick any
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
                          {SERVICE_OPTIONS.map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => toggleService(s)}
                              style={pillStyle(form.services.includes(s))}
                            >
                              {s}
                            </button>
                          ))}
                        </div>

                        {/* 2C — Payment preference (new) */}
                        <div className="ds-input-label" style={{ marginBottom: 16 }}>
                          How would you prefer to work with us?
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
                          {PAYMENT_OPTIONS.map((p) => (
                            <button
                              key={p}
                              type="button"
                              onClick={() => update('paymentPreference', form.paymentPreference === p ? '' : p)}
                              style={pillStyle(form.paymentPreference === p)}
                            >
                              {p}
                            </button>
                          ))}
                        </div>

                        {/* 2D — Budget range (new) */}
                        <div className="ds-input-label" style={{ marginBottom: 16 }}>
                          What budget feels comfortable?
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                          {BUDGET_OPTIONS.map((b) => (
                            <button
                              key={b}
                              type="button"
                              onClick={() => update('budgetRange', form.budgetRange === b ? '' : b)}
                              style={pillStyle(form.budgetRange === b)}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 2 — Tell us more */}
                    {step === 2 && (
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <h3
                          className="h-2"
                          style={{ marginBottom: 32, fontSize: 'clamp(28px, 3vw, 40px)' }}
                        >
                          Tell us more.
                        </h3>
                        <div className="ds-input-label" style={{ marginBottom: 12 }}>
                          What are you trying to accomplish?
                        </div>
                        <textarea
                          value={form.message}
                          onChange={(e) => update('message', e.target.value)}
                          placeholder="We need a redesign that ranks locally and converts contractor visits into estimate calls…"
                          rows={7}
                          className="ds-input"
                          style={{ resize: 'vertical', flex: 1 }}
                        />
                        {/* Turnstile */}
                        <div ref={turnstileRef} style={{ marginTop: 20 }} />
                      </div>
                    )}

                    {/* Nav buttons */}
                    <div
                      className="contact-step-buttons"
                      style={{
                        marginTop: 'auto',
                        paddingTop: 40,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 12,
                      }}
                    >
                      <button
                        type="button"
                        onClick={prev}
                        disabled={step === 0}
                        style={{
                          padding: '14px 22px',
                          borderRadius: 99,
                          border: '1px solid var(--line-strong)',
                          background: 'transparent',
                          color: step === 0 ? 'var(--ink-mute)' : 'var(--ink)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: 12,
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                          cursor: step === 0 ? 'not-allowed' : 'pointer',
                          opacity: step === 0 ? 0.4 : 1,
                          transition: 'opacity 0.3s',
                        }}
                      >
                        ← Back
                      </button>

                      {step < TOTAL_STEPS - 1 ? (
                        <button
                          type="button"
                          onClick={next}
                          disabled={!canNext}
                          className="ds-btn"
                          style={{ opacity: canNext ? 1 : 0.4, cursor: canNext ? 'pointer' : 'not-allowed' }}
                        >
                          Continue{' '}
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            aria-hidden="true"
                            style={{ display: 'inline', marginLeft: 6 }}
                          >
                            <path
                              d="M2 7h10M7 2l5 5-5 5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={handleSubmit}
                          disabled={!canNext || formStatus.type === 'loading'}
                          className="ds-btn"
                          style={{
                            opacity: canNext && formStatus.type !== 'loading' ? 1 : 0.4,
                            cursor:
                              canNext && formStatus.type !== 'loading' ? 'pointer' : 'not-allowed',
                          }}
                        >
                          {formStatus.type === 'loading' ? 'Sending…' : 'Send inquiry'}
                          {formStatus.type !== 'loading' && (
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              aria-hidden="true"
                              style={{ display: 'inline', marginLeft: 6 }}
                            >
                              <path
                                d="M2 7h10M7 2l5 5-5 5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </button>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-calendly-card:hover {
          border-color: color-mix(in oklch, var(--accent), transparent 45%);
        }
        .contact-calendly-link:hover {
          color: var(--accent) !important;
          transform: translateX(4px);
        }
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-grid > .reveal { position: static !important; }
          .contact-calendly-card { max-width: 520px; }
        }
        @media (max-width: 640px) {
          .contact-step-buttons { flex-direction: column-reverse; }
          .contact-step-buttons button { width: 100%; justify-content: center; }
          .contact-calendly-card {
            padding: 26px 22px 22px !important;
            margin-top: 24px !important;
          }
          .contact-calendly-card img {
            transform: scale(1.01);
          }
          .contact-calendly-link {
            grid-template-columns: 30px 1fr 16px !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </>
  );
}
