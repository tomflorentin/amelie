import logo from "@/assets/images/logo.png";
import { ZoomableImage } from "@/components/ZoomableImage";

const NAV_LINKS = [
  { href: "#presentation", label: "Présentation" },
  { href: "#environnement", label: "Environnement" },
  { href: "#prestations", label: "Prestations" },
  { href: "#avis", label: "Avis" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brown/10 bg-cream/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#accueil" className="flex items-center gap-3">
          <ZoomableImage
            src={logo}
            alt="La PompiHouse"
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
            priority
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-script text-2xl text-brown">La PompiHouse</span>
            <span className="text-[11px] font-semibold uppercase tracking-wide text-olive-dark">
              Pension lapins &amp; rongeurs
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-brown-soft transition hover:text-olive-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+33680619766"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-olive px-4 py-2 text-sm font-bold text-cream shadow-sm transition hover:bg-olive-dark sm:px-5"
        >
          <span aria-hidden="true">🐾</span>
          <span className="hidden sm:inline">06 80 61 97 66</span>
          <span className="sm:hidden">Appeler</span>
        </a>
      </div>
    </header>
  );
}
