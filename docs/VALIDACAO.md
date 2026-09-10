# Validação executada

Data: 08/09/2026. Ambiente: Windows, Node.js 24.18.0, Chrome local isolado, agent-browser 0.37.1. Não houve publicação externa.

Esta validação corresponde à revisão de UI/UX com animações ao rolar, sombras nas ondas e navegação ativa, servida em `http://localhost:3010/`. Datas e horários de cada execução constam nos relatórios JSON.

## Interface e comportamento

O roteiro `tests/browser-check.mjs` concluiu **47 verificações aprovadas**. O resultado integral está em `artifacts/browser-report.json`.

- Larguras 360, 390, 768, 1024 e 1440 px, com captura da primeira dobra e da página completa em cada largura.
- Nenhuma rolagem horizontal; H1 contido na tela; CTA principal acima de 680 px; fontes carregadas; formulário habilitado após hidratação.
- Um H1; nenhum link sem destino ou âncora inexistente; número correto em todos os links de WhatsApp; três mensagens específicas de serviço; e-mails corretos.
- Menu abre, fecha por Escape e devolve o foco; seleção de âncora fecha o menu; cabeçalho não cobre o destino.
- FAQs nativas abrem e fecham por teclado.
- Formulário bloqueia campos vazios e espaços em branco; preserva acentos, quebras de linha e caracteres como `&`; monta os cinco campos e oferece continuação se a nova aba não abrir.
- A interface não exibe confirmação falsa de envio. Alterar os dados limpa a mensagem preparada anteriormente.
- `prefers-reduced-motion` desativa movimentos. Nenhum evento de mensuração é emitido com a configuração desativada.
- Nenhum recurso de terceiro carregado pela página; nenhum erro de JavaScript registrado.

O teste intercepta a abertura da janela em memória, sem enviar a mensagem à Alfa. Nenhum e-mail foi enviado. O teste valida o comportamento do site, não a entrega de mensagens pelos aplicativos externos.

## Movimento, navegação e profundidade

O roteiro `tests/motion-check.mjs` concluiu **31 verificações adicionais aprovadas**, registradas em `artifacts/motion-report.json`. Foram capturadas 42 chamadas reais de entrada, distribuídas do hero ao rodapé, durante uma varredura de scroll no navegador.

- Movimentos usam somente opacidade e transform, com duração entre 400 e 650 ms e intervalos de até 120 ms. Não introduziram overflow durante a varredura.
- Entradas não se repetem quando o visitante volta ao topo.
- A preferência reduzida foi testada antes do carregamento e durante a sessão. A reativação da preferência normal também foi conferida.
- O foco em um campo interrompeu uma animação real em andamento no formulário: o controle permaneceu focado, sem animação no painel e com opacidade 1.
- Os quatro destinos principais atualizaram o link atual no menu e o progresso de leitura.
- O menu mobile transfere o foco ao destino. O atalho de instalações elétricas alcança a seção correta sem o cabeçalho cobrir o conteúdo.
- As seis ondas possuem sombra na camada externa ao recorte e são decorativas para tecnologias assistivas. As sombras são estáticas.
- Nenhum erro no navegador durante o teste. A instrumentação usada para observar as animações foi removida pelo recarregamento final.

As seis sombras foram revisadas visualmente em conjunto (`artifacts/wave-depth-gallery.png`) e em detalhe no desktop e celular (`artifacts/wave-depth-*.png`). Os contornos permanecem contínuos, sem sombra retangular ou corte visível ao final do desfoque.

## Acessibilidade e contraste

A auditoria axe-core 4.12.1 terminou com **zero violações**, 46 regras aprovadas e uma categoria que exige revisão manual de contraste (`artifacts/accessibility.json`). Os itens remanescentes nessa categoria eram caracteres decorativos e trechos cujo fundo o auditor não conseguiu determinar. Foram inspecionados visualmente e os pares de cores usados foram calculados:

| Combinação | Contraste |
| --- | ---: |
| Azul grafite / fundo mineral | 13,19:1 |
| Texto secundário / fundo mineral | 5,30:1 |
| Vermelho da interface / fundo mineral | 5,95:1 |
| Branco / vermelho da interface | 6,72:1 |
| Texto secundário claro / azul grafite | 9,19:1 |
| Texto secundário / branco das FAQs | 5,99:1 |
| Borda dos campos / fundo dos campos | 3,06:1 |

