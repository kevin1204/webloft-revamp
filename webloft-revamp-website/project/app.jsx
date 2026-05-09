/* Webloft — homepage app shell + Tweaks integration. */

const { useState: useStateApp, useEffect: useEffectApp, useRef: useRefApp } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#5ef38c",
  "heroVariant": "editorial",
  "fontPair": "grotesk",
  "theme": "dark",
  "density": "default",
  "motion": 1,
  "cursor": true,
  "grain": true
}/*EDITMODE-END*/;

const FONT_PAIRS = {
  grotesk: { display: '"Space Grotesk", sans-serif', body: '"Inter", sans-serif', label: "Grotesk + Inter" },
  general: { display: '"General Sans", "Inter", sans-serif', body: '"Inter", sans-serif', label: "General + Inter" },
  satoshi: { display: '"Satoshi", "Inter", sans-serif', body: '"Inter", sans-serif', label: "Satoshi + Inter" },
  serifmix: { display: '"Instrument Serif", serif', body: '"Inter", sans-serif', label: "Instrument Serif + Inter" },
  mono: { display: '"JetBrains Mono", monospace', body: '"Inter", sans-serif', label: "Mono Display + Inter" },
};

const ACCENTS = [
  { v: "#5ef38c", n: "Signal" },
  { v: "#a3ff48", n: "Lime" },
  { v: "#ff6b3d", n: "Ember" },
  { v: "#ffce4a", n: "Sunbeam" },
  { v: "#5e9bff", n: "Ion" },
  { v: "#e0e0e0", n: "Bone" },
];

