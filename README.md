# Alfa Engenharia

Site institucional em português brasileiro, com composição editorial ampliada, seis divisões em ondas de um único ciclo, navegação por âncoras, conteúdo renderizado no servidor e contato pelo WhatsApp. Prévia local em **http://localhost:3010/**.

## Executar

Requer Node.js 22.13 ou superior e npm. Desenvolvido e verificado neste ambiente com Node.js 24.

```powershell
npm ci
npm run dev
```

A prévia fica em **http://localhost:3010/**. A porta é fixa; se estiver ocupada, encerre a instância anterior deste projeto. O servidor fica restrito à máquina local.

Se a rede da máquina usa certificados confiados pelo Windows e o npm apresentar erro de certificado, execute `$env:NODE_USE_SYSTEM_CA='1'` antes do npm, em Node.js 24. Não desative a validação TLS.

```powershell
npm run typecheck
npm run lint
npm run build
```

O build gera a distribuição em `dist/`, compatível com a estrutura Sites/Vinext e Cloudflare Workers. Nenhuma publicação é feita por esses comandos.

Para servir a distribuição compilada apenas na máquina local:

```powershell
npx wrangler dev --config dist/server/wrangler.json --local --port 3002 --ip 127.0.0.1 --persist-to .wrangler/production-check
```

## Organização

| Arquivo                        | Responsabilidade                                                                          |
| ------------------------------ | ----------------------------------------------------------------------------------------- |
| `app/site-content.ts`          | Dados da Alfa, contatos, conteúdo, serviços, mensagens e configuração de mídia autorizada |
| `app/page.tsx`                 | Estrutura semântica da página institucional                                               |
| `app/globals.css`              | Paleta provisória, fontes, grid, composição, responsividade e estados de interação        |
| `app/editorial.css`            | Composição ampliada, proporções, ondas e adaptação dos novos blocos                       |
| `app/interaction.css`          | Estados de navegação, progresso de leitura, atalhos e foco                                |
| `app/ui/wave-divider.tsx`      | Divisória decorativa com uma crista e um vale, renderizada sem JavaScript no cliente      |
| `app/ui/header.tsx`            | Navegação desktop e menu mobile nativo                                                    |
| `app/ui/architecture.tsx`      | Composição arquitetônica abstrata e ponto de substituição por fotografia aprovada         |
| `app/ui/contact-form.tsx`      | Validação e preparação da mensagem para o WhatsApp                                        |
| `app/ui/site-enhancements.tsx` | Revelações progressivas e pontos de mensuração                                            |
| `app/measurement.ts`           | Adaptador de mensuração desativado, com lista fechada de valores permitidos               |
| `app/layout.tsx`               | Idioma, metadados, fontes e configuração de indexação                                     |
| `public/fonts/`                | Fontes WOFF2 locais e suas licenças OFL                                                   |
| `public/images/`               | Ilustração arquitetônica original em WebP, com versões responsivas                        |
| `public/brand/`                | Logos oficiais recebidas, com fundo removido e sem alteração do desenho                   |
| `public/og.png`                | Arte de compartilhamento preparada para associação ao domínio confirmado                  |
| `tests/browser-check.mjs`      | Verificação funcional e responsiva com agent-browser                                      |
| `tests/motion-check.mjs`       | Animações reais ao rolar, movimento reduzido, seção ativa, foco e sombras                 |
| `artifacts/`                   | Capturas e relatórios dos testes executados                                               |
| `docs/ENTREGA.md`              | Decisões, limites da versão e pendências de publicação                                    |
| `docs/DIRECAO_EDITORIAL.md`    | Refinamento visual, conteúdo ampliado e procedência da nova ilustração                    |

## Formulário e privacidade

O formulário exige nome, empresa, cidade, serviço e descrição. Os valores ficam apenas na memória da página até a abertura do WhatsApp, cuja URL contém a mensagem preparada. Nenhum banco de dados, envio de e-mail por servidor, cookie de marketing ou armazenamento local é usado pelo site.

Ao continuar, o visitante confere e envia a mensagem no WhatsApp. A interface não afirma que houve envio. Se uma nova aba for bloqueada, oferece um link de continuação. Sem JavaScript, o formulário fica desabilitado e o visitante encontra alternativas diretas de contato; a página e as FAQs permanecem disponíveis.

`measurementEnabled` permanece `false`. Os pontos preparados distinguem clique no WhatsApp, clique no e-mail, início do formulário e abertura do WhatsApp pelo formulário. Nenhum representa lead confirmado. Uma futura integração deve considerar os identificadores aprovados e o consentimento aplicável; não incluir valores do formulário nem URLs contendo mensagens no analytics.

## Testes no navegador

Com a prévia em execução e Chrome instalado:

```powershell
npm exec --yes --package=agent-browser@0.37.1 -- agent-browser --session alfa-preview --executable-path 'C:/Program Files/Google/Chrome/Application/chrome.exe' open http://localhost:3010/
npm exec --yes --package=agent-browser@0.37.1 -- node tests/browser-check.mjs
npm exec --yes --package=agent-browser@0.37.1 -- node tests/motion-check.mjs
```

`ALFA_BROWSER_BIN` pode apontar para o executável nativo do agent-browser. `ALFA_PREVIEW_URL` permite outra origem local. O teste intercepta `window.open` apenas na página de teste para verificar a mensagem sem enviar dados de teste ao WhatsApp. Recarrega a página ao concluir.

As entradas usam Web Animations e IntersectionObserver, com 42 blocos distribuídos pela página. O conteúdo é visível por padrão. A navegação identifica a seção atual e mostra progresso de leitura; o menu mobile transfere o foco ao destino. A preferência por movimento reduzido cancela entradas e oculta o progresso. Nenhuma biblioteca de animação foi adicionada.

## Preparação para publicação

As informações foram conferidas com o arquivo `Briefing_Onboarding_Alfa_Engenharia.docx.pdf`, recebido após a primeira implementação, e com as diretrizes do solicitante. Não foram encontradas divergências factuais materiais no conteúdo público. O briefing informa a existência de logo, fotos e portfólio, mas não inclui esses materiais. Nenhuma informação cadastral foi verificada externamente. Veja `docs/CONFERENCIA_BRIEFING.md`.

A prévia emite `noindex, nofollow`. Depois de aprovar a publicação, preencher `SITE_URL` com a origem HTTPS real e definir `SITE_INDEXABLE=true`, conforme `.env.example`. Isso habilita a imagem de compartilhamento com URL absoluta e permite indexação. Canonical e sitemap ainda devem ser configurados para o domínio real antes do lançamento.

Não há domínio presumido, integração ativa, acesso a contas da empresa ou publicação externa. Veja as pendências específicas em `docs/ENTREGA.md`.
