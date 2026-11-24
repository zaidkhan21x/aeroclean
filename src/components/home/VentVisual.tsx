/**
 * Hero illustration: a brushed-metal 4-way ceiling diffuser (the classic square
 * HVAC vent) lit from within by a warm amber glow, with warm-air ripples that
 * echo the waves in the AERO CLEAN logo.
 *
 * Built as inline SVG so it is sharp at every size, weighs a few KB, needs no
 * image request, causes no layout shift and works with static export. The glow
 * is soft and diffuse — no flames, smoke or soot — so it reads as warm air,
 * never as a fire.
 */

const C = 300; // centre x
const CY = 318; // centre y
const RINGS = [0, 1, 2, 3, 4];
const OUTER = 166; // half-size of the outermost louver ring
const STEP = 31; // distance between rings
const BAND = 19; // louver blade width (as seen from below)

const MOTES = [
  { cx: 214, cy: 108, r: 1.6, d: "0s" },
  { cx: 388, cy: 86, r: 1.2, d: "2.5s" },
  { cx: 300, cy: 70, r: 2, d: "5s" },
  { cx: 452, cy: 118, r: 1.3, d: "7.5s" },
  { cx: 166, cy: 84, r: 1.1, d: "9s" },
  { cx: 342, cy: 112, r: 1.4, d: "3.8s" },
];

function squarePath(h: number, r = 2) {
  const x0 = C - h;
  const y0 = CY - h;
  const s = 2 * h;
  return `M${x0 + r} ${y0}h${s - 2 * r}a${r} ${r} 0 0 1 ${r} ${r}v${s - 2 * r}a${r} ${r} 0 0 1 -${r} ${r}h-${s - 2 * r}a${r} ${r} 0 0 1 -${r} -${r}v-${s - 2 * r}a${r} ${r} 0 0 1 ${r} -${r}z`;
}

/** A square annulus (one louver ring) as an even-odd path. */
function ringPath(outer: number, inner: number) {
  return `${squarePath(outer, 2.5)} ${squarePath(inner, 1.5)}`;
}

