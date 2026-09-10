# Galeria de serviços — 10/09/2026

O solicitante forneceu nove fotografias distintas e salvou os arquivos originais em `public/images/`. A inclusão no site e a publicação no GitHub/Vercel foram autorizadas na conversa.

| Original | Conteúdo da fotografia |
| --- | --- |
| `img-oito.jpg` | Tubulações na alvenaria e alinhamento com nível a laser |
| `img-um.jpg` | Dutos, tubulações e suportes em ambiente interno em obra |
| `img-dois.jpg` | Soldagem de tubulação vertical, profissional visto de costas |
| `img-nove.jpg` | Montagem e soldagem de tubulação junto a equipamento |
| `img-cinco.jpg` | Soldagem em conexões na parte inferior de equipamento |
| `img-sete.jpg` | Detalhe da soldagem em componente com aletas |
| `img-quatro.jpg` | Plataforma elevatória junto a uma fachada branca |
| `img-tres.jpg` | Plataforma junto a fachada azul e branca |
| `img-seis.jpg` | Acesso à parte superior de uma fachada azul |

Os nove JPEGs originais foram mantidos sem alteração e são abertos pelos links da galeria. Cada foto possui uma versão WebP nas dimensões originais e outra com largura de 640 px em `public/images/portfolio/servicos/`. Houve somente conversão de formato e redução de resolução; não foram usados geração de imagem, recortes, retoques, remoção de marcas ou alteração das cenas. A fotografia repetida nos anexos aparece uma única vez.

A galeria “A Alfa em campo” complementa os comparativos existentes no portfólio. Tem três colunas no computador, duas no tablet e uma no celular, preservando a proporção integral das fotos. Os arquivos usam carregamento adiado, dimensões explícitas, textos alternativos e versões responsivas. Não há nova dependência ou componente cliente.

As legendas descrevem apenas o conteúdo visível. Não foram atribuídos clientes, localização, datas de execução, certificações ou resultados não informados. A orientação anterior sobre excluir máquinas e processos identificáveis foi superada pelo pedido explícito de incluir estas fotografias.

Validação: build Next.js e lint aprovados; página local com nove fotos novas e seis anteriores. Os 27 arquivos (nove originais e 18 versões WebP) responderam HTTP 200, com bytes iguais aos arquivos locais e dimensões conferidas. Os hashes dos JPEGs permaneceram inalterados. A revisão de código verificou semântica, acessibilidade e regras responsivas; não foi realizada inspeção visual do site no navegador nesta atualização.

## Recuperação de falhas no carregamento

Após o relato de uma foto quebrada, as versões WebP e o JPEG de `img-sete.jpg` foram novamente conferidos nos dois endereços do Vercel: HTTP 200, bytes íntegros e decodificação completa. A falha específica não se repetiu na navegação de diagnóstico.

A galeria agora tenta o JPEG original uma vez quando uma imagem otimizada falha, removendo `srcset` e `sizes` antes da troca. O tratamento também cobre falhas ocorridas antes da hidratação e não interfere nas fotos que ainda aguardam carregamento adiado. O listener é removido na desmontagem.

`tests/gallery-image-check.mjs` verificou as nove fotos e a ausência de rolagem horizontal em 1440 e 390 px. O bloqueio de downloads WebP no navegador confirmou a recuperação por JPEG; o bloqueio simultâneo do JPEG confirmou que não há repetição infinita. A captura do cenário recuperado foi inspecionada. Build e lint passaram. Os relatórios e a captura ficam em `artifacts/gallery-image-check.json` e `artifacts/gallery-image-recovered.png`.

## JPEG direto para a foto relatada

Após novo relato da mesma imagem quebrada, a foto de soldagem em componentes passou a usar `/images/img-sete.jpg` diretamente no HTML servido, sem `srcset` ou `sizes`. Assim, seu carregamento não depende das versões WebP nem do tratamento de erro em JavaScript. O arquivo original e a proporção da fotografia foram preservados.

O teste verificou o JPEG direto no HTML e no navegador em 1440 e 390 px, inclusive bloqueando as versões WebP dessa foto. As nove imagens carregaram sem rolagem horizontal; a captura `artifacts/gallery-image-direct-jpeg.png` foi inspecionada. Os cenários de recuperação e de ausência de repetição infinita continuam cobertos usando a foto `img-dois.jpg`.
