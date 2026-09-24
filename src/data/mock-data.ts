export const vehicles = [
  { id: 'v1', plate: 'RQX6A36', fleet: 'Operação Sudeste', device: '003F017F61', model: 'ADPLUS 2.0', status: 'Em movimento', signal: 'Excelente', driver: 'Lucas Gabriel', speed: 72, lastSeen: 'Agora', sim: '8955•••1842', channels: 4 },
  { id: 'v2', plate: 'RQY7G96', fleet: 'Operação Sudeste', device: '003F017F72', model: 'ADPLUS 2.0', status: 'Em movimento', signal: 'Bom', driver: 'Carolina Dias', speed: 58, lastSeen: 'Agora', sim: '8955•••2911', channels: 3 },
  { id: 'v3', plate: 'QMN6B48', fleet: 'Operação Centro-Oeste', device: '003F017F88', model: 'ADPLUS X', status: 'Marcha lenta', signal: 'Bom', driver: 'Rafael Lima', speed: 0, lastSeen: '1 min', sim: '8955•••8830', channels: 4 },
  { id: 'v4', plate: 'RPK8I62', fleet: 'Operação Sul', device: '003F018A03', model: 'ADPLUS X', status: 'Offline', signal: 'Sem sinal', driver: 'Não identificado', speed: 0, lastSeen: '2 h', sim: '8955•••4432', channels: 3 },
  { id: 'v5', plate: 'FVT2D18', fleet: 'Operação Sudeste', device: '003F018A17', model: 'ADPLUS 2.0', status: 'Em movimento', signal: 'Excelente', driver: 'Mariana Costa', speed: 64, lastSeen: 'Agora', sim: '8955•••6712', channels: 4 },
  { id: 'v6', plate: 'GHK4B91', fleet: 'Operação Nordeste', device: '003F018A24', model: 'ADPLUS X', status: 'Parado', signal: 'Regular', driver: 'André Souza', speed: 0, lastSeen: '4 min', sim: '8955•••2309', channels: 2 },
  { id: 'v7', plate: 'JLM8E44', fleet: 'Operação Sul', device: '003F018B11', model: 'ADPLUS 2.0', status: 'Em movimento', signal: 'Bom', driver: 'Paulo Vieira', speed: 81, lastSeen: 'Agora', sim: '8955•••1204', channels: 4 },
  { id: 'v8', plate: 'KPS3F07', fleet: 'Operação Centro-Oeste', device: '003F018B29', model: 'ADPLUS X', status: 'Marcha lenta', signal: 'Bom', driver: 'Ana Martins', speed: 0, lastSeen: '2 min', sim: '8955•••5644', channels: 3 },
  { id: 'v9', plate: 'NXR5H22', fleet: 'Operação Nordeste', device: '003F018C02', model: 'ADPLUS 2.0', status: 'Offline', signal: 'Sem sinal', driver: 'João Pedro', speed: 0, lastSeen: '7 h', sim: '8955•••9081', channels: 4 },
  { id: 'v10', plate: 'PTA9J55', fleet: 'Operação Sudeste', device: '003F018C31', model: 'ADPLUS X', status: 'Em movimento', signal: 'Excelente', driver: 'Beatriz Rocha', speed: 49, lastSeen: 'Agora', sim: '8955•••7721', channels: 4 },
  { id: 'v11', plate: 'SDF1K73', fleet: 'Operação Sul', device: '003F018D09', model: 'ADPLUS 2.0', status: 'Parado', signal: 'Regular', driver: 'Diego Alves', speed: 0, lastSeen: '8 min', sim: '8955•••3345', channels: 3 },
  { id: 'v12', plate: 'TRC7L10', fleet: 'Operação Centro-Oeste', device: '003F018D28', model: 'ADPLUS X', status: 'Em movimento', signal: 'Bom', driver: 'Fernanda Reis', speed: 69, lastSeen: 'Agora', sim: '8955•••6120', channels: 4 },
];

