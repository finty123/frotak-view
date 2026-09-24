import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiHistoryLine, RiLiveLine, RiVolumeUpLine, RiShareForwardLine, RiStarLine, RiMore2Line, RiRefreshLine, RiPlayFill, RiPauseFill, RiSpeedLine, RiArrowRightSLine, RiEyeLine } from '@remixicon/react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader } from '@/components/ui/Card';
import { MapCanvas } from '@/components/domain/MapCanvas';
import { FleetTree } from '@/components/domain/FleetTree';
import { VideoPanel } from '@/components/domain/VideoPanel';
import { Badge } from '@/components/ui/Badge';
import { FilterBar } from '@/components/ui/FilterBar';
import { Field, Input, Select } from '@/components/ui/Fields';
import { DataTable } from '@/components/ui/DataTable';
import { Drawer, Modal } from '@/components/ui/Overlay';
import { Tabs } from '@/components/ui/Tabs';
import { alerts, trips, vehicles } from '@/data/mock-data';

export function RealtimeMonitoringPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('RQX6A36');
  const [watch, setWatch] = useState<'routine' | 'watch'>('routine');
  const [drawer, setDrawer] = useState<'video' | 'audio' | 'share' | null>(null);
  const vehicle = vehicles.find((item) => item.plate === selected)!;
  return <>
    <PageHeader eyebrow="Monitoramento em tempo real" title="Veículos no mapa" description="Posição, conectividade e ações operacionais sincronizadas." actions={<><Badge tone="success">9 online</Badge><Button><RiRefreshLine className="size-4" /> Atualizar</Button></>} />
    <div className="panel overflow-hidden">
      <div className="grid min-h-[calc(100vh-154px)] grid-cols-1 xl:grid-cols-[330px_minmax(0,1fr)]">
        <div className="border-b border-[#e7e9ee] xl:border-b-0 xl:border-r"><div className="p-3"><Tabs items={[{ value: 'routine', label: 'Veículos de rotina', count: 12 }, { value: 'watch', label: 'Vigilância-chave', count: 3 }]} value={watch} onChange={setWatch} /></div><FleetTree selected={selected} onSelect={setSelected} compact /></div>
        <div className="relative min-w-0 p-3"><MapCanvas selectedPlate={selected} onVehicleSelect={setSelected} /><div className="absolute bottom-7 left-7 right-20 z-20 max-w-xl rounded-2xl border border-white/80 bg-white/95 p-4 shadow-[0_18px_50px_rgba(16,24,40,.18)] backdrop-blur"><div className="flex flex-col gap-3 sm:flex-row sm:items-center"><div className="min-w-0 flex-1"><div className="flex items-center gap-2"><h2 className="text-base font-semibold">{vehicle.plate}</h2><Badge tone={vehicle.status === 'Offline' ? 'neutral' : vehicle.status === 'Marcha lenta' ? 'warning' : 'success'}>{vehicle.status}</Badge></div><p className="mt-1 text-xs text-[#7a8190]">{vehicle.driver} • {vehicle.device} • {vehicle.signal}</p></div><div className="flex gap-1"><Button size="icon" aria-label="Vigilância-chave"><RiStarLine className="size-4" /></Button><Button size="icon" aria-label="Mais ações"><RiMore2Line className="size-4" /></Button></div></div><div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4"><Button size="sm" variant="soft" onClick={() => setDrawer('video')}><RiLiveLine className="size-4" /> Ao vivo</Button><Button size="sm" onClick={() => navigate(`/ftv/ft/track-playback?vehicleId=${vehicle.id}&vehicleNumber=${vehicle.plate}`)}><RiHistoryLine className="size-4" /> Histórico</Button><Button size="sm" onClick={() => setDrawer('audio')}><RiVolumeUpLine className="size-4" /> Áudio</Button><Button size="sm" onClick={() => setDrawer('share')}><RiShareForwardLine className="size-4" /> Compartilhar</Button></div></div></div>
      </div>
    </div>
    <Drawer open={drawer !== null} onOpenChange={(open) => !open && setDrawer(null)} title={drawer === 'video' ? `Vídeo ao vivo • ${selected}` : drawer === 'audio' ? 'Envio de áudio' : 'Compartilhar viagem'} description={drawer === 'video' ? 'Transmissão local simulada • sem conexão com dispositivo' : 'Fluxo visual de demonstração'} width={drawer === 'video' ? 'max-w-3xl' : 'max-w-lg'} footer={<><Button onClick={() => setDrawer(null)}>Cancelar</Button><Button variant="primary">{drawer === 'share' ? 'Criar link simulado' : drawer === 'audio' ? 'Enviar simulação' : 'Fechar'}</Button></>}>
      {drawer === 'video' && <div className="space-y-4"><VideoPanel /><div className="grid grid-cols-3 gap-3">{['ADAS frontal', 'DSM cabine', 'Lateral'].map((label) => <button key={label} className="rounded-xl border border-[#e3e6ec] bg-[#f7f8fa] p-3 text-left text-xs font-semibold hover:border-[#9bb2ff] hover:bg-[#edf2ff]">{label}<span className="mt-1 block text-[10px] font-normal text-[#8b92a0]">Online • 720p</span></button>)}</div></div>}
      {drawer === 'audio' && <div className="space-y-4"><div className="rounded-xl border border-[#dbe5ff] bg-[#f3f6ff] p-4 text-sm text-[#3c56a8]">Esta etapa demonstra a experiência visual; nenhum áudio será transmitido.</div><Field label="Mensagem"><Select><option>Atenção: reduza a velocidade</option><option>Entre em contato com a central</option><option>Pare em local seguro</option></Select></Field><Field label="Volume do dispositivo"><input type="range" className="w-full accent-[#335cff]" /></Field></div>}
      {drawer === 'share' && <div className="space-y-4"><Field label="Validade"><Select><option>2 horas</option><option>8 horas</option><option>24 horas</option></Select></Field><Field label="Destino"><Input placeholder="nome@empresa.com" /></Field><label className="flex items-center gap-2 text-xs"><input type="checkbox" defaultChecked className="size-4 accent-[#335cff]" />Permitir visualização do trajeto em tempo real</label></div>}
    </Drawer>
  </>;
}

