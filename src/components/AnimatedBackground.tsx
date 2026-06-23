import { useEffect, useRef } from "react";
import planeSrc from "@/assets/airplane-top.png";
import cloudSrc from "@/assets/cloud.png";

// ─── TYPES ───────────────────────────────────────────────────────────────────

interface Vec2 { x: number; y: number; }

interface CloudSprite {
  x: number; y: number; baseY: number;
  driftFreq: number; driftAmp: number; driftPhase: number;
  speed: number; scale: number; opacity: number;
  layer: number; w: number; h: number; flipX: boolean;
}

interface Waypoint {
  pos: Vec2; label: string; pulseT: number; pulseSpeed: number;
}

interface Segment { p0: Vec2; p1: Vec2; p2: Vec2; p3: Vec2; }

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const rand  = (a: number, b: number) => Math.random() * (b - a) + a;
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

function bezierPoint(s: Segment, t: number): Vec2 {
  const mt = 1 - t;
  return {
    x: mt*mt*mt*s.p0.x + 3*mt*mt*t*s.p1.x + 3*mt*t*t*s.p2.x + t*t*t*s.p3.x,
    y: mt*mt*mt*s.p0.y + 3*mt*mt*t*s.p1.y + 3*mt*t*t*s.p2.y + t*t*t*s.p3.y,
  };
}

function bezierTangent(s: Segment, t: number): Vec2 {
  const mt = 1 - t;
  return {
    x: 3*mt*mt*(s.p1.x-s.p0.x) + 6*mt*t*(s.p2.x-s.p1.x) + 3*t*t*(s.p3.x-s.p2.x),
    y: 3*mt*mt*(s.p1.y-s.p0.y) + 6*mt*t*(s.p2.y-s.p1.y) + 3*t*t*(s.p3.y-s.p2.y),
  };
}

function pathPoint(segments: Segment[], t: number): Vec2 {
  const n  = segments.length;
  const st = clamp(t * n, 0, n - 0.0001);
  const i  = Math.floor(st);
  return bezierPoint(segments[i], st - i);
}

function pathTangent(segments: Segment[], t: number): Vec2 {
  const n  = segments.length;
  const st = clamp(t * n, 0, n - 0.0001);
  const i  = Math.floor(st);
  return bezierTangent(segments[i], st - i);
}

// ─── S-CURVE ─────────────────────────────────────────────────────────────────

function buildSCurve(w: number, h: number): { segments: Segment[]; waypoints: Waypoint[] } {
  const pts: Vec2[] = [
    { x: w * 0.11, y: h * 0.06 },  // TUN — top left
    { x: w * 0.81, y: h * 0.17 },  // CDG — right, higher up
    { x: w * 0.19, y: h * 0.28 },  // LON — left, closer to CDG vertically
    { x: w * 0.82, y: h * 0.47 },  // DXB — right, big vertical gap
    { x: w * 0.13, y: h * 0.58 },  // IST — left, small gap
    { x: w * 0.85, y: h * 0.72 },  // NYC — right, medium gap
    { x: w * 0.17, y: h * 0.93 },  // JFK — left, big gap to bottom
  ];

  // Catmull-Rom → cubic Bézier
  const segments: Segment[] = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(pts.length - 1, i + 2)];
    segments.push({
      p0: p1,
      p1: { x: p1.x + (p2.x - p0.x) / 6, y: p1.y + (p2.y - p0.y) / 6 },
      p2: { x: p2.x - (p3.x - p1.x) / 6, y: p2.y - (p3.y - p1.y) / 6 },
      p3: p2,
    });
  }

  const waypointDefs = [
    { t: 0.00, label: "TUN" },
    { t: 0.18, label: "CDG" },
    { t: 0.35, label: "LON" },
    { t: 0.50, label: "DXB" },
    { t: 0.65, label: "IST" },
    { t: 0.82, label: "NYC" },
    { t: 1.00, label: "JFK" },
  ];

  const waypoints: Waypoint[] = waypointDefs.map(({ t, label }) => ({
    pos: pathPoint(segments, t), label,
    pulseT: rand(0, 1), pulseSpeed: rand(0.0006, 0.0012),
  }));

  return { segments, waypoints };
}

