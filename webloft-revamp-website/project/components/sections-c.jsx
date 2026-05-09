/* Webloft homepage — section components, part C: testimonials, pricing, faq, cta, footer. */

const { useEffect: useEffectC, useRef: useRefC, useState: useStateC } = React;

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const items = [
    { q: "We had calls coming in within 48 hours of launch. The site does the convincing — we just close.", a: "Maria Voss", role: "Owner, Northside Plumbing", initials: "MV" },
    { q: "Felt like a luxury brand the moment it went live. Bookings doubled in six weeks.", a: "Dr. Renee Park", role: "Founder, Meridian Aesthetics", initials: "RP" },
    { q: "Honest, fast, and obsessive about the details. They moved us off WordPress and never looked back.", a: "Jordan Cho", role: "Director, Cascade Builds", initials: "JC" },
    { q: "Our cost per lead dropped by half. Same ad spend, dramatically better website.", a: "Tomas Reyes", role: "Marketing Lead, Atlas Built", initials: "TR" },
    { q: "I expected a website. We got a growth system. Forms, automations, the works.", a: "Hana Nakamura", role: "Owner, Fern & Oak Wellness", initials: "HN" },
    { q: "They asked questions our last agency never bothered with. The site reflects that.", a: "Brett Lyon", role: "GM, Harbor Co.", initials: "BL" },
  ];
  return (
    <section>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 56 }} className="reveal">
          <div className="eyebrow"><span className="dot" />What clients say</div>
          <div className="mono" style={{ fontSize: 12, color: "var(--ink-mute)" }}>(08) — Testimonials</div>
        </div>
        <div className="reveal" style={{ marginBottom: 80 }}>
          <h2 className="h-1" style={{ maxWidth: 1100 }}>
            Built once. Quoted <span className="italic-serif" style={{ color: "var(--accent)" }}>often</span>.
          </h2>
        </div>
      </div>

      <div className="marquee-wrap no-mask" style={{ paddingBottom: 24 }}>
        <div className="marquee" style={{ animationDuration: "calc(60s / var(--motion))" }}>
          {Array.from({ length: 2 }).flatMap((_, k) => items.map((t, i) => (
            <TestimonialCard key={`${k}-${i}`} t={t} />
          )))}
        </div>
      </div>
      <div className="marquee-wrap no-mask" style={{ paddingTop: 24 }}>
        <div className="marquee" style={{ animationDuration: "calc(75s / var(--motion))", animationDirection: "reverse" }}>
          {Array.from({ length: 2 }).flatMap((_, k) => items.slice().reverse().map((t, i) => (
            <TestimonialCard key={`${k}-${i}-r`} t={t} />
          )))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t }) {
  return (
    <div className="card" style={{
      display: "inline-flex", flexDirection: "column", justifyContent: "space-between",
      width: 440, minHeight: 220, padding: 32, marginRight: 24,
      whiteSpace: "normal",
      borderRadius: "var(--r-lg)",
    }}>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 22, lineHeight: 1.3, letterSpacing: "-0.015em", color: "var(--ink)" }}>
        <span style={{ color: "var(--accent)", marginRight: 6 }}>“</span>{t.q}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 24 }}>
        <div style={{
          width: 40, height: 40, borderRadius: 99,
          background: "var(--bg-elev-2)",
          border: "1px solid var(--line-strong)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent)", letterSpacing: "0.04em",
        }}>{t.initials}</div>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 14 }}>{t.a}</div>
          <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.06em" }}>{t.role}</div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Pricing ---------------- */
