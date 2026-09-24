# FT Manager — mapeamento completo

## Visão geral e arquitetura

O **FT Manager** é acessado pelo seletor de produtos em forma de grade da topbar, ao lado de **FT Vision**. Ele utiliza a mesma identidade visual: topbar escura, menu lateral escuro recolhível e área de trabalho clara com breadcrumbs, filtros e cartões brancos.

O produto concentra administração e tarefas de retaguarda. A árvore de navegação observada possui:

1. **Lista de eventos**
   - Notificação de alerta
2. **Configuração Geral**
   - Registro de login
3. **Usuário e Privilégios**
   - Usuário
4. **Centro de tarefas**
   - Vídeo da evidência
   - Tarefas de download de áudio
5. **Gestão de embarcadores**
   - Regras de Compartilhamento

A topbar mantém busca, idioma, Central de downloads, notificações, avatar e sair. Esses controles compartilham o comportamento já descrito em `01-topbar-e-central-do-usuario.md`.

## 1. Notificação de alerta

**Rota verificada:** `/ftm/ft/alarm-notification?…`

### Finalidade

Lista configurações personalizadas de notificação aplicadas a veículos ou grupos. A mensagem explicativa informa que configurações personalizadas têm precedência sobre os parâmetros padrão do veículo dentro do seu escopo. Se o mesmo veículo pertencer a várias configurações, prevalece a de maior prioridade.

### Elementos

- Breadcrumb **Lista de eventos / Notificação de alerta**.
- Atalho **Descrição** no canto superior direito, ligado ao bloco explicativo.
- Filtro **Config.** por nome da configuração.
- **Redefinir** e **Filtrar**.
- Ícones de atualização e configuração de colunas no cabeçalho da tabela.
- Tabela com:
  - nome da configuração;
  - número de veículos válidos;
  - prioridade;
  - criado por;
  - hora da criação;
  - usuário da última alteração;
  - horário da alteração;
  - ação.

O resultado observado estava vazio. Não havia botão de criação visível nessa tela para o perfil utilizado.

## 2. Registro de login

**Rota verificada:** `/ftm/login-log`

### Resumo de status

Quatro cartões horizontais no topo contabilizam e segmentam os registros:

- **Todos status** — 9 na amostra;
- **Normal login** — 3;
- **Desembarque com exceção** — 6; a tradução corresponde a logins anômalos/excepcionais;
- **A conta não está logada há muito tempo e foi bloqueada** — 0.

### Filtro e tabela

- Filtro **Conta de login**, preenchido com `central.trans` na amostra.
- **Redefinir** e **Filtrar**.
- Ações auxiliares de exportação/configuração no canto da tabela.
- Colunas:
  - conta de login;
  - endereço IP;
  - hora de login;
  - versão do Contrato do Usuário;
  - versão da Política de Privacidade;
  - estado de início de sessão;
  - detalhes do status do login.

Foram exibidos 9 registros, com estados **Normal login** ou **Desembarque com exceção** e detalhe **Login fora do local** nos casos anômalos. Os endereços IP não foram reproduzidos nesta documentação por serem dados de telemetria de acesso.

### Rodapé

Total de registros, página atual, anterior/próxima e seletor `20 / página`.

## 3. Usuário

**Rota verificada:** `/ftm/user-manage`

### Filtros e ações

- campo **Usuário**;
- seletor **Status**;
- **Redefinir** e **Filtrar**;
- **Adicionar**;
- **Deletar**, desabilitado até haver seleção;
- ícones de exportação/atualização/configuração de colunas.

### Tabela

Colunas encontradas:

- seleção;
- nome do usuário com link;
- status e chave **Ativar**;
- função associada;
- e-mail mascarado, com ícone de olho;
- informação de contato;
- Frota;
- aprovador designado;
- criado por/hora de criação;
- usuário/horário da última alteração;
- ação de edição.

A amostra continha dois usuários. A chave de ativação, o olho e a edição foram identificados sem alteração de estado nem revelação de dados mascarados.

### Adicionar usuário

**Rota verificada:** `/ftm/ft/user-manage/add?operateType=add`

Stepper de três fases:

1. **Informação básica**;
2. **Autorizar função**;
3. **Autorização de dados**.

Campos da primeira fase:

- nome de usuário — obrigatório;
- e-mail — obrigatório;
- senha — obrigatória, com mostrar/ocultar;
- confirmação da senha — obrigatória;
- informação de contato, com seletor de código internacional (padrão exibido `+86`);
- Frota proprietária — obrigatória;
- aprovador designado;
- notas, limite de 500 caracteres.

**Cancelamentos** sai do fluxo; **Salvar e seguir** avança para funções e permissões de dados. Ao cancelar, o navegador apresentou “Sair da página atual? Sistema pode não salvar as mudanças”; a saída foi confirmada sem qualquer campo preenchido ou dado salvo.

