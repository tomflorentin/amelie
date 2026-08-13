import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { LeafIcon } from "@/components/Decorations";

export function Footer() {
  return (
    <footer id="contact" className="bg-brown text-cream-deep">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="La PompiHouse"
                className="h-14 w-14 object-contain"
              />
              <span className="font-script text-3xl text-cream">
                La PompiHouse
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-deep/80">
              Pension familiale pour lapins &amp; rongeurs à La Motte (83),
              pour des vacances sereines, entourés de verdure et
              d&apos;attention.
            </p>
          </div>

          <div>
            <h3 className="mb-3 flex items-center gap-2 font-serif-display text-lg text-cream">
              <LeafIcon className="h-4 w-4 text-leaf" />
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-cream-deep/85">
              <li>
                <a href="tel:+33680619766" className="hover:text-leaf">
                  Amélie — 06 80 61 97 66
                </a>
              </li>
              <li>
                <a
                  href="mailto:pompihouse@gmail.com"
                  className="hover:text-leaf"
                >
                  pompihouse@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=La%20Motte%2C%2083920%2C%20France"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-leaf"
                >
                  La Motte (83 — Var)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 flex items-center gap-2 font-serif-display text-lg text-cream">
              <LeafIcon className="h-4 w-4 text-leaf" />
              Réserver un séjour
            </h3>
            <p className="text-sm leading-relaxed text-cream-deep/80">
              Disponibilités, tarifs et modalités selon l&apos;espèce et la
              durée : contactez Amélie directement par téléphone ou e-mail.
            </p>
            <a
              href="tel:+33680619766"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-olive px-5 py-2.5 text-sm font-bold text-cream transition hover:bg-olive-dark"
            >
              Demander une disponibilité
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream-deep/15 pt-6 text-xs text-cream-deep/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} La PompiHouse — La Motte (83, Var).</p>
          <p>Tarifs, horaires et modalités précises communiqués sur demande.</p>
        </div>
      </div>
    </footer>
  );
}
