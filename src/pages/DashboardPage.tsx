import { useNavigate } from 'react-router-dom';
import { RiTruckLine, RiUser3Line, RiAlarmWarningLine, RiCameraLensLine, RiArrowRightLine, RiTimeLine, RiSignalTowerLine } from '@remixicon/react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/Button';
import { StatCard } from '@/components/ui/StatCard';
import { Card, CardBody, CardHeader } from '@/components/ui/Card';
import { EventDonutChart, EventTrendChart } from '@/components/domain/Charts';
import { MapCanvas } from '@/components/domain/MapCanvas';
import { Badge } from '@/components/ui/Badge';
import { alerts, vehicles } from '@/data/mock-data';

export function DashboardPage() {
  const navigate = useNavigate();
  return <>
    <PageHeader eyebrow="Centro operacional" title="Visão geral da frota" description="Acompanhe segurança, disponibilidade de câmeras e trabalho pendente em tempo real." actions={<><span className="inline-flex items-center gap-2 text-xs text-text-sub-600"><span className="size-2 rounded-full bg-success-base" /> Atualizado agora</span><Button variant="primary" onClick={() => navigate('/ftv/ft/realtime-monitoring')}>Abrir monitoramento <RiArrowRightLine className="size-4" /></Button></>} />
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard label="Veículos monitorados" value="12" detail="6 em movimento • 3 em marcha lenta" icon={RiTruckLine} tone="primary" trend="8,3%" />
      <StatCard label="Câmeras online" value="38/42" detail="90,4% de disponibilidade" icon={RiCameraLensLine} tone="success" trend="2,1%" />
      <StatCard label="Alertas críticos" value="5" detail="2 aguardando responsável" icon={RiAlarmWarningLine} tone="critical" />
      <StatCard label="Motoristas ativos" value="10" detail="Score médio de segurança: 92" icon={RiUser3Line} tone="route" trend="1,6%" />
    </div>
    <div className="mt-4 grid grid-cols-1 gap-4 2xl:grid-cols-[1.45fr_.75fr]">
      <Card><CardHeader title="Operação ao vivo" description="Posição e disponibilidade dos veículos" action={<Button size="sm" onClick={() => navigate('/ftv/ft/realtime-monitoring')}>Ver mapa completo</Button>} /><CardBody className="p-3"><MapCanvas compact /></CardBody></Card>
      <Card><CardHeader title="Fila prioritária" description="Eventos que exigem atenção" action={<Badge tone="critical">5 críticos</Badge>} /><div className="divide-y divide-stroke-soft-200">{alerts.slice(0, 5).map((alert) => <button key={alert.id} onClick={() => navigate(`/ftv/ft/new-alarm-detail/${alert.id}`)} className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-bg-weak-25"><div className="grid size-9 shrink-0 place-items-center rounded-xl bg-error-lighter text-error-base"><RiAlarmWarningLine className="size-4" /></div><div className="min-w-0 flex-1"><div className="truncate text-xs font-semibold">{alert.type} • {alert.plate}</div><div className="mt-1 truncate text-[10px] text-text-soft-400">{alert.location}</div></div><div className="text-right"><Badge tone={alert.severity === 'Crítica' ? 'critical' : 'warning'}>{alert.severity}</Badge><div className="mt-1 text-[9px] text-text-soft-400">{alert.time}</div></div></button>)}</div></Card>
    </div>
    <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-2">
      <Card><CardHeader title="Tendência de eventos" description="Últimos 7 dias • todas as frotas" action={<Button variant="ghost" size="sm" onClick={() => navigate('/ftv/ft/security-center/analyse')}>Analisar</Button>} /><CardBody><EventTrendChart /></CardBody></Card>
      <Card><CardHeader title="Distribuição por tipo" description="232 eventos no período" /><CardBody><EventDonutChart /></CardBody></Card>
    </div>
    <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
      <Card className="p-4"><div className="flex items-center gap-3"><div className="grid size-10 place-items-center rounded-xl bg-warning-lighter text-warning-base"><RiTimeLine className="size-5" /></div><div><div className="text-xs font-semibold">12 evidências em processamento</div><div className="mt-1 text-[11px] text-text-soft-400">Tempo médio restante: 4 min</div></div></div><Button className="mt-4 w-full" onClick={() => navigate('/ftv/ft/video-list')}>Abrir biblioteca</Button></Card>
      <Card className="p-4"><div className="flex items-center gap-3"><div className="grid size-10 place-items-center rounded-xl bg-information-lighter text-information-base"><RiSignalTowerLine className="size-5" /></div><div><div className="text-xs font-semibold">3 veículos sem transmissão</div><div className="mt-1 text-[11px] text-text-soft-400">Maior indisponibilidade: 7 h</div></div></div><Button className="mt-4 w-full" onClick={() => navigate('/ftv/ft/report-form/car-online')}>Ver transmissão</Button></Card>
      <Card className="p-4"><div className="flex items-center gap-3"><div className="grid size-10 place-items-center rounded-xl bg-feature-lighter text-feature-base"><RiTruckLine className="size-5" /></div><div><div className="text-xs font-semibold">Disponibilidade da frota</div><div className="mt-1 text-[11px] text-text-soft-400">{vehicles.filter(v => v.status !== 'Offline').length} de {vehicles.length} ativos conectados</div></div></div><div className="mt-5 h-2 overflow-hidden rounded-full bg-bg-weak-50"><div className="h-full w-3/4 rounded-full bg-feature-base" /></div></Card>
    </div>
  </>;
}
