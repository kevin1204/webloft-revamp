'use client';

import { useState, useId } from 'react';

type Variant = 'modal' | 'inline' | 'footer';
type Status = 'idle' | 'loading' | 'success' | 'error';

export default function SubscribeForm({ variant }: { variant: Variant }) {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const uid = useId();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (honeypot) return; // silently reject bots
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
      } else {
        setErrorMsg(data.error || 'Something went wrong.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
    }
  }

  /* ── Footer variant ─────────────────────────────────────── */
  if (variant === 'footer') {
    if (status === 'success') {
      return (
        <div className="wl-subscribe-footer-success">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p>You&apos;re in. Watch your inbox for practical website ideas.</p>
        </div>
      );
    }
    return (
      <form className="wl-blog-newsletter-form" onSubmit={handleSubmit} noValidate>
        <input
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          aria-hidden="true"
        />
        <label htmlFor={`${uid}-email`}>Email address</label>
        <div>
          <input
            id={`${uid}-email`}
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === 'loading'}
          />
          <button type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? '…' : 'Subscribe'}
          </button>
        </div>
        {status === 'error' && <p className="wl-subscribe-footer-error">{errorMsg}</p>}
      </form>
    );
  }

  /* ── Modal & inline variants ─────────────────────────────── */
  if (status === 'success') {
    return (
      <div className="wl-subscribe-success">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p>You&apos;re in. Watch your inbox for practical website ideas.</p>
      </div>
    );
  }

  return (
    <form className="wl-subscribe-form" onSubmit={handleSubmit} noValidate>
      <input
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        aria-hidden="true"
      />
      <div className="wl-subscribe-row">
        <input
          id={`${uid}-email`}
          aria-label="Email address"
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === 'loading'}
          className="wl-subscribe-input"
        />
        <button type="submit" disabled={status === 'loading'} className="wl-subscribe-btn-submit">
          {status === 'loading' ? '…' : 'Subscribe'}
        </button>
      </div>
      {status === 'error' && <p className="wl-subscribe-error">{errorMsg}</p>}
    </form>
  );
}
