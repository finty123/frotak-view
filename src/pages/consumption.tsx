import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiArrowRightLine, RiBarChartBoxLine, RiDownload2Line, RiPieChartLine, RiRefreshLine, RiRouterLine, RiSignalWifiLine } from '@remixicon/react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardBody, CardHeader } from '@/components/ui/Card';
import { DataTable } from '@/components/ui/DataTable';
import { Field, Input, Select } from '@/components/ui/Fields';
import { FilterBar } from '@/components/ui/FilterBar';
import { PageHeader } from '@/components/ui/PageHeader';
import { StatCard } from '@/components/ui/StatCard';
import { traffic } from '@/data/mock-data';

const dailyTraffic = [
  { day: '17 set', value: 1.2 }, { day: '18 set', value: 1.7 }, { day: '19 set', value: 1.4 },
  { day: '20 set', value: 2.1 }, { day: '21 set', value: 1.9 }, { day: '22 set', value: 2.4 }, { day: '23 set', value: 1.6 },
];

function TrafficBars({ compact = false }: { compact?: boolean }) {
  const maximum = Math.max(...dailyTraffic.map((item) => item.value));
  return <div className={compact ? 'h-48' : 'h-64'}><div className="flex h-full items-end gap-3 border-b border-[#e7e9ee] px-1 pt-8">{dailyTraffic.map((item) => <div key={item.day} className="group flex h-full flex-1 flex-col items-center justify-end gap-2"><div className="relative w-full max-w-14 rounded-t-lg bg-[#dfe7ff] transition group-hover:bg-[#335cff]" style={{ height: `${(item.value / maximum) * 86}%` }}><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-[#515866]">{item.value.toFixed(1)}</span></div><span className="pb-2 text-[10px] text-[#8b92a0]">{item.day}</span></div>)}</div></div>;
}

export function DataOverviewPage() {
  const navigate = useNavigate();
  return <>
    <PageHeader eyebrow="FT Vision • Consumo de dados" title="Visão geral de dados" description="Acompanhe franquia, distribuição e tendência de tráfego dos dispositivos embarcados." actions={<><Button><RiRefreshLine className="size-4" /> Atualizar</Button><Button variant="primary" onClick={() => navigate('/ftv/flow/flow-manage')}><RiBarChartBoxLine className="size-4" /> Ver dispositivos</Button></>} />
    <div className="mb-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard label="Consumo no mês" value="14,82 GB" detail="62% da franquia" trend="+8,4%" icon={RiSignalWifiLine} tone="primary" />
      <StatCard label="Franquia total" value="24,00 GB" detail="12 linhas ativas" trend="Estável" icon={RiRouterLine} tone="success" />
      <StatCard label="Vídeo sob demanda" value="8,31 GB" detail="56% do consumo" trend="+2,1%" icon={RiPieChartLine} tone="warning" />
      <StatCard label="Em atenção" value="1 veículo" detail="Acima da franquia" trend="Ação requerida" icon={RiBarChartBoxLine} tone="critical" />
    </div>
    <div className="grid gap-4 xl:grid-cols-[1.65fr_1fr]">
      <Card><CardHeader title="Consumo diário" description="Gigabytes utilizados nos últimos sete dias" action={<Badge tone="primary">Atualizado agora</Badge>} /><CardBody><TrafficBars /></CardBody></Card>
      <Card><CardHeader title="Distribuição por função" description="Participação no tráfego mensal" /><CardBody className="space-y-5">{[
        ['Vídeo sob demanda', 56, '#335cff'], ['Eventos automáticos', 23, '#6d3dd3'], ['Transmissão ao vivo', 14, '#d9850b'], ['Dados de telemetria', 7, '#1f9d62'],
      ].map(([label, value, color]) => <div key={String(label)}><div className="mb-2 flex justify-between text-xs"><span className="font-medium text-[#515866]">{label}</span><strong>{value}%</strong></div><div className="h-2 overflow-hidden rounded-full bg-[#edf0f4]"><div className="h-full rounded-full" style={{ width: `${value}%`, backgroundColor: String(color) }} /></div></div>)}</CardBody></Card>
      <Card className="xl:col-span-2"><CardHeader title="Veículos com maior consumo" description="Ranking mensal por linha de dados" action={<Button variant="ghost" onClick={() => navigate('/ftv/flow/flow-manage')}>Abrir lista <RiArrowRightLine className="size-4" /></Button>} /><DataTable data={traffic.slice(0, 8)} rowKey="id" initialPageSize={5} columns={[
        { key: 'plate', header: 'Veículo', sortable: true, render: (row) => <strong className="text-[#252932]">{row.plate}</strong> },
        { key: 'device', header: 'Dispositivo', sortable: true }, { key: 'fleet', header: 'Frota', sortable: true },
        { key: 'month', header: 'No mês', sortable: true }, { key: 'day', header: 'Hoje' },
        { key: 'allowance', header: 'Situação', render: (row) => <Badge tone={row.allowance.includes('Acima') ? 'critical' : 'success'}>{row.allowance}</Badge> },
      ]} /></Card>
    </div>
  </>;
}

export function DeviceDataListPage() {
  const navigate = useNavigate();
  const [filtered, setFiltered] = useState(traffic);
  return <>
    <PageHeader eyebrow="FT Vision • Consumo de dados" title="Dispositivos e consumo" description="Consulte a franquia e o tratamento de cada terminal de vídeo." actions={<Button><RiDownload2Line className="size-4" /> Exportar</Button>} />
    <FilterBar resultCount={filtered.length} onApply={() => setFiltered(traffic.slice(0, 8))} onReset={() => setFiltered(traffic)}>
      <Field label="Placa ou dispositivo"><Input placeholder="Digite para buscar" /></Field>
      <Field label="Frota"><Select><option>Todas as frotas</option><option>Operação Sudeste</option><option>Operação Sul</option></Select></Field>
      <Field label="Situação"><Select><option>Todas</option><option>Dentro da franquia</option><option>Acima da franquia</option></Select></Field>
      <Field label="Competência"><Input type="month" defaultValue="2026-09" /></Field>
    </FilterBar>
    <Card><DataTable data={filtered} rowKey="id" selectable onRowClick={() => navigate('/ftv/flow/flow-manage/detail')} columns={[
      { key: 'plate', header: 'Veículo', sortable: true, render: (row) => <div><strong className="block text-[#252932]">{row.plate}</strong><span className="text-[10px] text-[#8b92a0]">{row.device}</span></div> },
      { key: 'fleet', header: 'Frota', sortable: true }, { key: 'month', header: 'Consumo mensal', sortable: true }, { key: 'day', header: 'Hoje', sortable: true },
      { key: 'allowance', header: 'Franquia', render: (row) => <Badge tone={row.allowance.includes('Acima') ? 'critical' : 'success'}>{row.allowance}</Badge> },
      { key: 'treatment', header: 'Tratamento', render: (row) => <Badge tone={row.treatment === 'Pendente' ? 'warning' : 'info'}>{row.treatment}</Badge> },
      { key: 'owner', header: 'Responsável' }, { key: 'updated', header: 'Atualização' },
    ]} /></Card>
  </>;
}

export function TrafficDetailPage() {
  return <>
    <PageHeader back eyebrow="Consumo de dados • RQX6A36" title="Detalhamento de tráfego" description="Composição do consumo, franquia contratada e histórico do dispositivo 003F017F61." actions={<><Button><RiDownload2Line className="size-4" /> Exportar</Button><Button variant="primary">Registrar tratamento</Button></>} />
    <div className="mb-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><StatCard label="Consumo mensal" value="1,92 GB" detail="de 3,00 GB" trend="64%" icon={RiSignalWifiLine} tone="primary" /><StatCard label="Consumo hoje" value="84 MB" detail="Atualizado há 2 min" trend="+12%" icon={RiBarChartBoxLine} tone="warning" /><StatCard label="Projeção" value="2,56 GB" detail="até o fim do mês" trend="Normal" icon={RiPieChartLine} tone="success" /><StatCard label="Saldo" value="1,08 GB" detail="36% disponível" trend="11 dias" icon={RiRouterLine} tone="info" /></div>
    <div className="grid gap-4 xl:grid-cols-[1.6fr_1fr]"><Card><CardHeader title="Histórico diário" description="Consumo total em gigabytes" /><CardBody><TrafficBars /></CardBody></Card><Card><CardHeader title="Composição" description="Funções que consumiram dados" /><CardBody className="space-y-3">{[['Playback remoto','812 MB','42%'],['Eventos enviados','536 MB','28%'],['Visualização ao vivo','384 MB','20%'],['Telemetria','188 MB','10%']].map(([name,size,share]) => <div key={name} className="rounded-xl border border-[#e5e8ee] p-3"><div className="flex items-center justify-between"><span className="text-xs font-semibold">{name}</span><Badge tone="primary">{share}</Badge></div><div className="mt-2 text-xl font-semibold tracking-tight">{size}</div></div>)}</CardBody></Card></div>
    <Card className="mt-4"><CardHeader title="Lançamentos do período" description="Eventos de tráfego consolidados por dia" /><DataTable data={dailyTraffic.map((item, index) => ({ id: `day-${index}`, date: item.day, video: `${Math.round(item.value * 540)} MB`, events: 12 + index * 3, live: `${84 + index * 11} MB`, total: `${item.value.toFixed(1)} GB`, status: index === 3 ? 'Pico identificado' : 'Normal' }))} rowKey="id" initialPageSize={5} columns={[
      { key: 'date', header: 'Data', sortable: true }, { key: 'video', header: 'Playback' }, { key: 'events', header: 'Eventos' }, { key: 'live', header: 'Ao vivo' }, { key: 'total', header: 'Total', sortable: true }, { key: 'status', header: 'Leitura', render: (row) => <Badge tone={row.status === 'Normal' ? 'success' : 'warning'}>{row.status}</Badge> },
    ]} /></Card>
  </>;
}
