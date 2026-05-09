'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const GREEN = '#009E69';
const WHITE = '#ffffff';

interface MouseState {
  x: number;
  y: number;
  radius: number;
  active: boolean;
}

class Particle {
  private _x: number;
  private _y: number;
  readonly baseX: number;
  readonly baseY: number;
  private readonly size: number;
  private readonly density: number;
  private readonly color: string;
  readonly strokeColor: string;

  constructor(
    x: number,
    y: number,
    size: number,
    color: string,
    strokeColor: string
  ) {
    this._x = x;
    this._y = y;
    this.baseX = x;
    this.baseY = y;
    this.size = size;
    this.density = Math.random() * 12 + 6;
    this.color = color;
    this.strokeColor = strokeColor;
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }


  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this._x, this._y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    if (this.strokeColor !== this.color) {
      ctx.strokeStyle = this.strokeColor;
      ctx.lineWidth = this.size * 0.7;
      ctx.stroke();
    }
  }

  update(mouse: MouseState) {
    if (!mouse.active) {
      this.easeBack();
      return;
    }

    const dx = mouse.x - this._x;
    const dy = mouse.y - this._y;
    const distance = Math.hypot(dx, dy);

    if (distance === 0) {
      return;
    }

    if (distance < mouse.radius) {
      const forceDirectionX = dx / distance;
      const forceDirectionY = dy / distance;
      const force = (mouse.radius - distance) / mouse.radius;
      this._x -= forceDirectionX * force * this.density;
      this._y -= forceDirectionY * force * this.density;
      return;
    }

    this.easeBack();
  }

  private easeBack() {
    if (this._x !== this.baseX) {
      this._x -= (this._x - this.baseX) / 10;
    }
    if (this._y !== this.baseY) {
      this._y -= (this._y - this.baseY) / 10;
    }
  }
}

interface ParticleBuildResult {
  particles: Particle[];
  linkDistance: number;
  linkWidth: number;
}

