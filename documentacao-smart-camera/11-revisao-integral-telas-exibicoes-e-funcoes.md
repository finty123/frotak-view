# Revisão integral de telas, exibições e funções

## Objetivo

Esta revisão transforma o mapeamento exploratório do Smart Cameras em uma referência de produto auditável para o FrotaK View. Ela cruza as 36 rotas verificadas, as superfícies globais sem rota própria, 76 controles catalogados, estados observados, fluxos derivados, ações persistentes não confirmadas e exigências visuais já aceitas.

O resultado é uma revisão de completude, não uma afirmação de que efeitos destrutivos ou de backend foram comprovados. Onde a exploração parou antes da confirmação, o requisito continua marcado como `validação de produto necessária`.

## Escopo consolidado

| Dimensão | Quantidade revisada |
|---|---:|
| Produtos autenticados | 2 — FT Vision e FT Manager |
| Rotas verificadas | 36 |
| Rotas FT Vision | 27 |
| Rotas FT Manager | 9 |
| Rotas com navegação/tela verificada | 31 |
| Formulários verificados sem salvar | 5 |
| Controles na matriz transversal | 76 |
| Atalhos principais da topbar | 7 |
| Áreas da Central do usuário | 5 |

A matriz canônica de superfícies é `12-matriz-mestra-de-superficies.csv`. As lacunas e critérios de validação estão em `13-lacunas-e-validacoes-pendentes.md`.

## Critério usado em cada tela

Toda superfície foi revisada segundo dez perguntas:

1. Qual é a finalidade operacional?
2. Como se chega e como se retorna?
3. O que é exibido e em qual hierarquia?
4. Quais filtros, seletores, abas e modos existem?
5. Quais ações unitárias e em lote existem?
6. O que habilita ou desabilita cada controle?
7. Quais estados de dados e tarefas são necessários?
8. Quais permissões, dados sensíveis e registros de auditoria estão envolvidos?
9. Qual composição visual do FrotaK View deve representar a função?
10. O que foi observado, inferido ou permanece sem confirmação?

## Superfícies globais

### Shell autenticado

Deve conter topbar persistente, sidebar hierárquica recolhível, breadcrumb/contexto, área de conteúdo e feedback de rota ativa. O seletor de produtos alterna entre a operação do FT Vision e a administração do FT Manager. O shell precisa preservar permissões, contexto de frota, filtros seguros e retorno à tela anterior.

### Topbar

- **Grade de produtos:** popover FT Vision/FT Manager; fecha por `Esc`, clique externo ou seleção.
- **Busca global:** modal com foco inicial, consulta, resultados, estado vazio e fechamento por `Esc`.
- **Idioma:** English, Español e Português (Brasil), com preferência persistente após confirmação.
- **Downloads:** abre Central do usuário na área de downloads.
- **Notificações:** abre a central já filtrada para mensagens.
- **Avatar:** abre dados da conta.
- **Sair:** confirmação antes de encerrar a sessão.

### Central do usuário

- **Dados:** avatar, conta, contato mascarado/revelável, edição, celular, senha e compartilhamento da conta.
- **Notificações:** não lidas/lidas/todas, atualização, marcar como lidas e paginação.
- **Ferramentas:** download de DiskTool e LocalPlayer; no FrotaK, qualquer utilitário deve informar versão, plataforma, integridade e origem.
- **Sobre:** produto, versão, lançamento, requisitos de sistema e compatibilidade.
- **Downloads:** sucesso, em andamento, aguardando e falha; baixar, excluir, atualizar, configurar colunas, selecionar e paginar.

## FT Vision — revisão tela por tela

### V01 — Dashboard

**Exibe:** totais de frota, veículo e motorista; estados dos veículos; distribuição de alarmes; rankings de risco e filas pendentes.

**Funções:** navegar de indicadores e pendências para os módulos correspondentes; alternar ranking entre veículo/motorista; compreender período e atualização dos dados.

**Requisitos:** cada número precisa de escopo, período, atualização e drill-down. Loading, vazio, parcial, erro e sem permissão devem preservar a geometria. O FrotaK deve usar o blueprint de dashboard operacional, não uma grade uniforme de cartões decorativos.