export const alerts = [
  { id: 'EVT-240921', type: 'Saída de pista', severity: 'Alta', plate: 'RQX6A36', driver: 'Lucas Gabriel', speed: 92, time: 'Hoje, 08:36', location: 'Rod. Anhanguera, km 104', status: 'Novo', evidence: 'Disponível' },
  { id: 'EVT-240920', type: 'Distância insegura', severity: 'Crítica', plate: 'RQY7G96', driver: 'Carolina Dias', speed: 86, time: 'Hoje, 08:14', location: 'Av. Brasil, 2840', status: 'Em análise', evidence: 'Disponível' },
  { id: 'EVT-240919', type: 'Uso de telefone', severity: 'Média', plate: 'FVT2D18', driver: 'Mariana Costa', speed: 54, time: 'Hoje, 07:52', location: 'Marginal Tietê, pista local', status: 'Novo', evidence: 'Processando' },
  { id: 'EVT-240918', type: 'Fadiga', severity: 'Alta', plate: 'JLM8E44', driver: 'Paulo Vieira', speed: 76, time: 'Hoje, 07:31', location: 'BR-116, km 318', status: 'Escalado', evidence: 'Disponível' },
  { id: 'EVT-240917', type: 'Colisão frontal', severity: 'Crítica', plate: 'TRC7L10', driver: 'Fernanda Reis', speed: 67, time: 'Hoje, 06:48', location: 'BR-050, km 122', status: 'Em análise', evidence: 'Disponível' },
  { id: 'EVT-240916', type: 'Cinto de segurança', severity: 'Média', plate: 'PTA9J55', driver: 'Beatriz Rocha', speed: 42, time: 'Ontem, 18:22', location: 'Av. Interlagos, 3100', status: 'Resolvido', evidence: 'Disponível' },
  { id: 'EVT-240915', type: 'Distração', severity: 'Alta', plate: 'GHK4B91', driver: 'André Souza', speed: 71, time: 'Ontem, 17:40', location: 'BR-101, km 84', status: 'Novo', evidence: 'Sem vídeo' },
  { id: 'EVT-240914', type: 'Frenagem brusca', severity: 'Baixa', plate: 'KPS3F07', driver: 'Ana Martins', speed: 38, time: 'Ontem, 16:12', location: 'Av. das Nações, 1200', status: 'Resolvido', evidence: 'Disponível' },
  { id: 'EVT-240913', type: 'Curva acentuada', severity: 'Baixa', plate: 'SDF1K73', driver: 'Diego Alves', speed: 46, time: 'Ontem, 14:54', location: 'RS-118, km 19', status: 'Descartado', evidence: 'Disponível' },
  { id: 'EVT-240912', type: 'Excesso de velocidade', severity: 'Alta', plate: 'RQX6A36', driver: 'Lucas Gabriel', speed: 104, time: 'Ontem, 13:07', location: 'Rod. Bandeirantes, km 68', status: 'Resolvido', evidence: 'Disponível' },
  { id: 'EVT-240911', type: 'Distância insegura', severity: 'Alta', plate: 'FVT2D18', driver: 'Mariana Costa', speed: 82, time: 'Ontem, 11:43', location: 'Rod. Castelo Branco, km 31', status: 'Novo', evidence: 'Aguardando' },
  { id: 'EVT-240910', type: 'Saída de pista', severity: 'Média', plate: 'TRC7L10', driver: 'Fernanda Reis', speed: 74, time: 'Ontem, 10:18', location: 'BR-153, km 502', status: 'Em análise', evidence: 'Disponível' },
];

export const trips = [
  { id: 'T-901', start: '06:40', end: '08:12', duration: '1h 32m', distance: '112,4 km', origin: 'Campinas, SP', destination: 'São Paulo, SP' },
  { id: 'T-902', start: '09:04', end: '10:16', duration: '1h 12m', distance: '78,9 km', origin: 'São Paulo, SP', destination: 'Sorocaba, SP' },
  { id: 'T-903', start: '13:22', end: '14:31', duration: '1h 09m', distance: '76,3 km', origin: 'Sorocaba, SP', destination: 'Campinas, SP' },
];