// ─── CLOUDS ──────────────────────────────────────────────────────────────────

function makeCloud(w: number, h: number, layer: number, imgW: number, imgH: number): CloudSprite {
  const cfg = [
    { speedRange: [0.002, 0.005], opacityRange: [0.25, 0.40], scaleRange: [0.30, 0.55] },
    { speedRange: [0.005, 0.010], opacityRange: [0.40, 0.60], scaleRange: [0.45, 0.75] },
    { speedRange: [0.010, 0.018], opacityRange: [0.55, 0.80], scaleRange: [0.60, 1.00] },
  ][layer];
  const scale  = rand(cfg.scaleRange[0], cfg.scaleRange[1]);
  const cw     = imgW * scale;
  const ch     = imgH * scale;
  const yBands = [[0.02, 0.40], [0.18, 0.60], [0.35, 0.78]][layer];
  const baseY  = rand(h * yBands[0], h * yBands[1]);
  return {
    x: rand(-cw * 0.5, w + cw * 0.2), y: baseY, baseY,
    driftFreq:  rand(0.00008, 0.00018),
    driftAmp:   rand(6, 18),
    driftPhase: rand(0, Math.PI * 2),
    speed:      rand(cfg.speedRange[0], cfg.speedRange[1]),
    scale,
    opacity:    rand(cfg.opacityRange[0], cfg.opacityRange[1]),
    layer, w: cw, h: ch,
    flipX:      Math.random() > 0.5,
  };
}

// ─── DRAW: S-CURVE ───────────────────────────────────────────────────────────

function drawSCurve(ctx: CanvasRenderingContext2D, segments: Segment[], planeT: number) {
  const steps = 120;

  const drawPath = (tMax: number) => {
    ctx.beginPath();
    for (let i = 0; i <= steps; i++) {
      const pt = pathPoint(segments, (i / steps) * tMax);
      i === 0 ? ctx.moveTo(pt.x, pt.y) : ctx.lineTo(pt.x, pt.y);
    }
  };

  // Soft blur underlayer
  ctx.save();
  drawPath(1);
  ctx.lineWidth   = 5;
  ctx.strokeStyle = "rgba(180,220,255,0.04)";
  ctx.filter      = "blur(4px)";
  ctx.stroke();
  ctx.filter      = "none";
  ctx.restore();

  // Full dashed path (upcoming)
  ctx.save();
  drawPath(1);
  ctx.setLineDash([6, 12]);
  ctx.lineWidth   = 1.4;
  ctx.strokeStyle = "rgba(200,230,255,0.15)";
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.restore();

  // Travelled portion — brighter
  ctx.save();
  drawPath(planeT);
  ctx.setLineDash([6, 12]);
  ctx.lineWidth   = 1.8;
  ctx.strokeStyle = "rgba(100,200,255,0.30)";
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.restore();
}

// ─── DRAW: WAYPOINT ──────────────────────────────────────────────────────────

