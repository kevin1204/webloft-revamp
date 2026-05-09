'use client';

import { useState, useEffect, useRef } from 'react';
import { trackContactFormSubmission } from '@/lib/analytics';
import PageHeader from '@/components/PageHeader';

const TURNSTILE_SITE_KEY = '0x4AAAAAACMuI6UiH_wsKL5g';
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
const BUDGET_OPTIONS = ['< $5k', '$5k–10k', '$10k–25k', '$25k+'];

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
    budget: '$5k–10k',
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
          budget: form.budget,
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
      <PageHeader
        kicker="Start a project"
        index="(04) — Contact"
        title="Tell us about"
        italic="your business."
        blurb="Three quick questions, then we'll book a free 30-minute discovery call. We typically reply within a few hours."
      />

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
            {/* Sidebar */}
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
              <ContactLine
                label="London"
                value="695 Talbot St"
              />
              <ContactLine label="Hours" value="Mon–Fri · 9–6 EST" />
              <div
                style={{
                  borderTop: '1px solid var(--line)',
                  margin: '32px 0',
                }}
              />
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
                Booking · Q3 2026
              </div>
              <p className="body-sm">2 of 4 slots remain. Next start window: June 8.</p>
            </div>

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
                    We&apos;ll review your inquiry and reply within a few hours with a calendar
                    link for your discovery call.
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

                  {/* Step 1 — What do you need */}
                  {step === 1 && (
                    <div>
                      <h3
                        className="h-2"
                        style={{ marginBottom: 32, fontSize: 'clamp(28px, 3vw, 40px)' }}
                      >
                        What do you need?
                      </h3>
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
                      <div className="ds-input-label" style={{ marginBottom: 16 }}>
                        Estimated budget
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {BUDGET_OPTIONS.map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => update('budget', b)}
                            style={pillStyle(form.budget === b)}
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
      </section>
    </>
  );
}