const buildParticleSet = (
  width: number,
  height: number,
  sampleStep: number,
  particleSize: number
): ParticleBuildResult => {
  const offscreen = document.createElement('canvas');
  const offscreenCtx = offscreen.getContext('2d');

  if (!offscreenCtx) {
    return { particles: [], linkDistance: 0, linkWidth: 0 };
  }

  const baseSize = Math.max(Math.min(height * 0.92, width * 0.24), 74);
  const shouldStack = width < 620;

  offscreenCtx.font = `700 ${baseSize}px "Inter", "Arial", sans-serif`;

  type Segment = { text: string; color: string };
  const lineSegments: Segment[][] = shouldStack
    ? [
        [{ text: 'WEBLOFT', color: GREEN }],
        [{ text: 'STUDIO', color: WHITE }],
      ]
    : [
        [
          { text: 'WEBLOFT', color: GREEN },
          { text: ' ', color: WHITE },
          { text: 'STUDIO', color: WHITE },
        ],
      ];

  const measure = (text: string) => offscreenCtx.measureText(text).width;
  const lineMetrics = lineSegments.map((segments) => {
    const widths = segments.map((segment) => measure(segment.text));
    const widthSum = widths.reduce((sum, value) => sum + value, 0);
    return { segments, widths, width: widthSum };
  });

  const maxLineWidth = Math.max(...lineMetrics.map((line) => line.width));
  const lineSpacing = baseSize * (shouldStack ? 0.48 : 0.28);
  const paddingX = baseSize * 0.24;
  const paddingY = baseSize * 0.2;
  const totalHeight =
    lineMetrics.length * baseSize + Math.max(0, lineMetrics.length - 1) * lineSpacing;

  offscreen.width = Math.ceil(maxLineWidth + paddingX * 2);
  offscreen.height = Math.ceil(totalHeight + paddingY * 2);

  const drawCtx = offscreen.getContext('2d');
  if (!drawCtx) {
    return { particles: [], linkDistance: 0, linkWidth: 0 };
  }

  drawCtx.clearRect(0, 0, offscreen.width, offscreen.height);
  drawCtx.font = `700 ${baseSize}px "Inter", "Arial", sans-serif`;
  drawCtx.textBaseline = 'top';
  drawCtx.textAlign = 'left';

  const regions: Array<{ color: string; xStart: number; xEnd: number; yStart: number; yEnd: number }> = [];

  let currentY = paddingY;
  lineMetrics.forEach(({ segments, widths, width }) => {
    let currentX = paddingX + (maxLineWidth - width) / 2;
    segments.forEach((segment, index) => {
      const segmentWidth = widths[index];
      drawCtx.fillStyle = segment.color;
      drawCtx.fillText(segment.text, currentX, currentY);
      regions.push({
        color: segment.color,
        xStart: currentX - 1,
        xEnd: currentX + segmentWidth + 1,
        yStart: currentY - 2,
        yEnd: currentY + baseSize + 2,
      });
      currentX += segmentWidth;
    });
    currentY += baseSize + lineSpacing;
  });

  const imageData = drawCtx.getImageData(0, 0, offscreen.width, offscreen.height);
  const { data } = imageData;
  const particles: Particle[] = [];

  const usableWidth = width * 0.96;
  const usableHeight = height * 0.92;
  const maxScale = width >= 1280 ? 1.9 : width >= 1024 ? 1.75 : width >= 768 ? 1.6 : width >= 640 ? 1.45 : 1.3;
  const scale = Math.min(usableWidth / offscreen.width, usableHeight / offscreen.height, maxScale);
  const offsetX = width / 2;
  const offsetY = height / 2;
  const jitterAmplitude = Math.max(0.035, Math.min(0.14, 0.18 / Math.max(scale, 0.85)));

  const resolveColor = (px: number, py: number): string => {
    for (let i = 0; i < regions.length; i += 1) {
      const region = regions[i];
      if (px >= region.xStart && px <= region.xEnd && py >= region.yStart && py <= region.yEnd) {
        return region.color;
      }
    }
    return WHITE;
  };

  for (let y = 0; y < offscreen.height; y += sampleStep) {
    for (let x = 0; x < offscreen.width; x += sampleStep) {
      const index = (y * offscreen.width + x) * 4;
      const alpha = data[index + 3];
      if (alpha <= 235) {
        continue;
      }

      const centeredX = (x - offscreen.width / 2) * scale;
      const centeredY = (y - offscreen.height / 2) * scale;
      const jitterX = (Math.random() - 0.5) * jitterAmplitude;
      const jitterY = (Math.random() - 0.5) * jitterAmplitude;

      const color = resolveColor(x, y);
      particles.push(
        new Particle(
          offsetX + centeredX + jitterX,
          offsetY + centeredY + jitterY,
          particleSize,
          color,
          color
        )
      );
    }
  }

  const linkDistance = Math.min(Math.max(scale * 34, 16), width * 0.06);
  const linkWidth = Math.max(0.22, scale * 0.32);

  return { particles, linkDistance, linkWidth };
};

