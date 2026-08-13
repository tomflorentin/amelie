export const nav = [
  { href: "/", label: "Accueil" },
  { href: "/presentation", label: "Présentation" },
  { href: "/consultations", label: "Consultations" },
  { href: "/bougie", label: "Bougie" },
  { href: "/temoignages", label: "Témoignages" },
];

export const contact = {
  phone: "06.80.61.97.66",
  phoneHref: "tel:+33680619766",
  email: "amelienergie@gmail.com",
  facebook: "https://www.facebook.com/amelienergie",
  instagram: "https://www.instagram.com/amelieenergie/?hl=fr",
  tiktok: "https://www.tiktok.com/@amelienergie",
};

export type Service = {
  title: string;
  description: string;
  duration: string;
  price: string;
};

export const guidances: Service[] = [
  {
    title: "Guidance une question",
    description: "Poser une question précise, réponse approfondie.",
    duration: "15 min",
    price: "15 €",
  },
  {
    title: "Guidance 30 min",
    description: "Une guidance pour éclairer une situation en cours.",
    duration: "30 min",
    price: "30 €",
  },
  {
    title: "Guidance 1h",
    description: "Une consultation approfondie pour explorer plusieurs sujets.",
    duration: "1 h",
    price: "60 €",
  },
  {
    title: "Guidance sur ses blocages",
    description:
      "Connaître ses blocages liés à ses différentes expériences de vies.",
    duration: "30 min",
    price: "30 €",
  },
];

export const soins: Service[] = [
  {
    title: "Soin énergétique « Bien-être »",
    description: "Manipulation énergétique à distance ou à mon cabinet.",
    duration: "2 h",
    price: "65 €",
  },
  {
    title: "Soin énergétique « Approfondi »",
    description: "Bilan énergétique + manipulation énergétique à distance.",
    duration: "2 h",
    price: "85 €",
  },
  {
    title: "Soin énergétique « Enfant »",
    description: "Manipulation énergétique à distance ou à mon cabinet.",
    duration: "1 h",
    price: "65 €",
  },
  {
    title: "Soin énergétique « Animal »",
    description: "Manipulation énergétique à distance.",
    duration: "1 h",
    price: "65 €",
  },
];

export const candle = {
  title: "Bougie d'Harmonisation Énergétique",
  price: "25 €",
  intro:
    "Entièrement faites maison, mes bougies à base de cire de soja et de parfum sont énergétisées par mes soins pour purifier et harmoniser les énergies de votre habitation et de ceux qui y vivent.",
  features: [
    {
      title: "Sérénité et protection au quotidien",
      description:
        "Elles aident à instaurer une atmosphère paisible, éloignant les énergies négatives et favorisant un profond apaisement.",
    },
    {
      title: "Personnalisation sur demande",
      description:
        "Chaque bougie peut être énergétisée avec une intention spécifique selon vos besoins.",
    },
    {
      title: "Accompagnée d'une prière d'intention",
      description:
        "Un message canalisé auprès des êtres de lumière pour renforcer sa vibration et vous accompagner sur votre chemin spirituel.",
    },
  ],
  options: ["Couleur des fleurs 1", "Couleur des fleurs 2", "Parfum"],
};

