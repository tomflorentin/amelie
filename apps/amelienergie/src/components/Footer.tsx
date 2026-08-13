import Link from "next/link";
import { contact, nav } from "@/lib/content";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "./icons";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ember/15 bg-paper-soft text-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-3">
        <div>
          <BrandLogo compact />
          <p className="mt-2 max-w-xs text-sm text-ink/65">
            Médium et énergéticienne diplômée — guidance et soin énergétique,
            à distance ou à mon cabinet.
          </p>
        </div>

        <div className="text-sm">
          <p className="mb-3 uppercase tracking-[0.14em] text-ink/45">Navigation</p>
          <ul className="space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink/75 hover:text-ember">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-sm">
          <p className="mb-3 uppercase tracking-[0.14em] text-ink/45">Contact</p>
          <ul className="space-y-2">
            <li>
              <a href={contact.phoneHref} className="text-ink/75 hover:text-ember">
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="text-ink/75 hover:text-ember">
                {contact.email}
              </a>
            </li>
          </ul>
          <div className="mt-4 flex gap-4 text-ink/60">
            <a href={contact.facebook} aria-label="Facebook" className="hover:text-ember">
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a href={contact.instagram} aria-label="Instagram" className="hover:text-ember">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href={contact.tiktok} aria-label="TikTok" className="hover:text-ember">
              <TikTokIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-ember/10 px-6 py-4 text-center text-xs text-ink/40">
        © {year} Amélienergie
      </div>
    </footer>
  );
}
