/* Webloft homepage — section components.
   All components are exported to window for cross-script use. */

const { useEffect, useRef, useState, useMemo } = React;

/* ---------------- Hooks ---------------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useCounter(target, { duration = 1600, when = true } = {}) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!when) return;
    const start = performance.now();
    let raf;
    const tick = t => {
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

function useInView(threshold = 0.3) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen];
}

/* ---------------- Arrow ---------------- */
function Arrow({ size = 14 }) {
  return (
    <svg className="arrow" width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
    </svg>
  );
}

/* ---------------- Nav ---------------- */
function Nav({ accent }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      transition: "all 0.4s var(--ease)",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      background: scrolled ? "color-mix(in oklch, var(--bg), transparent 25%)" : "transparent",
      borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
    }}>
      <div className="container" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "18px 0",
      }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Logomark />
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 18, letterSpacing: "-0.02em" }}>
            Webloft<span style={{ color: "var(--accent)" }}>.</span>
          </span>
        </a>
        <nav style={{ display: "flex", gap: 4, alignItems: "center" }} className="nav-links">
          {[
            ["Work", "work.html"],
            ["Services", "services.html"],
            ["About", "about.html"],
            ["Contact", "contact.html"],
          ].map(([label, href]) => (
            <a key={label} href={href} style={{
              padding: "10px 16px",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--ink-dim)",
              transition: "color 0.3s var(--ease)",
            }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--ink)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--ink-dim)"}
            >{label}</a>
          ))}
        </nav>
        <a href="contact.html" className="btn btn-primary" style={{ padding: "12px 18px" }}>
          Start a project <Arrow />
        </a>
      </div>
    </header>
  );
}

function Logomark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <rect x="0.5" y="0.5" width="27" height="27" rx="6" stroke="var(--ink)" opacity="0.4"/>
      <path d="M6 9L10 19L14 11L18 19L22 9" stroke="var(--accent)" strokeWidth="1.6" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

/* ---------------- Hero variants ---------------- */
function Hero({ variant = "editorial" }) {
  if (variant === "split") return <HeroSplit />;
  if (variant === "marquee") return <HeroMarquee />;
  return <HeroEditorial />;
}

function HeroEditorial() {
  const [t, setT] = useState(new Date());
  useEffect(() => {
    const i = setInterval(() => setT(new Date()), 1000);
    return () => clearInterval(i);
  }, []);
  const time = t.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
  return (
    <section style={{ paddingTop: "clamp(140px, 18vh, 220px)", paddingBottom: "calc(var(--section-y) * 0.7)", position: "relative", overflow: "hidden" }}>
      <div className="container">
        {/* Top meta row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 24 }} className="reveal">
          <div className="eyebrow"><span className="dot" />Webloft Studio · Est. 2022</div>
          <div className="mono" style={{ fontSize: 12, color: "var(--ink-mute)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            {time} · Online & accepting Q3 projects
          </div>
        </div>

        {/* Main headline — editorial layout */}
        <h1 className="h-display reveal" style={{ position: "relative" }}>
          <span style={{ display: "block" }}>Websites that</span>
          <span style={{ display: "block" }}>
            <span className="italic-serif" style={{ color: "var(--accent)" }}>convert</span>
            <span style={{ display: "inline-block", width: "1.2ch" }}></span>
            <span style={{ position: "relative" }}>visitors</span>
          </span>
          <span style={{ display: "block" }}>into customers.</span>
          <span className="asterisk" style={{ position: "absolute", top: "-0.1em", right: "0.05em", fontSize: "0.18em", lineHeight: 1 }}>✳</span>
        </h1>

        {/* Sub row */}
        <div className="reveal" style={{
          display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64,
          marginTop: 64, alignItems: "end",
        }}>
          <p className="body-lg" style={{ maxWidth: 560, margin: 0, color: "var(--ink-dim)" }}>
            Premium, conversion-focused websites for service businesses that need
            to <span style={{ color: "var(--ink)" }}>look more professional</span>,
            earn trust faster, and turn clicks into real leads.
          </p>
          <div style={{ display: "flex", gap: 12, justifySelf: "end", flexWrap: "wrap" }}>
            <a href="contact.html" className="btn btn-primary">Book a free call <Arrow /></a>
            <a href="work.html" className="btn btn-ghost">See our work <Arrow /></a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ position: "absolute", left: "var(--gutter)", bottom: 24, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.2em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ display: "inline-block", width: 24, height: 1, background: "var(--ink-mute)" }} /> Scroll
      </div>
      <div style={{ position: "absolute", right: "var(--gutter)", bottom: 24, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        (01) — Index
      </div>
    </section>
  );
}

