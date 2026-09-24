# Centro de Relatórios

O grupo reúne análise visual, listas detalhadas, modelos de relatório, agendamento por e-mail e relatórios operacionais. Filtros ficam no topo; gráficos/tabelas abaixo. Os dados dependem da frota e do período selecionado.

## 1. Análises de Segurança

**Rota verificada:** `/ftv/ft/security-center/analyse`

### Conceito de pontuação

A própria tela informa que a pontuação de segurança é calculada como `100 - [peso total dos alarmes / distância em km] × 100`. A configuração padrão considera os últimos 30 dias; entidades com menos de 10 km recebem pontuação padrão 100. Eventos com peso zero podem ser ocultados/exibidos por uma chave.

### Filtros e controles

- Frota;
- Período;
- dimensão de exibição;
- Evento;
- **Limpar** e **Filtrar**;
- alternância do tipo/apresentação do gráfico;
- chave para considerar/exibir categorias conforme peso configurado.

### Resumo e abas

O texto-resumo identifica o alarme mais frequente e a entidade de maior risco. Na amostra: **Saída de Pista** foi o evento mais comum; `RQY7G96` foi apontado como veículo mais perigoso, com nota 92.

Abas **Frota**, **Veículo** e **Motorista** trocam a entidade analisada sem abandonar a página.

### Visualizações

- distribuição por tipo de evento;
- ocorrências por dia;
- mapa de calor;
- distribuição por faixa horária;
- rankings e indicadores vinculados à aba ativa.

## 2. Lista de riscos de condução

**Rota verificada:** `/ftv/ft/report-center/risk-driving-list`

### Filtros e contexto

- Abas **Motorista** e **Veículo**.
- Filtros **Data** e **Frota**.
- Cartões de **melhoria** e **declínio** destacam variações relevantes de desempenho.

### Tabela detalhada

Colunas observadas incluem:

- motorista;
- CPF;
- distância percorrida;
- tempo de condução;
- pontuação;
- total de alarmes;
- condução agressiva;
- fadiga;
- uso de telefone;
- distração;
- risco de colisão;
- distância de seguimento;
- cinto de segurança;
- outras categorias.

A tabela é larga e permite leitura comparativa entre exposição, pontuação e composição do risco. A amostra filtrada estava vazia.

## 3. Gestão de Relatórios

**Rota verificada:** `/ftv/ft/report-manage`

### Catálogo

Exibe cartões/modelos de relatório e um campo de busca por título. Foram encontrados:

1. **Veículo online**;
2. **Resumo de alarmes do veículo**;
3. **Resumo de alarmes do motorista**.

Cada cartão oferece **Visualização**, que abre uma prévia antes do uso/exportação.

### Pré-visualização verificada

No primeiro modelo abriu-se o modal **Modelo de relatório on-line de veículos**. A miniatura reproduz uma tabela com Placa, Série, Frota, Data de ativação, colunas diárias e taxa média online. O rodapé continha **Fechar** e dois botões traduzidos de modo inconsistente como **Desativar** e **Entrar**; sua finalidade aparente é percorrer/confirmar a seleção do modelo, mas não foi confirmada para evitar geração ou alteração.

## 4. E-mail agendado

**Rota verificada:** `/ftv/ft/scheduled-tasks/list`

### Lista

- Filtros **Nome da tarefa** e **Tipo de relatório**.
- **Adicionar** abre o cadastro.
- **Excluir** atua em tarefas selecionadas e fica dependente de seleção.
- Tabela: nome da tarefa, tipo de relatório, ciclo, horário de execução, status, criador, data de criação e ação.
- Estado observado: sem tarefas listadas.

### Adicionar tarefa de e-mail

**Rota verificada:** `/ftv/ft/scheduled-tasks/create`

O formulário usa um stepper:

1. **Configuração da tarefa de e-mail**;
2. **Escopo**.

Campos do primeiro passo:

- nome da tarefa;
- tipo de relatório;
- título do e-mail;
- endereço de e-mail, com botão para adicionar outro destinatário;
- ciclo **Diário**, **Semanal** ou **Mensal**;
- horário de execução.

**Cancelar** sai sem gravar; **Salvar e próximo** grava/avança para a seleção de escopo. Nenhuma tarefa foi salva e nenhum e-mail foi enviado.

## 5. Relatório de resumo mensal

**Rota verificada:** `/ftv/ft/report-form/monthly-summary`

### Layout

Árvore de frota à esquerda; conteúdo analítico à direita. O filtro de mês/período possui **Redefinir** e **Filtrar**. A interface informa atualização em ciclo de 24 horas e mostra totais/ativos de veículos.

### Abas

- **Status veículo**;
- **Número alarmes**;
- **Alarmes/100 km**;
- **Tendência mensal de alarmes**;
- **Pontuação de segurança do motorista**.

Cada aba troca o indicador sem perder a seleção da frota e do período.

## 6. Status de transmissão

**Rota verificada:** `/ftv/ft/report-form/car-online`

### Estrutura

Árvore de frota/veículo à esquerda. Filtro de intervalo de datas no topo, com **Limpar** e **Filtrar**. O conteúdo alterna entre:

- **Estatísticas de status online** — gráfico percentual de disponibilidade/conexão;
- **Detalhes mensais do status do veículo**;
- **Detalhes do status do veículo**.

O relatório serve para avaliar continuidade de transmissão e investigar períodos de indisponibilidade.

## 7. Última localização

**Rota verificada:** `/ftv/ft/report-form/last-state-statistics`

### Estrutura e abas

Árvore de frota/veículo à esquerda. Abas:

- **Último status GPS**;
- **Último status online**.

### Tabela

Colunas encontradas: Placa, Série, Frota, Motorista, Velocidade, Posicionamento, Direção e Horário da posição. A amostra estava vazia. A finalidade é encontrar o último estado conhecido de cada equipamento/veículo e distinguir ausência de GPS de ausência de conectividade.

## 8. Relatório de posição

**Rota verificada:** `/ftv/ft/report-form/location-statistics`

### Estrutura

Reutiliza a árvore de frota/veículo à esquerda. Possui intervalo de datas e botões **Limpar**/**Filtrar**.

### Abas

- estatísticas de posicionamento;
- detalhes de posicionamento.

A primeira fornece visão agregada em gráfico; a segunda detalha os registros que compõem o agregado.

## Conexões entre relatórios

As telas analíticas usam a mesma hierarquia de frota/veículo/motorista, permitindo partir de uma nota agregada, chegar à lista de riscos e então consultar evidências. Relatórios recorrentes podem ser configurados por e-mail, mas esse fluxo só foi inspecionado até antes da gravação.