### V02 — Monitoramento de Veículos

**Exibe:** abas rotina/vigilância-chave, filtros por frota/placa/dispositivo, hierarquia de ativos, estado/sinal, mapa e seleção sincronizada.

**Funções:** localizar veículo, selecionar marcador, favoritar vigilância, abrir ficha, vídeo ao vivo, histórico, envio de áudio e compartilhamento de viagem.

**Requisitos:** map-first workspace, rail de ativos recolhível, status com texto/ícone/cor, última atualização e alternativa tabular acessível. Favoritar, áudio e compartilhar exigem permissão, confirmação adequada e auditoria.

### V03 — Histórico de trajeto

**Exibe:** veículo, intervalo, lista de viagens, duração, distância, origem/destino, mapa, rota, linha do tempo e fonte OBD/GPS.

**Funções:** consultar período, selecionar viagem, alternar métrica, reproduzir/pausar, mover no tempo, alterar velocidade e abrir vídeo correlacionado.

**Requisitos:** sincronizar mapa, telemetry scrubber e vídeo; marcar lacunas de GPS/OBD/vídeo; mostrar timezone e unidades; preservar seleção ao alternar fonte.

### V04 — Monitoramento de Riscos

**Exibe:** filtros de placa/motorista, tabela de veículo/dispositivo/frota/motorista/risco, expansão de linha e paginação.

**Funções:** filtrar, limpar, expandir ocorrência, ligar autoatualização e escolher 30/60 segundos.

**Requisitos:** atualizações não podem roubar foco ou reordenar a linha durante interação; sinalizar dados novos e frescor; expansão deve ser navegável por teclado.

### V05 — Reprodução de vídeo

**Exibe:** seleção de veículo e data, estado orientativo, área multicanal e linha do tempo.

**Funções:** escolher veículo, habilitar data, carregar blocos/canais e operar reprodução.

**Requisitos:** estados sem gravação, canal indisponível, buffer, erro, consumo de dados e permissão. A semântica de três controles flutuantes permanece pendente e não deve ser inventada.

### V06 — Biblioteca de vídeo

**Exibe:** abas completo/baixando/aguardando/falha/favoritos, filtros, seleção, lista/grid e tarefas de vídeo.

**Funções:** adicionar solicitação, excluir, classificar, favoritar, selecionar em lote e acompanhar ciclo assíncrono.

**Solicitação:** veículos, início, duração, tipo/nome, gravação ou caixa-preta, canais, rede e velocidade; alerta sobre interrupção potencial da gravação em alta velocidade.

**Requisitos:** progresso, fila, tentativa, falha recuperável, cancelamento, impacto de rede, retenção, tamanho estimado e auditoria.

### V07 — Lista de Alertas

**Exibe:** abas alarme/favorito, grade/lista, filtros completos, cards/linhas, miniatura, NEW, veículo, velocidade, disparo, direção, tempo, local e paginação.

**Funções:** selecionar, validar/rejeitar, favoritar, enviar por e-mail, exportar relatório/evidências, compartilhar e vincular motorista; inclui ações em lote.

**Requisitos:** separar severidade, status de revisão, status da evidência e favorito; filtros ativos visíveis; seleção em lote com escopo inequívoco; todas as ações externas auditáveis.

### V08 — Detalhe do alarme

**Exibe:** evento, veículo, velocidade, disparo, direção, data/hora, endereço, GPS, mídia, mapa, eventos próximos e três trilhas de auditoria.

**Funções:** alternar evidência/contexto, inspecionar posição e navegar entre processamento, ações e acessos.

**Requisitos:** composição canônica de investigação com evidência/mapa dominante e rail contextual; estado `Sem vídeo` não pode ocultar metadados; tempo e localização devem ser correlacionáveis.

### V09 — Análises de Segurança

**Exibe:** modelo de score, filtros, resumo, abas frota/veículo/motorista, distribuição, tendência diária, heatmap, faixas horárias e rankings.

**Funções:** escolher período/escopo/evento/dimensão, aplicar/limpar e alternar visualização/peso.

