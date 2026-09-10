// Fotografias extraídas do portfólio fornecido pelo solicitante.
// Correspondência antes/depois conferida visualmente nas páginas 8, 9 e 11.
// Sem geração, retoques, nomes de clientes ou associação a resultados não documentados.
export const portfolio = [
  {
    id: "pintura-fachada",
    category: "Pintura e revitalização",
    title: "Uma nova presença para a fachada.",
    description:
      "Revitalização da pintura externa, com renovação do acabamento da edificação.",
    service: "predial",
    link: "Conhecer a manutenção predial",
    before: {
      src: "/images/portfolio/pintura-fachada-antes.webp",
      width: 572,
      height: 441,
      alt: "Fachada amarela e vermelha com pintura desgastada antes da revitalização.",
    },
    after: {
      src: "/images/portfolio/pintura-fachada-depois.webp",
      width: 531,
      height: 475,
      alt: "A mesma fachada após a renovação da pintura amarela e vermelha.",
    },
  },
  {
    id: "corrimaos",
    category: "Serralheria e instalação",
    title: "Corrimãos para a circulação interna.",
    description:
      "Confecção e instalação de corrimãos metálicos nos lances e acessos da escada.",
    service: "complementares",
    link: "Conhecer os serviços de serralheria",
    before: {
      src: "/images/portfolio/corrimaos-antes.webp",
      width: 616,
      height: 678,
      alt: "Escada interna antes da instalação dos novos corrimãos metálicos.",
    },
    after: {
      src: "/images/portfolio/corrimaos-depois.webp",
      width: 526,
      height: 679,
      alt: "A mesma escada com corrimãos metálicos instalados nas paredes e nos acessos.",
    },
  },
  {
    id: "lavagem-fachada",
    category: "Limpeza e conservação",
    title: "Cuidado com a superfície da edificação.",
    description:
      "Lavagem de fachada para remoção da sujeira acumulada nos painéis externos.",
    service: "predial",
    link: "Conversar sobre manutenção predial",
    before: {
      src: "/images/portfolio/lavagem-fachada-antes.webp",
      width: 480,
      height: 640,
      alt: "Painéis externos de uma edificação com marcas de sujeira antes da lavagem.",
    },
    after: {
      src: "/images/portfolio/lavagem-fachada-depois.webp",
      width: 435,
      height: 580,
      alt: "Painéis da mesma edificação após a lavagem da fachada.",
    },
  },
] as const;
