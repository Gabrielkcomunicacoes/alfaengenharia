import type { WorkPhoto } from "./ui/work-gallery";

// Fotografias originais fornecidas pelo solicitante em public/images/img-*.jpg.
// As versões WebP alteram apenas formato e resolução, sem retoques ou recortes.
const records = [
  {
    id: "instalacoes-hidraulicas",
    original: "img-oito",
    width: 1600,
    height: 1200,
    category: "Instalações hidráulicas",
    caption: "Alinhamento das tubulações com nível a laser.",
    alt: "Tubulações embutidas em uma parede de alvenaria, com linhas verdes de nível a laser e um tripé à frente.",
  },
  {
    id: "infraestrutura-predial",
    original: "img-um",
    width: 900,
    height: 1600,
    category: "Infraestrutura predial",
    caption: "Dutos e tubulações na etapa de instalação.",
    alt: "Ambiente interno em obra com dutos, tubulações e suportes metálicos aparentes no teto.",
  },
  {
    id: "soldagem-tubulacoes",
    original: "img-dois",
    width: 960,
    height: 1280,
    category: "Manutenção mecânica",
    caption: "Soldagem de tubulações em área técnica.",
    alt: "Profissional da Alfa visto de costas, com máscara e luvas, executando soldagem em uma tubulação vertical.",
  },
  {
    id: "montagem-tubulacoes",
    original: "img-nove",
    width: 960,
    height: 1280,
    category: "Manutenção mecânica",
    caption: "Montagem e soldagem de tubulação junto ao equipamento.",
    alt: "Profissional com máscara, luvas e avental trabalhando em uma tubulação vertical junto a um equipamento.",
  },
  {
    id: "manutencao-tubulacoes",
    original: "img-cinco",
    width: 1200,
    height: 1600,
    category: "Manutenção mecânica",
    caption: "Intervenção nas conexões da tubulação.",
    alt: "Profissional sentado sobre piso metálico, com máscara e avental, soldando conexões na parte inferior de um equipamento.",
  },
  {
    id: "soldagem-componentes",
    original: "img-sete",
    width: 900,
    height: 1600,
    category: "Manutenção mecânica",
    caption: "Soldagem em componentes do equipamento.",
    alt: "Detalhe de um profissional com máscara realizando soldagem junto a um componente metálico com aletas.",
  },
  {
    id: "manutencao-fachada",
    original: "img-quatro",
    width: 1200,
    height: 1600,
    category: "Fachadas",
    caption: "Acesso à fachada com plataforma elevatória.",
    alt: "Plataforma elevatória azul posicionada junto à fachada branca de um galpão, com um profissional no cesto.",
  },
  {
    id: "servicos-fachada",
    original: "img-tres",
    width: 1200,
    height: 1600,
    category: "Fachadas",
    caption: "Serviço na fachada com acesso por plataforma.",
    alt: "Plataforma elevatória junto a uma fachada azul e branca, com lona azul protegendo a base da parede.",
  },
  {
    id: "trabalho-fachada-altura",
    original: "img-seis",
    width: 1200,
    height: 1600,
    category: "Fachadas",
    caption: "Atuação nas partes superiores da fachada.",
    alt: "Plataforma elevatória com o braço estendido até a parte superior de uma fachada azul, em uma área delimitada por cones.",
  },
] as const;

export const workPhotos: readonly WorkPhoto[] = records.map(
  ({ original, ...photo }) => ({
    ...photo,
    originalSrc: `/images/${original}.jpg`,
    src: `/images/portfolio/servicos/${photo.id}.webp`,
    srcSet: `/images/portfolio/servicos/${photo.id}-640.webp 640w, /images/portfolio/servicos/${photo.id}.webp ${photo.width}w`,
  }),
);