export function VentVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 620"
      className={className}
      role="img"
      aria-labelledby="vent-title vent-desc"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="vent-title">Illuminated HVAC ceiling vent</title>
      <desc id="vent-desc">
        A square brushed-metal ventilation diffuser with stepped louvers, glowing with warm amber light from inside, with
        gentle ripples of warm air rising above it.
      </desc>
      <defs>
        <radialGradient id="v-wall" cx="50%" cy="52%" r="60%">
          <stop offset="0%" stopColor="#3b2414" />
          <stop offset="40%" stopColor="#1c1a1b" />
          <stop offset="100%" stopColor="#0e1318" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="v-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffae55" stopOpacity="0.5" />
          <stop offset="45%" stopColor="#ff7a1a" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#ff7a1a" stopOpacity="0" />
        </radialGradient>

        {/* Light source inside the vent — brightest at the centre */}
        <radialGradient id="v-core" gradientUnits="userSpaceOnUse" cx={C} cy={CY} r="190">
          <stop offset="0%" stopColor="#fff6e4" />
          <stop offset="18%" stopColor="#ffdca0" />
          <stop offset="42%" stopColor="#ffa640" />
          <stop offset="70%" stopColor="#e2620f" />
          <stop offset="100%" stopColor="#6a2306" />
        </radialGradient>

        {/* Brushed steel */}
        <linearGradient id="v-steel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8a95a1" />
          <stop offset="25%" stopColor="#525c68" />
          <stop offset="58%" stopColor="#2b333c" />
          <stop offset="82%" stopColor="#3c4550" />
          <stop offset="100%" stopColor="#1e242b" />
        </linearGradient>
        {/* Louver blade: lit metal on top-left faces, shadow bottom-right */}
        <linearGradient id="v-blade" gradientUnits="userSpaceOnUse" x1={C - OUTER} y1={CY - OUTER} x2={C + OUTER} y2={CY + OUTER}>
          <stop offset="0%" stopColor="#7c8794" />
          <stop offset="45%" stopColor="#3f4852" />
          <stop offset="100%" stopColor="#1c2228" />
        </linearGradient>
        {/* Warm light washing over the blades from the gaps */}
        <radialGradient id="v-warm" gradientUnits="userSpaceOnUse" cx={C} cy={CY} r="200">
          <stop offset="0%" stopColor="#ffb766" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#ff8a1f" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#ff8a1f" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="v-lip" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff9a3c" stopOpacity="0" />
          <stop offset="100%" stopColor="#ffb766" stopOpacity="0.5" />
        </linearGradient>
        <radialGradient id="v-screw" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#d2d9e0" />
          <stop offset="55%" stopColor="#6c7681" />
          <stop offset="100%" stopColor="#2a3139" />
        </radialGradient>
        <linearGradient id="v-wave" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#ffb766" stopOpacity="0" />
          <stop offset="45%" stopColor="#ffb766" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ffd9a6" stopOpacity="0" />
        </linearGradient>

        <filter id="v-blur-lg" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="36" />
        </filter>
        <filter id="v-blur-md" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
        <filter id="v-glow-dot" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="1.6" />
        </filter>
        <filter id="v-brush" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.006 0.9" numOctaves="2" seed="7" result="n" />
          <feColorMatrix in="n" type="saturate" values="0" />
        </filter>

        <clipPath id="v-frame-clip">
          <path d={squarePath(212, 22)} />
        </clipPath>
        <clipPath id="v-opening-clip">
          <path d={squarePath(OUTER + 10, 4)} />
        </clipPath>
      </defs>

      {/* Ambient warm wash */}
      <rect width="600" height="620" fill="url(#v-wall)" />
      <ellipse cx={C} cy={CY} rx="290" ry="290" fill="url(#v-halo)" className="animate-glow" />
      <path d={squarePath(206, 26)} transform="translate(10 24)" fill="#000" opacity="0.6" filter="url(#v-blur-lg)" />

      {/* ── Outer frame ─────────────────────────────────── */}
      <path d={squarePath(212, 22)} fill="url(#v-steel)" />
      <g clipPath="url(#v-frame-clip)" opacity="0.14">
        <rect x={C - 212} y={CY - 212} width="424" height="424" filter="url(#v-brush)" />
      </g>
      {/* frame bevel */}
      <path d={squarePath(211, 21)} fill="none" stroke="#cfd7de" strokeOpacity="0.35" strokeWidth="1.5" />
      <path d={`M${C - 190} ${CY + 211}H${C + 190}`} stroke="#05070a" strokeOpacity="0.7" strokeWidth="2" />
      <rect x={C - 208} y={CY + 140} width="416" height="68" rx="20" fill="url(#v-lip)" opacity="0.5" />

      {/* Recessed throat around the louvers */}
      <path d={squarePath(OUTER + 14, 6)} fill="#0c0f13" />
      <path d={squarePath(OUTER + 14, 6)} fill="none" stroke="#000" strokeOpacity="0.6" strokeWidth="2" />

      {/* ── Louvers (4-way stepped diffuser) ───────────── */}
      <g clipPath="url(#v-opening-clip)">
        <rect x={C - OUTER - 12} y={CY - OUTER - 12} width={2 * OUTER + 24} height={2 * OUTER + 24} fill="url(#v-core)" className="animate-glow" />
        {RINGS.map((i) => {
          const outer = OUTER - i * STEP;
          const inner = outer - BAND;
          return (
            <g key={i}>
              {/* blade */}
              <path d={ringPath(outer, inner)} fillRule="evenodd" fill="url(#v-blade)" />
              <path d={ringPath(outer, inner)} fillRule="evenodd" fill="url(#v-warm)" />
              {/* warm rim where the blade meets the glowing gap */}
              <path d={squarePath(inner + 0.75, 1.5)} fill="none" stroke="#ffc27a" strokeOpacity={0.55 - i * 0.04} strokeWidth="1.5" />
              {/* lit outer edge */}
              <path d={squarePath(outer - 0.75, 2.5)} fill="none" stroke="#d9e0e6" strokeOpacity="0.28" strokeWidth="1" />
              {/* mitred corners */}
              <g stroke="#0b0e12" strokeOpacity="0.55" strokeWidth="1.2">
                <line x1={C - outer} y1={CY - outer} x2={C - inner} y2={CY - inner} />
                <line x1={C + outer} y1={CY - outer} x2={C + inner} y2={CY - inner} />
                <line x1={C - outer} y1={CY + outer} x2={C - inner} y2={CY + inner} />
                <line x1={C + outer} y1={CY + outer} x2={C + inner} y2={CY + inner} />
              </g>
            </g>
          );
        })}
        {/* centre plate */}
        {(() => {
          const h = OUTER - RINGS.length * STEP;
          return (
            <g>
              <path d={squarePath(h, 2)} fill="url(#v-blade)" />
              <path d={squarePath(h - 0.75, 2)} fill="none" stroke="#d9e0e6" strokeOpacity="0.3" strokeWidth="1" />
              <circle cx={C} cy={CY} r="4.5" fill="url(#v-screw)" />
            </g>
          );
        })()}
        {/* inner vignette for depth */}
        <path d={squarePath(OUTER + 9, 4)} fill="none" stroke="#000" strokeOpacity="0.6" strokeWidth="12" filter="url(#v-blur-md)" />
      </g>

      {/* ── Corner screws ─────────────────────────────── */}
      {[
        [C - 190, CY - 190],
        [C + 190, CY - 190],
        [C - 190, CY + 190],
        [C + 190, CY + 190],
      ].map(([cx, cy]) => (
        <g key={`${cx}-${cy}`} transform={`translate(${cx} ${cy})`}>
          <circle r="7.5" fill="#0b0e12" opacity="0.6" transform="translate(1 1.5)" />
          <circle r="7" fill="url(#v-screw)" />
          <path d="M-4 -1.2h8v2.4h-8z" fill="#252b32" transform="rotate(35)" />
          <path d="M-1.2 -4h2.4v8h-2.4z" fill="#252b32" transform="rotate(35)" />
        </g>
      ))}

      {/* ── Warm air ripples (echo the logo's air waves) ── */}
      <g className="motion-safe-hide" fill="none" stroke="url(#v-wave)" strokeWidth="3.5" strokeLinecap="round">
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            d={`M${206 + i * 47} 96 c-9 -12 9 -18 0 -32 c-8 -12 8 -18 0 -32`}
            className="animate-rise"
            style={{ animationDelay: `${i * 0.9}s` }}
          />
        ))}
      </g>

      {/* ── Motes caught in the light ─────────────────── */}
      <g className="motion-safe-hide" fill="#ffe2b8">
        {MOTES.map((m, i) => (
          <circle key={i} cx={m.cx} cy={m.cy} r={m.r} filter="url(#v-glow-dot)" className="animate-drift" style={{ animationDelay: m.d }} />
        ))}
      </g>

      <g fontFamily="ui-monospace, monospace" fontSize="10.5" letterSpacing="1.6" fill="#ffffff" fillOpacity="0.45">
        <text x={C - 212} y="584">SUPPLY · RETURN · DUCTWORK</text>
        <line x1={C - 212} y1="598" x2={C + 212} y2="598" stroke="#ffffff" strokeOpacity="0.14" />
      </g>
    </svg>
  );
}
