import type { LucideIcon } from 'lucide-react';

export function PageHeader({ title, description, action }: { title: string; description?: string; action?: React.ReactNode }) {
  return <div className="page-header"><div><h1>{title}</h1>{description && <p>{description}</p>}</div>{action && <div className="page-actions">{action}</div>}</div>;
}

export function StatCard({ label, value, icon: Icon, hint }: { label: string; value: React.ReactNode; icon: LucideIcon; hint?: string }) {
  return <div className="stat-card"><span className="stat-icon"><Icon size={20}/></span><div><span>{label}</span><strong>{value}</strong>{hint && <small>{hint}</small>}</div></div>;
}

export function SectionCard({ title, description, action, children }: { title: string; description?: string; action?: React.ReactNode; children: React.ReactNode }) {
  return <section className="section-card"><div className="section-head"><div><h2>{title}</h2>{description && <p>{description}</p>}</div>{action}</div>{children}</section>;
}

export function Badge({ children, tone='neutral' }: { children: React.ReactNode; tone?: 'neutral'|'success'|'warning'|'danger'|'info' }) {
  return <span className={`badge ${tone === 'neutral' ? '' : tone}`}>{children}</span>;
}

export function EmptyState({ title, text }: { title: string; text: string }) {
  return <div className="empty-state"><strong>{title}</strong><p>{text}</p></div>;
}

export function Money({ value }: { value: number | string | null | undefined }) {
  const n = Number(value ?? 0);
  return <span className="money">{n.toLocaleString('en-CA',{style:'currency',currency:'CAD'})}</span>;
}