function drawWaypoint(
  ctx: CanvasRenderingContext2D,
  wp: Waypoint,
  dt: number,
  planeT: number,
  waypointT: number
) {
  wp.pulseT       = (wp.pulseT + wp.pulseSpeed * dt) % 1;
  const pulse     = Math.sin(wp.pulseT * Math.PI * 2) * 0.5 + 0.5;
  const visited   = planeT >= waypointT;
  const dotColor  = visited ? "#64C8FF" : "rgba(150,200,255,0.5)";
  const labelCol  = visited ? "#B0E0FF" : "rgba(150,200,255,0.55)";

  ctx.save();

  // Glow halo
  const grd = ctx.createRadialGradient(wp.pos.x, wp.pos.y, 0, wp.pos.x, wp.pos.y, 18);
  grd.addColorStop(0, "rgba(100,200,255,0.28)");
  grd.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = grd;
  ctx.beginPath();
  ctx.arc(wp.pos.x, wp.pos.y, 18, 0, Math.PI * 2);
  ctx.fill();

  // Radar ring (visited only)
  if (visited) {
    const ringR = 6 + pulse * 14;
    ctx.beginPath();
    ctx.arc(wp.pos.x, wp.pos.y, ringR, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(100,200,255,${0.85 * (1 - pulse)})`;
    ctx.lineWidth   = 1.5;
    ctx.stroke();
  }

  // Core dot
  ctx.beginPath();
  ctx.arc(wp.pos.x, wp.pos.y, visited ? 5 : 3.5, 0, Math.PI * 2);
  ctx.fillStyle = dotColor;
  ctx.fill();

  // White inner highlight (visited only)
  if (visited) {
    ctx.beginPath();
    ctx.arc(wp.pos.x, wp.pos.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.fill();
  }

  // Diamond
  ctx.save();
  ctx.translate(wp.pos.x, wp.pos.y);
  ctx.rotate(Math.PI / 4);
  ctx.strokeStyle = dotColor;
  ctx.lineWidth   = visited ? 1.5 : 1;
  ctx.strokeRect(-6, -6, 12, 12);
  ctx.restore();

  // Label
  ctx.font        = "bold 10px 'Inter', monospace";
  ctx.fillStyle   = labelCol;
  ctx.shadowColor = "rgba(0,0,0,0.9)";
  ctx.shadowBlur  = 4;
  ctx.fillText(wp.label, wp.pos.x + 9, wp.pos.y - 6);
  ctx.shadowBlur  = 0;

  ctx.restore();
}

// ─── CONSTANTS ───────────────────────────────────────────────────────────────

const SECTION_IDS = ["hero", "about", "experience", "skills", "projects", "education", "contact"];
const WAYPOINT_TS = [0.00, 0.18, 0.35, 0.50, 0.65, 0.82, 1.00];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

const AnimatedBackground = () => {
  const canvasRef     = useRef<HTMLCanvasElement>(null);
  const angleRef      = useRef(0);
  const lastScrollRef = useRef(0);
  const scrollUpRef   = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width  = w;
    canvas.height = h;

    // Images
    const cloudImg  = new Image(); cloudImg.src  = cloudSrc;
    const planeImg  = new Image(); planeImg.src  = planeSrc;
    let cloudReady  = false;
    let planeReady  = false;
    planeImg.onload = () => { planeReady = true; };

    // S-curve
    let { segments, waypoints } = buildSCurve(w, h);

    // Section tops — computed fresh each frame
    const getSectionTops = (): number[] =>
      SECTION_IDS.map(id => {
        const el = document.getElementById(id);
        return el ? el.getBoundingClientRect().top + window.scrollY : 0;
      });

    // Clouds
    let clouds: CloudSprite[] = [];
    const buildClouds = () => {
      clouds = [];
      const iw = cloudImg.naturalWidth  || 500;
      const ih = cloudImg.naturalHeight || 500;
      for (let i = 0; i < 2; i++) clouds.push(makeCloud(w, h, 0, iw, ih));
      for (let i = 0; i < 2; i++) clouds.push(makeCloud(w, h, 1, iw, ih));
      for (let i = 0; i < 2; i++) clouds.push(makeCloud(w, h, 2, iw, ih));
    };
    cloudImg.onload = () => { cloudReady = true; buildClouds(); };

    let frameId: number;
    let lastTime = 0;

    const tick = (now: number) => {
      const dt      = Math.min(now - lastTime, 32);
      lastTime      = now;
      const scrollY = window.scrollY;

      // Track scroll direction
      if (scrollY !== lastScrollRef.current) {
        scrollUpRef.current   = scrollY < lastScrollRef.current;
        lastScrollRef.current = scrollY;
      }
      const scrollingUp = scrollUpRef.current;

      // ── Plane position: map scroll to section → waypoint ──
      const sectionTops = getSectionTops();
      let activeSi = 0;
      for (let si = sectionTops.length - 1; si >= 0; si--) {
        if (scrollY >= sectionTops[si] - 10) { activeSi = si; break; }
      }
      const sectionStart = sectionTops[activeSi];
      const sectionEnd   = sectionTops[activeSi + 1] ?? sectionStart + window.innerHeight;
      const progress     = clamp((scrollY - sectionStart) / (sectionEnd - sectionStart), 0, 1);
      const planeT       = WAYPOINT_TS[activeSi] + (WAYPOINT_TS[Math.min(activeSi + 1, WAYPOINT_TS.length - 1)] - WAYPOINT_TS[activeSi]) * progress;

      const planePos    = pathPoint(segments, planeT);
      const tan         = pathTangent(segments, planeT);
      const targetAngle = Math.atan2(tan.y, tan.x);
      const diff        = ((targetAngle - angleRef.current + Math.PI) % (Math.PI * 2)) - Math.PI;
      angleRef.current += diff * 0.12;

      // ── Sky ──
      const sky = ctx.createLinearGradient(0, 0, 0, h);
      sky.addColorStop(0,   "hsl(220,45%,6%)");
      sky.addColorStop(0.5, "hsl(222,48%,11%)");
      sky.addColorStop(1,   "hsl(218,52%,16%)");
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, w, h);

      // Grid removed

      // ── S-curve & waypoints ──
      drawSCurve(ctx, segments, planeT);
      waypoints.forEach((wp, i) => drawWaypoint(ctx, wp, dt, planeT, WAYPOINT_TS[i]));

      // ── Clouds ──
      if (cloudReady) {
        [...clouds]
          .sort((a, b) => a.layer - b.layer)
          .forEach(cl => {
            cl.x  += cl.speed * dt;
            cl.y   = cl.baseY + Math.sin(now * cl.driftFreq + cl.driftPhase) * cl.driftAmp;
            if (cl.x > w + cl.w * 0.6) {
              cl.x     = -cl.w * 0.8;
              cl.baseY = rand(h * [0.02, 0.18, 0.35][cl.layer], h * [0.40, 0.60, 0.78][cl.layer]);
            }
            const cy = cl.y;
            ctx.save();
            ctx.globalAlpha = cl.opacity;
            ctx.filter      = "brightness(0.85) saturate(0.7) hue-rotate(10deg)";
            if (cl.flipX) {
              ctx.translate(cl.x + cl.w, cy);
              ctx.scale(-1, 1);
              ctx.drawImage(cloudImg, 0, 0, cl.w, cl.h);
            } else {
              ctx.drawImage(cloudImg, cl.x, cy, cl.w, cl.h);
            }
            ctx.restore();
          });
      }

      ctx.filter = "none";

      // ── Plane ──
      if (planeReady) {
        ctx.save();
        ctx.globalAlpha = 0.95;
        ctx.translate(planePos.x, planePos.y);
        ctx.rotate(angleRef.current + Math.PI / 2);
        if (scrollingUp && planeT > 0.01) ctx.scale(1, -1);
        ctx.filter = "drop-shadow(0 0 6px rgba(150,210,255,0.9)) brightness(1.15)";
        ctx.drawImage(planeImg, -29, -29, 58, 58);
        ctx.restore();
        ctx.filter = "none";
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    const onResize = () => {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w; canvas.height = h;
      const rebuilt = buildSCurve(w, h);
      segments  = rebuilt.segments;
      waypoints = rebuilt.waypoints;
      if (cloudReady) buildClouds();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed", inset: 0, zIndex: -10,
        display: "block", width: "100vw", height: "100vh",
        pointerEvents: "none",
      }}
    />
  );
};

export default AnimatedBackground;
