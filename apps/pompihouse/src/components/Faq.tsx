import {
  CameraIcon,
  ClockIcon,
  RabbitIcon,
  ShieldIcon,
  SnowflakeIcon,
} from "@/components/Decorations";

const FAQ_ICONS = [RabbitIcon, SnowflakeIcon, CameraIcon, ClockIcon, ShieldIcon];

const FAQ_ITEMS = [
  {
    question: "Quels types d'animaux sont acceptés ?",
    answer:
      "La PompiHouse accueille principalement les petits animaux herbivores ou granivores : lapins, cochons d'Inde, hamsters, gerbilles, rats, souris, chinchillas et octodons. Toute demande concernant un autre NAC sera étudiée au cas par cas afin de garantir un environnement adapté et sécurisé. Les chiens et les chats ne sont pas acceptés, pour préserver la sécurité et la tranquillité des petits pensionnaires.",
  },
  {
    question: "Comment gérez-vous le chaud et le froid ?",
    answer:
      "Les pensionnaires disposent d'espaces intérieurs chauffés en hiver et climatisés lorsque les températures montent. En été, les installations privilégient aussi l'ombre, la fraîcheur et une bonne circulation de l'air. Selon leurs habitudes et la météo, les animaux profitent d'un équilibre entre espaces intérieurs et extérieurs.",
  },
  {
    question: "Comment avoir des nouvelles pendant le séjour ?",
    answer:
      "Amélie envoie régulièrement des nouvelles et des photos pendant le séjour. Vous pouvez ainsi suivre les petits moments du quotidien, voir que votre compagnon s'installe bien et partir l'esprit tranquille.",
  },
  {
    question: "Quand déposer et récupérer mon animal ?",
    answer:
      "Les horaires de dépôt et de récupération sont flexibles afin de s'adapter au mieux à votre organisation. Contactez Amélie par téléphone pour convenir ensemble d'un créneau pratique.",
  },
  {
    question: "Mon animal supporte mal la cage, quelles solutions proposez-vous ?",
    answer:
      "Des solutions flexibles peuvent être mises en place selon les besoins de votre compagnon. Il peut profiter d'un espace extérieur adapté pendant la journée, puis retrouver sa cage uniquement la nuit, pour garantir sa sécurité et son repos.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-cream-deep">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
              "@type": "Question",
              name: question,
              acceptedAnswer: { "@type": "Answer", text: answer },
            })),
          }),
        }}
      />
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-olive-dark">
            Questions fréquentes
          </span>
          <h2 className="mt-2 font-serif-display text-3xl text-brown sm:text-4xl">
            Tout savoir avant le séjour
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brown-soft">
            Les réponses aux questions que se posent le plus souvent les
            propriétaires avant de confier leur compagnon.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-3">
          {FAQ_ITEMS.map(({ question, answer }, index) => {
            const Icon = FAQ_ICONS[index];

            return (
            <article
              key={question}
              className="rounded-2xl bg-cream p-6 ring-1 ring-brown/5"
            >
              <div className="text-olive-dark">
                <Icon className="h-5 w-5 shrink-0" />
              </div>
              <h3 className="mt-4 font-serif-display text-xl text-brown">
                {question}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brown-soft">
                {answer}
              </p>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
