import type { Metadata } from "next";
import Link from "next/link";
import { contact } from "@/lib/content";
import ZoomableImage from "@/components/ZoomableImage";

export const metadata: Metadata = {
  title: "À propos d'Amélie, médium énergéticienne",
  description:
    "Amélie, médium énergéticienne : parcours, guidances, soins énergétiques et boutique ésothérique.",
  keywords: ["Amélie médium", "énergéticienne diplômée", "Reiki Usui", "guidance spirituelle"],
};

export default function Presentation() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <p className="text-xs uppercase tracking-[0.14em] text-mauve">
        Présentation
      </p>
      <h1 className="mt-3 font-display text-4xl italic text-ink sm:text-5xl">
        Bonjour et bienvenue à tous
      </h1>

      <div className="mt-12 grid gap-12 sm:grid-cols-[1fr_1.3fr] sm:items-start">
        <div className="aura relative aspect-[4/5] overflow-hidden rounded-2xl sm:sticky sm:top-28">
          <ZoomableImage
            src="/images/presentation-2.jpg"
            alt="Amélie, médium énergéticienne"
            sizes="(min-width: 640px) 340px, 90vw"
            className="object-cover"
          />
        </div>

        <div className="space-y-5 text-base leading-relaxed text-ink/80">
          <p>
            Je m&apos;appelle Amélie et je suis médium énergéticienne.
          </p>
          <p>
            En qualité d&apos;énergéticienne, j&apos;effectue des bilans
            énergétiques ainsi que des soins énergétiques personnalisés. Ces
            soins sont possibles pour adultes, enfants et animaux.
          </p>
          <p>
            D&apos;autre part, en qualité de médium, je propose des
            consultations de guidances diverses pour vous accompagner dans
            vos questionnements et vos choix.
          </p>
          <p>
            J&apos;ai aussi développé une jolie boutique d&apos;articles
            ésotériques qui vont vous permettre de purifier, d&apos;harmoniser
            votre être ou un lieu mais aussi de vous protéger au quotidien.
            J&apos;ai notamment créé de mes mains des{" "}
            <Link href="/bougie" className="text-mauve underline underline-offset-4 hover:text-ember">
              bougies énergétiques personnalisables
            </Link>
            .
          </p>
          <p>
            Mes services de guidances se font à distance en visio. Pour les
            soins, ils se font à distance en appel vidéo ou à mon cabinet.
          </p>

          <div className="aura my-8 -rotate-1">
            <span className="font-display text-4xl italic text-ember-soft">“</span>
            <p className="-mt-3 font-display text-xl italic text-ink">
              Suis ton intuition, elle te mènera toujours à la bonne
              destination.
            </p>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-dusk/15 bg-paper-soft p-6 sm:flex-row sm:items-center">
            <div className="relative aspect-square w-20 shrink-0 overflow-hidden rounded-xl border border-dusk/15">
              <ZoomableImage
                src="/images/presentation-1.jpg"
                alt="Diplômes Reiki Usui Shiki Ryoho d'Amélie"
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div className="text-sm text-ink/70">
              <p className="font-semibold uppercase tracking-[0.1em] text-ink/50">
                Formation
              </p>
              <p className="mt-1">
                Praticienne certifiée Reiki Usui Shiki Ryoho, Shoden et
                Okuden.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-paper-soft p-6 text-sm text-ink/70">
            <p className="mb-2 font-semibold uppercase tracking-[0.1em] text-ink/50">
              Conditions de vente
            </p>
            <p>
              Le temps indiqué des consultations est le temps maximal, il
              peut donc être plus court si le travail est fini.
            </p>
            <p>Les prestations sont non remboursables.</p>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-ink/10 pt-10">
        <p className="mb-2 text-xs uppercase tracking-[0.14em] text-mauve">
          Contacts
        </p>
        <ul className="space-y-1 text-base text-ink/80">
          <li>
            Mail :{" "}
            <a href={`mailto:${contact.email}`} className="hover:text-ember">
              {contact.email}
            </a>
          </li>
          <li>
            Tél :{" "}
            <a href={contact.phoneHref} className="hover:text-ember">
              {contact.phone}
            </a>
          </li>
          <li>
            TikTok :{" "}
            <a href={contact.tiktok} className="hover:text-ember">
              @amelienergie
            </a>
          </li>
          <li>
            Instagram :{" "}
            <a href={contact.instagram} className="hover:text-ember">
              @amelieenergie
            </a>
          </li>
          <li>
            Facebook :{" "}
            <a href={contact.facebook} className="hover:text-ember">
              Amélienergie
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