export type Testimonial = {
  name: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Violette",
    quote:
      "Lors d'une période psychologiquement compliquée pour moi, j'ai essayé le Reiki pour la première fois. Avec beaucoup de bienveillance Amélie a pu m'aider à mettre des mots sur les maux. Elle m'a aidé dans ma prise de conscience. Je la remercie pour sa douceur et son empathie. Je vous la recommande.",
  },
  {
    name: "Juliette",
    quote:
      "Amélie saura vous mettre en confiance avec sa bienveillance, son écoute et sa douceur. Au cours d'une séance avec elle, j'ai pu en apprendre plus sur les énergies qui avaient une emprise sur moi et que je devais laisser derrière, mais aussi sur des points plus personnels qui m'ont beaucoup touchée. Si vous avez besoin de guidance et de réponses à vos questions, je vous conseille sincèrement ses services !",
  },
  {
    name: "Valérie",
    quote:
      "Méditation très bien guidée. Je me suis sentie bien déconnectée, comme hors du temps, centrée sur moi-même et mes sensations. J'ai vraiment ressenti l'énergie travailler et circuler. J'ai également eu des sensations de nœuds qui se défaisaient dans mon corps. Après je me sentais légère, apaisée, comme un équilibre et une harmonie entre mon corps et ma tête. Merci Amélie !",
  },
  {
    name: "Sabine",
    quote:
      "Bonjour, je ne sais pas si je vais correctement retranscrire ma découverte d'Amélie et mon expérience. Tout d'abord j'étais hésitante dans ma démarche et le choix de mes questions. Finalement j'ai trouvé mes questions et Amélie m'a apporté bien plus que des réponses. J'étais très émue je l'avoue. Je vous la recommande vivement.",
  },
  {
    name: "Sandrine",
    quote:
      "J'ai fait appel à Amélie lorsque j'avais égaré ma carte bancaire. Après plusieurs jours de recherches actives, l'inquiétude commençait à me gagner. Grâce à son pendule elle a pu me dire précisément où était ma carte. J'ai suivi ses indications et j'ai retrouvé ma carte ! Merci Amélie.",
  },
  {
    name: "Mariella",
    quote:
      "J'ai fait appel à Amélie pour une séance « Vies antérieures ». Je vous recommande vivement cette séance si vous êtes dans un profond travail d'introspection et de mieux-être. Pour ma part, cela m'a apporté un éclairage très intéressant pour comprendre mes blocages. Je pensais être bouleversée par les éléments qui me seraient révélés, mais ce fut l'inverse : je me suis sentie plus apaisée et plus bienveillante envers mes émotions ainsi que mes peurs. Je comprends mieux le « pourquoi » et cela va me permettre de travailler dans la bonne direction. Pour avoir consulté différents médiums et posséder moi-même certaines aptitudes, je vous recommande sans hésitation Amélie dont les compétences sont bluffantes. J'ai aussi beaucoup apprécié son accueil et sa capacité à mettre instantanément à l'aise et en confiance. Très professionnelle, elle a su se montrer à l'écoute et sans jugement. Merci pour cette précieuse séance !",
  },
  {
    name: "Mariella",
    quote:
      "Merci Amélie pour cette forte expérience de Méditation de Guérison. Rien à voir avec une méditation classique comme j'en pratique régulièrement en solo ou guidée par un podcast. C'est une séance bien plus profonde et intense, qui a sans aucun doute permis d'évacuer des choses bien enterrées. Elle a parfaitement répondu à mes besoins et j'attends maintenant de laisser tous les bénéfices s'installer progressivement :)",
  },
  {
    name: "Elina",
    quote:
      "Amélie a été pour moi d'une aide extraordinaire. Elle a su m'apporter de nombreuses réponses et m'aider à comprendre certaines de mes douleurs. Elle est très sensible, à l'écoute et sait parfaitement vous comprendre. C'est sans hésitation que je vous recommande de prendre contact avec elle !",
  },
  {
    name: "Maud",
    quote:
      "Je recommande Amélie qui est une médium expérimentée. J'ai beaucoup apprécié sa simplicité et sa gentillesse. Elle dit les choses comme elle les ressent. C'est une personne généreuse à qui vous pouvez vous faire confiance. Elle est compréhensive, à l'écoute et vous donne les clés pour avancer.",
  },
  {
    name: "Valérie",
    quote:
      "Médium très douée avec ses tirages de cartes et ses ressentis. La méditation énergétique aide à être zen et à se libérer des tensions. Soin énergétique pour animal ayant très bien fonctionné sur mon chat. Praticienne de confiance.",
  },
  {
    name: "Patricia",
    quote:
      "Belle découverte d'Amélie sur TikTok. Depuis un an et demi, petite question ou message, toujours juste sans nous voir ni nous connaître. Ce qui a donné plusieurs consultations, au top, réponses et guidage pour ce qui est bien pour nous — on en apprend sur soi. Ça permet d'avancer au mieux. Ce qui m'a donné envie de faire les méditations énergétiques, et quelles découvertes de magnifiques voyages à l'intérieur de soi, et de travail pour enlever tous les blocages. Je suis en train de changer, je deviens moi-même, et ce n'est pas fini. Un grand merci à toi Amélie pour ce que tu me fais vivre et m'apportes. Un tel bien-être. À bientôt.",
  },
  {
    name: "Mariella",
    quote:
      "Une très belle expérience avec Amélie lors d'une séance « Vies Antérieures », séance que je recommande vivement ! Cela m'a permis de comprendre de nombreux blocages et mal-êtres. Amélie est une personne adorable qui sait nous mettre à l'aise et en confiance. Elle nous accueille avec bienveillance et sans jugement. Un grand merci à toi et une belle continuation dans ton domaine qui te va si bien :)",
  },
  {
    name: "Clarisse",
    quote:
      "Amélie est une personne sincère et honnête dans ses accompagnements et soins. Je recommande vivement cette médium.",
  },
  {
    name: "Kenaï",
    quote:
      "Amélie est une personne très serviable, disponible et à l'écoute. Elle prend vraiment le temps de répondre à nos attentes et de faire son travail correctement. J'ai confiance en elle et la recommande les yeux fermés.",
  },
  {
    name: "Manu",
    quote:
      "Merci beaucoup Amélie pour la qualité de tes messages et ta gentillesse. Merci pour toutes tes confirmations. Et merci aux guides !",
  },
];
