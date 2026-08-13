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

export function SnowflakeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 2v20M4.93 5.93l14.14 12.14M4.93 18.07 19.07 5.93M5 12h14"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="m12 2-1.7 2M12 2l1.7 2M12 22l-1.7-2M12 22l1.7-2M4.93 5.93l2.6.3M4.93 5.93l.3 2.6M19.07 18.07l-2.6-.3M19.07 18.07l-.3-2.6M4 12l2 1M4 12l2-1M20 12l-2 1M20 12l-2-1"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CameraIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 7.5h3l1.3-2h7.4l1.3 2h3v11H4v-11Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="13" r="3.2" stroke="currentColor" strokeWidth="1.7" />
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