## 4. Vídeo da evidência

**Rota verificada:** `/ftm/ft/evidence-list`

### Abas e filtros

- **Completo**;
- **Baixando**;
- **Aguardando**;
- **Falhar (por exemplo, experimentos)** — rótulo traduzido exatamente como exibido.

Os filtros incluem **Placa** e, quando expandido, **Nome do condutor**, com **Redefinir**, **Filtrar** e chevron de filtros. Há **Selecionar todos** e alternância grade/lista.

### Cartões

Cada evidência concluída contém:

- miniatura/vídeo;
- tamanho do arquivo e duração, por exemplo cerca de 6–12 MB e 9 segundos;
- tipo do evento, como Saída de Pista, Distância insegura ou Colisão frontal;
- placa;
- endereço;
- data/hora;
- seleção individual;
- atalhos visuais para operações como visualização, e-mail e compartilhamento.

Clicar no nome do evento abre o detalhe. A lista é paginada.

### Detalhes de evidência

**Rota verificada:** `/ftm/ft/evidence/detail?evidenceId=…&fromList=1&type=evidence`

O item amostrado exibiu:

- título/tipo do evento;
- nome do vídeo;
- origem — **Upload automático**;
- link para o evento;
- Placa;
- nome do condutor;
- serial do dispositivo;
- velocidade;
- hora do evento;
- horário de conclusão;
- indicadores verdes do conteúdo concluído.

Abaixo há um mosaico multicanal de vídeo, indicadores de progresso/carregamento por canal, eventual estado **Sem vídeo**, alternância segmentada, velocidade corrente e mapa do trajeto com controle de camada. A topbar local oferece seis atalhos por ícone, incluindo compartilhamento/e-mail e operações de exportação/documento; não foram confirmados para evitar envio ou geração externa.

## 5. Tarefas de download de áudio

**Rota verificada:** `/ftm/task/issue-audio`

### Abas

- **Baixando**;
- **Não iniciado**;
- **Completo**.

### Filtro e tabela

- seletor de critério temporal, exibido como **Hora da criação**;
- intervalo de data/hora;
- **Redefinir** e **Filtrar**;
- ícones de atualizar e configurar colunas;
- tabela com nome da tarefa, hora do envio, progresso do envio ao dispositivo, criado por, hora da criação e ação.

O estado observado estava vazio.

## 6. Regras de Compartilhamento

**Rota verificada:** `/ftm/ft/shipper-vehicle`

### Painel esquerdo

- seletor de tipo, exibido como **Frota**;
- busca na árvore;
- Frota raiz e seus 12 veículos;
- seleção hierárquica usada para restringir o resultado.

### Filtros e ações

- **Usuário**;
- **Status**;
- intervalo de **Tempo**;
- **Limpar filtro** e **Filtrar**;
- **Criar Regra**;
- **Validação de Evento**, desabilitada sem seleção;
- atualizar, exportar e configurar colunas.

### Tabela

Colunas visíveis ou expostas pela árvore de acessibilidade:

- seleção;
- Placa;
- número serial do dispositivo;
- Transportadora;
- Embarcador;
- Status;
- hora de início;
- hora de término;
- criado por;
- usuário da última alteração.

A consulta observada estava vazia.

### Criar Regra

**Rota verificada:** `/ftm/ft/shipper-vehicle/auth`

A tela divide-se em duas colunas:

#### Veículos Autorizados

- **Adicionar** e **Deletar**;
- busca por placa ou dispositivo;
- tabela com seleção, Placa, serial, Transportadora, Frota e ação;
- botão/estado **Por favor adicione** enquanto vazio.

O modal **Adicionar veículo** oferece filtros Placa e Frota, lista com checkboxes, serial e transportadora, painel lateral de selecionados, contador, opção **Vazio**, **Cancelar** e **OK**.

#### Embarcadores Autorizados

- **Adicionar** e **Deletar**;
- campo de busca;
- tabela com Embarcador, Superior e ação;
- estado vazio equivalente.

O modal **Adicione um dono de carga** lista 150 embarcadores na amostra, com filtro, paginação, checkboxes, coluna Superior, painel de selecionados, **Cancelar** e **OK**.

#### Confirmação

**Cancelamentos** retorna sem criar. **Salvar** persiste a regra que vincula os veículos selecionados aos embarcadores autorizados. O formulário e ambos os seletores foram inspecionados, mas nada foi selecionado ou salvo.

## Relação entre os dois produtos

O FT Vision é a frente operacional: monitoramento, alertas, vídeo e relatórios. O FT Manager administra parâmetros, contas, auditoria e fluxos de compartilhamento/tarefas. A evidência é o principal elo: eventos produzidos e analisados no FT Vision reaparecem no FT Manager como tarefas e objetos administráveis.
