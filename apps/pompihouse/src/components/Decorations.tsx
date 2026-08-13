export function LeafIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 20c0-7 4-14 16-16-2 12-9 16-16 16Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M4 20c4-4 8-8 14-14"
        stroke="var(--color-cream)"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloverIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <g fill="currentColor">
        <circle cx="8" cy="8" r="4.2" />
        <circle cx="16" cy="8" r="4.2" />
        <circle cx="8" cy="16" r="4.2" />
        <circle cx="16" cy="16" r="4.2" />
      </g>
      <path d="M12 12v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function PawIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <ellipse cx="12" cy="16" rx="5.2" ry="4.4" />
      <ellipse cx="5.2" cy="9.5" rx="2.4" ry="3" />
      <ellipse cx="18.8" cy="9.5" rx="2.4" ry="3" />
      <ellipse cx="9" cy="5" rx="2" ry="2.6" />
      <ellipse cx="15" cy="5" rx="2" ry="2.6" />
    </svg>
  );
}

export function PawTrail({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <g fill="currentColor" opacity="0.55">
        <PawMark x={2} y={22} scale={0.55} rotate={-10} />
        <PawMark x={28} y={10} scale={0.55} rotate={5} />
        <PawMark x={56} y={20} scale={0.55} rotate={-8} />
        <PawMark x={84} y={8} scale={0.55} rotate={6} />
        <PawMark x={112} y={18} scale={0.55} rotate={-6} />
        <PawMark x={138} y={6} scale={0.55} rotate={8} />
      </g>
    </svg>
  );
}

function PawMark({
  x,
  y,
  scale,
  rotate,
}: {
  x: number;
  y: number;
  scale: number;
  rotate: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale}) rotate(${rotate})`}>
      <ellipse cx="8" cy="14" rx="6" ry="5" />
      <ellipse cx="2" cy="6" rx="2.4" ry="3" />
      <ellipse cx="14" cy="6" rx="2.4" ry="3" />
      <ellipse cx="5.5" cy="1.5" rx="2" ry="2.5" />
      <ellipse cx="10.5" cy="1.5" rx="2" ry="2.5" />
    </g>
  );
}