function Pricing() {
  const tiers = [
    {
      n: "Launch",
      price: "$3,400",
      sub: "One-page landing site",
      bullets: ["Custom design", "Single landing page", "Lead form + automated alerts", "GA4 + tracking", "On-page SEO", "21-day delivery"],
      cta: "Start with Launch",
      featured: false,
    },
    {
      n: "Studio",
      price: "$6,800",
      sub: "Full website, 5–8 pages",
      bullets: ["Everything in Launch", "5–8 page site + CMS", "Custom design system", "Premium photography direction", "Schema + technical SEO", "Optional AI chatbot", "30-day delivery"],
      cta: "Start with Studio",
      featured: true,
    },
    {
      n: "Atelier",
      price: "From $14,000",
      sub: "Custom build, no ceiling",
      bullets: ["Bespoke scope", "Animation & motion design", "Multi-location / multi-language", "Bookings, payments, dashboards", "Conversion strategy retainer", "Senior-led, end-to-end"],
      cta: "Talk to us",
      featured: false,
    },
  ];
  return (
    <section style={{ background: "var(--bg-elev)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 56 }} className="reveal">
          <div className="eyebrow"><span className="dot" />Pricing</div>
          <div className="mono" style={{ fontSize: 12, color: "var(--ink-mute)" }}>(09) — Investment</div>
        </div>
        <div className="reveal" style={{ marginBottom: 80, display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, alignItems: "end" }}>
          <h2 className="h-1">
            Fixed scopes. <br /><span className="italic-serif" style={{ color: "var(--accent)" }}>No surprise</span> invoices.
          </h2>
          <p className="body-lg" style={{ maxWidth: 440, justifySelf: "end" }}>
            Three starting points — pick the one closest to where you are, and we'll shape the rest on the discovery call.
          </p>
        </div>

        <div className="pricing-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--line)" }}>
          {tiers.map((t, i, arr) => <PricingCard key={t.n} t={t} last={i === arr.length - 1} />)}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ t, last }) {
  return (
    <div className="reveal" style={{
      borderRight: last ? "none" : "1px solid var(--line)",
      borderBottom: "1px solid var(--line)",
      padding: t.featured ? 48 : 40,
      background: t.featured ? "var(--bg-elev-2)" : "transparent",
      display: "flex", flexDirection: "column",
      position: "relative",
      minHeight: 540,
    }}>
      {t.featured && (
        <div style={{
          position: "absolute", top: 24, right: 24,
          padding: "6px 12px", borderRadius: 99,
          background: "var(--accent)", color: "var(--accent-ink)",
          fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase",
        }}>Most popular</div>
      )}
      <div style={{ fontFamily: "var(--font-display)", fontSize: 24, letterSpacing: "-0.01em" }}>{t.n}</div>
      <div className="body-sm" style={{ marginTop: 4 }}>{t.sub}</div>
      <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 4vw, 64px)", letterSpacing: "-0.03em", marginTop: 32, lineHeight: 1 }}>
        {t.price}
      </div>
      <div className="hairline" style={{ margin: "32px 0" }} />
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
        {t.bullets.map(b => (
          <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 14, color: "var(--ink-dim)" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0, marginTop: 4 }}>
              <path d="M2 7.5L5.5 11L12 3" stroke="var(--accent)" strokeWidth="1.6" fill="none" strokeLinecap="square"/>
            </svg>
            {b}
          </li>
        ))}
      </ul>
      <a href="contact.html" className={`btn ${t.featured ? "btn-primary" : "btn-ghost"}`} style={{ marginTop: "auto", justifyContent: "center" }}>
        {t.cta} <Arrow />
      </a>
    </div>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const items = [
    { q: "How long does a typical project take?", a: "Most Studio projects launch in 21–30 days from kickoff. Landing pages can ship in 7–10. Atelier (custom) timelines depend on scope, but we always commit to a fixed launch date before we start." },
    { q: "Do you build on Webflow or custom code?", a: "Both. Webflow is our default — fast, beautiful, easy for you to edit. For complex apps, multi-language, or unusual integrations, we build with Next.js, Astro, or whatever fits the job. We'll recommend the right stack on the discovery call." },
    { q: "What if I already have a website?", a: "Most of our work is redesigns. We audit what's converting, keep what's earning, and rebuild everything else around real conversion goals. Migrations, redirects, and SEO preservation are part of the standard process." },
    { q: "Will you handle hosting and the domain?", a: "Yes — we set up hosting, DNS, SSL, email-routing, and deliver a launch checklist 47 items deep. You own everything. We just handle the boring part if you want us to." },
    { q: "Do you offer ongoing support?", a: "Optional monthly retainers cover content updates, A/B testing, SEO, and conversion optimization. Most clients stay on for 6+ months because the site keeps earning more once the data starts coming in." },
    { q: "Can you integrate AI chatbots?", a: "Yes. We integrate AI chat (typically built on GPT or Claude) trained on your services, pricing, and FAQs. It captures leads 24/7 and routes hot ones straight to your phone." },
    { q: "How is pricing handled?", a: "Fixed-fee, no hourly billing. 50% to start, 50% on launch. Atelier projects can be milestone-based. No surprise invoices, ever." },
    { q: "What industries do you specialize in?", a: "Service businesses — contractors, clinics, salons, fitness studios, restaurants, healthcare, home services. If you have customers calling, booking, or filling out forms, we know how to make your site earn more of them." },
  ];
  return (
    <section>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 56 }} className="reveal">
          <div className="eyebrow"><span className="dot" />Frequently asked</div>
          <div className="mono" style={{ fontSize: 12, color: "var(--ink-mute)" }}>(10) — FAQ</div>
        </div>
        <div className="faq-grid reveal" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, alignItems: "start" }}>
          <div>
            <h2 className="h-1">
              Things people <br /><span className="italic-serif" style={{ color: "var(--accent)" }}>actually</span> ask.
            </h2>
            <p className="body" style={{ marginTop: 32, maxWidth: 320 }}>
              Don't see yours? Drop us a line — we usually reply within a few hours.
            </p>
            <a href="contact.html" className="btn btn-ghost" style={{ marginTop: 32 }}>Ask anything <Arrow /></a>
          </div>
          <div style={{ borderTop: "1px solid var(--line)" }}>
            {items.map((item, i) => <FAQItem key={i} item={item} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ item, index }) {
  const [open, setOpen] = useStateC(index === 0);
  return (
    <div style={{ borderBottom: "1px solid var(--line)" }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: "100%", textAlign: "left",
          padding: "24px 0",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24,
          cursor: "pointer",
        }}
      >
        <div style={{ display: "flex", gap: 24, alignItems: "baseline" }}>
          <span className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.16em" }}>0{index + 1}</span>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(18px, 1.7vw, 22px)", letterSpacing: "-0.015em" }}>{item.q}</span>
        </div>
        <span style={{
          width: 32, height: 32,
          flexShrink: 0,
          border: "1px solid var(--line-strong)",
          borderRadius: 99,
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "background 0.3s var(--ease), color 0.3s var(--ease), transform 0.3s var(--ease)",
          background: open ? "var(--accent)" : "transparent",
          color: open ? "var(--accent-ink)" : "var(--ink)",
          transform: open ? "rotate(45deg)" : "rotate(0)",
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12"><path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5"/></svg>
        </span>
      </button>
      <div style={{
        maxHeight: open ? 200 : 0,
        overflow: "hidden",
        transition: "max-height 0.5s var(--ease), padding 0.5s var(--ease)",
        paddingLeft: 47, paddingBottom: open ? 24 : 0,
      }}>
        <p className="body" style={{ maxWidth: 640 }}>{item.a}</p>
      </div>
    </div>
  );
}

