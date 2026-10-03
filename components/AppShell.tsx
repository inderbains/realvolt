'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  LayoutDashboard, Users, KanbanSquare, ContactRound, House, FolderKanban,
  MessagesSquare, Share2, WalletCards, Building2, Calculator, UserRoundCog,
  FileText, ClipboardList, BarChart3, Workflow, Plug, GraduationCap, LifeBuoy,
  Settings, Search, Bell, Menu, X, FileSignature, ShieldCheck
} from 'lucide-react';

const groups = [
  { label: 'Workspace', items: [
    ['Dashboard','/dashboard',LayoutDashboard], ['CRM','/crm',Users], ['Pipeline','/pipeline',KanbanSquare],
    ['Clients','/clients',ContactRound], ['Open Houses','/open-houses',House], ['Transactions','/transactions',FolderKanban],
  ]},
  { label: 'Collaboration', items: [
    ['Community','/community',MessagesSquare], ['Referrals','/referrals',Share2], ['My Earnings','/earnings',WalletCards],
  ]},
  { label: 'Brokerage', items: [
    ['Back Office','/back-office',Building2], ['Trust & Accounting','/accounting',Calculator], ['Agents & Access','/agents',UserRoundCog],
    ['E-Sign','/esign',FileSignature], ['Documents','/documents',FileText], ['Forms','/forms',ClipboardList], ['Reports','/reports',BarChart3],
    ['Automations','/automations',Workflow], ['Integrations','/integrations',Plug], ['Brokerage Admin','/admin',ShieldCheck],
  ]},
  { label: 'Help', items: [['Learning','/learning',GraduationCap], ['Support','/support',LifeBuoy], ['Settings','/settings',Settings]]},
] as const;

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open,setOpen] = useState(false);
  return <div className="app-shell">
    <aside className={`sidebar ${open?'open':''}`}>
      <div className="sidebar-head"><Link href="/dashboard" className="brand"><span className="brand-mark">RV</span><span><strong>RealVolt</strong><small>Brokerage OS</small></span></Link><button className="icon-btn mobile-only" onClick={()=>setOpen(false)}><X size={20}/></button></div>
      <nav className="nav-scroll">{groups.map(group=><div className="nav-group" key={group.label}><div className="nav-label">{group.label}</div>{group.items.map(([label,href,Icon])=>{const active=pathname===href||pathname.startsWith(href+'/');return <Link key={href} href={href} className={`nav-link ${active?'active':''}`} onClick={()=>setOpen(false)}><Icon size={18}/><span>{label}</span></Link>})}</div>)}</nav>
    </aside>
    <div className="content-shell">
      <header className="topbar"><button className="icon-btn mobile-only" onClick={()=>setOpen(true)}><Menu size={21}/></button><div className="search-box"><Search size={17}/><input placeholder="Search clients, deals, agents, files…" /></div><div className="top-actions"><button className="icon-btn"><Bell size={19}/></button><div className="role-pill"><span className="status-dot"/>Brokerage workspace</div></div></header>
      <main className="page-wrap">{children}</main>
    </div>
    {open && <div className="backdrop" onClick={()=>setOpen(false)}/>} 
  </div>;
}
