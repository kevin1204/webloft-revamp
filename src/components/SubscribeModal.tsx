'use client';

import { useRef } from 'react';
import SubscribeForm from './SubscribeForm';

export default function SubscribeModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function open() {
    dialogRef.current?.showModal();
  }

  function close() {
    dialogRef.current?.close();
  }

  function handleBackdropClick(e: React.MouseEvent<HTMLDialogElement>) {
    if (e.target === dialogRef.current) close();
  }

  return (
    <>
      <button className="ds-btn ds-btn-ghost wl-subscribe-trigger" onClick={open}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
        Subscribe
      </button>

      <dialog ref={dialogRef} className="wl-subscribe-modal" onClick={handleBackdropClick}>
        <div className="wl-subscribe-modal-inner">

          {/* Header strip */}
          <div className="wl-subscribe-modal-head">
            <div className="wl-subscribe-modal-meta">
              <span className="eyebrow">
                <span className="dot" />
                Webloft Journal
              </span>
              <button className="wl-subscribe-modal-close" onClick={close} aria-label="Close">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <h2 className="wl-subscribe-modal-title">
              Practical website ideas<br />
              <em>in your inbox.</em>
            </h2>

            <p className="wl-subscribe-modal-desc">
              No noise. Occasional notes on design, SEO, conversion, and the website decisions that help businesses grow — whenever they&apos;re useful, not on a schedule.
            </p>
          </div>

          {/* Form area */}
          <div className="wl-subscribe-modal-body">
            <SubscribeForm variant="modal" />
            <p className="wl-subscribe-modal-trust">
              No spam. Unsubscribe at any time.
            </p>
          </div>

          {/* Decorative element */}
          <div className="wl-subscribe-modal-deco" aria-hidden="true">✳</div>
        </div>
      </dialog>
    </>
  );
}