**Requisitos:** fórmula, pesos, distância mínima e atualização transparentes; gráficos com tabela/descrição alternativa; drill-down até alerta/evidência.

### V10 — Lista de riscos de condução

**Exibe:** abas motorista/veículo, período/frota, melhoria/declínio e tabela ampla com exposição, score e categorias.

**Funções:** comparar entidades, ordenar, filtrar, paginar e aprofundar risco.

**Requisitos:** rolagem horizontal controlada, primeira coluna fixa quando necessário, unidades e ausência de dados explícitas.

### V11 — Gestão de Relatórios

**Exibe:** busca e catálogo de modelos com prévia.

**Funções:** localizar modelo, abrir visualização e iniciar configuração/geração.

**Requisitos:** corrigir rótulos ambíguos da fonte; prévia deve identificar colunas, escopo, formato e consequência antes de gerar.

### V12/V13 — E-mail agendado e criação

**Exibe:** lista de tarefas, filtros, status/auditoria e stepper configuração → escopo.

**Funções:** adicionar/excluir, definir relatório, título, destinatários, ciclo, horário e escopo.

**Requisitos:** timezone, validação de destinatários, resumo final, pausa/reativação, próxima execução, histórico e falha de entrega. Salvar/seguir não foi confirmado.

### V14 — Resumo mensal

**Exibe:** árvore de frota, mês, atualização em 24 h, veículos e abas status/alarmes/alarmes por 100 km/tendência/score.

**Funções:** selecionar escopo, filtrar/resetar e alternar indicador.

**Requisitos:** manter seleção ao trocar aba, esclarecer último processamento e permitir drill-down.

### V15 — Status de transmissão

**Exibe:** árvore, período, estatística online, detalhe mensal e detalhe do veículo.

**Funções:** consultar disponibilidade e investigar interrupções.

**Requisitos:** distinguir sem sinal, desligado, sem dados e desconhecido; exibir duração e cobertura do período.

### V16 — Última localização

**Exibe:** último GPS/último online e tabela com veículo, dispositivo, frota, motorista, velocidade, posição, direção e horário.

**Funções:** selecionar escopo e alternar tipo de último estado.

**Requisitos:** idade do dado e timezone sempre visíveis; link para mapa/detalhe do ativo; tratar ausência de GPS separadamente de offline.

### V17 — Relatório de posição

**Exibe:** árvore, período, estatística agregada e detalhe dos registros.

**Funções:** filtrar/resetar, alternar agregado/detalhe e investigar posicionamento.

**Requisitos:** unidades, qualidade da posição, paginação/exportação e correlação com ativo/período.

### V18 — Visão geral de consumo

**Exibe:** mensal/diário, timezone, mês, dispositivos, tratados/excedentes, total/média, composição, evolução e ranking.

**Funções:** filtrar período/granularidade e aprofundar consumo.

**Requisitos:** franquia, unidade, base de cálculo, categorias e atualização explícitas; gráfico precisa de tabela acessível.

### V19 — Lista de celulares/dispositivos

**Exibe:** árvore, mês, resumos mensal/diário e tabela de consumo, franquia, tratamento, responsável e horário.

**Funções:** filtrar, paginar, ordenar e abrir detalhe pela placa.

**Requisitos:** diferenciar dispositivo, SIM e veículo; seleção temporal e responsável auditáveis.

### V20 — Detalhes de tráfego

**Exibe:** veículo/competência, serial, total, duração/volume por função e detalhe diário.

**Funções:** alternar dispositivo/competência e localizar picos.

**Requisitos:** consistência entre soma funcional, diária e total; unidade adaptativa sem perder valor original.

### V21 — Motorista desconhecido

**Exibe:** não tratado/processado, frota, veículo, seleção e fila.

**Funções:** filtrar, selecionar e marcar como desconhecido.

**Requisitos:** evidência facial protegida, justificativa, auditoria, desfazer/reclassificar conforme política e estado vazio informativo.

### V22/V23 — Frota e cadastro

**Exibe:** filtro, tabela hierárquica/auditoria e formulário de pai, nome, tipo, endereço, ID externo e observações.

**Funções:** adicionar, excluir em lote, editar/navegar hierarquia, salvar/cancelar.

