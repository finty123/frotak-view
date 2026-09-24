import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { eventDistribution, eventSeries } from '@/data/mock-data';

const tooltipStyle = { borderRadius: 10, border: '1px solid var(--color-stroke-soft-200)', boxShadow: 'var(--shadow-regular-md)', fontSize: 12 };

export function EventTrendChart() {
  return <div className="h-64 w-full"><ResponsiveContainer><AreaChart data={eventSeries} margin={{ top: 12, right: 12, left: -20, bottom: 0 }}><defs><linearGradient id="trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="var(--color-primary-base)" stopOpacity={.26} /><stop offset="100%" stopColor="var(--color-primary-base)" stopOpacity={0} /></linearGradient></defs><CartesianGrid stroke="var(--color-stroke-soft-200)" vertical={false} /><XAxis dataKey="name" tick={{ fontSize: 11, fill: 'var(--color-text-soft-400)' }} axisLine={false} tickLine={false} /><YAxis tick={{ fontSize: 10, fill: 'var(--color-text-soft-400)' }} axisLine={false} tickLine={false} /><Tooltip contentStyle={tooltipStyle} /><Area type="monotone" dataKey="eventos" stroke="var(--color-primary-base)" strokeWidth={2.5} fill="url(#trend)" /></AreaChart></ResponsiveContainer></div>;
}

export function SeverityBarChart() {
  return <div className="h-64 w-full"><ResponsiveContainer><BarChart data={eventSeries} margin={{ top: 12, right: 12, left: -20, bottom: 0 }}><CartesianGrid stroke="var(--color-stroke-soft-200)" vertical={false} /><XAxis dataKey="name" tick={{ fontSize: 11, fill: 'var(--color-text-soft-400)' }} axisLine={false} tickLine={false} /><YAxis tick={{ fontSize: 10, fill: 'var(--color-text-soft-400)' }} axisLine={false} tickLine={false} /><Tooltip contentStyle={tooltipStyle} /><Bar dataKey="eventos" fill="var(--color-primary-light)" radius={[5,5,0,0]} /><Bar dataKey="criticos" fill="var(--color-error-base)" radius={[5,5,0,0]} /></BarChart></ResponsiveContainer></div>;
}

export function EventDonutChart() {
  return <div className="flex flex-col items-center gap-3 lg:flex-row"><div className="h-60 w-full lg:w-3/5"><ResponsiveContainer><PieChart><Pie data={eventDistribution} dataKey="value" nameKey="name" innerRadius={58} outerRadius={88} paddingAngle={3}>{eventDistribution.map((item) => <Cell key={item.name} fill={item.color} />)}</Pie><Tooltip contentStyle={tooltipStyle} /></PieChart></ResponsiveContainer></div><div className="w-full space-y-2 lg:w-2/5">{eventDistribution.map((item) => <div key={item.name} className="flex items-center gap-2 text-xs"><span className="size-2 rounded-full" style={{ background: item.color }} /><span className="flex-1 text-text-sub-600">{item.name}</span><strong className="tabular">{item.value}%</strong></div>)}</div></div>;
}
