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

export function RabbitIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M8.5 10.5C7.3 8.2 7.2 3 9.2 2.4c1.8-.5 2.2 4.4 2.1 6.5M15.5 10.5c1.2-2.3 1.3-7.5-.7-8.1-1.8-.5-2.2 4.4-2.1 6.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M5.5 14.5c0-3.1 2.8-5.5 6.5-5.5s6.5 2.4 6.5 5.5-2.8 5.5-6.5 5.5-6.5-2.4-6.5-5.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="9.5" cy="14" r=".8" fill="currentColor" />
      <circle cx="14.5" cy="14" r=".8" fill="currentColor" />
      <path d="M10.5 16.5c1 .7 2 .7 3 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 7.5v5l3.5 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5 19 6v5.2c0 4.2-2.9 7.8-7 9.3-4.1-1.5-7-5.1-7-9.3V6l7-2.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="m8.5 12 2.2 2.2 4.8-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