**Requisitos:** impedir ciclos, explicar impacto da exclusão, dependências de veículos/subgrupos e unicidade de identificadores.

### V24/V25 — Veículos e detalhe

**Exibe:** filtros, tabela de cadastro/dispositivo/SIM/canais/auditoria; detalhe básico, dispositivo e CH1–CH8.

**Funções:** filtrar, transferir grupo, editar, abrir detalhe e habilitar/tipificar canais.

**Requisitos:** modelar veículo → dispositivo → SIM → canais; transferência e edição com permissões/auditoria; estados fora de serviço e duplicidade tratados explicitamente.

### V26/V27 — Motoristas e cadastro

**Exibe:** filtro/lista e formulário nome, CPF, status, frota, iButton, notas e foto.

**Funções:** criar, editar, excluir, fazer upload e escolher fonte da foto.

**Requisitos:** validação de CPF/identificador, consentimento/privacidade biométrica, qualidade da foto, duplicidade, retenção e permissão.

## FT Manager — revisão tela por tela

### M01 — Notificação de alerta

Exibe configurações, prioridade, veículos válidos e auditoria. Permite filtrar e consultar precedência. A criação não estava disponível ao perfil observado; o FrotaK deve representar claramente permissão ausente versus função inexistente.

### M02 — Registro de login

Exibe cartões todos/normal/anômalo/bloqueado, filtro de conta e tabela de IP, hora, versões legais, estado e detalhe. Requer proteção de IP/PII, exportação permissionada, política de retenção e tradução clara dos estados.

### M03/M04 — Usuários e cadastro

Exibe filtros, ativação, função, contato mascarado, frota, aprovador e auditoria; criação em três passos: dados, função e escopo. Ativar/desativar, revelar contato, excluir e salvar exigem confirmação, privilégio elevado e registro de antes/depois.

### M05/M06 — Evidências e detalhe

Exibe estados de tarefa, filtros, grid/lista, mídia, evento, metadados e detalhe multicanal com mapa. As ações de visualização, e-mail, compartilhamento e exportação precisam de nomes acessíveis, política de retenção, privacidade e auditoria.

### M07 — Download de áudio

Exibe baixando/não iniciado/completo, período e tabela de tarefa/progresso/dispositivo/criador. O FrotaK deve acrescentar falha, retry, cancelamento quando suportado, tamanho/duração e motivo de indisponibilidade.

### M08/M09 — Regras de compartilhamento

Exibe árvore, filtros, lista de vínculos e criação em duas colunas com seletores de veículos e embarcadores. Requer vigência, status, resumo de selecionados, prevenção de duplicidade, validação de escopo, revogação, auditoria e confirmação antes de compartilhar.

## Funções transversais obrigatórias

- Aplicar, limpar e recolher filtros sem perder contexto indevidamente.
- Busca e seleção em árvores, listas, modais e tabelas paginadas.
- Seleção unitária/em lote com escopo visível e ações desabilitadas sem pré-requisito.
- Paginação, tamanho de página, ordenação, colunas e overflow horizontal.
- Abas que preservam filtros e deixam o estado refletido na URL quando apropriado.
- Atualização manual/automática com indicação de frescor.
- Fluxos assíncronos com fila, progresso, sucesso, falha, retry e cancelamento quando suportado.
- Confirmação proporcional para salvar, excluir, validar, rejeitar, compartilhar, enviar, transferir e desativar.
- Permissão por função e escopo de dados/frota.
- Auditoria de ações operacionais, segurança, acesso e compartilhamento.
- Loading, vazio, parcial, erro, stale/offline, sem permissão e sucesso.
- Teclado, leitor de tela, foco, contraste, redução de movimento e alternativa textual para mapa/vídeo.

## Conclusão da revisão

O mapeamento cobre toda a navegação visível dos dois produtos e os fluxos derivados alcançados com segurança. Ele é suficiente para definir o backlog e as telas do FrotaK View, desde que os itens não confirmados sejam mantidos como decisões/descobertas explícitas. Nenhuma ausência da amostra deve ser interpretada como inexistência de estado populado, permissão ou backend.

