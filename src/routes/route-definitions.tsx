import type { RouteDefinition } from '@/types';
import { DashboardPage } from '@/pages/DashboardPage';
import { RealtimeMonitoringPage, RiskMonitoringPage, TrackPlaybackPage } from '@/pages/monitoring';
import { AlarmDetailPage, AlertListPage, PlaybackDevicePage, VideoLibraryPage } from '@/pages/evidence';
import { LastLocationPage, MonthlySummaryPage, PositionReportPage, ReportManagePage, RiskDrivingListPage, ScheduledTaskCreatePage, ScheduledTasksPage, SecurityAnalysisPage, TransmissionStatusPage } from '@/pages/reports';
import { DataOverviewPage, DeviceDataListPage, TrafficDetailPage } from '@/pages/consumption';
import { AddDriverPage, AddFleetPage, DriverManagePage, FleetPage, UnknownDriverPage, VehicleDetailPage, VehicleManagePage } from '@/pages/fleet';
import { AlertNotificationPage, AudioTasksPage, EvidenceDetailPage, EvidenceTaskPage, LoginLogPage, SharingRuleCreatePage, SharingRulesPage, UserAddPage, UserManagePage } from '@/pages/manager';

export const routeDefinitions: RouteDefinition[] = [
  { path: '/ftv/ft/dashboard', title: 'Dashboard', group: 'Visão geral', product: 'vision', element: DashboardPage },
  { path: '/ftv/ft/realtime-monitoring', title: 'Monitoramento em tempo real', group: 'Monitoramento', product: 'vision', element: RealtimeMonitoringPage },
  { path: '/ftv/ft/decision-tree', title: 'Monitoramento de riscos', group: 'Monitoramento', product: 'vision', element: RiskMonitoringPage },
  { path: '/ftv/ft/track-playback', title: 'Histórico de trajeto', group: 'Monitoramento', product: 'vision', element: TrackPlaybackPage },
  { path: '/ftv/playback-device', title: 'Reprodução de vídeo', group: 'Evidências', product: 'vision', element: PlaybackDevicePage },
  { path: '/ftv/ft/video-list', title: 'Biblioteca de vídeo', group: 'Evidências', product: 'vision', element: VideoLibraryPage },
  { path: '/ftv/ft/new-alarm-list', title: 'Lista de alertas', group: 'Evidências', product: 'vision', element: AlertListPage },
  { path: '/ftv/ft/new-alarm-detail/:id', title: 'Detalhe do alerta', group: 'Evidências', product: 'vision', element: AlarmDetailPage },
  { path: '/ftv/ft/security-center/analyse', title: 'Análises de segurança', group: 'Segurança e relatórios', product: 'vision', element: SecurityAnalysisPage },
  { path: '/ftv/ft/report-center/risk-driving-list', title: 'Riscos de condução', group: 'Segurança e relatórios', product: 'vision', element: RiskDrivingListPage },
  { path: '/ftv/ft/report-manage', title: 'Gestão de relatórios', group: 'Segurança e relatórios', product: 'vision', element: ReportManagePage },
  { path: '/ftv/ft/scheduled-tasks/list', title: 'E-mails agendados', group: 'Segurança e relatórios', product: 'vision', element: ScheduledTasksPage },
  { path: '/ftv/ft/scheduled-tasks/create', title: 'Criar e-mail agendado', group: 'Segurança e relatórios', product: 'vision', element: ScheduledTaskCreatePage },
  { path: '/ftv/ft/report-form/monthly-summary', title: 'Resumo mensal', group: 'Segurança e relatórios', product: 'vision', element: MonthlySummaryPage },
  { path: '/ftv/ft/report-form/car-online', title: 'Status de transmissão', group: 'Segurança e relatórios', product: 'vision', element: TransmissionStatusPage },
  { path: '/ftv/ft/report-form/last-state-statistics', title: 'Última localização', group: 'Segurança e relatórios', product: 'vision', element: LastLocationPage },
  { path: '/ftv/ft/report-form/location-statistics', title: 'Relatório de posição', group: 'Segurança e relatórios', product: 'vision', element: PositionReportPage },
  { path: '/ftv/flow/flow-preview', title: 'Visão geral de dados', group: 'Consumo de dados', product: 'vision', element: DataOverviewPage },
  { path: '/ftv/flow/flow-manage', title: 'Dispositivos e consumo', group: 'Consumo de dados', product: 'vision', element: DeviceDataListPage },
  { path: '/ftv/flow/flow-manage/detail', title: 'Detalhamento de tráfego', group: 'Consumo de dados', product: 'vision', element: TrafficDetailPage },
  { path: '/ftv/ft/system/unknown-driver-alarm', title: 'Motoristas não identificados', group: 'Identificação', product: 'vision', element: UnknownDriverPage },
  { path: '/ftv/ft/fleet-manage', title: 'Gestão de frotas', group: 'Cadastros', product: 'vision', element: FleetPage },
  { path: '/ftv/ft/fleet-manage/add-fleet', title: 'Adicionar frota', group: 'Cadastros', product: 'vision', element: AddFleetPage },
  { path: '/ftv/ft/vehicle-manage', title: 'Veículos e dispositivos', group: 'Cadastros', product: 'vision', element: VehicleManagePage },
  { path: '/ftv/ft/vehicle-manage/detail', title: 'Detalhes do veículo', group: 'Cadastros', product: 'vision', element: VehicleDetailPage },
  { path: '/ftv/ft/driver-manage/driver', title: 'Motoristas', group: 'Cadastros', product: 'vision', element: DriverManagePage },
  { path: '/ftv/ft/driver-manage/driver/add-driver', title: 'Adicionar motorista', group: 'Cadastros', product: 'vision', element: AddDriverPage },
  { path: '/ftm/ft/alarm-notification', title: 'Notificações de alerta', group: 'Configurações', product: 'manager', element: AlertNotificationPage },
  { path: '/ftm/login-log', title: 'Logs de acesso', group: 'Auditoria', product: 'manager', element: LoginLogPage },
  { path: '/ftm/user-manage', title: 'Usuários e acessos', group: 'Administração', product: 'manager', element: UserManagePage },
  { path: '/ftm/ft/user-manage/add', title: 'Adicionar usuário', group: 'Administração', product: 'manager', element: UserAddPage },
  { path: '/ftm/ft/evidence-list', title: 'Central de evidências', group: 'Tarefas', product: 'manager', element: EvidenceTaskPage },
  { path: '/ftm/ft/evidence/detail', title: 'Detalhe da evidência', group: 'Tarefas', product: 'manager', element: EvidenceDetailPage },
  { path: '/ftm/task/issue-audio', title: 'Envio de áudio', group: 'Tarefas', product: 'manager', element: AudioTasksPage },
  { path: '/ftm/ft/shipper-vehicle', title: 'Regras de compartilhamento', group: 'Embarcadores', product: 'manager', element: SharingRulesPage },
  { path: '/ftm/ft/shipper-vehicle/auth', title: 'Criar regra de acesso', group: 'Embarcadores', product: 'manager', element: SharingRuleCreatePage },
];
