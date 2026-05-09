/* Inner-page app shell — shared with all sub-pages. */

const { useState: useStateInnerApp, useEffect: useEffectInnerApp, useRef: useRefInnerApp } = React;

const TWEAK_DEFAULTS_INNER = /*EDITMODE-BEGIN*/{
  "accent": "#5ef38c",
  "fontPair": "grotesk",
  "theme": "dark",
  "density": "default",
  "motion": 1,
  "cursor": true,
  "grain": true
}/*EDITMODE-END*/;

const FONT_PAIRS_INNER = {
  grotesk: { display: '"Space Grotesk", sans-serif', body: '"Inter", sans-serif', label: "Grotesk + Inter" },
  general: { display: '"General Sans", "Inter", sans-serif', body: '"Inter", sans-serif', label: "General + Inter" },
  satoshi: { display: '"Satoshi", "Inter", sans-serif', body: '"Inter", sans-serif', label: "Satoshi + Inter" },
  serifmix: { display: '"Instrument Serif", serif', body: '"Inter", sans-serif', label: "Instrument Serif + Inter" },
  mono: { display: '"JetBrains Mono", monospace', body: '"Inter", sans-serif', label: "Mono Display + Inter" },
};

function InnerApp({ Page }) {
  const [tw, setTw] = (function useT() {
    const [vals, setVals] = useStateInnerApp(TWEAK_DEFAULTS_INNER);
    const set = (k, v) => {
      if (typeof k === "object") {
        setVals(p => ({ ...p, ...k }));
        window.parent?.postMessage({ type: "__edit_mode_set_keys", edits: k }, "*");
      } else {
        setVals(p => ({ ...p, [k]: v }));
        window.parent?.postMessage({ type: "__edit_mode_set_keys", edits: { [k]: v } }, "*");
      }
    };
    return [vals, set];
  })();
  const [tweaksOn, setTweaksOn] = useStateInnerApp(false);

  useReveal();

  useEffectInnerApp(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent", tw.accent);
    root.style.setProperty("--accent-soft", `oklch(from ${tw.accent} 88% c h / 1)`);
    root.dataset.theme = tw.theme;
    root.dataset.density = tw.density;
    root.style.setProperty("--motion", tw.motion);
    const fp = FONT_PAIRS_INNER[tw.fontPair] || FONT_PAIRS_INNER.grotesk;
    root.style.setProperty("--font-display", fp.display);
    root.style.setProperty("--font-body", fp.body);
    document.body.classList.toggle("grain", !!tw.grain);
  }, [tw]);

  useEffectInnerApp(() => {
    const onMsg = e => {
      if (e.data?.type === "__activate_edit_mode") setTweaksOn(true);
      if (e.data?.type === "__deactivate_edit_mode") setTweaksOn(false);
    };
    window.addEventListener("message", onMsg);
    window.parent?.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  // Cursor (same as homepage)
  const dotRef = useRefInnerApp(null);
  const ringRef = useRefInnerApp(null);
  useEffectInnerApp(() => {
    if (!tw.cursor) return;
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
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", onMove); };
  }, [tw.cursor]);

  return (
    <>
      <Nav accent={tw.accent} />
      <Page />
      {tw.cursor && <div ref={ringRef} className="cursor-ring" />}
      {tw.cursor && <div ref={dotRef} className="cursor-dot" />}
      {tweaksOn && (
        <TweaksPanel onClose={() => { setTweaksOn(false); window.parent?.postMessage({ type: "__edit_mode_dismissed" }, "*"); }}>
          <TweakSection title="Accent">
            <TweakColor label="Color" value={tw.accent} onChange={v => setTw("accent", v)} />
          </TweakSection>
          <TweakSection title="Font pairing">
            <TweakSelect value={tw.fontPair} onChange={v => setTw("fontPair", v)}
              options={Object.entries(FONT_PAIRS_INNER).map(([v, p]) => ({ value: v, label: p.label }))} />
          </TweakSection>
          <TweakSection title="Theme">
            <TweakRadio value={tw.theme} onChange={v => setTw("theme", v)} options={[{ value: "dark", label: "Dark" }, { value: "light", label: "Light" }]} />
          </TweakSection>
          <TweakSection title="Density">
            <TweakRadio value={tw.density} onChange={v => setTw("density", v)} options={[{ value: "compact", label: "Compact" }, { value: "default", label: "Default" }, { value: "airy", label: "Airy" }]} />
          </TweakSection>
          <TweakSection title="Animation">
            <TweakSlider value={tw.motion} onChange={v => setTw("motion", v)} min={0.2} max={2} step={0.1} format={v => `${v.toFixed(1)}x`} />
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

window.InnerApp = InnerApp;
