// Fontes: briefing original (p. 4–11), Portfólio - Alfa engenharia.pdf (p. 2–11)
// e diretrizes do solicitante. WhatsApp atualizado conforme indicação do solicitante.
// Conferência com o documento realizada; validação cadastral externa permanece pendente.
export const company = {
  name: "Alfa Engenharia",
  legalName: "Alfa Serviços e Construção Ltda — EPP",
  cnpj: "19.147.975/0001-75",
  founded: "2013-10-28",
  phone: "(92) 98848-2850",
  whatsapp: "https://wa.me/5592988482850",
  email: "comercial@alfaengenhariaam.com.br",
  instagram: "https://www.instagram.com/alfaengenhariaam/",
  instagramLabel: "@alfaengenhariaam",
  street: "Rua Ubaíra, 66 — Lírio do Vale",
  city: "Manaus/AM",
  postalCode: "69038-288",
  region: "Manaus e interior do Amazonas",
  engineer: "Eng. Edson Oliveira",
  engineerCrea: "CREA/AM 35787",
  companyCrea: "CREA/AM 8607",
} as const;

export const content = {
  navigation: [
    { label: "Início", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: "Portfólio", href: "/portfolio" },
    { label: "A Alfa", href: "/sobre" },
    { label: "Contato", href: "/contato" },
  ],
  seo: {
    title: "Alfa Engenharia | Manutenção e Engenharia em Manaus",
    description:
      "Desde 2013, engenharia civil, elétrica e mecânica para empresas. Manutenção predial, sistemas de combate a incêndio e instalação elétrica para equipamentos em Manaus e no interior do Amazonas.",
    servicos: {
      title: "Serviços | Alfa Engenharia",
      description:
        "Manutenção predial, sistemas de combate a incêndio e instalações elétricas para equipamentos, além de obra civil, serralheria e manutenção mecânica. Conheça as frentes de atuação da Alfa Engenharia.",
    },
    portfolio: {
      title: "Portfólio | Alfa Engenharia",
      description:
        "Fotos de antes e depois de serviços executados pela Alfa Engenharia: pintura e revitalização de fachadas, serralheria, manutenção predial e mais.",
    },
    sobre: {
      title: "A Alfa | Alfa Engenharia",
      description:
        "Conheça a Alfa Engenharia: empresa amazonense com atuação nas áreas civil, elétrica e mecânica desde 2013, com engenheiro e encarregado coordenando cada obra.",
    },
    contato: {
      title: "Contato | Alfa Engenharia",
      description:
        "Fale com a Alfa Engenharia pelo WhatsApp ou e-mail e apresente a demanda da sua empresa. Atendimento em Manaus e no interior do Amazonas.",
    },
    lp: {
      title: "Orçamento de engenharia em Manaus | Alfa Engenharia",
      description:
        "Manutenção predial, sistemas de combate a incêndio e instalações elétricas para a sua empresa. Fale agora com a Alfa Engenharia pelo WhatsApp.",
    },
  },
  hero: {
    eyebrow: "Engenharia civil, elétrica e mecânica",
    description:
      "Da manutenção predial aos sistemas de combate a incêndio e às instalações elétricas: engenharia amazonense, com equipe experiente e coordenação técnica em cada obra.",
    message:
      "Olá, Alfa Engenharia! Gostaria de conversar sobre uma demanda de engenharia para minha empresa.",
  },
  solutions: {
    title: "Três frentes para cuidar da estrutura da sua empresa.",
    intro:
      "Conservação de edificações, manutenção de sistemas e instalação de equipamentos. Conheça as frentes prioritárias e encontre o atendimento para a sua empresa.",
  },
  other: {
    title: "Da obra civil à manutenção mecânica.",
    description:
      "A Alfa reúne serviços complementares para construir, recuperar e manter a estrutura da sua empresa. Cada contratação parte da avaliação da demanda.",
    groups: [
      {
        title: "Construção e acabamento",
        items: [
          "Obras civis de pequeno e médio porte e reformas em alvenaria",
          "Pintura predial e industrial e lavagem de fachadas",
          "Paredes e forros em drywall",
        ],
      },
      {
        title: "Serralheria e montagens",
        items: [
          "Soldagem e serviços de serralheria em geral",
          "Confecção e instalação de corrimãos e guarda-corpos",
          "Montagens na área de engenharia mecânica",
        ],
      },
      {
        title: "Manutenção mecânica",
        items: [
          "Instalação, manutenção e limpeza de torres de resfriamento",
          "Análise de vibração em motores elétricos e a combustão",
          "Testes de performance em motores",
        ],
      },
    ],
    note: "Projetos de engenharia civil, visitas e laudos técnicos também fazem parte da nossa atuação.",
  },
  about: {
    title: "Equipe experiente. Obras com coordenação técnica.",
    description:
      "Somos uma empresa amazonense, atuando desde 2013 nas áreas civil, elétrica e mecânica. Nossa equipe reúne profissionais treinados e experientes, com engenheiro e encarregado na coordenação das obras. Qualidade, segurança e eficiência orientam o nosso trabalho.",
    team: [
      {
        name: "Edson Oliveira dos Santos",
        role: "Engenheiro Civil / Engenheiro de Segurança do Trabalho",
        registration: "Crea/AM 35787",
      },
      {
        name: "Everton Oliveira dos Santos",
        role: "Engenheiro civil, especialista em Engenharia de Segurança Contra Incêndio e Pânico",
        registration: "CREA/AM 34637",
      },
    ],
    commitments: [
      {
        title: "Qualidade na entrega",
        description: "Atenção à execução e à eficiência em cada serviço.",
      },
      {
        title: "Coordenação de projetos",
        description: "Organização do trabalho e acompanhamento técnico das obras.",
      },
      {
        title: "Compromisso com prazos",
        description: "Planejamento da execução conforme o escopo acordado.",
      },
    ],
  },
  mission: {
    eyebrow: "Missão, visão e valores",
    title: "O que orienta o trabalho da Alfa.",
    items: [
      {
        title: "Missão",
        description:
          "Executar engenharia civil, elétrica e mecânica com qualidade e coordenação técnica, cuidando da estrutura das empresas atendidas em Manaus e no interior do Amazonas.",
      },
      {
        title: "Visão",
        description:
          "Ser reconhecida no Amazonas como uma empresa de engenharia confiável, pela qualidade da execução e pela relação de longo prazo com quem contrata.",
      },
      {
        title: "Valores",
        description:
          "Qualidade na entrega, segurança do trabalho, coordenação técnica em cada obra e compromisso com os prazos combinados.",
      },
    ],
  },
  contracting: {
    eyebrow: "A contratação acompanha a sua demanda",
    title: "Recorrente ou pontual. O escopo vem primeiro.",
    description:
      "Uma necessidade contínua e um serviço específico pedem contratações diferentes. O ponto de partida é entender a estrutura, a demanda e o que precisa ser executado.",
    options: [
      {
        label: "Para necessidades contínuas",
        title: "Contratos de manutenção",
        description:
          "Manutenção predial e de sistemas de combate a incêndio para empresas que buscam uma contratação recorrente. Os serviços, as condições de atendimento e a organização do trabalho são definidos na proposta.",
      },
      {
        label: "Para uma demanda específica",
        title: "Serviços por projeto",
        description:
          "Instalação elétrica para equipamentos, reformas e outras demandas de engenharia. A avaliação da necessidade orienta a definição do escopo e a elaboração do orçamento.",
      },
    ],
  },
  region: {
    eyebrow: "Presença local. Atuação regional.",
    title: "Manaus na origem. Amazonas no atendimento.",
    description:
      "A Alfa Engenharia atende empresas em Manaus e no interior do Amazonas. Informe a localização da demanda no primeiro contato para conversar sobre a visita técnica e os próximos passos.",
    note: "O planejamento do atendimento considera a localização e as características do serviço solicitado.",
  },
  preparation: {
    eyebrow: "Uma conversa bem encaminhada",
    title: "O que ajuda a preparar a sua proposta?",
    description:
      "Algumas informações simples ajudam a começar. Os detalhes técnicos são levantados com a equipe, conforme a necessidade de avaliação do projeto.",
    items: [
      {
        title: "Empresa e localização",
        description: "Nome da empresa e cidade onde o serviço será realizado.",
      },
      {
        title: "Serviço de interesse",
        description:
          "Manutenção predial, sistema de incêndio, instalação elétrica ou outra frente de engenharia.",
      },
      {
        title: "Contexto da necessidade",
        description:
          "Uma descrição geral do que precisa ser avaliado, sem informações sigilosas.",
      },
      {
        title: "Forma de contratação",
        description:
          "Indique se busca um contrato recorrente ou um serviço pontual, caso já esteja definido.",
      },
    ],
  },
  process: {
    title: "O primeiro passo é entender a sua demanda.",
    note: "O prazo de elaboração da proposta e de execução depende das características de cada projeto.",
    steps: [
      {
        title: "Contato",
        description: "A empresa apresenta sua necessidade à Alfa.",
        detail:
          "Informe o serviço de interesse, a cidade e o contexto geral da solicitação pelo WhatsApp ou e-mail.",
      },
      {
        title: "Visita técnica",
        description:
          "A equipe conhece o projeto e levanta as informações necessárias.",
        detail:
          "A visita permite entender a estrutura e os aspectos da demanda que orientam a definição do serviço.",
      },
      {
        title: "Proposta",
        description:
          "O orçamento é elaborado conforme a dimensão e o escopo do serviço.",
        detail:
          "As condições da contratação e os prazos são tratados a partir das características do projeto.",
      },
    ],
  },
  faq: [
    {
      question: "Quais serviços recebem prioridade?",
      answer:
        "Contratos de manutenção predial, contratos de manutenção em sistemas de combate a incêndio e instalação elétrica para equipamentos.",
    },
    {
      question: "Em quais regiões a Alfa atende?",
      answer: "A Alfa atende empresas em Manaus e no interior do Amazonas.",
    },
    {
      question: "Como solicitar uma proposta?",
      answer:
        "Entre em contato pelo WhatsApp ou e-mail e apresente a necessidade da sua empresa. A equipe entende a demanda, levanta as informações necessárias e elabora a proposta conforme o escopo.",
    },
    {
      question: "A Alfa realiza visitas e laudos técnicos?",
      answer:
        "Sim. A Alfa realiza visitas e laudos técnicos voltados a obras de engenharia, mediante avaliação do escopo solicitado.",
    },
    {
      question: "A Alfa também atua com manutenção mecânica?",
      answer:
        "Sim. A atuação inclui instalação, manutenção e limpeza de torres de resfriamento, além de análise de vibração e testes de performance em motores elétricos e a combustão. A equipe avalia as características da demanda para definir o serviço.",
    },
  ],
  contact: {
    title: "Conte o que a sua empresa precisa.",
    description:
      "Fale com a Alfa para apresentar sua demanda e entender os próximos passos.",
    formNote:
      "Você será direcionado ao WhatsApp para conferir e enviar a mensagem.",
  },
  lp: {
    eyebrow: "Orçamento sem compromisso",
    title: "Engenharia para a estrutura da sua empresa, com quem atua em Manaus desde 2013.",
    description:
      "Manutenção predial, sistemas de combate a incêndio e instalações elétricas para equipamentos. Fale agora com a Alfa Engenharia e receba um retorno sobre a sua demanda.",
    message:
      "Olá, Alfa Engenharia! Vi o anúncio e gostaria de um orçamento para minha empresa.",
    cta: "Falar agora no WhatsApp",
    badges: ["Desde 2013", "CREA/AM 8607", "Manaus e interior do AM"],
  },
} as const;