export const drivers = [
  { id: 'd1', name: 'Lucas Gabriel Santos', cpf: '***.742.***-18', fleet: 'Operação Sudeste', status: 'Ativo', score: 92, distance: '3.842 km', events: 18, updated: 'Hoje, 08:36' },
  { id: 'd2', name: 'Carolina Dias', cpf: '***.118.***-42', fleet: 'Operação Sudeste', status: 'Ativo', score: 94, distance: '3.106 km', events: 12, updated: 'Hoje, 08:14' },
  { id: 'd3', name: 'Rafael Lima', cpf: '***.009.***-55', fleet: 'Operação Centro-Oeste', status: 'Ativo', score: 88, distance: '4.554 km', events: 24, updated: 'Hoje, 07:58' },
  { id: 'd4', name: 'Mariana Costa', cpf: '***.420.***-09', fleet: 'Operação Sudeste', status: 'Ativo', score: 96, distance: '2.987 km', events: 8, updated: 'Hoje, 07:52' },
  { id: 'd5', name: 'André Souza', cpf: '***.337.***-66', fleet: 'Operação Nordeste', status: 'Férias', score: 90, distance: '2.410 km', events: 15, updated: 'Ontem, 17:40' },
  { id: 'd6', name: 'Paulo Vieira', cpf: '***.580.***-21', fleet: 'Operação Sul', status: 'Ativo', score: 86, distance: '4.201 km', events: 27, updated: 'Hoje, 07:31' },
  { id: 'd7', name: 'Ana Martins', cpf: '***.909.***-32', fleet: 'Operação Centro-Oeste', status: 'Ativo', score: 97, distance: '3.120 km', events: 6, updated: 'Ontem, 16:12' },
  { id: 'd8', name: 'Beatriz Rocha', cpf: '***.671.***-04', fleet: 'Operação Sudeste', status: 'Ativo', score: 95, distance: '2.788 km', events: 9, updated: 'Ontem, 18:22' },
  { id: 'd9', name: 'Diego Alves', cpf: '***.224.***-73', fleet: 'Operação Sul', status: 'Inativo', score: 91, distance: '1.802 km', events: 11, updated: 'Ontem, 14:54' },
  { id: 'd10', name: 'Fernanda Reis', cpf: '***.443.***-82', fleet: 'Operação Centro-Oeste', status: 'Ativo', score: 89, distance: '4.018 km', events: 20, updated: 'Hoje, 06:48' },
];

export const fleets = [
  { id: 'f1', name: 'Operação Sudeste', externalId: 'EXT-1001', code: 'SE-01', address: 'São Paulo, SP', groups: 3, vehicles: 5, updated: 'Hoje, 08:02' },
  { id: 'f2', name: 'Operação Centro-Oeste', externalId: 'EXT-1002', code: 'CO-02', address: 'Goiânia, GO', groups: 2, vehicles: 3, updated: 'Ontem, 18:24' },
  { id: 'f3', name: 'Operação Sul', externalId: 'EXT-1003', code: 'SL-03', address: 'Porto Alegre, RS', groups: 2, vehicles: 3, updated: 'Ontem, 16:40' },
  { id: 'f4', name: 'Operação Nordeste', externalId: 'EXT-1004', code: 'NE-04', address: 'Recife, PE', groups: 1, vehicles: 2, updated: '22 set, 10:12' },
];

export const evidence = alerts.slice(0, 10).map((alert, index) => ({
  id: `EVD-${index + 880}`, event: alert.type, plate: alert.plate, driver: alert.driver, size: `${(6.2 + index * .71).toFixed(1)} MB`, duration: `${9 + (index % 4) * 3}s`, time: alert.time, location: alert.location, status: index < 6 ? 'Completo' : index < 8 ? 'Baixando' : index === 8 ? 'Aguardando' : 'Falha', progress: index < 6 ? 100 : index < 8 ? 42 + index * 5 : 0,
}));