/* ---------------- CTA ---------------- */
function CTA() {
  const [t, setT] = useStateC(new Date());
  useEffectC(() => {
    const i = setInterval(() => setT(new Date()), 60000);
    return () => clearInterval(i);
  }, []);
  return (
    <section style={{ paddingTop: 0, paddingBottom: 0 }}>
      <div className="container">
        <div className="reveal" style={{
          background: "var(--accent)",
          color: "var(--accent-ink)",
          borderRadius: "var(--r-lg)",
          padding: "clamp(56px, 8vw, 120px) clamp(40px, 6vw, 96px)",
          position: "relative",
          overflow: "hidden",
        }}>
          <div className="mono" style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 32, opacity: 0.7 }}>
            <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: 99, background: "currentColor", marginRight: 10, transform: "translateY(-2px)" }} />
            Booking Q3 — 2 slots remain
          </div>
          <h2 className="h-display" style={{ color: "var(--accent-ink)", fontSize: "clamp(48px, 8vw, 144px)" }}>
            Ready to make <br />a website that <br /><span style={{ fontStyle: "italic", fontFamily: "Instrument Serif, serif", fontWeight: 400 }}>actually</span> works?
          </h2>
          <div style={{ display: "flex", gap: 16, marginTop: 56, flexWrap: "wrap" }}>
            <a href="contact.html" style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              padding: "20px 28px", borderRadius: 99,
              background: "var(--accent-ink)", color: "var(--accent)",
              fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase",
            }}>
              Book a free 30-min call <Arrow />
            </a>
            <a href="mailto:hello@webloftstudio.com" style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              padding: "20px 28px", borderRadius: 99,
              background: "transparent", color: "var(--accent-ink)",
              border: "1px solid color-mix(in oklch, var(--accent-ink), transparent 70%)",
              fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase",
            }}>
              hello@webloftstudio.com <Arrow />
            </a>
          </div>
          <div style={{
            position: "absolute", right: -40, bottom: -40, fontSize: 320, opacity: 0.08, lineHeight: 1,
            fontFamily: "Instrument Serif, serif", fontStyle: "italic", pointerEvents: "none",
          }}>✳</div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  const cities = [
    { c: "Toronto", t: "Toronto, Canada" },
    { c: "Remote", t: "Remote, EST" },
  ];
  return (
    <footer style={{ marginTop: 96, borderTop: "1px solid var(--line)", paddingTop: 64, paddingBottom: 32 }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48, marginBottom: 80 }} className="footer-grid">
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-0.03em", lineHeight: 0.95 }}>
              Webloft<span style={{ color: "var(--accent)" }}>.</span>
            </div>
            <p className="body" style={{ maxWidth: 320, marginTop: 24 }}>
              Premium, conversion-focused websites for service businesses ready to grow.
            </p>
          </div>
          <FooterCol title="Studio" items={[["Work", "work.html"], ["Services", "services.html"], ["About", "about.html"], ["Contact", "contact.html"]]} />
          <FooterCol title="Services" items={[["Custom design", "services.html"], ["Webflow", "services.html"], ["Redesigns", "services.html"], ["Landing pages", "services.html"], ["SEO", "services.html"]]} />
          <FooterCol title="Connect" items={[["hello@webloftstudio.com", "mailto:hello@webloftstudio.com"], ["Instagram", "#"], ["LinkedIn", "#"], ["Dribbble", "#"], ["Book a call", "contact.html"]]} />
        </div>

        {/* Big wordmark */}
        <div style={{
          fontFamily: "var(--font-display)", fontWeight: 500,
          fontSize: "clamp(80px, 18vw, 280px)",
          letterSpacing: "-0.04em", lineHeight: 0.85,
          textAlign: "left",
          color: "var(--ink)",
          margin: "0 0 48px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          paddingBottom: 0,
        }}>
          WEBLOFT<span style={{ color: "var(--accent)" }}>.</span>STUDIO
        </div>

        <div className="hairline" />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 24, flexWrap: "wrap", gap: 16 }}>
          <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            © 2026 Webloft Studio · All rights reserved
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            {cities.map(c => (
              <div key={c.c} className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                <span style={{ color: "var(--accent)" }}>●</span> {c.t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 20 }}>{title}</div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map(([l, h]) => (
          <li key={l}><a href={h} style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "var(--ink)" }}>{l}</a></li>
        ))}
      </ul>
    </div>
  );
}

Object.assign(window, { Testimonials, TestimonialCard, Pricing, PricingCard, FAQ, FAQItem, CTA, Footer, FooterCol });
