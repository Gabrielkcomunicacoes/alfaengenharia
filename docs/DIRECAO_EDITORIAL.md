# Revisão editorial e conteúdo ampliado

Solicitação: acabamento mais refinado, site maior, mais informações e ondas amplas que sobem e descem uma única vez. A revisão mantém os dados e limites do briefing original.

## Composição

- Seis divisões entre superfícies claras e grafite. Cada curva possui uma crista e um vale, sem repetição de pequenas ondas. O sentido alterna entre transições.
- As curvas são geometria CSS renderizada no servidor, sem imagem externa, JavaScript no cliente ou animação contínua. Altura geométrica de 180 px no desktop de 1440 px e 90 px no celular, acrescida de espaço para a sombra.
- Primeira dobra com hierarquia editorial, assinatura tipográfica provisória e panorama arquitetônico. No celular, o contato vem antes da imagem.
- Serviços com numeração, descrição, contexto da avaliação e CTA específico. A versão mobile usa a largura disponível para o texto, com numeração e título separados.
- Contratação recorrente/pontual, atuação regional, preparação da solicitação e etapas explicadas ampliam o conteúdo útil. Os serviços secundários permanecem em uma lista de menor peso.
- O bloco institucional e o rodapé ganham escala tipográfica e contraste. Nenhuma imagem de equipe, cliente ou obra foi inventada.

## Ilustração arquitetônica

Gerada com o recurso integrado `imagegen`, uma única geração, como arte conceitual. Inspecionada antes da inclusão. Não representa projeto executado pela Alfa. O atributo alternativo é vazio por ser decorativa; o conteúdo comercial está no texto HTML.

Arquivos entregues:

- `public/images/arquitetura-alfa.webp`: 2172 × 724 px, 92.480 bytes.
- `public/images/arquitetura-alfa-960.webp`: 960 × 320 px, 20.104 bytes.

O componente `app/ui/architecture.tsx` escolhe a versão pelo `srcset`. Os arquivos e dimensões são centralizados em `illustrativeMedia`. Uma fotografia posteriormente autorizada pode ser configurada em `approvedMedia.hero`, separada da arte ilustrativa.

Original gerado fora da pasta pública: `C:/Users/usuario/.codex/generated_images/01a0823a-2e1f-7a13-bd74-8314e4144eb9/exec-8f65e9ed-c897-4eff-9c67-3afec17d8a2b.png`.

Prompt utilizado:

```text
Use case: stylized-concept
Asset type: premium engineering website hero artwork, an explicitly abstract architectural material study.
Primary request: Create a beautifully composed panoramic architectural sculpture/render of monumental nested off-white concrete portal frames and graphite structural planes, with one restrained industrial terracotta accent plane or gently curved ribbon.
Scene/backdrop: Seamless warm ivory studio background and floor.
Style/medium: Highly photorealistic architectural studio render with the polish of an editorial architecture publication.
Composition/framing: Broad landscape 3:1 panoramic composition, image fills the entire canvas. Powerful precise geometric rhythm, dimensional layered spatial depth, close tangible material detail, carefully balanced airy negative space around the sculptural structure.
Lighting/mood: Sophisticated airy warm studio lighting, precise beautiful cast shadows, soft diffuse highlights.
Color palette: Warm ivory and off-white concrete, deep graphite, one restrained burnt terracotta accent.
Materials/textures: Fine subtle concrete grain, crisp architectural edges and matte structural surfaces, physically realistic material response.
Constraints: Clearly an abstract conceptual illustration, no claims or likeness to any actual engineering project. No text, no logos, no lettering, no numbers, no people or faces, no machines, no industrial production processes, no actual factories, no clients, no real buildings or construction sites, no watermark. No UI mockup, borders, or surrounding presentation frame. Generate one final image.
```

## Operação

A prévia continua em `http://localhost:3010/`. Nenhuma dependência foi adicionada para o refinamento visual. Formulário, WhatsApp, e-mail, navegação e mensuração desativada mantêm seu funcionamento. Não houve publicação externa.

## Marca oficial recebida

Arquivos de origem fornecidos pelo solicitante em 08/09/2026:

- `C:/Users/usuario/Downloads/WhatsApp Image 2026-09-08 at 15.36.03.jpeg`: versão horizontal, 688 × 166 px.
- `C:/Users/usuario/Downloads/WhatsApp Image 2026-09-08 at 15.36.03 (1).jpeg`: versão vertical, 841 × 841 px.

O fundo claro dos JPEGs foi removido por transparência de pixels neutros, sem geração ou redesenho da marca. Arquivos entregues em `public/brand/`: logo horizontal 688 × 166 px, logo vertical 717 × 665 px e símbolo 562 × 357 px. O componente `app/ui/official-logo.tsx` centraliza as variantes e dimensões. Na composição final, a logo vertical foi retirada da interface e o rodapé inferior recebeu fundo branco para integrar a aplicação horizontal diretamente à superfície.

A paleta provisória da interface passou a usar azul grafite `#17283E` e vermelho `#B21F2D`, aproximando o sistema visual das logos. Esses valores continuam sujeitos a um futuro manual de marca. O fundo mineral e as superfícies claras foram preservados.

A arte social foi refeita em 1200 × 630 px. Um fundo arquitetônico abstrato original foi gerado com `imagegen`; a logo horizontal oficial e os textos exatos foram compostos localmente. O resultado final está em `public/og.png`. O fundo original está em `C:/Users/usuario/.codex/generated_images/01a08252-6383-74a3-a2c7-35fbc0531417/alfa-engenharia-social-background-1200x630.png`.

## Interação, movimento e profundidade

A revisão seguinte acrescenta sombra a todas as seis ondas. O preenchimento recortado fica dentro de uma camada transparente com `drop-shadow`, para que a sombra siga o contorno. Há espaço abaixo da geometria para o desfoque; o recorte externo impede rolagem horizontal. As transições para grafite usam sombra mais densa. Os filtros permanecem estáticos.

Foram distribuídos 42 blocos de entrada do topo ao rodapé. Os blocos usam opacidade e pequenos deslocamentos, com duração de 620 ms no desktop e 460 ms no mobile. A imagem possui entrada própria de até 650 ms, recortada pela moldura. Os grupos adjacentes têm intervalos de até 120 ms. Não há ocultação inicial no CSS, animação por palavra, repetição contínua ou controle artificial do scroll.

A preferência por movimento reduzido pode ser alterada durante a sessão. As animações em execução são canceladas e o conteúdo fica em sua posição normal. Quando um campo ou link recebe foco dentro de um bloco animado, a entrada é interrompida para preservar a legibilidade e a posição do controle.

A navegação indica a seção atual por cor, sublinhado e `aria-current="location"`. Uma faixa discreta mostra o progresso da página. O cálculo usa um quadro por evento de scroll e só atualiza o estado React quando muda a seção; medidas de layout são recalculadas quando o tamanho da página muda. O menu mobile direciona o foco ao destino. Atalhos no início das soluções permitem alcançar cada serviço diretamente.

Também foram refinados os estados de foco do formulário, a indicação de FAQ aberta e as respostas visuais dos links. A revisão técnica usou as skills de React e verificação no navegador já aplicadas ao projeto; critérios de UI/UX e motion foram executados diretamente, sem presumir skills adicionais.
