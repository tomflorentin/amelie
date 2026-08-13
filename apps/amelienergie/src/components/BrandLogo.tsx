import Link from "next/link";

type BrandLogoProps = {
  compact?: boolean;
  onClick?: () => void;
};

function EnergyMark() {
  return (
    <svg
      aria-hidden="true"
      className="h-11 w-11 shrink-0 text-ember"
      viewBox="0 0 48 48"
      fill="none"
    >
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeOpacity=".22" />
      <path d="M24 13.5v21M13.5 24h21M16.6 16.6l14.8 14.8M31.4 16.6 16.6 31.4" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      <path d="M24 17.2c3.75 0 6.8 3.05 6.8 6.8s-3.05 6.8-6.8 6.8-6.8-3.05-6.8-6.8 3.05-6.8 6.8-6.8Z" fill="var(--paper)" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20.7 27.2c1.02-2.12 2.09-4.07 3.3-5.87 1.08 1.28 2.05 2.82 3.28 5.87" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="24" r="1.2" fill="currentColor" />
    </svg>
  );
}

export default function BrandLogo({ compact = false, onClick }: BrandLogoProps) {
  return (
    <Link href="/" className="group flex items-center gap-3" onClick={onClick}>
      <EnergyMark />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.65rem] italic tracking-[-0.035em] text-dusk transition-colors group-hover:text-ember">
          Amélienergie
        </span>
        {!compact && (
          <span className="mt-1.5 text-[0.58rem] uppercase tracking-[0.18em] text-ink/50">
            Médium · Énergéticienne diplômée
          </span>
        )}
      </span>
    </Link>
  );
}
