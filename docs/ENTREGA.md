# Entrega — versão institucional ampliada

## Direção visual e conteúdo

A proposta “Precisão técnica, presença e trabalho real” foi traduzida em uma composição editorial: tipografia Barlow Condensed nos títulos e Source Sans 3 no corpo, fundo mineral, grafite e terracota, módulos numerados amplos e divisórias estruturais. A revisão solicitada acrescenta seis ondas amplas, cada uma com um único ciclo, nas transições de fundo. O pedido posterior de ondas prevalece sobre a restrição visual do primeiro prompt.

A primeira dobra apresenta os serviços e o contato antes do elemento visual. Os três serviços prioritários têm textos e mensagens de WhatsApp próprios. Serviços secundários aparecem em uma lista de menor destaque. O bloco institucional usa tipografia, sem inventar equipe ou obras.

A ilustração arquitetônica principal é uma abstração gerada especificamente para a proposta, não um registro de obra, projeto técnico executável ou símbolo oficial. Foi inspecionada e entregue em duas versões WebP locais de aproximadamente 92 KB e 20 KB. Não contém pessoas, marcas, máquinas ou processos produtivos. A arte social também foi gerada para a proposta e conferida quanto ao texto.

As duas versões da logo oficial recebidas em 08/09/2026 foram preparadas para o projeto. Na interface atual, a aplicação horizontal aparece no cabeçalho e no rodapé; o símbolo oficial aparece na imagem principal e no favicon. A aplicação vertical foi retirada do rodapé conforme solicitado, e toda a área inferior passou a usar fundo branco para integrar a logo horizontal. O processamento local removeu apenas o fundo branco e otimizou os arquivos em PNG, preservando desenho, proporções, cores e tipografia. Os tons provisórios de interface foram aproximados do vermelho e azul presentes na marca, mantendo contraste verificado.

O conteúdo foi ampliado nos três serviços prioritários e nas etapas de contratação. Foram acrescentados blocos sobre contratos recorrentes versus serviços por projeto, atendimento em Manaus e interior do Amazonas, e informações para preparar uma solicitação. A revisão factual não identificou novas garantias, regiões estabelecidas, certificações ou entregáveis não documentados.

A revisão de UI/UX acrescenta sombras nas seis ondas, entradas por blocos ao longo de toda a página, navegação com seção atual, progresso de leitura e atalhos para cada serviço. Os efeitos respeitam movimento reduzido e não ocultam conteúdo sem JavaScript. O foco por teclado interrompe uma entrada em andamento no respectivo bloco. Resultados específicos em `artifacts/motion-report.json`.

Não foram incluídos portfólio, clientes, depoimentos, estatísticas de carteira, certificações, garantia de resultados ou prazos universais. Atendimento atual: Manaus e interior do Amazonas. Não há materiais da K Comunicação na interface.

O briefing original foi recebido após a primeira implementação e conferido integralmente. Os dados públicos do site coincidem com o documento; o registro dessa conferência está em `docs/CONFERENCIA_BRIEFING.md`. O PDF permanece fora dos arquivos públicos do site.

## Competências e recursos aplicados

- `sites:sites-building`: inspeção da pasta, inicialização do projeto, página com conteúdo renderizado no servidor, componentes restritos às interações necessárias, build compatível com a base disponibilizada.
- `sites:sites-hosting`: fluxo lido; publicação não executada, respeitando o pedido de primeira versão e a restrição explícita à produção e integrações externas.
- `browser:control-in-app-browser`: conexão tentada e diagnóstico executado; nenhum navegador integrado estava disponível. A revisão foi feita pela alternativa local.
- `vercel:agent-browser` e `vercel:agent-browser-verify`: navegador Chrome local isolado, inspeção visual, navegação, teclado, formulário, capturas e auditoria axe.
- `vercel:verification`: verificação do fluxo real da interface até a mensagem de WhatsApp, sem simular envio por servidor.
- `vercel:react-best-practices`: conteúdo no servidor, estado apenas onde necessário, limpeza dos listeners e observadores, ausência de bibliotecas de animação e rastreadores.
- `vercel:next-upgrade`: atualização coordenada de dependências após os avisos encontrados no conjunto inicial, consultando documentação oficial e metadados do registro npm.
- `imagegen`: geração da arte social e da nova ilustração arquitetônica por agente dedicado, seguida de inspeção e otimização local. Procedência e prompt em `docs/DIRECAO_EDITORIAL.md`.
- Direção de arte, B2B, arquitetura da informação, SEO e acessibilidade: critérios do briefing aplicados diretamente. Nenhuma skill inexistente foi presumida.

## Pendências reais para lançamento

1. **Identidade:** confirmar se existe manual de marca ou arquivos vetoriais oficiais. As logos recebidas são imagens JPEG; as versões PNG locais foram preparadas a partir delas. A paleta da interface acompanha visualmente a marca, mas permanece uma proposta até a confirmação de valores oficiais.
2. **Fotografias, se desejadas:** o briefing informa existência de fotos e portfólio, sem incluir os materiais. Receber imagens autorizadas e revisar clientes, marcas, placas, documentos, telas, máquinas e processos identificáveis. A composição atual permite manter o site sem fotos. Para substituir o visual principal, preencher `approvedMedia.hero` com arquivo, texto alternativo e dimensões.
3. **Conferência cadastral:** validar razão social, CNPJ, endereço, contatos, responsável técnico e registros CREA informados antes da publicação.
4. **Domínio e publicação:** confirmar o domínio e autorizar o ambiente de produção. Configurar `SITE_URL`, canonical, sitemap e indexação final. Os metadados de título e descrição já estão preparados; a imagem social aguarda a origem real.
5. **Mensuração:** receber identificadores, definir eventos e configuração de consentimento antes de ativar qualquer ferramenta. O adaptador permanece desativado.
6. **Privacidade:** definir responsável pelo tratamento, finalidade, retenção, canal para titulares e texto aplicável à operação, incluindo o redirecionamento para o WhatsApp. Nenhuma conformidade integral com a LGPD foi declarada.

## Limites da verificação

Os testes do WhatsApp verificam número, URL, codificação, contexto e mensagem preparada. Não enviam mensagens à empresa e não comprovam entrega, disponibilidade da conta ou resposta comercial. Links de e-mail abrem o aplicativo configurado pelo visitante. O teste não envia e-mail nem valida a caixa postal.

Os resultados executados ficam em `artifacts/browser-report.json` e `artifacts/accessibility.json`, com capturas das larguras solicitadas. Os resultados finais de build, tipos e dependências são registrados em `docs/VALIDACAO.md` após a conclusão da revisão.