export const traffic = vehicles.map((vehicle, index) => ({
  id: vehicle.id, plate: vehicle.plate, device: vehicle.device, fleet: vehicle.fleet, month: `${(.44 + index * .27).toFixed(2)} GB`, day: `${(18 + index * 7)} MB`, allowance: index === 7 ? 'Acima da franquia' : 'Dentro da franquia', treatment: index === 7 ? 'Pendente' : 'Monitorado', owner: index % 2 ? 'Operações' : 'Telemetria', updated: `${index + 2} min atrás`,
}));

export const loginLogs = Array.from({ length: 18 }, (_, index) => ({
  id: `log-${index + 1}`, account: index % 3 ? 'central.trans' : 'operacao.sul', ip: `177.54.${84 + (index % 4)}.***`, time: `23/09/2026 ${String(8 + Math.floor(index / 3)).padStart(2, '0')}:${String((index * 7) % 60).padStart(2, '0')}`, terms: 'v4.2', privacy: 'v3.8', status: index % 4 === 0 ? 'Login anômalo' : 'Normal', detail: index % 4 === 0 ? 'Acesso fora da localização habitual' : 'Autenticação reconhecida',
}));

export const users = [
  { id: 'u1', name: 'Samuel Cruz', status: 'Ativo', role: 'Administrador', email: 's•••••@gmail.com', contact: '+55 11 •••••-1182', fleet: 'Todas as frotas', approver: '—', updated: 'Hoje, 08:06' },
  { id: 'u2', name: 'Central Operacional', status: 'Ativo', role: 'Operador', email: 'c•••••@frotak.com', contact: '+55 11 •••••-4431', fleet: 'Operação Sudeste', approver: 'Samuel Cruz', updated: 'Ontem, 17:23' },
  { id: 'u3', name: 'Auditoria Sul', status: 'Ativo', role: 'Auditor', email: 'a•••••@frotak.com', contact: '+55 51 •••••-2010', fleet: 'Operação Sul', approver: 'Samuel Cruz', updated: '22 set, 14:10' },
  { id: 'u4', name: 'Gestão de Risco', status: 'Inativo', role: 'Analista', email: 'r•••••@frotak.com', contact: '+55 11 •••••-0198', fleet: 'Todas as frotas', approver: 'Samuel Cruz', updated: '20 set, 09:30' },
];

export const scheduledTasks = [
  { id: 'mail-1', name: 'Resumo executivo diário', report: 'Resumo de alarmes do veículo', cycle: 'Diário', time: '07:00', status: 'Ativo', creator: 'Samuel Cruz', created: '01/09/2026' },
  { id: 'mail-2', name: 'Segurança semanal', report: 'Resumo de alarmes do motorista', cycle: 'Semanal', time: '08:30', status: 'Ativo', creator: 'Central Operacional', created: '08/09/2026' },
  { id: 'mail-3', name: 'Disponibilidade mensal', report: 'Veículo online', cycle: 'Mensal', time: '06:00', status: 'Pausado', creator: 'Samuel Cruz', created: '15/08/2026' },
];

export const eventSeries = [
  { name: 'Seg', eventos: 34, criticos: 5 }, { name: 'Ter', eventos: 28, criticos: 3 }, { name: 'Qua', eventos: 41, criticos: 8 }, { name: 'Qui', eventos: 37, criticos: 6 }, { name: 'Sex', eventos: 52, criticos: 11 }, { name: 'Sáb', eventos: 22, criticos: 2 }, { name: 'Dom', eventos: 18, criticos: 2 },
];

export const eventDistribution = [
  { name: 'Distância insegura', value: 31, color: '#dc3f4f' },
  { name: 'Saída de pista', value: 24, color: '#d9850b' },
  { name: 'Distração', value: 18, color: '#6d3dd3' },
  { name: 'Telefone', value: 15, color: '#1686d9' },
  { name: 'Outros', value: 12, color: '#9aa1ad' },
];
