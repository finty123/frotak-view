# Centro de Evidências

## 1. Reprodução de vídeo

**Rota verificada:** `/ftv/playback-device`

### Finalidade e layout

Tela dedicada à reprodução remota de gravações de um dispositivo. O fluxo é guiado: primeiro se escolhe um veículo e depois uma data. Enquanto isso não ocorre, a área central mostra uma orientação para selecionar veículo/data.

### Controles

- **Selecionar veículo** — abre o seletor de ativo/dispositivo.
- **Data** — fica indisponível até existir um veículo válido; depois delimita o dia cujas gravações serão consultadas.
- Área de vídeo/linha do tempo — recebe os canais e blocos gravados após a consulta.
- Três controles flutuantes à direita fornecem ações auxiliares da visualização. Permanecem próximos da borda para não ocupar a área de vídeo.

O estado vazio foi inspecionado; não foi iniciada reprodução que pudesse gerar consumo adicional ou controlar o equipamento.

## 2. Biblioteca de vídeo

**Rota verificada:** `/ftv/ft/video-list?…`

### Abas de estado

- **Completo** — arquivos disponíveis/concluídos.
- **Baixando** — transferências em andamento.
- **Aguardando** — solicitações enfileiradas.
- **Falhar** — solicitações que não concluíram.
- **Com estrela** — itens marcados como favoritos.

### Filtros e ações

- Filtros por **Placa** e **Frota**.
- **Adicionar** — abre a configuração de uma nova solicitação de importação de vídeo.
- **Excluir** — remove itens selecionados; depende de seleção e não foi executado.
- **Classificar vídeo** — organiza/categoriza o item selecionado.
- Caixa de **selecionar todos** — aplica seleção em lote ao resultado corrente.

Na amostra, o conjunto consultado estava vazio e a página exibiu o respectivo estado sem dados.

### Drawer “Configurações da solicitação de importação de vídeo”

O botão **Adicionar** abre um painel lateral à direita, preservando a lista ao fundo. Elementos encontrados:

- seleção de um ou mais veículos;
- data/hora inicial;
- **duração**, com controle deslizante e seletores separados de minuto/segundo;
- tipo de vídeo;
- nome da solicitação/arquivo;
- tipo de arquivo: **Gravação** ou **Caixa-preta**;
- seleção dos canais a enviar;
- rede permitida: **Com fio**, **Wi-Fi** ou **3G/4G/5G**;
- velocidade de download **Baixa/Alta**; a interface alerta que a velocidade alta pode interromper temporariamente a gravação local;
- **Cancelar** — fecha sem criar;
- **Salvar** — cria a solicitação.

O drawer foi aberto e documentado, mas fechado sem salvar.

## 3. Lista de Alertas

**Rota verificada:** `/ftv/ft/new-alarm-list?…`

### Abas e modos de exibição

- **Alarme** — conjunto geral de ocorrências.
- **Favorito** — apenas ocorrências marcadas.
- Alternância de visualização em **grade/cartões** ou **lista**.

### Filtros

- Placa;
- Motorista;
- intervalo de data/hora;
- Frota;
- Evento;
- Status;
- status da evidência;
- origem do vídeo;
- severidade;
- validação.

**Redefinir** restaura a consulta e **Filtrar** aplica os critérios. O controle de recolhimento permite reduzir a área dos filtros.

### Ações gerais

- **Validação de Evento** — inicia tratamento/validação em lote para itens selecionados.
- **Selecionar todos** — marca todos os resultados visíveis/elegíveis.
- Paginação e tamanho de página no rodapé.

### Cartões de alerta

Cada cartão mostra:

- categoria do evento (na amostra, por exemplo, **Saída de Pista**);
- selo **NEW** para ocorrência nova;
- veículo/placa;
- velocidade;
- condição de disparo e direção;
- data/hora;
- endereço/local;
- miniatura da evidência quando disponível;
- estrela e menu de três pontos.

Ao selecionar um cartão surgem os atalhos `X`, `✓` e o menu de mais ações, destinados a rejeição/validação e operações adicionais conforme o estado.

### Menu contextual do alerta

- **Validação de Evento** — abre o tratamento da classificação.
- **Favorito** — marca/desmarca o alerta.
- **Envio por e-mail** — prepara envio externo.
- **Exportar relatório** — gera o documento do evento.
- **Exportar evidências** — reúne os arquivos de mídia.
- **Compartilhamento rápido** — cria/abre fluxo de compartilhamento.
- **Vincular motorista** — associa um condutor à ocorrência.

Essas ações foram identificadas, mas não confirmadas, pois podem alterar dados ou transmitir informações.

## 4. Detalhe do alarme

**Rota verificada:** `/ftv/ft/new-alarm-detail/{id}?hasEvidence=1&resourceType=default`

### Cabeçalho e metadados

O detalhe foi aberto a partir da lista em outra guia. Para o item amostrado, a tela exibiu:

- evento **Saída de Pista**;
- veículo;
- velocidade;
- condição de disparo — saída contínua da faixa;
- direção — esquerda;
- data/hora;
- endereço;
- coordenadas GPS.

### Evidência e mapa

- Área principal de mídia; no item observado apareceu **Sem vídeo**.
- Controles segmentados permitem alternar o contexto de evidência disponível.
- Mapa posicionado ao lado/abaixo da evidência, com o ponto do evento e alarmes em uma janela aproximada de cinco minutos antes/depois.

### Trilhas de auditoria

- **Registros de processamento** — histórico do tratamento operacional.
- **Registro de ações** — ações executadas sobre o alerta.
- **Registros de acesso** — consulta/auditoria de acessos.

Na amostra, essas abas estavam vazias. Elas são importantes para rastreabilidade mesmo quando não há registros.

## Fluxo funcional resumido

`Reprodução de vídeo` consulta gravações diretamente; `Biblioteca de vídeo` administra solicitações/arquivos; `Lista de Alertas` organiza eventos e ações; `Detalhe do alarme` reúne metadados, localização, mídia e auditoria de uma ocorrência específica.