Isso não constitui certificação integral de acessibilidade. Não foi realizado teste com leitor de tela nem ensaio com usuários.

## Sem JavaScript

Uma sessão Chrome separada foi iniciada com `--blink-settings=scriptEnabled=false`. Conferidos: H1 presente, nenhum conteúdo de seção oculto, seis ondas com sombra, atalhos com destinos válidos, imagem carregada, ausência de overflow, menu e FAQ nativos operantes, formulário desabilitado e orientação alternativa de contato visível. Evidências: `artifacts/no-javascript.json` e `artifacts/no-javascript.png`.

## Build e dependências

- `npm run lint`: passou sem erros ou avisos na versão final.
- `npm run typecheck`: passou.
- `npm run build`: passou. Log em `artifacts/build.log`.
- `npm audit`: zero vulnerabilidades conhecidas na consulta da entrega anterior; relatório em `artifacts/dependency-audit.json`. Não houve mudança de dependências nesta revisão.

A base Vinext está em beta e imprime “Unknown” na classificação estática da rota. O novo build foi concluído, e o HTML já contém a página no servidor; não foi afirmada geração estática da rota. A distribuição da entrega anterior havia sido servida localmente pelo Wrangler e testada separadamente (`artifacts/production-local.json`). Nesta revisão, a inspeção no navegador foi realizada no servidor local da porta 3010; esse registro anterior não é apresentado como teste da nova distribuição compilada.

Não foi executado Lighthouse, ensaio de carga nem medição de Core Web Vitals em rede móvel real. As fontes são locais e somam aproximadamente 51 KB. A ilustração principal utiliza WebP local: 92.480 bytes na versão de 2172 px e 20.104 bytes na de 960 px, com `srcset`, dimensões explícitas e prioridade alta. A arte social não é carregada como imagem da página. As ondas não requerem download de imagem nem JavaScript no cliente.

## Refinamento visual

Foram inspecionadas as cinco primeiras dobras e a composição completa, além de ampliações das soluções, apresentação institucional e contato. As quebras do título foram ajustadas por tamanho de tela; o texto permanece legível, os três serviços têm destaque, as áreas secundárias têm menor peso e a imagem abstrata mantém o caráter ilustrativo. Capturas finais em `artifacts/viewport-*.png`, `artifacts/page-*.png` e `artifacts/section-*.png`.

As seis curvas têm uma crista e um vale por transição e mantêm a amplitude na composição mobile. A revisão incluiu contratação recorrente/pontual, região de atendimento e preparação da solicitação. Foi corrigido o espaço entre a numeração e o título dos serviços no celular; a geometria final deixou 24 px entre suas caixas na largura de 390 px. A seção de modalidades de contratação recebeu elemento semântico próprio. O conteúdo novo passou por revisão factual de leitura, sem apontamentos materiais.

## Marca oficial

As logos recebidas em JPEG foram inspecionadas e processadas localmente para remover apenas o fundo claro. As versões finais em PNG preservam o desenho e as cores fornecidas. O cabeçalho e o rodapé usam a versão horizontal; a imagem principal e o favicon usam o símbolo. A versão vertical permanece organizada nos arquivos de marca, mas foi retirada da interface conforme solicitado. O rodapé foi revisado em 1440 e 390 px: fundo branco confirmado, logo carregada em sua dimensão natural, ausência do bloco vertical e nenhuma rolagem horizontal. A arte social foi refeita com a logo oficial sobre uma composição própria e inspecionada em 1200 × 630 px.

O relatório `artifacts/brand-report.json` registra as larguras 360, 390, 768 e 1440 px. Em todas elas, os quatro arquivos de marca carregaram com dimensões intrínsecas iguais às declaradas e não causaram rolagem horizontal. Não houve erro no console. Capturas: `artifacts/brand-final-*.png`. A auditoria axe do roteiro funcional permaneceu com zero violações.
# Atualização de portfólio - 10/09/2026

`npm run build` e `npm run lint` concluídos com sucesso. O build atual Next.js inclui verificação TypeScript e pré-renderiza a rota `/`. Seis fotografias foram inspecionadas e associadas às páginas de origem. A galeria adiciona aproximadamente 236 KiB de imagens com carregamento adiado. Não houve alteração de dependências nem de integrações.

A conferência documental está em `CONFERENCIA_PORTFOLIO.md`. A sessão não disponibilizou navegador integrado, portanto os testes visuais e interativos abaixo são históricos e não constituem validação da nova galeria ou do novo menu.
