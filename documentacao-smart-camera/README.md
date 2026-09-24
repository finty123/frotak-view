# Mapeamento funcional — Michelin Smart Cameras / FT Vision e FT Manager

Documentação produzida por exploração autenticada do ambiente `https://www.smartcamera.michelin.com/ftv/ft/dashboard`, em 23/09/2026 (fuso America/Sao_Paulo), usando a sessão já aberta no Chrome.

## Escopo coberto

- Dashboard e todos os grupos do menu lateral.
- 19 telas principais expostas pela navegação.
- Telas derivadas abertas por botões, links e menus contextuais: histórico de trajeto, detalhe de alarme, detalhe de veículo, detalhe de tráfego, formulário de frota, formulário de motorista, solicitação de vídeo, tarefa de e-mail e pré-visualização de relatório.
- Barra superior completa: seletor de produto, busca, idioma, downloads, notificações, perfil e logout.
- Central do usuário: dados pessoais, notificações, ferramentas, versão/requisitos e downloads.
- Filtros, abas, tabelas, cartões, mapas, paginação, ações em lote e estados vazios.
- FT Manager completo: seis telas principais e três fluxos derivados de configuração, usuários, tarefas e compartilhamento com embarcadores.
- Revisão integral consolidada de 36 rotas, superfícies sem rota, 76 controles, estados, permissões e lacunas de validação.

## Estrutura da documentação

1. [00-visao-geral-e-navegacao.md](00-visao-geral-e-navegacao.md) — arquitetura visual, navegação e convenções comuns.
2. [01-topbar-e-central-do-usuario.md](01-topbar-e-central-do-usuario.md) — todos os atalhos da topbar e a gaveta lateral.
3. [02-dashboard-e-monitoramento.md](02-dashboard-e-monitoramento.md) — Dashboard, monitoramento de veículos, riscos e histórico de trajeto.
4. [03-centro-de-evidencias.md](03-centro-de-evidencias.md) — reprodução, biblioteca, alertas e detalhe do alarme.
5. [04-centro-de-relatorios.md](04-centro-de-relatorios.md) — oito telas de relatórios e fluxos derivados.
6. [05-centro-de-consumo-de-dados.md](05-centro-de-consumo-de-dados.md) — visão geral, lista e detalhe de tráfego.
7. [06-identificacao-e-gestao.md](06-identificacao-e-gestao.md) — identificação de motorista, frotas, veículos e motoristas.
8. [07-matriz-de-controles.md](07-matriz-de-controles.md) — catálogo transversal de botões/controles e seus efeitos.
9. [08-rotas-inventariadas.csv](08-rotas-inventariadas.csv) — relação tabular de rotas verificadas.
10. [09-metodologia-e-limites.md](09-metodologia-e-limites.md) — método, estado da amostra e limites seguros da exploração.
11. [10-ft-manager.md](10-ft-manager.md) — mapeamento completo do FT Manager, suas telas e fluxos derivados.
12. [11-revisao-integral-telas-exibicoes-e-funcoes.md](11-revisao-integral-telas-exibicoes-e-funcoes.md) — auditoria funcional e visual de todas as telas e superfícies.
13. [12-matriz-mestra-de-superficies.csv](12-matriz-mestra-de-superficies.csv) — inventário canônico de rotas, overlays, drawers, modais e padrões transversais.
14. [13-lacunas-e-validacoes-pendentes.md](13-lacunas-e-validacoes-pendentes.md) — efeitos não confirmados, estados ausentes e roteiro de homologação.

## Resumo executivo

O sistema é um portal operacional de videotelemetria de frota dividido em dois produtos no mesmo shell. O **FT Vision** cobre monitoramento cartográfico, evidências, alertas, análises, relatórios, consumo de dados, identificação de motorista e cadastros operacionais. O **FT Manager** concentra configurações administrativas, auditoria de login, usuários/privilégios, tarefas de evidência/áudio e regras de compartilhamento com embarcadores.

Na amostra observada havia uma frota, 12 veículos e nenhum motorista cadastrado. Seis veículos apareciam dirigindo, três em marcha lenta e três off-line no Dashboard. Os dados e contagens são uma fotografia do momento da exploração e podem mudar.

## Legenda de segurança

- **Testado**: controle acionado e resultado observado.
- **Inspecionado até confirmação**: fluxo aberto, campos e efeitos documentados, mas a etapa final não foi executada.
- **Não executado**: ação capaz de alterar dados, enviar informações, criar registros, excluir, compartilhar, marcar alertas, disparar download em dispositivo ou encerrar sessão.

Nenhum registro foi criado, editado, enviado, excluído ou compartilhado durante o mapeamento. A sessão foi mantida ativa; o diálogo de logout foi aberto e cancelado.
