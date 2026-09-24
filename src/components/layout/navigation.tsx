import {
  RiDashboardLine, RiMapPinLine, RiShieldCheckLine, RiVideoLine, RiAlarmWarningLine,
  RiBarChartBoxLine, RiFileChartLine, RiMailSendLine, RiPieChartLine, RiSignalTowerLine,
  RiMap2Line, RiSmartphoneLine, RiUserSearchLine, RiOrganizationChart, RiTruckLine,
  RiUser3Line, RiNotification3Line, RiLoginBoxLine, RiUserSettingsLine, RiDownloadCloud2Line,
  RiVolumeUpLine, RiShareForwardLine,
} from '@remixicon/react';
import type { NavItem } from '@/types';

export const visionNavigation: NavItem[] = [
  { label: 'Visão geral', to: '/ftv/ft/dashboard', icon: RiDashboardLine },
  { label: 'Monitoramento', icon: RiMapPinLine, children: [
    { label: 'Veículos em tempo real', to: '/ftv/ft/realtime-monitoring', icon: RiMapPinLine },
    { label: 'Monitoramento de riscos', to: '/ftv/ft/decision-tree', icon: RiShieldCheckLine, badge: '2' },
    { label: 'Histórico de trajeto', to: '/ftv/ft/track-playback', icon: RiMap2Line },
  ] },
  { label: 'Evidências', icon: RiVideoLine, children: [
    { label: 'Reprodução de vídeo', to: '/ftv/playback-device', icon: RiVideoLine },
    { label: 'Biblioteca de vídeo', to: '/ftv/ft/video-list', icon: RiDownloadCloud2Line },
    { label: 'Lista de alertas', to: '/ftv/ft/new-alarm-list', icon: RiAlarmWarningLine, badge: '12' },
  ] },
  { label: 'Segurança e relatórios', icon: RiBarChartBoxLine, children: [
    { label: 'Análises de segurança', to: '/ftv/ft/security-center/analyse', icon: RiBarChartBoxLine },
    { label: 'Riscos de condução', to: '/ftv/ft/report-center/risk-driving-list', icon: RiShieldCheckLine },
    { label: 'Gestão de relatórios', to: '/ftv/ft/report-manage', icon: RiFileChartLine },
    { label: 'E-mail agendado', to: '/ftv/ft/scheduled-tasks/list', icon: RiMailSendLine },
    { label: 'Resumo mensal', to: '/ftv/ft/report-form/monthly-summary', icon: RiPieChartLine },
    { label: 'Status de transmissão', to: '/ftv/ft/report-form/car-online', icon: RiSignalTowerLine },
    { label: 'Última localização', to: '/ftv/ft/report-form/last-state-statistics', icon: RiMapPinLine },
    { label: 'Relatório de posição', to: '/ftv/ft/report-form/location-statistics', icon: RiMap2Line },
  ] },
  { label: 'Consumo de dados', icon: RiSmartphoneLine, children: [
    { label: 'Visão geral', to: '/ftv/flow/flow-preview', icon: RiPieChartLine },
    { label: 'Dispositivos celulares', to: '/ftv/flow/flow-manage', icon: RiSmartphoneLine },
  ] },
  { label: 'Identificação', icon: RiUserSearchLine, children: [
    { label: 'Motorista desconhecido', to: '/ftv/ft/system/unknown-driver-alarm', icon: RiUserSearchLine },
  ] },
  { label: 'Cadastros', icon: RiOrganizationChart, children: [
    { label: 'Frotas', to: '/ftv/ft/fleet-manage', icon: RiOrganizationChart },
    { label: 'Veículos', to: '/ftv/ft/vehicle-manage', icon: RiTruckLine },
    { label: 'Motoristas', to: '/ftv/ft/driver-manage/driver', icon: RiUser3Line },
  ] },
];

export const managerNavigation: NavItem[] = [
  { label: 'Notificação de alerta', to: '/ftm/ft/alarm-notification', icon: RiNotification3Line },
  { label: 'Registro de login', to: '/ftm/login-log', icon: RiLoginBoxLine },
  { label: 'Usuários e privilégios', icon: RiUserSettingsLine, children: [
    { label: 'Usuários', to: '/ftm/user-manage', icon: RiUser3Line },
    { label: 'Adicionar usuário', to: '/ftm/ft/user-manage/add', icon: RiUserSettingsLine },
  ] },
  { label: 'Centro de tarefas', icon: RiDownloadCloud2Line, children: [
    { label: 'Vídeo da evidência', to: '/ftm/ft/evidence-list', icon: RiVideoLine },
    { label: 'Download de áudio', to: '/ftm/task/issue-audio', icon: RiVolumeUpLine },
  ] },
  { label: 'Gestão de embarcadores', icon: RiShareForwardLine, children: [
    { label: 'Regras de compartilhamento', to: '/ftm/ft/shipper-vehicle', icon: RiShareForwardLine },
    { label: 'Criar regra', to: '/ftm/ft/shipper-vehicle/auth', icon: RiOrganizationChart },
  ] },
];