function HeroSplit() {
  return (
    <section style={{ paddingTop: "clamp(120px, 16vh, 200px)", paddingBottom: "calc(var(--section-y) * 0.7)" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 64, alignItems: "center" }}>
        <div className="reveal">
          <div className="eyebrow" style={{ marginBottom: 32 }}><span className="dot" />Web design studio</div>
          <h1 className="h-1">
            We build sites that <span className="italic-serif" style={{ color: "var(--accent)" }}>do the work</span> your sales team is too busy to do.
          </h1>
          <p className="body-lg" style={{ marginTop: 32, maxWidth: 520 }}>
            Custom websites, Webflow builds, and landing pages — engineered around one goal: more qualified leads for service businesses.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 40 }}>
            <a href="contact.html" className="btn btn-primary">Start a project <Arrow /></a>
            <a href="work.html" className="btn btn-ghost">View work <Arrow /></a>
          </div>
        </div>
        <div className="reveal" style={{
          aspectRatio: "4 / 5",
          background: "linear-gradient(180deg, var(--bg-elev), var(--bg-elev-2))",
          border: "1px solid var(--line)",
          borderRadius: "var(--r-lg)",
          position: "relative", overflow: "hidden",
        }}>
          <BrowserMockHero />
        </div>
      </div>
    </section>
  );
}

function HeroMarquee() {
  return (
    <section style={{ paddingTop: "clamp(120px, 14vh, 180px)", paddingBottom: "calc(var(--section-y) * 0.5)" }}>
      <div className="container reveal">
        <div className="eyebrow" style={{ marginBottom: 40 }}><span className="dot" />Webloft · A web studio for service businesses</div>
      </div>
      <div className="marquee-wrap" style={{ marginBottom: 32 }}>
        <div className="marquee">
          {Array.from({ length: 2 }).flatMap((_, k) => [
            <span key={`a${k}`} className="h-display" style={{ paddingRight: 64 }}>Websites that convert ✳</span>,
            <span key={`b${k}`} className="h-display italic-serif" style={{ color: "var(--accent)", paddingRight: 64 }}>built for growth</span>,
            <span key={`c${k}`} className="h-display" style={{ paddingRight: 64 }}>not just looks ✳</span>,
          ])}
        </div>
      </div>
      <div className="container reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, marginTop: 40, alignItems: "end" }}>
        <p className="body-lg" style={{ maxWidth: 540 }}>
          Webloft Studio designs and builds premium, conversion-focused websites for contractors, clinics, salons, restaurants, and service businesses ready to grow.
        </p>
        <div style={{ display: "flex", gap: 12, justifySelf: "end" }}>
          <a href="contact.html" className="btn btn-primary">Book a free call <Arrow /></a>
          <a href="work.html" className="btn btn-ghost">See work <Arrow /></a>
        </div>
      </div>
    </section>
  );
}

