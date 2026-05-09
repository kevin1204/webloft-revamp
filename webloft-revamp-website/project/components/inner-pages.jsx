/* Inner pages — shared mini sections + page-specific bodies. */

const { useState: useStateP, useEffect: useEffectP } = React;

/* ------- Page header (shared) ------- */
function PageHeader({ kicker, index, title, italic, blurb }) {
  return (
    <section style={{ paddingTop: "clamp(140px, 18vh, 220px)", paddingBottom: "calc(var(--section-y) * 0.5)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 64, flexWrap: "wrap", gap: 24 }} className="reveal">
          <div className="eyebrow"><span className="dot" />{kicker}</div>
          <div className="mono" style={{ fontSize: 12, color: "var(--ink-mute)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{index}</div>
        </div>
        <h1 className="h-display reveal" style={{ fontSize: "clamp(56px, 8vw, 144px)" }}>
          {title}{italic && <> <span className="italic-serif" style={{ color: "var(--accent)" }}>{italic}</span></>}
        </h1>
        {blurb && <p className="body-lg reveal" style={{ marginTop: 48, maxWidth: 640 }}>{blurb}</p>}
      </div>
    </section>
  );
}

/* ===================== WORK ===================== */
function WorkPage() {
  const filters = ["All", "Plumbing", "Med spa", "Construction", "Restaurant", "Wellness", "Healthcare"];
  const [active, setActive] = useStateP("All");
  const projects = [
    { t: "Northside Plumbing", tag: "Plumbing · Brooklyn", year: "2025", services: ["Webflow", "SEO", "Lead automation"], kpi: "+412% inbound leads", tone: "warm" },
    { t: "Meridian Aesthetics", tag: "Med spa · Austin", year: "2025", services: ["Custom design", "Booking funnel"], kpi: "+218% bookings", tone: "cool" },
    { t: "Cascade Builds", tag: "Construction · Denver", year: "2025", services: ["Webflow", "AI chatbot", "Quote tool"], kpi: "+289% qualified leads", tone: "earth" },
    { t: "Fern & Oak", tag: "Wellness · Portland", year: "2025", services: ["Brand-led design", "Bookings"], kpi: "Sold-out launch month", tone: "earth" },
    { t: "Atlas Built", tag: "Construction · Seattle", year: "2024", services: ["Redesign", "SEO", "Migration"], kpi: "−51% cost per lead", tone: "warm" },
    { t: "Harbor Co.", tag: "Restaurant · Boston", year: "2024", services: ["Landing pages", "Reservations"], kpi: "3.2× session time", tone: "cool" },
  ];
  const filtered = projects.filter(p => active === "All" || p.tag.startsWith(active));
  return (
    <>
      <PageHeader kicker="Selected work · 2024–2025" index="(01) — Work" title="Sites that earn" italic="their keep." blurb="A small slice of recent work for service businesses across North America. Every project: fixed scope, fixed fee, real numbers." />

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 48, paddingBottom: 32, borderBottom: "1px solid var(--line)" }}>
            {filters.map(f => (
              <button key={f} onClick={() => setActive(f)} style={{
                padding: "10px 18px", borderRadius: 99,
                border: "1px solid " + (active === f ? "var(--accent)" : "var(--line-strong)"),
                background: active === f ? "var(--accent)" : "transparent",
                color: active === f ? "var(--accent-ink)" : "var(--ink-dim)",
                fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase",
                cursor: "pointer", transition: "all 0.3s var(--ease)",
              }}>{f}</button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }} className="work-grid">
            {filtered.map((p, i) => <WorkCard key={p.t} p={p} i={i} />)}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
}

function WorkCard({ p, i }) {
  const [hover, setHover] = useStateP(false);
  const palette = {
    warm: { bg: "linear-gradient(135deg, #2a1a14, #14110d)", accent: "#f4a574" },
    cool: { bg: "linear-gradient(135deg, #131b22, #0d1118)", accent: "#7fb2d9" },
    earth: { bg: "linear-gradient(135deg, #1b1f15, #11140e)", accent: "#9bbf72" },
  }[p.tone];
  return (
    <a href="#" className="reveal" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ display: "block" }}>
      <div style={{
        aspectRatio: "4/3",
        background: palette.bg,
        borderRadius: "var(--r-lg)",
        position: "relative",
        overflow: "hidden",
        border: "1px solid var(--line)",
        transition: "transform 0.6s var(--ease)",
        transform: hover ? "translateY(-6px)" : "translateY(0)",
      }}>
        <div style={{ position: "absolute", inset: "12% 14%", background: "color-mix(in oklch, #000, transparent 70%)", border: "1px solid color-mix(in oklch, #fff, transparent 80%)", borderRadius: 8, padding: 18 }}>
          <div className="mono" style={{ fontSize: 9, color: "color-mix(in oklch, #fff, transparent 50%)", letterSpacing: "0.12em", marginBottom: 10, textTransform: "uppercase" }}>www.{p.t.toLowerCase().replace(/[^a-z]/g, "")}.com</div>
          <div style={{ fontFamily: "var(--font-display)", color: "#fff", fontSize: "clamp(18px, 1.6vw, 26px)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
            <span style={{ color: palette.accent }}>{p.t.split(" ")[0]}</span><br />
            <span style={{ opacity: 0.8 }}>{p.t.split(" ").slice(1).join(" ")}</span>
          </div>
        </div>
        <div style={{ position: "absolute", top: 16, left: 16, right: 16, display: "flex", justifyContent: "space-between" }}>
          <div className="mono" style={{ fontSize: 10, color: "color-mix(in oklch, #fff, transparent 50%)", letterSpacing: "0.12em", textTransform: "uppercase" }}>0{i + 1}</div>
          <div className="mono" style={{ fontSize: 10, color: "color-mix(in oklch, #fff, transparent 50%)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{p.year}</div>
        </div>
      </div>
      <div style={{ marginTop: 24, display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 16 }}>
        <div>
          <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>{p.tag}</div>
          <div className="h-3">{p.t}</div>
          <div style={{ marginTop: 10, display: "flex", gap: 6, flexWrap: "wrap" }}>
            {p.services.map(s => (
              <span key={s} className="mono" style={{ fontSize: 10, padding: "4px 10px", borderRadius: 99, border: "1px solid var(--line-strong)", color: "var(--ink-dim)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{s}</span>
            ))}
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--accent)", letterSpacing: "-0.02em" }}>{p.kpi.split(" ")[0]}</div>
          <div className="mono" style={{ fontSize: 10, color: "var(--ink-mute)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 4 }}>{p.kpi.split(" ").slice(1).join(" ")}</div>
        </div>
      </div>
    </a>
  );
}

/* ===================== SERVICES ===================== */
function ServicesPage() {
  return (
    <>
      <PageHeader kicker="What we do" index="(02) — Services" title="Eight services," italic="one outcome." blurb="More qualified leads. Pick what you need à la carte, or bundle them as a Studio package." />
      <Services />
      <Process />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}

/* ===================== ABOUT ===================== */
function AboutPage() {
  return (
    <>
      <PageHeader kicker="About the studio" index="(03) — About" title="A small studio with" italic="big standards." blurb="Webloft is a senior-led, three-person studio building premium websites for service businesses across North America. We obsess so you don't have to." />

      <section>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 80, alignItems: "start" }} className="manifesto-row">
            <div className="reveal" style={{ position: "sticky", top: 120 }}>
              <div className="eyebrow" style={{ marginBottom: 16 }}><span className="dot" />Our story</div>
              <div className="mono" style={{ fontSize: 12, color: "var(--ink-mute)" }}>Founded 2022 · Toronto + Remote</div>
            </div>
            <div className="reveal">
              <h2 className="h-1" style={{ marginBottom: 32 }}>
                We started Webloft because <span className="italic-serif" style={{ color: "var(--accent)" }}>most agency websites</span> are quietly broken.
              </h2>
              <p className="body-lg" style={{ marginBottom: 24 }}>
                Pretty mockups that don't convert. Six-month timelines for a five-page site. Vague retainers, hidden fees, "we'll get back to you Monday."
              </p>
              <p className="body-lg" style={{ marginBottom: 24 }}>
                We do it differently. Fixed scopes. Fixed fees. 21-day launches. Senior designers from kickoff to handoff. And every line of copy, every section, every animation answers one question — does this earn the next click?
              </p>
              <p className="body-lg">
                If that sounds like the studio you've been looking for, we'd love to meet you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 56 }} className="reveal">
            <div className="eyebrow"><span className="dot" />The team</div>
            <div className="mono" style={{ fontSize: 12, color: "var(--ink-mute)" }}>Three humans</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--line)" }} className="team-grid">
            {[
              { n: "01", name: "Alex Romano", role: "Founder, design lead", b: "Eight years in product and brand. Obsessed with type, conversion psychology, and shipping." },
              { n: "02", name: "Priya Shah", role: "Head of build", b: "Webflow expert dev. Performance budgets, accessibility, and 'why does this site take 8 seconds to load' detective work." },
              { n: "03", name: "Marcus Hill", role: "Strategy & SEO", b: "Ex-search marketing lead. Schema, on-page, and the slow art of ranking that actually pays back." },
            ].map((p, i, arr) => (
              <div key={p.n} className="reveal" style={{
                padding: 32,
                borderRight: i === arr.length - 1 ? "none" : "1px solid var(--line)",
                borderBottom: "1px solid var(--line)",
                minHeight: 380,
                display: "flex", flexDirection: "column", justifyContent: "space-between",
              }}>
                <div style={{
                  aspectRatio: "1/1", maxWidth: 200,
                  background: `linear-gradient(135deg, var(--bg-elev), var(--bg-elev-2))`,
                  border: "1px solid var(--line-strong)",
                  borderRadius: "var(--r-lg)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-display)", fontSize: 56, color: "var(--accent)", letterSpacing: "-0.03em",
                  marginBottom: 24,
                }}>
                  {p.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.16em", marginBottom: 12 }}>{p.n}</div>
                  <div className="h-3">{p.name}</div>
                  <div className="mono" style={{ fontSize: 12, color: "var(--accent)", letterSpacing: "0.06em", marginTop: 6, textTransform: "uppercase" }}>{p.role}</div>
                  <p className="body-sm" style={{ marginTop: 14 }}>{p.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

/* ===================== CONTACT ===================== */
function ContactPage() {
  const [step, setStep] = useStateP(0);
  const [form, setForm] = useStateP({ name: "", email: "", company: "", budget: "$5k–10k", services: [], message: "" });
  const [sent, setSent] = useStateP(false);
  const total = 3;

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const toggle = s => setForm(f => ({ ...f, services: f.services.includes(s) ? f.services.filter(x => x !== s) : [...f.services, s] }));

  const next = () => setStep(s => Math.min(total, s + 1));
  const prev = () => setStep(s => Math.max(0, s - 1));

  const canNext = step === 0 ? form.name && form.email : step === 1 ? form.services.length > 0 : step === 2 ? form.message.length > 4 : true;

  return (
    <>
      <PageHeader kicker="Start a project" index="(04) — Contact" title="Tell us about" italic="your business." blurb="Three quick questions, then we'll book a free 30-minute discovery call. We typically reply within a few hours." />

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }} className="contact-grid">
            <div className="reveal" style={{ position: "sticky", top: 120 }}>
              <div className="eyebrow" style={{ marginBottom: 24 }}><span className="dot" />Direct lines</div>
              <ContactLine label="Email" value="info@webloftstudio.com" href="mailto:info@webloftstudio.com" />
              <ContactLine label="Phone" value="+1 (647) 555-0119" href="tel:+16475550119" />
              <ContactLine label="Toronto" value="180 Queen St W, Suite 410" />
              <ContactLine label="Hours" value="Mon–Fri · 9–6 EST" />
              <div className="hairline" style={{ margin: "32px 0" }} />
              <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Booking · Q3 2026</div>
              <div className="body-sm">2 of 4 slots remain. Next start window: June 8.</div>
            </div>

            <div className="reveal" style={{
              border: "1px solid var(--line)",
              borderRadius: "var(--r-lg)",
              background: "var(--bg-elev)",
              padding: "clamp(28px, 4vw, 56px)",
              minHeight: 600,
              display: "flex", flexDirection: "column",
              position: "relative",
            }}>
              {sent ? (
                <SentScreen />
              ) : (
                <>
                  {/* Step indicator */}
                  <div style={{ display: "flex", gap: 6, marginBottom: 40 }}>
                    {Array.from({ length: total }).map((_, i) => (
                      <div key={i} style={{
                        flex: 1, height: 3,
                        background: i <= step ? "var(--accent)" : "var(--line-strong)",
                        transition: "background 0.4s var(--ease)",
                      }} />
                    ))}
                  </div>

                  <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 24 }}>
                    Step {step + 1} of {total}
                  </div>

                  {step === 0 && (
                    <div>
                      <h3 className="h-2" style={{ marginBottom: 32, fontSize: "clamp(28px, 3vw, 40px)" }}>Who are you?</h3>
                      <FormField label="Your name" value={form.name} onChange={v => update("name", v)} placeholder="Maria Voss" />
                      <FormField label="Email" type="email" value={form.email} onChange={v => update("email", v)} placeholder="maria@northsideplumbing.com" />
                      <FormField label="Company" value={form.company} onChange={v => update("company", v)} placeholder="Northside Plumbing" />
                    </div>
                  )}

                  {step === 1 && (
                    <div>
                      <h3 className="h-2" style={{ marginBottom: 32, fontSize: "clamp(28px, 3vw, 40px)" }}>What do you need?</h3>
                      <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Services · pick any</div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
                        {["New website", "Redesign", "Webflow", "Landing page", "SEO", "Lead automation", "AI chatbot", "Maintenance"].map(s => (
                          <button key={s} onClick={() => toggle(s)} style={{
                            padding: "12px 18px", borderRadius: 99,
                            border: "1px solid " + (form.services.includes(s) ? "var(--accent)" : "var(--line-strong)"),
                            background: form.services.includes(s) ? "var(--accent)" : "transparent",
                            color: form.services.includes(s) ? "var(--accent-ink)" : "var(--ink-dim)",
                            fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase",
                            cursor: "pointer", transition: "all 0.3s var(--ease)",
                          }}>{s}</button>
                        ))}
                      </div>
                      <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Estimated budget</div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                        {["< $5k", "$5k–10k", "$10k–25k", "$25k+"].map(b => (
                          <button key={b} onClick={() => update("budget", b)} style={{
                            padding: "12px 18px", borderRadius: 99,
                            border: "1px solid " + (form.budget === b ? "var(--accent)" : "var(--line-strong)"),
                            background: form.budget === b ? "var(--accent)" : "transparent",
                            color: form.budget === b ? "var(--accent-ink)" : "var(--ink-dim)",
                            fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase",
                            cursor: "pointer", transition: "all 0.3s var(--ease)",
                          }}>{b}</button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div>
                      <h3 className="h-2" style={{ marginBottom: 32, fontSize: "clamp(28px, 3vw, 40px)" }}>Tell us more.</h3>
                      <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>What are you trying to accomplish?</div>
                      <textarea
                        value={form.message}
                        onChange={e => update("message", e.target.value)}
                        placeholder="We need a redesign that ranks locally and converts contractor visits into estimate calls…"
                        rows={8}
                        style={{
                          width: "100%",
                          padding: "16px 20px",
                          background: "var(--bg)",
                          border: "1px solid var(--line-strong)",
                          borderRadius: "var(--r-md)",
                          color: "var(--ink)",
                          fontFamily: "var(--font-body)",
                          fontSize: 16, lineHeight: 1.5,
                          resize: "vertical",
                          outline: "none",
                        }}
                        onFocus={e => e.target.style.borderColor = "var(--accent)"}
                        onBlur={e => e.target.style.borderColor = "var(--line-strong)"}
                      />
                    </div>
                  )}

                  <div style={{ marginTop: "auto", paddingTop: 40, display: "flex", justifyContent: "space-between" }}>
                    <button onClick={prev} disabled={step === 0} style={{
                      padding: "14px 22px", borderRadius: 99,
                      border: "1px solid var(--line-strong)",
                      color: step === 0 ? "var(--ink-mute)" : "var(--ink)",
                      fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase",
                      cursor: step === 0 ? "not-allowed" : "pointer",
                      opacity: step === 0 ? 0.4 : 1,
                    }}>← Back</button>
                    {step < total - 1 ? (
                      <button onClick={next} disabled={!canNext} className="btn btn-primary" style={{ opacity: canNext ? 1 : 0.4, cursor: canNext ? "pointer" : "not-allowed" }}>
                        Continue <Arrow />
                      </button>
                    ) : (
                      <button onClick={() => canNext && setSent(true)} disabled={!canNext} className="btn btn-primary" style={{ opacity: canNext ? 1 : 0.4, cursor: canNext ? "pointer" : "not-allowed" }}>
                        Send inquiry <Arrow />
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function ContactLine({ label, value, href }) {
  const Tag = href ? "a" : "div";
  return (
    <Tag href={href} style={{ display: "block", padding: "16px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>{label}</div>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--ink)" }}>{value}</div>
    </Tag>
  );
}

function FormField({ label, value, onChange, placeholder, type = "text" }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>{label}</div>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "16px 20px",
          background: "var(--bg)",
          border: "1px solid var(--line-strong)",
          borderRadius: "var(--r-md)",
          color: "var(--ink)",
          fontFamily: "var(--font-body)",
          fontSize: 16,
          outline: "none",
          transition: "border-color 0.3s var(--ease)",
        }}
        onFocus={e => e.target.style.borderColor = "var(--accent)"}
        onBlur={e => e.target.style.borderColor = "var(--line-strong)"}
      />
    </div>
  );
}

function SentScreen() {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "40px 0" }}>
      <div style={{
        width: 80, height: 80, borderRadius: 99,
        background: "var(--accent)", color: "var(--accent-ink)",
        display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 32,
      }}>
        <svg width="32" height="32" viewBox="0 0 32 32"><path d="M6 16.5L13 23L26 9" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <h3 className="h-2" style={{ fontSize: "clamp(28px, 3vw, 44px)", marginBottom: 16 }}>
        Got it. <span className="italic-serif" style={{ color: "var(--accent)" }}>Talk soon.</span>
      </h3>
      <p className="body-lg" style={{ maxWidth: 440 }}>
        We'll review your inquiry and reply within a few hours with a calendar link for your discovery call.
      </p>
    </div>
  );
}

Object.assign(window, { PageHeader, WorkPage, WorkCard, ServicesPage, AboutPage, ContactPage });
