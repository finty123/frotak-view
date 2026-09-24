# Metodologia, evidência e limites

## Como o mapeamento foi feito

1. A sessão autenticada já aberta no Chrome, no perfil `Samuel`, foi reutilizada.
2. A árvore completa do menu lateral foi expandida e cada item visível foi acessado.
3. Em cada tela foram observados título, rota, organização, filtros, abas, cartões, tabelas, gráficos, mapas, estados vazios, paginação e ações.
4. Links e botões de baixo risco foram acionados para descobrir telas derivadas, drawers, modais e menus contextuais.
5. A topbar foi percorrida ícone por ícone, incluindo a Central do usuário.
6. Fluxos de criação/edição foram abertos até o ponto anterior à confirmação e cancelados/fechados sem salvar.
7. Ao final da reconexão, a sessão foi confirmada novamente no Dashboard.
8. Em uma rodada complementar, o seletor de produtos foi usado para entrar no FT Manager; todos os seus grupos, telas e formulários derivados foram percorridos e incorporados ao mesmo pacote.

## Cobertura

- 19 entradas principais de navegação: Dashboard mais 18 itens filhos nos grupos funcionais.
- 8 telas/fluxos derivados com rota própria ou painel dedicado: histórico de trajeto, detalhe de alarme, solicitação de vídeo, visualização de relatório, cadastro de e-mail, detalhe de tráfego, cadastro de frota e cadastro/detalhe relacionado a veículos/motoristas.
- 7 atalhos principais da topbar.
- 5 áreas da Central do usuário: dados, notificações, ferramentas, sobre e downloads.
- 6 telas principais do FT Manager e 3 fluxos derivados: adicionar usuário, detalhe de evidência e criar regra de compartilhamento.

O inventário consolidado contém **36 rotas verificadas**: 27 do FT Vision e 9 do FT Manager. Dessas, 31 tiveram a tela/navegação verificada e 5 são formulários abertos e cancelados antes de salvar. Além das rotas, a revisão considera topbar, sidebar, cinco áreas da Central do usuário, menus contextuais, drawers, modais, seletores e padrões transversais. A contagem de 19 acima representa somente entradas principais do menu do FT Vision, não o total de superfícies do produto.

O inventário de rotas está em `08-rotas-inventariadas.csv`. Menus contextuais e modais sem rota própria estão descritos no capítulo do módulo de origem.

## Fotografia da amostra

Data da exploração: 23/09/2026, fuso America/Sao_Paulo. Valores observados incluíam uma frota, 12 veículos e nenhum motorista. Esses números, posições, alarmes, rankings, consumos e status podem mudar após qualquer atualização operacional.

## Critério de teste seguro

Foram executadas ações de navegação, expansão, alternância de aba, filtro visual, abertura de modal/drawer e cancelamento. Não foram confirmadas ações que pudessem:

- criar, editar ou excluir registros;
- validar/rejeitar alertas;
- vincular motorista;
- marcar itens de forma persistente;
- enviar e-mail, áudio ou compartilhamento;
- ordenar/downloadar conteúdo para dispositivos;
- baixar/instalar executáveis;
- alterar e-mail, telefone ou senha;
- marcar notificações como lidas;
- encerrar a sessão.
- ativar/desativar usuários, revelar e-mails mascarados ou criar regras de compartilhamento.

## Limites do que pode ser comprovado sem alterar o ambiente

- A descrição de uma ação não confirmada deriva do rótulo, posição, habilitação e tela intermediária. O resultado pós-confirmação não foi produzido.
- Estados vazios não permitem documentar todos os formatos possíveis de linha/cartão preenchido; nesses casos, cabeçalhos e controles disponíveis foram registrados.
- Os três controles flutuantes da Reprodução de vídeo não expuseram rótulos textuais completos no estado vazio; a posição e dependência do fluxo foram documentadas, mas a semântica exata deve ser validada com um veículo/data e gravação disponível.
- Alguns botões da prévia de Gestão de Relatórios apresentam traduções inconsistentes (`Desativar`/`Entrar`). A documentação preserva o texto exibido e evita atribuir efeito não comprovado.
- Rotas com identificadores e parâmetros dinâmicos foram normalizadas com `…` ou `{id}` para não transformar IDs operacionais em referência permanente.

## Versão e requisitos exibidos pelo próprio sistema

Na área **Sobre**:

- versão: `V3.18.4.15-P10-C133044`;
- lançamento exibido: `20/09/2026`;
- iOS 12 ou superior;
- Android 5/API 21 ou superior, arquiteturas armeabi-v7a/arm64;
- para até 5.000 dispositivos: referência de i5-7500, 8 GB, DirectX 12, 1080p, 20 Mbps, 4 visualizações diretas, Windows 7+ e Chrome 64 `109.0.5414.120+`;
- acima de 5.000 dispositivos: referência de 16 GB, 4K, 200 Mbps e 36 visualizações diretas;
- requisitos de macOS não foram apresentados.

## Ferramentas disponibilizadas

A Central do usuário oferecia `DiskTool v1.1.0.21.exe` e `LocalPlayer V2.5.9.exe`. Foram apenas identificados; nenhum arquivo foi baixado ou executado.

## Recomendação para uma segunda rodada destrutiva/controlada

Se for necessário comprovar efeitos pós-confirmação, use uma conta e frota de homologação. Crie dados descartáveis, capture antes/depois e teste isoladamente: criação de tarefa, importação de vídeo, validação de alerta, vínculo de motorista, transferência de grupo e exclusões. Isso evita modificar a operação real mapeada aqui.