function useTweaksLocal(defaults) {
  const [vals, setVals] = useStateApp(defaults);
  useEffectApp(() => {
    const onMsg = e => {
      if (e.data?.type === "__edit_mode_apply" && e.data.values) setVals(v => ({ ...v, ...e.data.values }));
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, []);
  const set = (k, v) => {
    if (typeof k === "object") {
      setVals(prev => ({ ...prev, ...k }));
      window.parent?.postMessage({ type: "__edit_mode_set_keys", edits: k }, "*");
    } else {
      setVals(prev => ({ ...prev, [k]: v }));
      window.parent?.postMessage({ type: "__edit_mode_set_keys", edits: { [k]: v } }, "*");
    }
  };
  return [vals, set];
}

function App() {
  const [tw, setTw] = useTweaksLocal(TWEAK_DEFAULTS);
  const [tweaksOn, setTweaksOn] = useStateApp(false);

  useReveal();
  // Apply tweaks to root
  useEffectApp(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent", tw.accent);
    root.style.setProperty("--accent-soft", `oklch(from ${tw.accent} 88% c h / 1)`);
    root.style.setProperty("--accent-deep", `oklch(from ${tw.accent} 60% c h / 1)`);
    root.dataset.theme = tw.theme;
    root.dataset.density = tw.density;
    root.style.setProperty("--motion", tw.motion);
    const fp = FONT_PAIRS[tw.fontPair] || FONT_PAIRS.grotesk;
    root.style.setProperty("--font-display", fp.display);
    root.style.setProperty("--font-body", fp.body);
    document.body.classList.toggle("grain", !!tw.grain);
  }, [tw]);

  // Edit mode wiring
  useEffectApp(() => {
    const onMsg = e => {
      if (e.data?.type === "__activate_edit_mode") setTweaksOn(true);
      if (e.data?.type === "__deactivate_edit_mode") setTweaksOn(false);
    };
    window.addEventListener("message", onMsg);
    window.parent?.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  // Custom cursor
  const dotRef = useRefApp(null);
  const ringRef = useRefApp(null);
  useEffectApp(() => {
    if (!tw.cursor) {
      if (dotRef.current) dotRef.current.style.opacity = 0;
      if (ringRef.current) ringRef.current.style.opacity = 0;
      return;
    }
    if (dotRef.current) dotRef.current.style.opacity = 1;
    if (ringRef.current) ringRef.current.style.opacity = 1;
    let dx = -100, dy = -100, rx = -100, ry = -100, mx = -100, my = -100;
    let raf;
    const onMove = e => { mx = e.clientX; my = e.clientY; };
    const tick = () => {
      dx += (mx - dx) * 0.6;
      dy += (my - dy) * 0.6;
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${dx - 3}px, ${dy - 3}px, 0)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${rx - 16}px, ${ry - 16}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    const onEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "56px";
        ringRef.current.style.height = "56px";
        ringRef.current.style.borderColor = "var(--accent)";
      }
    };
    const onLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "32px";
        ringRef.current.style.height = "32px";
        ringRef.current.style.borderColor = "color-mix(in oklch, var(--ink), transparent 60%)";
      }
    };
    document.querySelectorAll("a, button, .btn, .service-row, .card").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, [tw.cursor]);

  return (
    <>
      <Nav accent={tw.accent} />
      <Hero variant={tw.heroVariant} />
      <LogoWall />
      <Stats />
      <Manifesto />
      <Services />
      <Process />
      <Cases />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />

      {tw.cursor && <div ref={ringRef} className="cursor-ring" />}
      {tw.cursor && <div ref={dotRef} className="cursor-dot" />}

      {tweaksOn && (
        <TweaksPanel onClose={() => { setTweaksOn(false); window.parent?.postMessage({ type: "__edit_mode_dismissed" }, "*"); }}>
          <TweakSection title="Accent">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
              {ACCENTS.map(a => (
                <button key={a.v} onClick={() => setTw("accent", a.v)} style={{
                  padding: 10, borderRadius: 8,
                  border: tw.accent === a.v ? `1.5px solid ${a.v}` : "1px solid #2a2a2a",
                  background: "rgba(255,255,255,0.02)",
                  color: "white", cursor: "pointer",
                  display: "flex", alignItems: "center", gap: 8, fontSize: 11,
                }}>
                  <span style={{ width: 14, height: 14, borderRadius: 99, background: a.v }} />
                  {a.n}
                </button>
              ))}
            </div>
            <TweakColor label="Custom" value={tw.accent} onChange={v => setTw("accent", v)} />
          </TweakSection>

          <TweakSection title="Hero variant">
            <TweakRadio
              value={tw.heroVariant}
              onChange={v => setTw("heroVariant", v)}
              options={[
                { value: "editorial", label: "Editorial" },
                { value: "split", label: "Split" },
                { value: "marquee", label: "Marquee" },
              ]}
            />
          </TweakSection>

          <TweakSection title="Font pairing">
            <TweakSelect
              value={tw.fontPair}
              onChange={v => setTw("fontPair", v)}
              options={Object.entries(FONT_PAIRS).map(([v, p]) => ({ value: v, label: p.label }))}
            />
          </TweakSection>

          <TweakSection title="Theme">
            <TweakRadio
              value={tw.theme}
              onChange={v => setTw("theme", v)}
              options={[
                { value: "dark", label: "Dark" },
                { value: "light", label: "Light" },
              ]}
            />
          </TweakSection>

          <TweakSection title="Density">
            <TweakRadio
              value={tw.density}
              onChange={v => setTw("density", v)}
              options={[
                { value: "compact", label: "Compact" },
                { value: "default", label: "Default" },
                { value: "airy", label: "Airy" },
              ]}
            />
          </TweakSection>

          <TweakSection title="Animation intensity">
            <TweakSlider
              value={tw.motion}
              onChange={v => setTw("motion", v)}
              min={0.2} max={2} step={0.1}
              format={v => `${v.toFixed(1)}x`}
            />
          </TweakSection>

          <TweakSection title="Effects">
            <TweakToggle label="Custom cursor" value={tw.cursor} onChange={v => setTw("cursor", v)} />
            <TweakToggle label="Grain overlay" value={tw.grain} onChange={v => setTw("grain", v)} />
          </TweakSection>
        </TweaksPanel>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