export default function ParticleTextAnimation() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<MouseState>({ x: 0, y: 0, radius: 120, active: false });
  const animationFrame = useRef<number | undefined>(undefined);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [sweepAnimationCompleted, setSweepAnimationCompleted] = useState(false);
  const bleedRef = useRef(0);
  const dprRef = useRef(1);
  const isAnimatingRef = useRef(false);
  const lastMouseStateRef = useRef<MouseState>({ x: 0, y: 0, radius: 120, active: false });
  const lastFrameTimeRef = useRef(0);
  const targetFPS = 60; // Limit to 30 FPS instead of 60
  const isVisibleRef = useRef(true);

  // Simple performance optimization: only animate when needed
  const shouldContinueAnimation = useCallback(() => {
    const mouse = mouseRef.current;
    
    // Always animate if we're in the middle of sweep animation
    if (isAnimatingRef.current) {
      return true;
    }
    
    // Always animate if mouse is active (for hover effects)
    if (mouse.active) {
      return true;
    }
    
    // Only animate if visible
    return isVisibleRef.current;
  }, []);

  const startSweepAnimation = useCallback(() => {
    if (sweepAnimationCompleted || prefersReducedMotion) {
      return;
    }

    const wrapper = wrapperRef.current;
    if (!wrapper) {
      return;
    }

    const rect = wrapper.getBoundingClientRect();
    const startX = 0;
    const endX = rect.width;
    const centerY = rect.height / 2;
    const duration = 4500; // 4.5 seconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Use easeOutCubic for smooth deceleration
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      
      const currentX = startX + (endX - startX) * easeOutCubic;
      
      // Update mouse position
      mouseRef.current.x = currentX;
      mouseRef.current.y = centerY;
      mouseRef.current.active = true;
      isAnimatingRef.current = true;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Animation completed, deactivate mouse
        mouseRef.current.active = false;
        setSweepAnimationCompleted(true);
        // Keep animation running longer to let particles settle back to base positions
        setTimeout(() => {
          isAnimatingRef.current = false;
        }, 2000); // Keep animation running for 2 seconds after sweep
      }
    };

    requestAnimationFrame(animate);
  }, [sweepAnimationCompleted, prefersReducedMotion]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;

    if (!canvas || !wrapper) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    let drawWidth = 0;
    let drawHeight = 0;
    let connectionDistance = 48;
    let lineWidth = 0.65;

    const configureCanvas = () => {
      const rect = wrapper.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      dprRef.current = dpr;

      drawWidth = rect.width;
      drawHeight = rect.height;

      if (drawWidth < 60 || drawHeight < 40) {
        return;
      }

      const bleed = Math.max(60, Math.min(rect.width, rect.height) * 0.18);
      bleedRef.current = bleed;

      canvas.style.position = 'absolute';
      canvas.style.left = `${-bleed}px`;
      canvas.style.top = `${-bleed}px`;
      canvas.style.width = `${rect.width + bleed * 2}px`;
      canvas.style.height = `${rect.height + bleed * 2}px`;

      canvas.width = Math.round((rect.width + bleed * 2) * dpr);
      canvas.height = Math.round((rect.height + bleed * 2) * dpr);

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      const compactLayout = rect.width < 640;
      const sampleStep = compactLayout ? 6 : 4;
      const particleSize = compactLayout ? 0.75 : 0.9;

      mouseRef.current.radius = compactLayout ? 60 : 120;

      const { particles, linkDistance, linkWidth } = buildParticleSet(
        drawWidth,
        drawHeight,
        sampleStep,
        particleSize
      );

      if (particles.length === 0) {
        particlesRef.current = [];
        return;
      }

      particlesRef.current = particles;
      connectionDistance = linkDistance;
      lineWidth = linkWidth;
    };

  const connectParticles = () => {
    const particles = particlesRef.current;
    const maxDistance = connectionDistance;

    ctx.save();
    const maxLinks = 22;
    for (let i = 0; i < particles.length; i += 1) {
      for (let j = i + 1; j < particles.length && j - i <= maxLinks; j += 1) {
        const particleA = particles[i];
        const particleB = particles[j];
        const dx = particleA.x - particleB.x;
        const dy = particleA.y - particleB.y;
        const distance = Math.hypot(dx, dy);

        if (distance > maxDistance) {
          continue;
        }

        const opacity = 1 - distance / maxDistance;
        const easedAlpha = Math.pow(opacity, 1.5);
        if (easedAlpha < 0.05) {
          continue;
        }

        ctx.globalAlpha = Math.min(0.32, easedAlpha);
        ctx.lineWidth = lineWidth;
        const strokeColor =
          particleA.strokeColor === particleB.strokeColor
            ? particleA.strokeColor
            : '#ffffff';
        ctx.strokeStyle = strokeColor;
        ctx.beginPath();
        ctx.moveTo(particleA.x, particleA.y);
        ctx.lineTo(particleB.x, particleB.y);
        ctx.stroke();
      }
    }
    ctx.restore();
  };

    const draw = (currentTime: number = 0) => {
      // Frame rate limiting
      const frameInterval = 1000 / targetFPS;
      if (currentTime - lastFrameTimeRef.current < frameInterval) {
        if (shouldContinueAnimation() || isAnimatingRef.current) {
          animationFrame.current = window.requestAnimationFrame(draw);
        }
        return;
      }
      lastFrameTimeRef.current = currentTime;

      const bleed = bleedRef.current;
      const dpr = dprRef.current;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.scale(dpr, dpr);
      ctx.translate(bleed, bleed);

      const mouse = mouseRef.current;
      for (let i = 0; i < particlesRef.current.length; i += 1) {
        const particle = particlesRef.current[i];
        particle.draw(ctx);
        particle.update(mouse);
      }

      connectParticles();
      
      // Store current mouse state for comparison
      lastMouseStateRef.current = { ...mouse };
      
      // Continue animation based on our smart logic
      if (shouldContinueAnimation()) {
        animationFrame.current = window.requestAnimationFrame(draw);
      } else {
        // Stop animation loop when idle
        animationFrame.current = undefined;
      }
    };

    const updatePointer = (clientX: number, clientY: number) => {
      const rect = wrapper.getBoundingClientRect();
      mouseRef.current.x = clientX - rect.left;
      mouseRef.current.y = clientY - rect.top;
      mouseRef.current.active = true;
      
      // Always restart animation when mouse is active
      if (!animationFrame.current) {
        isAnimatingRef.current = true;
        draw();
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      updatePointer(event.clientX, event.clientY);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length === 0) {
        return;
      }
      const touch = event.touches[0];
      updatePointer(touch.clientX, touch.clientY);
    };

    const handlePointerLeave = () => {
      mouseRef.current.active = false;
      // Keep animation running longer to let particles settle back to base positions
      isAnimatingRef.current = true;
      setTimeout(() => {
        isAnimatingRef.current = false;
      }, 1500); // Increased timeout to 1.5 seconds
    };

    configureCanvas();
    
    // Start animation immediately to ensure particles are visible
    isAnimatingRef.current = true;
    draw();

    // Set up Intersection Observer to pause animation when not visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );

    if (wrapper) {
      observer.observe(wrapper);
    }

    // Start sweep animation after a short delay to ensure canvas is ready
    const sweepTimeout = setTimeout(() => {
      startSweepAnimation();
    }, 100);

    window.addEventListener('resize', configureCanvas);
    wrapper.addEventListener('pointermove', handlePointerMove);
    wrapper.addEventListener('pointerleave', handlePointerLeave);
    wrapper.addEventListener('touchstart', handleTouchMove, { passive: true });
    wrapper.addEventListener('touchmove', handleTouchMove, { passive: true });
    wrapper.addEventListener('touchend', handlePointerLeave);
    wrapper.addEventListener('touchcancel', handlePointerLeave);

    return () => {
      if (animationFrame.current) {
        window.cancelAnimationFrame(animationFrame.current);
      }
      clearTimeout(sweepTimeout);
      observer.disconnect();
      window.removeEventListener('resize', configureCanvas);
      wrapper.removeEventListener('pointermove', handlePointerMove);
      wrapper.removeEventListener('pointerleave', handlePointerLeave);
      wrapper.removeEventListener('touchstart', handleTouchMove);
      wrapper.removeEventListener('touchmove', handleTouchMove);
      wrapper.removeEventListener('touchend', handlePointerLeave);
      wrapper.removeEventListener('touchcancel', handlePointerLeave);
    };
  }, [prefersReducedMotion, sweepAnimationCompleted, startSweepAnimation, shouldContinueAnimation]);

  return (
    <div className="w-full bg-black overflow-visible particle-container">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={wrapperRef}
          className="relative mx-auto h-44 sm:h-56 md:h-64 lg:h-72 bg-black overflow-visible"
          aria-hidden="true"
          style={{ 
            willChange: 'transform'
          }}
        >
          {!prefersReducedMotion ? (
            <canvas 
              ref={canvasRef} 
              className="pointer-events-none absolute inset-0"
              style={{
                willChange: 'transform'
              }}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-center text-sm sm:text-base md:text-lg tracking-[0.5em] uppercase sm:flex-row">
                <span className="text-[color:#009E69]">WEBLOFT</span>
                <span className="text-white">STUDIO</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
