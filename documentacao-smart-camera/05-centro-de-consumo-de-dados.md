# Centro de Consumo de Dados

## 1. Visão geral do dispositivo celular

**Rota verificada:** `/ftv/flow/flow-preview`

### Objetivo

Painel para acompanhar o tráfego móvel consumido pelos dispositivos, detectar excesso de franquia e entender quais funções geram consumo.

### Cabeçalho e filtros

- Total de dispositivos: `12` na amostra.
- Alternância **Mensal/Diário**.
- Fuso indicado: `UTC-03`.
- Seletor de mês.
- **Redefinir** e **Filtrar**.

### Indicadores

- quantidade processada/tratada;
- quantidade com excesso;
- percentual de excesso;
- consumo total e média;
- ranking de tráfego por agrupamento/veículo.

Na amostra, processados e excedentes apareciam como `0/0` e a taxa de excesso como `0%`; o tráfego total do período estava em aproximadamente `10,83 GB`.

### Gráficos

- Consumo por função em gráfico de composição.
- Evolução diária do tráfego.
- Ranking de consumo.
- Detalhes do relatório de consumo.

Na composição observada: importação de evidência `88,57%`, visualização ao vivo `4,63%`, reprodução `1,38%`, download `0,94%`, atualização do dispositivo `1,16%`, outras funções `3,32%`; monitor, comunicador e importação de imagem estavam próximos de zero. Valores são dinâmicos.

## 2. Lista de celulares do dispositivo

**Rota verificada:** `/ftv/flow/flow-manage?…`

### Painel de seleção e filtros

- Árvore/pesquisa de frota à esquerda.
- Seletor de mês.
- **Redefinir** e **Filtrar**.

### Resumos

O topo apresenta estatísticas do mês e do dia. Na amostra:

- mês: máximo `3,15 GB`, média `0,98 GB`, nenhum excedente;
- dia: máximo `0,17 GB`, média `0,03 GB`, nenhum excedente.

### Tabela

Colunas observadas:

- Placa;
- número de série;
- Frota;
- uso de dados móveis mensal;
- uso diário;
- estado do tráfego/franquia;
- estado do tratamento;
- controle funcional;
- usuário responsável;
- horário.

Havia 11 registros na amostra e paginação no rodapé. O nome/placa do veículo funciona como link para o detalhe de tráfego.

## 3. Detalhes de tráfego

**Rota verificada:** `/ftv/flow/flow-manage/detail?vehicleId=…&vehicleNumber=QMN6B48&deviceId=…&selectTime=2026-09`

### Cabeçalho

O título combina veículo e competência (`QMN6B48-2026-09`). Há seletor do número de série/dispositivo; na amostra, `003F017F61`. O resumo informou tráfego total de `3,15 GB`.

### Quadro por função

| Função | Duração | Tráfego observado |
|---|---:|---:|
| Visualização ao vivo do vídeo | 32m53s | 0,33 GB |
| Reprodução de vídeo | 4m | 0,14 GB |
| Download de vídeo | 1m | 1,74 MB |
| Monitor | — | — |
| Comunicador | — | — |
| Importar evidência | 15h18m | 2,65 GB |
| Importação de imagem | 1m | 0,14 MB |
| Atualização do dispositivo | — | — |
| Outras funções | 433h39m | 27,95 MB |

### Detalhamento diário

A seção **Detalhes do tráfego diário** fica abaixo do quadro e permite decompor o total por dia. Serve para identificar picos e relacioná-los a funções específicas.

## Interpretação operacional

A visão geral responde “quanto a frota consumiu e em quê”; a lista responde “qual dispositivo consumiu”; o detalhe responde “qual função e em qual duração gerou o consumo”. O maior componente da amostra foi a importação de evidência, informação útil para dimensionar franquia e políticas de transferência.
