# Visão geral, organização visual e navegação

## Estrutura visual permanente

### Topbar

Faixa horizontal escura, fixa no topo, ocupando toda a largura. À esquerda ficam a marca Michelin Connected Fleet / Smart Cameras e o seletor de produto em forma de grade. À direita ficam busca, idioma, downloads, notificações, avatar da conta e sair. A topbar permanece visível em todas as telas autenticadas.

### Menu lateral

Coluna escura fixa à esquerda. Os itens de primeiro nível usam ícone, texto e, quando possuem filhos, um chevron. O grupo ativo é realçado em azul; o item filho ativo recebe fundo azul-escuro. Um botão circular na borda direita da coluna recolhe/expande o menu.

Ordem observada:

1. Dashboard
2. Monitoramento em Tempo Real
   - Monitoramento de Veículos
   - Monitoramento de Riscos
3. Centro de Evidências
   - Reprodução de vídeo
   - Biblioteca de vídeo
   - Lista de Alertas
4. Centro de Relatórios
   - Análises de Segurança
   - Lista de riscos de condução
   - Gestão de Relatórios
   - E-mail agendado
   - Relatório de resumo mensal
   - Status de transmissão
   - Última localização
   - Relatório de posição
5. Centro de Consumo de Dados
   - Visão geral do dispositivo celular
   - Lista de celulares do dispositivo
6. Identificação do Motorista
   - Avaliação de Motorista desconhecido
7. Gestão de veículos
   - Frota
   - Gestão de Veículos
   - Motorista

### Área de conteúdo

Fundo cinza muito claro. Telas tradicionais usam breadcrumb no alto e cartões brancos com cantos arredondados. Filtros aparecem em um cartão superior; tabelas ou gráficos ficam em um cartão inferior. Mapas ocupam quase toda a área e usam painéis laterais sobrepostos.

## Padrões de navegação

- Clicar em um grupo do menu expande seus filhos e recolhe o grupo anteriormente aberto.
- Clicar em um filho navega sem abrir uma nova janela.
- Breadcrumbs possuem seta de voltar e, nas telas derivadas, links para a lista de origem.
- Links de placas abrem detalhes do veículo ou de consumo.
- Cartões de alertas abrem/selecionam o item e expõem ações rápidas; o detalhe completo pode abrir em outra aba.
- Ações “Adicionar” abrem página ou drawer/formulário; “Cancelar/Cancelamentos” retorna sem salvar.
- Botões “Filtrar” aplicam os campos; “Redefinir/Limpar filtro” restaura o estado inicial.
- Chevron ao lado de filtros recolhe ou expande filtros avançados.
- Paginação fica no rodapé direito, com anterior, número atual, próximo e seletor de tamanho.

## Componentes recorrentes

### Filtros

Campos de texto, seletores pesquisáveis, datas ou intervalos, árvore de frota/veículos e botões de ação à direita. Campos de data usam calendário. Seletores abrem lista flutuante; árvores permitem expandir frota e selecionar veículos.

### Tabelas

Cabeçalho fixo dentro de cartão branco, linhas com checkbox opcional, colunas extensas e rolagem horizontal quando necessário. Ações por linha aparecem na última coluna. Estados vazios exibem ícone de caixa e “Não há dados”.

### Abas

Usadas para alternar dimensões sem sair da tela: veículo/motorista, status de tarefa, não lido/lido/todos, etc. A aba ativa usa texto azul e sublinhado.

### Mapas

Base cartográfica clara com marcadores, rótulos de placa e controles verticais à direita. Foram vistos: localização, medição/régua, tráfego, zoom +/−, tela cheia, minimapa e seletor “Camada”.

### Estados e cores

- Azul: item/aba ativa e ação primária.
- Cinza: ação indisponível ou campo não preenchido.
- Verde: veículo/estado on-line.
- Cinza-escuro: veículo off-line.
- Vermelho: alertas, severidade ou indicadores de atenção.
- Etiqueta “NOVO”: alerta ainda não processado.

## Mapa de alto nível

```text
Dashboard
├── Monitoramento em Tempo Real
│   ├── Monitoramento de Veículos ──> Histórico de trajeto
│   └── Monitoramento de Riscos
├── Centro de Evidências
│   ├── Reprodução de vídeo
│   ├── Biblioteca de vídeo ──> Solicitação de importação
│   └── Lista de Alertas ──> Detalhe do alarme
├── Centro de Relatórios
│   ├── Análises de Segurança
│   ├── Lista de riscos de condução
│   ├── Gestão de Relatórios ──> Pré-visualização
│   ├── E-mail agendado ──> Adicionar tarefa
│   ├── Relatório de resumo mensal
│   ├── Status de transmissão
│   ├── Última localização
│   └── Relatório de posição
├── Centro de Consumo de Dados
│   ├── Visão geral
│   └── Lista de celulares ──> Detalhes de tráfego
├── Identificação do Motorista
│   └── Avaliação de desconhecido
└── Gestão de veículos
    ├── Frota ──> Adicionar Frota
    ├── Gestão de Veículos ──> Detalhes/Editar veículo
    └── Motorista ──> Adicionar motorista
```
