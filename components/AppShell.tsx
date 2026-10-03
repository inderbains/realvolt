import Link from "next/link";
import {
  LayoutDashboard, Users, KanbanSquare, Contact, House, FolderKanban, Megaphone,
  Handshake, WalletCards, Building2, Calculator, UserPlus, FileText, ClipboardList,
  BarChart3, Workflow, Plug, GraduationCap, LifeBuoy, Settings, Search, Bell, PenTool,
  Globe2, ShieldCheck
} from "lucide-react";

const nav = [
  ["Dashboard","/dashboard",LayoutDashboard],
  ["CRM","/crm",Users],
  ["Pipeline","/pipeline",KanbanSquare],
  ["Clients","/clients",Contact],
  ["Open Houses","/open-houses",House],
  ["Transactions","/transactions",FolderKanban],
  ["Property Pages","/property-pages",Globe2],
  ["Community","/community",Megaphone],
  ["Referrals","/referrals",Handshake],
  ["My Earnings","/earnings",WalletCards],
  ["Documents","/documents",FileText],
  ["E-Sign","/esign",PenTool],
  ["Forms","/forms",ClipboardList],
  ["Automations","/automations",Workflow],
  ["Integrations","/integrations",Plug],
  ["Reports","/reports",BarChart3],
  ["Learning","/learning",GraduationCap],
  ["Support","/support",LifeBuoy],
  ["Settings","/settings",Settings]
] as const;

const brokerage = [
  ["Back Office","/back-office",Building2],
  ["Trust & Accounting","/accounting",Calculator],
  ["Agents & Access","/agents",UserPlus],
  ["Brokerage Admin","/admin",ShieldCheck]
] as const;

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="shell">
      <aside className="sidebar">
        <Link href="/dashboard" className="side-brand">
          <span className="brand-badge">RV</span>
          <span>RealVolt<small>Real Estate OS</small></span>
        </Link>
        <div className="side-heading">Workspace</div>
        <nav className="side-nav">
          {nav.map(([label,href,Icon]) => <Link key={href} href={href}><Icon size={18}/><span>{label}</span></Link>)}
        </nav>
        <div className="side-heading">Brokerage only</div>
        <nav className="side-nav">
          {brokerage.map(([label,href,Icon]) => <Link key={href} href={href}><Icon size={18}/><span>{label}</span></Link>)}
        </nav>
      </aside>
      <main className="main">
        <header className="topbar">
          <div className="top-search"><Search size={16}/> Search clients, properties, transactions…</div>
          <div className="top-actions"><span className="badge">Brokerage workspace</span><button className="btn"><Bell size={17}/></button><div className="avatar">RV</div></div>
        </header>
        {children}
      </main>
    </div>
  );
}
