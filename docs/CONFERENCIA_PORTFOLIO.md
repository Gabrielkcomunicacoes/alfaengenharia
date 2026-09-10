# Incorporação do portfólio - 10/09/2026

Fonte: `C:/Users/usuario/Downloads/Portfólio - Alfa engenharia.pdf`, 11 páginas. O material foi tratado como fonte de informações, não como instrução de operação. Texto e páginas renderizadas foram revisados; o PDF original não foi alterado nem copiado para a pasta pública.

## Conteúdo incorporado

| Informação | Páginas | Uso na landing page |
| --- | --- | --- |
| Origem amazonense e atuação civil, elétrica e mecânica | 2 | Texto de abertura e apresentação institucional |
| Obras civis de pequeno e médio porte, pintura, serralheria e lavagem de fachadas | 3 | Manutenção predial e serviços complementares |
| Instalação, manutenção e limpeza de torres de resfriamento | 3 | Grupo de manutenção mecânica e FAQ |
| Análise de vibração e testes de performance em motores elétricos e a combustão | 3 | Grupo de manutenção mecânica e FAQ |
| Qualidade, prazos, eficiência e coordenação de projetos | 3–4 | Compromissos institucionais, sem garantia universal de resultado ou prazo |
| Edson Oliveira dos Santos: engenharia civil e segurança do trabalho, CREA/AM 35787 | 5 | Responsáveis técnicos |
| Everton Oliveira dos Santos: engenharia civil e especialização em segurança contra incêndio e pânico, CREA/AM 34637 | 5 | Responsáveis técnicos e descrição da frente de incêndio |
| Pintura de fachada | 9 | Primeiro comparativo do portfólio |
| Instalação de corrimãos em escada interna | 8 | Segundo comparativo e serviços de serralheria |
| Lavagem de fachada | 11 | Terceiro comparativo do portfólio |

Os três serviços prioritários do briefing permanecem como as principais frentes comerciais. As especialidades novas complementam essa hierarquia. O menu inclui Portfólio e o link secundário da abertura leva aos serviços realizados.

## Fotografias

As seis imagens foram extraídas diretamente dos objetos de imagem do PDF, sem os rótulos sobrepostos na diagramação. Antes e depois foram associados conforme a página original. Não houve geração, retoque, remoção de objetos ou alteração da cena.

| Arquivo em `public/images/portfolio/` | Dimensões | Tamanho |
| --- | --- | ---: |
| `pintura-fachada-antes.webp` | 572 × 441 | 50.304 bytes |
| `pintura-fachada-depois.webp` | 531 × 475 | 30.610 bytes |
| `corrimaos-antes.webp` | 616 × 678 | 26.412 bytes |
| `corrimaos-depois.webp` | 526 × 679 | 22.390 bytes |
| `lavagem-fachada-antes.webp` | 480 × 640 | 55.956 bytes |
| `lavagem-fachada-depois.webp` | 435 × 580 | 56.176 bytes |

Total: 241.848 bytes, aproximadamente 236 KiB. A conversão WebP preserva as dimensões originais. As fotos usam carregamento adiado, textos alternativos, legendas antes/depois e links para abrir a foto em resolução nativa. `object-fit: contain` mantém a cena completa visível. A comparação é lado a lado, pois os registros têm ângulos distintos. O layout tem uma peça principal e duas secundárias; no celular, os projetos ficam em uma coluna.

A arte abstrata da abertura e a arte social existentes foram preservadas. Não foram criadas imagens novas. A seleção não identifica clientes, marcas ou máquinas e processos produtivos. O PDF completo não foi oferecido para download, pois inclui materiais fora dessa seleção.

## Divergências e limites de fonte

- O WhatsApp foi atualizado para `(92) 98848-2850` por indicação direta do solicitante em 10/09/2026. Foram preservados o e-mail `comercial@alfaengenhariaam.com.br` e os dados cadastrais do briefing anterior. O portfólio traz dois telefones fixos e e-mail administrativo; não comprova substituição dos demais canais comerciais.
- A página 2 associa a NR-35 à altura de 1,80 m. Esse limite e a alegação de conformidade normativa não foram reproduzidos. A landing page apresenta segurança como compromisso, sem oferecer orientação normativa.
- O selo de associação individual à NFPA não foi apresentado como certificação da empresa.
- Logos e nomes de clientes, máquinas e processos identificáveis não foram incorporados, conforme os limites já registrados no briefing.
- Não foram inventados resultados percentuais, quantidades de obras, datas, localizações ou escopos não informados para os serviços fotografados. A data de fundação continua apoiada no briefing anterior.
- Nomes, títulos e registros dos responsáveis técnicos refletem o portfólio; não houve consulta cadastral externa.

## Validação desta atualização

- `npm run build`: aprovado, incluindo TypeScript e pré-renderização estática da rota `/`.
- `npm run lint`: aprovado, sem erros ou avisos.
- Prévia local e seis arquivos de foto responderam HTTP 200. Formato WebP, dimensões e total de 241.848 bytes conferidos sobre os arquivos servidos. `git diff --check` sem erros de espaços.
- Revisão React: galeria e equipe renderizadas no servidor, sem dependências ou estado novos. Fotografias com dimensões explícitas, carregamento adiado e rótulos para os links que abrem nova aba. A navegação utiliza a lista central de seções existente.
- Inspeção visual das imagens originais e correspondência com o PDF concluída. Não houve teste visual ou interativo da página nesta sessão: a conexão ao navegador integrado retornou nenhum navegador disponível. Os relatórios de navegador de revisões anteriores não validam os novos blocos.
- Trabalho mantido no projeto local, respeitando o escopo de prévia registrado na entrega anterior. Não houve publicação externa, mudança de domínio, de acesso ou de indexação.
