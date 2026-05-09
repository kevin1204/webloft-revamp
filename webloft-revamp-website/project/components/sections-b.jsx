/* Webloft homepage — section components, part B. */

const { useEffect: useEffectB, useRef: useRefB, useState: useStateB, useMemo: useMemoB } = React;

/* ---------------- Services ---------------- */
function Services() {
  const services = [
    { n: "01", t: "Custom website design", d: "Bespoke, brand-led design systems built from scratch — no templates.", tags: ["Discovery", "UX", "UI", "Design system"] },
    { n: "02", t: "Website development", d: "Hand-built, fast, accessible, SEO-ready. Webflow, Framer, or custom.", tags: ["Webflow", "Framer", "Next.js", "CMS"] },
    { n: "03", t: "Website redesigns", d: "Take a tired, underperforming site and rebuild it around real conversion goals.", tags: ["Audit", "Rebuild", "Migration"] },
    { n: "04", t: "Landing pages", d: "Single-page, single-goal pages engineered to convert paid traffic.", tags: ["A/B-ready", "Funnel", "Tracking"] },
    { n: "05", t: "SEO & on-page setup", d: "Schema, metadata, sitemaps, Core Web Vitals, content scaffolding — done right.", tags: ["Technical SEO", "Schema", "Speed"] },
    { n: "06", t: "Lead capture & automation", d: "Forms, automated email/SMS, CRM piping, AI chatbots — every lead, instantly notified.", tags: ["Forms", "CRM", "AI chat", "Notifications"] },
    { n: "07", t: "Hosting, domains & maintenance", d: "We manage the boring infrastructure so you don't have to think about it.", tags: ["Uptime", "Backups", "Updates"] },
    { n: "08", t: "Analytics & tracking", d: "GA4, conversion events, call tracking, heatmaps — see what's actually working.", tags: ["GA4", "GTM", "CallRail"] },
  ];
  return (
    <section style={{ background: "var(--bg-elev)", paddingTop: "calc(var(--section-y) * 1.3)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 56 }} className="reveal">
          <div className="eyebrow"><span className="dot" />What we do</div>
          <div className="mono" style={{ fontSize: 12, color: "var(--ink-mute)" }}>(05) — Services</div>
        </div>
        <div className="reveal" style={{ marginBottom: 64, display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 48, alignItems: "end" }}>
          <h2 className="h-1">
            Eight ways we turn your <span className="italic-serif" style={{ color: "var(--accent)" }}>website</span> into a <span className="italic-serif" style={{ color: "var(--accent)" }}>growth engine</span>.
          </h2>
          <p className="body-lg" style={{ maxWidth: 440, justifySelf: "end" }}>
            Pick what you need or bundle the lot. Every service is fixed-fee, scope-clear, and led by a senior designer.
          </p>
        </div>

        <div style={{ borderTop: "1px solid var(--line)" }}>
          {services.map((s, i) => <ServiceRow key={s.n} s={s} index={i} />)}
        </div>

        <div className="reveal" style={{ display: "flex", justifyContent: "center", marginTop: 64 }}>
          <a href="services.html" className="btn btn-ghost">All services in detail <Arrow /></a>
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ s, index }) {
  const [open, setOpen] = useStateB(false);
  return (
    <div
      className="reveal service-row"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{
        borderBottom: "1px solid var(--line)",
        padding: "28px 0",
        cursor: "pointer",
        transition: "background 0.4s var(--ease), padding 0.4s var(--ease)",
        background: open ? "var(--bg-elev-2)" : "transparent",
        paddingLeft: open ? 24 : 0,
        paddingRight: open ? 24 : 0,
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "60px 1fr 2fr auto", gap: 32, alignItems: "center" }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.16em" }}>
          {s.n} / 08
        </div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px, 2.2vw, 32px)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
          {s.t}
        </div>
        <div className="body" style={{
          maxWidth: 540,
          opacity: open ? 1 : 0.6,
          transition: "opacity 0.4s var(--ease)",
        }}>
          {s.d}
        </div>
        <div style={{
          width: 40, height: 40, borderRadius: 99,
          border: "1px solid var(--line-strong)",
          display: "flex", alignItems: "center", justifyContent: "center",
          background: open ? "var(--accent)" : "transparent",
          color: open ? "var(--accent-ink)" : "var(--ink)",
          transition: "all 0.4s var(--ease)",
        }}>
          <Arrow />
        </div>
      </div>
      <div style={{
        maxHeight: open ? 80 : 0,
        overflow: "hidden",
        transition: "max-height 0.5s var(--ease), margin-top 0.5s var(--ease)",
        marginTop: open ? 20 : 0,
      }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", paddingLeft: 92 }}>
          {s.tags.map(t => (
            <span key={t} className="mono" style={{
              fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase",
              padding: "6px 12px", borderRadius: 99,
              border: "1px solid var(--line-strong)", color: "var(--ink-dim)",
            }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Process ---------------- */
function Process() {
  const steps = [
    { n: "01", t: "Discovery call", d: "30 min, free. We dig into your business, your customers, and what 'a win' actually looks like.", days: "Day 0" },
    { n: "02", t: "Strategy & scope", d: "Sitemap, conversion goals, content plan. Fixed scope, fixed fee, fixed timeline.", days: "Day 1–3" },
    { n: "03", t: "Design", d: "Brand-led visual direction, then full responsive UI. Two rounds of refinement.", days: "Day 4–10" },
    { n: "04", t: "Build", d: "Pixel-perfect, performant build with CMS, forms, tracking, and SEO foundations.", days: "Day 11–18" },
    { n: "05", t: "Launch", d: "DNS, redirects, GA4, training, and a launch checklist 47 items deep.", days: "Day 19–21" },
    { n: "06", t: "Grow", d: "Optional retainer for content, A/B tests, SEO, and continuous conversion improvement.", days: "Ongoing" },
  ];
  return (
    <section>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 56 }} className="reveal">
          <div className="eyebrow"><span className="dot" />The process</div>
          <div className="mono" style={{ fontSize: 12, color: "var(--ink-mute)" }}>(06) — How we work</div>
        </div>
        <div className="reveal" style={{ marginBottom: 80 }}>
          <h2 className="h-1" style={{ maxWidth: 920 }}>
            Six steps. Twenty-one days. <span className="italic-serif" style={{ color: "var(--accent)" }}>Zero</span> surprises.
          </h2>
        </div>

        <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--line)", borderLeft: "1px solid var(--line)" }}>
          {steps.map((s, i) => (
            <div key={s.n} className="reveal" style={{
              padding: 32,
              borderRight: "1px solid var(--line)",
              borderBottom: "1px solid var(--line)",
              minHeight: 280,
              display: "flex", flexDirection: "column",
              position: "relative",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 32 }}>
                <div className="mono" style={{ fontSize: 11, color: "var(--accent)", letterSpacing: "0.16em" }}>{s.n}</div>
                <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.12em" }}>{s.days}</div>
              </div>
              <div className="h-3" style={{ marginBottom: 14 }}>{s.t}</div>
              <p className="body-sm" style={{ marginTop: "auto" }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Case studies ---------------- */
function Cases() {
  const cases = [
    {
      tag: "Plumbing · Brooklyn",
      t: "Northside Plumbing",
      kpi: ["+412% inbound leads", "98 PageSpeed", "21-day launch"],
      blurb: "From outdated WordPress to a sleek Webflow site with call tracking, instant SMS lead alerts, and local SEO that actually ranks.",
      tone: "warm",
    },
    {
      tag: "Med spa · Austin",
      t: "Meridian Aesthetics",
      kpi: ["+218% bookings", "3.2× session time", "$0 ad-spend lift"],
      blurb: "A premium, calm visual system + booking-funnel landing pages turned cold traffic into a 6-week waitlist.",
      tone: "cool",
    },
    {
      tag: "Construction · Denver",
      t: "Cascade Builds",
      kpi: ["+289% qualified leads", "47 form fills/wk", "18-month retainer"],
      blurb: "Project portfolio, lead-magnet quote tool, and AI chatbot routing — built around their estimator's actual day.",
      tone: "earth",
    },
  ];
  return (
    <section style={{ background: "var(--bg-elev)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 56 }} className="reveal">
          <div className="eyebrow"><span className="dot" />Recent work</div>
          <div className="mono" style={{ fontSize: 12, color: "var(--ink-mute)" }}>(07) — Case studies</div>
        </div>
        <div className="reveal" style={{ marginBottom: 64, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "end" }}>
          <h2 className="h-1">
            Real businesses. <br />Real <span className="italic-serif" style={{ color: "var(--accent)" }}>numbers</span>.
          </h2>
          <a href="work.html" className="btn btn-ghost" style={{ justifySelf: "end" }}>All case studies <Arrow /></a>
        </div>

        <div style={{ display: "grid", gap: 24 }}>
          {cases.map((c, i) => <CaseCard key={c.t} c={c} index={i} />)}
        </div>
      </div>
    </section>
  );
}

function CaseCard({ c, index }) {
  const [hover, setHover] = useStateB(false);
  const palette = {
    warm: { bg: "linear-gradient(135deg, #2a1a14, #14110d)", accent: "#f4a574" },
    cool: { bg: "linear-gradient(135deg, #131b22, #0d1118)", accent: "#7fb2d9" },
    earth: { bg: "linear-gradient(135deg, #1b1f15, #11140e)", accent: "#9bbf72" },
  }[c.tone];
  return (
    <a
      href="work.html"
      className="card reveal"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 0,
        overflow: "hidden", position: "relative",
        borderRadius: "var(--r-lg)",
        background: "var(--bg-elev-2)",
      }}
    >
      {/* Left preview */}
      <div style={{
        background: palette.bg,
        minHeight: 360,
        position: "relative",
        overflow: "hidden",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 32,
      }}>
        <div style={{
          position: "absolute", inset: "10% 12%",
          background: "color-mix(in oklch, #000, transparent 70%)",
          border: "1px solid color-mix(in oklch, #fff, transparent 80%)",
          borderRadius: 8,
          padding: 18,
          backdropFilter: "blur(2px)",
          transform: hover ? "translateY(-6px) rotate(-1deg)" : "translateY(0) rotate(0)",
          transition: "transform 0.6s var(--ease)",
        }}>
          <div className="mono" style={{ fontSize: 10, color: "color-mix(in oklch, #fff, transparent 40%)", letterSpacing: "0.12em", marginBottom: 14, textTransform: "uppercase" }}>www.{c.t.toLowerCase().replace(/[^a-z]/g, "")}.com</div>
          <div style={{ fontFamily: "var(--font-display)", color: "#fff", fontSize: "clamp(20px, 2vw, 32px)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
            <span style={{ color: palette.accent }}>{c.t.split(" ")[0]}</span><br />
            <span style={{ opacity: 0.8 }}>{c.t.split(" ").slice(1).join(" ")}</span>
          </div>
          <div style={{ height: 1, background: "color-mix(in oklch, #fff, transparent 80%)", margin: "18px 0" }} />
          <div style={{ display: "flex", gap: 6 }}>
            <span style={{ padding: "6px 10px", background: palette.accent, color: "#0a0d0b", fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase", borderRadius: 99 }}>Get a quote</span>
            <span style={{ padding: "6px 10px", border: "1px solid color-mix(in oklch, #fff, transparent 70%)", color: "#fff", fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase", borderRadius: 99 }}>Call</span>
          </div>
        </div>
        <div style={{ position: "absolute", top: 16, left: 16, right: 16, display: "flex", justifyContent: "space-between" }}>
          <div className="mono" style={{ fontSize: 10, color: "color-mix(in oklch, #fff, transparent 50%)", letterSpacing: "0.12em", textTransform: "uppercase" }}>0{index + 1} / Case</div>
          <div className="mono" style={{ fontSize: 10, color: "color-mix(in oklch, #fff, transparent 50%)", letterSpacing: "0.12em", textTransform: "uppercase" }}>2025</div>
        </div>
      </div>

      {/* Right details */}
      <div style={{ padding: "40px 40px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 32 }}>
        <div>
          <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 18 }}>{c.tag}</div>
          <div className="h-2" style={{ fontSize: "clamp(28px, 3.6vw, 52px)" }}>{c.t}</div>
          <p className="body" style={{ marginTop: 18, maxWidth: 520 }}>{c.blurb}</p>
        </div>
        <div>
          <div className="hairline" style={{ marginBottom: 20 }} />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px 36px", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
              {c.kpi.map((k, i) => (
                <div key={i}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 22, letterSpacing: "-0.02em", color: "var(--accent)" }}>{k.split(" ")[0]}</div>
                  <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>
                    {k.split(" ").slice(1).join(" ")}
                  </div>
                </div>
              ))}
            </div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "12px 20px",
              borderRadius: 99,
              border: "1px solid var(--line-strong)",
              fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase",
              background: hover ? "var(--accent)" : "transparent",
              color: hover ? "var(--accent-ink)" : "var(--ink)",
              borderColor: hover ? "var(--accent)" : "var(--line-strong)",
              transition: "all 0.4s var(--ease)",
            }}>
              Read case <Arrow />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

Object.assign(window, { Services, ServiceRow, Process, Cases, CaseCard });
