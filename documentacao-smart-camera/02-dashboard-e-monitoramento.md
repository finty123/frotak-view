# Dashboard e Monitoramento em Tempo Real

## 1. Dashboard

**Rota verificada:** `/ftv/ft/dashboard`

### Finalidade e composição

É a tela inicial e o resumo operacional. A área útil é dividida em cartões brancos. No topo aparecem indicadores de cadastro e operação; abaixo ficam gráficos de risco e uma seção de pendências.

### Cartões de resumo

- **Frota** — exibe a quantidade total de frotas acessíveis. Na amostra: `1`.
- **Veículo** — exibe o total e a decomposição por estado. Na amostra: `12`, sendo `6 Dirigir`, `3 Em marcha lenta` e `3 Off-line`.
- **Motorista** — total de motoristas cadastrados. Na amostra: `0`.

Os números são dados vivos da conta e constituem apenas uma fotografia do momento da inspeção.

### Dados de risco

- **Distribuição do tipo de alarme** — gráfico agregado dos últimos 30 dias; organiza ocorrências por categoria de evento.
- **Risco da frota — Top 3** — ranking comparativo das frotas com maior risco.
- **Classificação de risco — Top 3** — ranking que pode alternar entre **Veículo** e **Motorista**. Na visualização de veículos foram observadas pontuações 92, 94 e 97.
- O título/período e a legenda contextualizam o conjunto usado no cálculo. As áreas do gráfico servem para comparação visual, enquanto as linhas do ranking mostram a entidade e sua nota.

### Dados a serem processados

Conjunto de cartões inferiores dedicado a itens que ainda exigem tratamento operacional. A seção funciona como atalho de trabalho: o número em cada cartão representa a fila associada ao tipo de pendência.

### Navegação

O item **Dashboard** é de primeiro nível e não possui submenu. Um atalho visual da própria página aponta para a análise de segurança, conectando o resumo executivo ao módulo detalhado.

## 2. Monitoramento de Veículos

**Rota verificada:** `/ftv/ft/realtime-monitoring`

### Organização visual

A tela é cartográfica. À esquerda há um painel de seleção/listagem; à direita, o mapa ocupa a maior área. A barra lateral global e a topbar permanecem disponíveis.

### Painel esquerdo

- Abas **Veículo de rotina** e **Vigilância-chave**. A primeira mostra a operação normal; a segunda concentra veículos marcados para acompanhamento prioritário.
- Campos de busca/filtro por **Frota**, **Placa** e **Dispositivo**.
- Árvore hierárquica de frota e lista de veículos. A amostra mostrava uma frota e seus veículos.
- Cada linha apresenta identificação do veículo e indicadores visuais de conectividade/estado, incluindo ponto colorido e intensidade de sinal quando disponível.
- Clicar em uma linha seleciona o veículo, realça sua posição no mapa e revela ações inline.

### Ações inline do veículo

Ao selecionar `RQX6A36`, foram exibidos:

- **Estrela** — adiciona/remove o veículo do conjunto de vigilância-chave; é uma alteração persistente e não foi confirmada.
- **Documento/ficha** — acesso rápido a informações relacionadas ao veículo.
- **Mais ações** (três pontos) — abre menu contextual com:
  - **Vídeo em tempo real** — abre a visualização ao vivo dos canais da câmera/dispositivo.
  - **Histórico de trajeto** — abre a reprodução histórica de rota; efeito testado.
  - **Envio de Áudio** — fluxo de transmissão de áudio ao equipamento; não executado.
  - **Compartilhamento de viagem** — prepara o compartilhamento do trajeto; não executado.

### Mapa

Apresenta marcadores dos veículos e controles cartográficos de navegação/zoom. A seleção na lista sincroniza com o marcador. O mapa é o contexto espacial para posição, estado e acompanhamento do ativo.

## 3. Histórico de trajeto

**Rota verificada:** `/ftv/ft/track-playback?vehicleId=…&vehicleNumber=RQX6A36`

### Acesso e finalidade

Foi aberto pelo menu contextual de um veículo. A tela reconstitui deslocamentos em um período e combina lista de viagens, métricas, mapa e linha do tempo.

### Controles superiores

- Identificação do veículo selecionado.
- Intervalo de **data e hora** para delimitar a consulta.
- Alternância **Dados OBD** / **Velocidade GPS**, que muda a fonte/métrica enfatizada na reprodução.
- Controles de consulta/redefinição conforme o período escolhido.

### Lista de trajetos

Cada viagem apresenta:

- duração;
- distância;
- horário inicial e final;
- endereço de origem e destino;
- acesso a valores OBD;
- acesso à reprodução de vídeo associada, quando existente.

Na amostra, a distância total agregada exibida era `267,6 km`. O valor é temporal e varia com o período.

### Reprodução

O mapa desenha o percurso. A faixa de reprodução inferior contém linha do tempo, botão de iniciar/pausar, seletor de velocidade e prévia/posição temporal. O usuário pode percorrer o trajeto e correlacionar movimento, telemetria e evidência de vídeo.

## 4. Monitoramento de Riscos

**Rota verificada:** `/ftv/ft/decision-tree?driverType=driver&includeSubFleet=0&vehicleType=vehicle`

### Finalidade

Lista riscos ativos ou recentes em formato tabular, permitindo localizar rapidamente veículo, condutor e nível de risco.

### Filtros e atualização

- **Placa** — restringe por veículo.
- **Motorista** — restringe pelo condutor vinculado.
- **Limpar** — restaura os filtros.
- **Filtrar** — aplica a consulta.
- **Atualização automática** — chave liga/desliga a renovação periódica.
- Intervalo de atualização **30 s / 60 s**; na amostra, `60 s` estava selecionado.

### Tabela

Colunas observadas:

- Placa;
- número de série;
- Frota;
- Motorista;
- ID do motorista;
- Risco.

As linhas possuem controle de expansão para revelar detalhes do risco sem abandonar a lista. Na amostra havia duas ocorrências, ambas com pontuação `1`. O rodapé contém paginação.

## Relações entre as telas

`Dashboard` resume a situação; `Monitoramento de Veículos` fornece posição e ações operacionais; `Histórico de trajeto` aprofunda um ativo/período; `Monitoramento de Riscos` organiza eventos em fila tabular. A identificação do veículo funciona como eixo comum entre os quatro contextos.