export function TrackPlaybackPage() {
  const [playing, setPlaying] = useState(false);
  const [source, setSource] = useState<'obd' | 'gps'>('obd');
  const [selectedTrip, setSelectedTrip] = useState(trips[0].id);
  return <>
    <PageHeader back eyebrow="Monitoramento / Histórico" title="Histórico de trajeto • RQX6A36" description="Correlacione rota, telemetria e vídeo em um único tempo operacional." actions={<Badge tone="route">267,6 km no período</Badge>} />
    <FilterBar resultCount={3}><Field label="Veículo"><Select><option>RQX6A36</option><option>RQY7G96</option></Select></Field><Field label="Data inicial"><Input type="datetime-local" defaultValue="2026-09-23T06:00" /></Field><Field label="Data final"><Input type="datetime-local" defaultValue="2026-09-23T18:00" /></Field><Field label="Fonte"><Select value={source} onChange={(e) => setSource(e.target.value as 'obd' | 'gps')}><option value="obd">Dados OBD</option><option value="gps">Velocidade GPS</option></Select></Field></FilterBar>
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-[330px_minmax(0,1fr)]">
      <Card><CardHeader title="Viagens encontradas" description="23 de setembro • UTC−03" /><div className="divide-y divide-[#eceef2]">{trips.map((trip, index) => <button key={trip.id} onClick={() => setSelectedTrip(trip.id)} className={`w-full p-4 text-left transition hover:bg-[#f7f9fc] ${selectedTrip === trip.id ? 'bg-[#edf2ff]' : ''}`}><div className="flex items-center justify-between"><span className="text-xs font-semibold">Viagem {index + 1}</span><Badge tone={selectedTrip === trip.id ? 'primary' : 'neutral'}>{trip.distance}</Badge></div><div className="mt-2 flex items-center gap-2 text-[11px] text-[#7a8190]"><span>{trip.start}</span><RiArrowRightSLine className="size-4" /><span>{trip.end}</span><span>•</span><span>{trip.duration}</span></div><div className="mt-2 text-[10px] leading-4 text-[#9299a5]">{trip.origin}<br />{trip.destination}</div></button>)}</div></Card>
      <div className="space-y-4"><MapCanvas route selectedPlate="RQX6A36" /><Card><div className="p-4"><div className="flex items-center gap-3"><Button size="icon" variant="primary" onClick={() => setPlaying((value) => !value)} aria-label={playing ? 'Pausar trajeto' : 'Reproduzir trajeto'}>{playing ? <RiPauseFill className="size-5" /> : <RiPlayFill className="size-5" />}</Button><div className="min-w-0 flex-1"><div className="relative h-3 overflow-hidden rounded-full bg-[#e9ecf2]"><div className="h-full w-[38%] rounded-full bg-[#6d3dd3]" /><span className="absolute left-[38%] top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#6d3dd3] shadow" /></div><div className="mt-2 flex justify-between text-[10px] tabular text-[#8b92a0]"><span>06:40:00</span><span>07:14:22</span><span>08:12:18</span></div></div><Button size="sm"><RiSpeedLine className="size-4" /> 1×</Button></div><div className="mt-4 grid grid-cols-2 gap-3 border-t border-[#eceef2] pt-4 sm:grid-cols-4">{[['Velocidade', source === 'obd' ? '72 km/h' : '70 km/h'], ['RPM', '1.840'], ['Ignição', 'Ligada'], ['GPS', '12 satélites']].map(([label, value]) => <div key={label}><div className="text-[10px] text-[#8b92a0]">{label}</div><div className="mt-1 text-xs font-semibold tabular">{value}</div></div>)}</div></div></Card></div>
    </div>
  </>;
}