function BrowserMockHero() {
  return (
    <div style={{ position: "absolute", inset: 24, display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
        <span style={{ width: 9, height: 9, borderRadius: 99, background: "var(--line-strong)" }} />
        <span style={{ width: 9, height: 9, borderRadius: 99, background: "var(--line-strong)" }} />
        <span style={{ width: 9, height: 9, borderRadius: 99, background: "var(--line-strong)" }} />
      </div>
      <div style={{ flex: 1, background: "var(--bg)", border: "1px solid var(--line)", borderRadius: 6, padding: 24, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}><span className="dot" />Live preview</div>
          <div className="h-2" style={{ fontSize: "clamp(20px, 2.4vw, 36px)" }}>
            Trusted plumbing in <span className="italic-serif" style={{ color: "var(--accent)" }}>Brooklyn</span>
          </div>
          <p className="body-sm" style={{ marginTop: 12 }}>24/7 emergency service. Family-owned since 1998.</p>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <span style={{ padding: "10px 14px", background: "var(--accent)", color: "var(--accent-ink)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", borderRadius: 99 }}>Get a quote</span>
          <span style={{ padding: "10px 14px", border: "1px solid var(--line-strong)", color: "var(--ink-dim)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", borderRadius: 99 }}>Call now</span>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Logo wall ---------------- */
function LogoWall() {
  const logos = ["NORTHSIDE", "MERIDIAN", "CASCADE", "FERN & OAK", "OBELISK", "RENWICK", "HARBOR CO.", "ATLAS BUILT"];
  return (
    <section style={{ paddingTop: "calc(var(--section-y) * 0.4)", paddingBottom: "calc(var(--section-y) * 0.4)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="container reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24, marginBottom: 32 }}>
        <div className="eyebrow"><span className="dot" />Trusted by ambitious service businesses</div>
        <div className="mono" style={{ fontSize: 12, color: "var(--ink-mute)" }}>(02) — Clients</div>
      </div>
      <div className="marquee-wrap">
        <div className="marquee">
          {Array.from({ length: 2 }).flatMap((_, k) => logos.map((l, i) => (
            <span key={`${k}-${i}`} style={{
              fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 28, letterSpacing: "0.02em",
              color: "var(--ink-mute)", paddingRight: 64,
              display: "inline-flex", alignItems: "center", gap: 16,
            }}>
              <span style={{ width: 14, height: 14, border: "1.5px solid currentColor", display: "inline-block", transform: "rotate(45deg)" }} />
              {l}
            </span>
          )))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stats ---------------- */
function Stats() {
  const [ref, seen] = useInView(0.3);
  const stats = [
    { val: 20, suffix: "+", label: "Sites shipped", k: "Across different industries" },
    { val: 312, suffix: "%", label: "Avg. lead lift", k: "First 90 days post-launch" },
    { val: 98, suffix: "/100", label: "PageSpeed", k: "On every site we ship" },
    { val: 21, suffix: " days", label: "Avg. timeline", k: "From kickoff to launch" },
  ];
  return (
    <section ref={ref} style={{ paddingTop: "calc(var(--section-y) * 0.5)", paddingBottom: "calc(var(--section-y) * 1.2)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 48 }} className="reveal">
          <div className="eyebrow"><span className="dot" />The numbers</div>
          <div className="mono" style={{ fontSize: 12, color: "var(--ink-mute)" }}>(03) — Receipts</div>
        </div>
        <div className="stats-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
        }}>
          {stats.map((s, i) => (
            <StatCell key={i} {...s} seen={seen} index={i} last={i === stats.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCell({ val, suffix, label, k, seen, index, last }) {
  const n = useCounter(val, { when: seen, duration: 1800 + index * 150 });
  const pretty = val < 10 ? n.toFixed(1) : Math.round(n);
  return (
    <div style={{
      padding: "48px 28px",
      borderRight: last ? "none" : "1px solid var(--line)",
      position: "relative",
    }}>
      <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.16em", marginBottom: 16 }}>
        0{index + 1} / 04
      </div>
      <div className="ticker" style={{
        fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(48px, 5vw, 88px)",
        letterSpacing: "-0.03em", lineHeight: 1, color: "var(--ink)"
      }}>
        {pretty}<span style={{ color: "var(--accent)" }}>{suffix}</span>
      </div>
      <div style={{ marginTop: 18, fontFamily: "var(--font-display)", fontSize: 18, letterSpacing: "-0.01em" }}>{label}</div>
      <div className="body-sm" style={{ marginTop: 6 }}>{k}</div>
    </div>
  );
}

/* ---------------- Manifesto / Why us ---------------- */
function Manifesto() {
  const lines = [
    "We don't make brochures.",
    <span key="2">We make websites that do the <span className="italic-serif" style={{ color: "var(--accent)" }}>actual work</span>.</span>,
    "Every section earns its place.",
    "Every click moves toward a lead.",
  ];
  return (
    <section>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 56 }} className="reveal">
          <div className="eyebrow"><span className="dot" />Why Webloft</div>
          <div className="mono" style={{ fontSize: 12, color: "var(--ink-mute)" }}>(04) — Manifesto</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, alignItems: "start" }} className="manifesto-row">
          <div className="reveal">
            <div className="h-3" style={{ marginBottom: 12 }}>A studio, not a factory.</div>
            <p className="body" style={{ maxWidth: 320 }}>
              No bloated agency markup. No template churn. Just a small team that ships beautiful, fast, conversion-engineered sites for businesses that mean it.
            </p>
          </div>
          <h2 className="h-1 reveal" style={{ fontWeight: 400 }}>
            {lines.map((l, i) => (
              <span key={i} style={{ display: "block" }}>{l}</span>
            ))}
          </h2>
        </div>

        {/* 4 pillars */}
        <div style={{ marginTop: 96 }}>
          <div className="hairline" style={{ marginBottom: 40 }} />
          <div className="pillars-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}>
            {[
              { n: "01", t: "Conversion-first", b: "Every page reverse-engineered from a measurable outcome — a call, a form, a booking." },
              { n: "02", t: "Built to be fast", b: "98+ PageSpeed, on real devices, on launch day. We benchmark every release." },
              { n: "03", t: "Honest pricing", b: "Fixed-fee scopes. No surprise invoices. No vague retainers." },
              { n: "04", t: "Owned by you", b: "Your domain, your hosting, your CMS. We don't hold anything hostage." },
            ].map((p, i, arr) => (
              <div key={p.n} className="reveal" style={{
                padding: "0 24px",
                borderRight: i === arr.length - 1 ? "none" : "1px solid var(--line)",
              }}>
                <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.16em", marginBottom: 18 }}>{p.n}</div>
                <div className="h-3" style={{ marginBottom: 12 }}>{p.t}</div>
                <p className="body-sm">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* expose */
Object.assign(window, {
  Arrow, Nav, Logomark, Hero, LogoWall, Stats, Manifesto, useReveal, useCounter, useInView,
});
