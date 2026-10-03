import Link from "next/link";
import MarketingHeader from "@/components/MarketingHeader";
import MarketingFooter from "@/components/MarketingFooter";
import { Users, Building2, House, Calculator, Workflow, Globe2, FileSignature, BarChart3, ShieldCheck } from "lucide-react";

const features = [
  [Users,"CRM + Pipeline","Capture website, Meta, open-house and referral leads, assign them and automate follow-up."],
  [Building2,"Brokerage Back Office","Agent onboarding, transaction review, commission plans, payouts, statements and audit."],
  [Calculator,"Trust + Accounting","Track deposits in trust, 5% GST, approved commission releases and reconciliation."],
  [House,"Transactions","Listing-side and buyer-side files with checklists, lawyers, documents and completion workflow."],
  [Globe2,"Property Websites","Turn a listing into a branded property page with gallery, lead forms, QR code and custom domain."],
  [FileSignature,"E-Sign","Prepare signing workflows and keep completed documents with the transaction file."],
  [Workflow,"Automations","New lead, stage change, open house, no-contact, completion and other workflow triggers."],
  [BarChart3,"Reporting","Pipeline, source ROI, commissions, receivables, agent statements and brokerage operations."],
  [ShieldCheck,"Multi-tenant SaaS","Sell CRM-only, team or full brokerage plans with role and feature access."]
] as const;

export default function Home() {
  return <>
    <MarketingHeader/>
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow">Real estate operating system</div>
          <h1>One platform from first lead to final payout.</h1>
          <p>RealVolt brings CRM, property marketing, transactions, commissions, trust accounting and brokerage operations into one modern workspace.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/signup">Start free</Link>
            <Link className="btn btn-outline" href="/features">Explore features</Link>
          </div>
        </div>
        <div className="hero-card">
          <div className="muted" style={{color:"#94a3b8"}}>Today at your brokerage</div>
          <h2 style={{fontSize:34,margin:"8px 0 0"}}>Everything that needs attention.</h2>
          <div className="hero-card-grid">
            {["8 files need review","4 CRIs ready","$72,430 agent payouts","6 reconciliations"].map(x=><div className="mini-card" key={x}>{x}</div>)}
          </div>
        </div>
      </div>
    </section>
    <section className="section"><div className="container"><h2>Built for individual Realtors, teams and brokerages.</h2><p className="section-lead">Sell just the CRM to an individual agent, shared tools to a team, or unlock the complete brokerage operating system.</p><div className="grid-3">{features.map(([Icon,t,b])=><div className="feature-card" key={t}><div className="feature-icon"><Icon size={21}/></div><h3>{t}</h3><p>{b}</p></div>)}</div></div></section>
    <section className="section" style={{background:"#fff"}}><div className="container hero-grid"><div><div className="eyebrow">Property Page Builder</div><h2>Turn every listing into its own marketing site.</h2><p className="section-lead">Upload photos, pull Realtor branding from the profile, choose a template, publish to a RealVolt URL and later connect a custom property domain.</p><div className="hero-actions"><Link className="btn btn-blue" href="/property-websites">See property websites</Link></div></div><div className="property-preview"><span className="badge">123mainstreet.realvolt.ca</span><h2>123 Main Street</h2><p>Surrey, BC · 4 bed · 3 bath · 2,480 sq ft</p></div></div></section>
    <MarketingFooter/>
  </>;
}