export function RiskMonitoringPage() {
  const [auto, setAuto] = useState(true);
  const [detail, setDetail] = useState<(typeof alerts)[number] | null>(null);
  const rows = useMemo(() => alerts.map((alert, index) => ({ ...alert, device: vehicles[index % vehicles.length].device, fleet: vehicles[index % vehicles.length].fleet, risk: alert.severity === 'Crítica' ? 5 : alert.severity === 'Alta' ? 3 : 1 })), []);
  return <>
    <PageHeader eyebrow="Monitoramento em tempo real" title="Monitoramento de riscos" description="Fila renovada automaticamente sem perder filtros ou seleção." actions={<><label className="flex items-center gap-2 rounded-lg border border-[#e1e4ea] bg-white px-3 py-2 text-xs font-semibold"><input type="checkbox" checked={auto} onChange={(event) => setAuto(event.target.checked)} className="size-4 accent-[#335cff]" />Atualização automática</label><Select className="w-auto"><option>60 s</option><option>30 s</option></Select></>} />
    <FilterBar resultCount={rows.length}><Field label="Placa"><Input placeholder="Ex.: RQX6A36" /></Field><Field label="Motorista"><Input placeholder="Nome do motorista" /></Field><Field label="Frota"><Select><option>Todas as frotas</option><option>Operação Sudeste</option></Select></Field><Field label="Nível de risco"><Select><option>Todos</option><option>Crítico</option><option>Alto</option></Select></Field></FilterBar>
    <Card><CardHeader title="Riscos ativos e recentes" description={`${rows.length} ocorrências • última atualização agora`} action={<Button size="sm"><RiRefreshLine className="size-4" /> Atualizar</Button>} /><DataTable data={rows} rowKey="id" initialPageSize={8} onRowClick={setDetail} columns={[{ key: 'plate', header: 'Placa', sortable: true, render: (r) => <span className="font-semibold text-[#335cff]">{r.plate}</span> }, { key: 'device', header: 'Dispositivo', width: '130px' }, { key: 'fleet', header: 'Frota', sortable: true, width: '180px' }, { key: 'driver', header: 'Motorista', width: '160px' }, { key: 'type', header: 'Risco', width: '170px' }, { key: 'severity', header: 'Severidade', render: (r) => <Badge tone={r.severity === 'Crítica' ? 'critical' : r.severity === 'Alta' ? 'warning' : 'info'}>{r.severity}</Badge> }, { key: 'risk', header: 'Score', sortable: true, render: (r) => <strong className="tabular">{r.risk}</strong> }, { key: 'time', header: 'Ocorrido em', width: '130px' }]} /></Card>
    <Modal open={detail !== null} onOpenChange={(open) => !open && setDetail(null)} title={detail ? `${detail.type} • ${detail.plate}` : 'Detalhe do risco'} description="Expansão operacional da ocorrência" wide footer={<><Button onClick={() => setDetail(null)}>Fechar</Button><Button variant="primary"><RiEyeLine className="size-4" /> Abrir evento</Button></>}>{detail && <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">{[['Motorista', detail.driver], ['Velocidade', `${detail.speed} km/h`], ['Severidade', detail.severity], ['Horário', detail.time], ['Local', detail.location], ['Evidência', detail.evidence]].map(([label, value]) => <div key={label} className={label === 'Local' ? 'col-span-2' : ''}><div className="text-[10px] font-bold uppercase tracking-wide text-[#8b92a0]">{label}</div><div className="mt-1 text-sm font-semibold">{value}</div></div>)}</div>}</Modal>
  </>;
}
