import Image from "next/image";
import Link from "next/link";
import { contact, guidances, soins, testimonials } from "@/lib/content";

export default function Home() {
  const featured = testimonials[1];

  return (
    <>
      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-paper-soft">
        <Image
          src="/images/hero.jpg"
          alt="Amélie, médium et énergéticienne"
          fill
          priority
          className="object-cover"
        />
        <div className="spark h-24 w-24 top-[18%] left-[12%]" />
        <div className="spark h-14 w-14 top-[32%] left-[78%]" style={{ animationDelay: "-2.5s" }} />
        <div className="spark h-10 w-10 top-[58%] left-[20%]" style={{ animationDelay: "-5s" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/55 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 sm:pb-24">
          <p className="reveal -rotate-1 font-display text-lg italic text-ember">
            Bienvenue chez Amélienergie
          </p>
          <h1 className="reveal mt-3 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-6xl">
            Médium, Énergéticienne
          </h1>
          <p className="reveal mt-4 max-w-xl text-base text-ink/75 sm:text-lg">
            Guidance &amp; soin énergétique — à distance en visio ou à mon
            cabinet.
          </p>
          <div className="reveal mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/consultations"
              className="rounded-full bg-ember px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-paper shadow-[0_10px_30px_-10px_var(--ember)] transition-all hover:-translate-y-0.5 hover:bg-dusk"
            >
              Voir les consultations
            </Link>
            <a
              href={contact.phoneHref}
              className="rounded-full border border-ink/25 px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-ink transition-colors hover:border-ember hover:text-ember"
            >
              Tel : {contact.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
        <div className="aura inline-block rotate-1">
          <span className="font-display text-5xl italic text-ember-soft">“</span>
          <p className="-mt-4 font-display text-2xl italic leading-relaxed text-ink sm:text-3xl">
            Suis ton intuition, elle te mènera toujours à la bonne
            destination.
          </p>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-ink/80">
          Je m&apos;appelle Amélie, médium énergéticienne. J&apos;effectue des
          bilans et soins énergétiques personnalisés, ainsi que des
            consultations de guidance pour vous aider à avancer avec plus de
            clarté et de sérénité.
        </p>
        <Link
          href="/presentation"
          className="mt-6 inline-block text-sm font-semibold uppercase tracking-[0.1em] text-mauve underline underline-offset-4 hover:text-ember"
        >
          En savoir plus sur mon parcours
        </Link>
      </section>

      <section className="bg-paper-soft py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl italic text-ink sm:text-4xl">
              Mes accompagnements
            </h2>
            <Link
              href="/consultations"
              className="text-sm font-semibold uppercase tracking-[0.1em] text-mauve hover:text-ember"
            >
              Toutes les consultations →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-ember/25 bg-gradient-to-br from-ember-soft/25 via-paper to-paper p-8">
              <p className="text-xs uppercase tracking-[0.14em] text-ember">
                Médium
              </p>
              <h3 className="mt-2 font-display text-2xl italic text-ink">Guidances</h3>
              <p className="mt-3 text-sm text-ink/70">
                Des réponses à vos questions, l&apos;éclairage sur vos
                blocages et avancer avec plus de clarté — à distance, par appel
                vidéo.
              </p>
              <p className="mt-6 text-sm text-ink/50">
                À partir de {guidances[0].price} — {guidances[0].duration}
              </p>
            </div>
            <div className="rounded-2xl border border-mauve/25 bg-gradient-to-br from-mauve/10 via-paper to-paper p-8">
              <p className="text-xs uppercase tracking-[0.14em] text-mauve">
                Énergéticienne
              </p>
              <h3 className="mt-2 font-display text-2xl italic text-ink">
                Soins énergétiques
              </h3>
              <p className="mt-3 text-sm text-ink/70">
                Bilan et manipulation énergétique pour adultes, enfants et
                animaux — à distance ou à mon cabinet.
              </p>
              <p className="mt-6 text-sm text-ink/50">
                À partir de {soins[0].price} — {soins[0].duration}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-28">
        <p className="text-xs uppercase tracking-[0.14em] text-mauve">
          Témoignage
        </p>
        <p className="mt-4 font-display text-xl italic leading-relaxed text-ink sm:text-2xl">
          « {featured.quote} »
        </p>
        <p className="mt-4 text-sm uppercase tracking-[0.12em] text-ink/50">
          {featured.name}
        </p>
        <Link
          href="/temoignages"
          className="mt-6 inline-block text-sm font-semibold uppercase tracking-[0.1em] text-mauve underline underline-offset-4 hover:text-ember"
        >
          Lire tous les témoignages
        </Link>
      </section>
    </>
  );
}