export const services = [
  {
    id: "predial",
    number: "01",
    title: "Manutenção predial",
    navigationTitle: "Manutenção predial",
    category: "Cuidado contínuo com a estrutura",
    description:
      "Conservação e recuperação de edificações, com serviços civis, pintura e lavagem de fachadas. Os contratos são definidos conforme as necessidades da empresa e as características da estrutura.",
    note: "A contratação pode ser recorrente, com os serviços e as condições definidos em conjunto.",
    detail:
      "O portfólio reúne intervenções em pisos, revestimentos e fachadas. A visita técnica ajuda a identificar as frentes de trabalho e a organizar uma proposta para a sua edificação.",
    start:
      "Apresente o contexto da edificação e as necessidades que sua empresa deseja avaliar.",
    cta: "Consultar manutenção predial",
    message:
      "Olá, Alfa Engenharia! Tenho interesse em um contrato de manutenção predial para minha empresa. Gostaria de conversar sobre a demanda.",
  },
  {
    id: "incendio",
    number: "02",
    title: "Sistemas de combate a incêndio",
    navigationTitle: "Sistema de incêndio",
    category: "Manutenção, inspeções e testes",
    description:
      "Manutenção em sistemas de combate a incêndio, com serviços relacionados a casas de bombas, inspeções e testes, conforme a demanda e o escopo contratado.",
    note: "O escopo do contrato é definido a partir das necessidades do sistema.",
    detail:
      "A equipe técnica inclui especialista em Engenharia de Segurança Contra Incêndio e Pânico. As características do sistema orientam a avaliação e a definição das atividades de manutenção, inspeção e teste.",
    start:
      "Informe a cidade e descreva, em linhas gerais, a necessidade de manutenção do sistema.",
    cta: "Conversar sobre o sistema de incêndio",
    message:
      "Olá, Alfa Engenharia! Tenho interesse em manutenção do sistema de combate a incêndio da minha empresa. Gostaria de conversar sobre o escopo.",
  },
  {
    id: "eletrica",
    number: "03",
    title: "Instalações elétricas para equipamentos",
    navigationTitle: "Instalações elétricas",
    category: "Avaliação e execução técnica",
    description:
      "Instalação elétrica para equipamentos, com avaliação da demanda e definição do escopo técnico para a execução do serviço.",
    note: "A Alfa também executa manutenção elétrica.",
    detail:
      "A equipe avalia a necessidade apresentada pela empresa para definir o escopo técnico antes da execução. A proposta considera as características do serviço solicitado.",
    start:
      "Indique se a demanda envolve uma instalação ou uma manutenção e apresente o contexto do serviço.",
    cta: "Solicitar avaliação da instalação",
    message:
      "Olá, Alfa Engenharia! Preciso de uma instalação elétrica para equipamentos na minha empresa. Gostaria de solicitar uma avaliação da demanda.",
  },
] as const;

export function whatsappUrl(message: string = content.hero.message): string {
  return `${company.whatsapp}?text=${encodeURIComponent(message)}`;
}
// Banner adaptado da foto fornecida pelo solicitante, com laterais expandidas.
export const approvedMedia: {
  hero: null | { src: string; srcSet?: string; alt: string; width: number; height: number };
} = {
  hero: {
    src: "/images/hero-alfa-engenharia.webp",
    srcSet: "/images/hero-alfa-engenharia-960.webp 960w, /images/hero-alfa-engenharia.webp 1672w",
    alt: "Profissionais com capacetes em um canteiro de obras, com a marca Alfa Engenharia na parte superior.",
    width: 1672,
    height: 941,
  },
};

// Arte abstrata ilustrativa: não representa uma obra, cliente ou identidade oficial.
export const illustrativeMedia = {
  hero: {
    src: "/images/arquitetura-alfa.webp",
    small: "/images/arquitetura-alfa-960.webp",
    width: 2172,
    height: 724,
  },
} as const;
