# Identificação do Motorista e Gestão de Veículos

## 1. Avaliação de Motorista desconhecido

**Rota verificada:** `/ftv/ft/system/unknown-driver-alarm?…`

### Finalidade

Fila de eventos nos quais o sistema não conseguiu associar a face/identidade a um motorista conhecido.

### Controles

- Abas **Não foi tratado** e **Processado**.
- Filtro de **Frota**.
- Filtro de **Veículo**.
- **Redefinir** e **Filtrar**.
- Caixa **Selecionar todos**.
- **Marcar motorista desconhecido** — fica desabilitado enquanto não há seleção; ao usar, trata os itens escolhidos como motorista desconhecido.

O resultado observado estava vazio. Nenhum evento foi processado.

## 2. Frota

**Rota verificada:** `/ftv/ft/fleet-manage`

### Lista e ações

- Filtro por frota.
- **Adicionar** — abre o cadastro de frota.
- **Excluir** — ação em lote dependente de seleção; não executada.
- Caixa de seleção por linha e seleção geral.

### Tabela

Colunas:

- Frota;
- ID externo do cliente;
- código da frota;
- endereço;
- número de subgrupos;
- quantidade de veículos;
- criador/data de criação;
- modificador/data de atualização;
- ação.

Na amostra havia uma frota `CENTRAL…`, código iniciado por `151444…`, endereço `Sascar Brasil`, nenhum subgrupo e 12 veículos.

### Adicionar frota

**Rota verificada:** `/ftv/ft/fleet-manage/add-fleet?isAdd=1`

Campos:

- frota superior/pai;
- nome da frota — obrigatório;
- tipo de grupo de veículos;
- endereço;
- ID externo;
- observações, limite de 200 caracteres.

**Cancelar** retorna sem criar; **Salvar** cria o registro. O formulário foi inspecionado e cancelado.

## 3. Gestão de Veículos

**Rota verificada:** `/ftv/ft/vehicle-manage?…`

### Filtros e ações

- Placa;
- Tipo;
- **Limpar**;
- **Filtrar**;
- **Transferir grupo** — depende de seleção e move os veículos para outra frota/grupo; permaneceu desabilitado sem seleção.

### Tabela

Colunas observadas:

- seleção;
- Veículo/identificação com link;
- Placa;
- Frota;
- código;
- status;
- tipo;
- número de série;
- modelo;
- canais usados;
- SIM;
- criador/datas;
- ação **Editar**.

A lista tinha 12 linhas. A maioria estava **Em uso**; uma entrada duplicada `RPK8I62` aparecia fora de serviço. Os modelos eram variantes ADPLUS. Selecionar o link do veículo abre o detalhe.

### Detalhe do veículo

**Rota verificada:** `/ftv/ft/vehicle-manage/detail?vehicleId=…`

Para `RPK8I62`, a tela apresentou:

- status **Em uso**;
- bloco de informações básicas;
- link **Editar**;
- aba/bloco de dispositivo com identificação ADPLUS;
- tabela de canais 1 a 8, nomes `CH1` a `CH8`.

Configuração observada: CH1 habilitado como ADAS, CH2 habilitado sem tipo textual visível, CH3 habilitado como DSM e CH4–CH8 desabilitados. O detalhe permite compreender a relação veículo → dispositivo → canais/câmeras.

## 4. Motorista

**Rota verificada:** `/ftv/ft/driver-manage/driver?…`

### Lista

- Filtros **Nome do motorista** e **CPF**.
- **Limpar** e **Filtrar**.
- **Adicionar**.
- **Excluir** para seleção em lote.
- Tabela: motorista, CPF, data de criação, data de atualização e ações.

Não havia motoristas cadastrados no resultado observado.

### Adicionar motorista

**Rota verificada:** `/ftv/ft/driver-manage/driver/add-driver`

Campos e controles:

- nome do motorista;
- CPF;
- status;
- Frota;
- identificação por CPF/iButton;
- observações, limite de 500 caracteres;
- foto do motorista;
- opção/orientação para usar foto da base facial ou arquivo local, com recomendação de foto adequada ao reconhecimento;
- botão de upload;
- **Cancelar**;
- **Salvar**.

Nenhuma foto foi enviada e nenhum registro foi salvo.

## Modelo de dados inferido pela navegação

A frota contém veículos; o veículo se liga a um dispositivo/SIM e a canais de câmera; o motorista pode ser vinculado à frota, ao identificador e aos eventos. Alarmes sem vínculo seguem para a avaliação de motorista desconhecido. Essa relação é uma inferência a partir dos campos e links visíveis, não uma descrição de banco de dados interno.
