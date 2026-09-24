# Lacunas e validações pendentes

## Regra

Os itens abaixo não invalidam o mapeamento. Eles delimitam o que não pôde ser comprovado sem alterar a conta produtiva ou sem existir dado adequado na amostra. No FrotaK View, cada item deve virar uma decisão de produto, experimento de homologação ou critério de aceitação marcado como `product validation required`.

## Prioridade alta — fluxos centrais ainda não percorridos

1. **Vídeo em tempo real:** composição multicanal, controles, qualidade, latência, áudio, fullscreen, falha e consumo.
2. **Reprodução com dados:** significado dos três controles flutuantes, disponibilidade por canal, timeline e erros reais.
3. **Validação/rejeição de alerta:** campos, justificativa, classificação, reversão, lote e auditoria.
4. **Compartilhamento:** destinatário, expiração, escopo, revogação, proteção e registro de acesso.
5. **Envio de áudio:** origem/formato, seleção de dispositivo, confirmação, progresso, falha e comprovação de entrega.
6. **Permissões reais:** matriz das etapas de função e autorização de dados do cadastro de usuário.
7. **Regras de compartilhamento:** resultado salvo, vigência, edição, revogação, duplicidade e conflito.

## Prioridade média — estados populados ausentes

- Biblioteca de vídeo em baixando, aguardando e falha.
- Reprodução de vídeo com gravação disponível.
- Lista de risco de condução com motorista/veículo populado.
- E-mails agendados existentes e histórico de execução.
- Última localização e relatório de posição com registros.
- Fila de motorista desconhecido antes/depois do tratamento.
- FT Manager: notificações personalizadas, áudio, compartilhamentos e respectivos erros.
- Alert detail/evidence detail com todos os canais disponíveis.

## Ações persistentes não confirmadas

- criar, editar, salvar, excluir ou transferir cadastros;
- favoritar veículo/alerta;
- validar/rejeitar evento e vincular motorista;
- marcar notificações como lidas;
- ativar/desativar usuário e revelar dados mascarados;
- gerar/exportar relatório ou evidência;
- enviar e-mail/áudio;
- criar compartilhamento ou regra;
- baixar executável/arquivo e encerrar sessão.

## Semântica visual/textual ambígua

- Três ícones flutuantes na Reprodução de vídeo sem rótulo disponível no vazio.
- Botões `Desativar` e `Entrar` na prévia de relatório, provavelmente tradução inconsistente.
- `Falhar (por exemplo, experimentos)` em tarefas, rótulo que deve virar simplesmente `Falha` com motivo.
- `Desembarque com exceção` no login, que deve ser substituído por `Login anômalo` ou termo aprovado.
- CH2 habilitado no detalhe do veículo sem papel textual visível.
- Seis atalhos por ícone no detalhe da evidência sem todos os nomes/efeitos confirmados.

## Validações de regra de negócio

- Fórmula exata, versão, pesos e arredondamento do score de segurança.
- Critério de veículo online/offline, transmissão, GPS e frescor.
- Franquia, tratamento e categorias do consumo de dados.
- Retenção/expiração de vídeo, evidência, downloads, notificações e logs.
- Critérios de exclusão de frota, veículo, motorista, usuário e tarefa.
- Unicidade e validação de placa, serial, SIM, CPF, iButton e IDs externos.
- Regras de canal ADAS/DSM e compatibilidade por modelo de dispositivo.
- Timezone usado em consulta, reprodução, agendamento, auditoria e relatórios.
- Escopo de seleção em lote: página corrente, todos os resultados ou itens carregados.

## Roteiro seguro de homologação

1. Usar tenant, frota, dispositivos e destinatários descartáveis.
2. Registrar estado anterior e posterior.
3. Executar uma mutação por vez com conta de privilégio conhecido.
4. Capturar tela, rede/auditoria permitida, estado de tarefa e retorno à origem.
5. Repetir sucesso, erro validável, cancelamento, permissão negada e retry.
6. Atualizar `07-matriz-de-controles.md`, `12-matriz-mestra-de-superficies.csv` e o capítulo da área.
7. Remover `product validation required` somente com evidência reproduzível.

## Critério de fechamento

Uma lacuna só é fechada quando o comportamento, pré-condições, consequência, estados, permissão, auditoria, retorno e falha estiverem documentados. Ver apenas o rótulo de um botão não comprova seu efeito final.

