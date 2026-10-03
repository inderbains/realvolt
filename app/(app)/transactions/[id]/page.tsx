import { notFound } from 'next/navigation';
import { PageHeader, StatCard, SectionCard, Badge, Money } from '@/components/ui';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import CommissionCalculator from '@/components/CommissionCalculator';
import { Landmark, ReceiptText, WalletCards, Scale, FileText, CheckCircle2, Send, LockKeyhole } from 'lucide-react';

export default async function Page({params}:{params:Promise<{id:string}>}){
  const {id}=await params;
  let tx:Record<string,unknown>|null=null;
  let deposits:Record<string,unknown>[]=[];
  let calculations:Record<string,unknown>[]=[];
  let releases:Record<string,unknown>[]=[];
  let instructions:Record<string,unknown>[]=[];
  let audit:Record<string,unknown>[]=[];
  try{
    const supabase=await createSupabaseServerClient();
    const result=await supabase.from('transactions').select('*').eq('id',id).maybeSingle();
    tx=result.data as Record<string,unknown>|null;
    if(tx){
      const [a,b,c,d,e]=await Promise.all([
        supabase.from('trust_deposits').select('*').eq('transaction_id',id),
        supabase.from('commission_calculations').select('*').eq('transaction_id',id),
        supabase.from('trust_releases').select('*').eq('transaction_id',id),
        supabase.from('conveyancing_instructions').select('*').eq('transaction_id',id),
        supabase.from('audit_events').select('*').eq('transaction_id',id).order('created_at',{ascending:false}).limit(25),
      ]);
      deposits=(a.data??[]) as Record<string,unknown>[]; calculations=(b.data??[]) as Record<string,unknown>[]; releases=(c.data??[]) as Record<string,unknown>[]; instructions=(d.data??[]) as Record<string,unknown>[]; audit=(e.data??[]) as Record<string,unknown>[];
    }
  }catch{}
  if(!tx) notFound();
  const depTotal=deposits.filter(r=>String(r.status)!=='void').reduce((s,r)=>s+Number(r.amount??0),0);
  const released=releases.filter(r=>String(r.status)==='released').reduce((s,r)=>s+Number(r.total_release_amount??0),0);
  const calc=calculations[0]??{};
  return <><PageHeader title={String(tx.property_address??tx.address??'Transaction')} description={`File ${id} · ${String(tx.status??'open')}`}/>
  <div className="stats-grid"><StatCard label="Trust deposits" value={<Money value={depTotal}/>} icon={Landmark}/><StatCard label="Trust balance" value={<Money value={Math.max(0,depTotal-released)}/>} icon={Scale}/><StatCard label="Commission + GST" value={<Money value={Number(calc.total_commission_with_gst??0)}/>} icon={ReceiptText}/><StatCard label="Agent net payable" value={<Money value={Number(calc.agent_net_payable??0)}/>} icon={WalletCards}/></div>
  <div className="workflow-strip"><span className="active">Deal</span><span className={deposits.length?'done':''}>Trust</span><span className={calculations.length?'done':''}>Commission</span><span className={instructions.length?'done':''}>CRI</span><span>Completion</span><span>Reconcile</span><span>Close</span></div>
  <div className="grid-2"><SectionCard title="Transaction"><div className="card-list"><div className="list-row"><span>Status</span><Badge tone="info">{String(tx.status??'open')}</Badge></div><div className="list-row"><span>Sale price</span><strong><Money value={Number(tx.sale_price??0)}/></strong></div><div className="list-row"><span>Completion</span><strong>{String(tx.completion_date??'—')}</strong></div><div className="list-row"><span>Trust status</span><Badge>{String(tx.trust_status??'not_received')}</Badge></div></div></SectionCard><SectionCard title="Back-office actions"><div className="action-grid"><button className="action-tile"><Landmark size={19}/><span><strong>Verify trust</strong><small>Confirm deposit reached brokerage trust.</small></span></button><button className="action-tile"><ReceiptText size={19}/><span><strong>Approve commission</strong><small>Freeze split, fees and 5% GST snapshot.</small></span></button><button className="action-tile"><Send size={19}/><span><strong>Approve & send CRI</strong><small>Send reviewed instructions to lawyer/notary.</small></span></button><button className="action-tile"><CheckCircle2 size={19}/><span><strong>Record release</strong><small>Record approved commission release from trust.</small></span></button><button className="action-tile"><FileText size={19}/><span><strong>Create statement</strong><small>Agent payout statement and ledger entry.</small></span></button><button className="action-tile"><LockKeyhole size={19}/><span><strong>Close & lock</strong><small>Only after reconciliation and audit review.</small></span></button></div></SectionCard></div>
  <SectionCard title="Commission & trust calculator" description="Planning calculator. Saving/approval should write an immutable commission calculation snapshot."><CommissionCalculator/></SectionCard>
  <div className="grid-2"><SectionCard title="Lawyer / CRI"><div className="table-wrap"><table><thead><tr><th>Version</th><th>Buyer lawyer</th><th>Seller lawyer</th><th>Total commission</th><th>Status</th></tr></thead><tbody>{instructions.length?instructions.map((r,i)=><tr key={String(r.id??i)}><td>v{String(r.version??1)}</td><td>{String(r.buyer_lawyer_email??'—')}</td><td>{String(r.seller_lawyer_email??'—')}</td><td><Money value={Number(r.commission_total??0)}/></td><td><Badge>{String(r.status??'draft')}</Badge></td></tr>):<tr><td colSpan={5} className="muted">No CRI versions yet.</td></tr>}</tbody></table></div></SectionCard><SectionCard title="Audit trail"><div className="card-list">{audit.length?audit.map((r,i)=><div className="list-row" key={String(r.id??i)}><div><strong>{String(r.event_type??'Event')}</strong><small>{String(r.summary??'')} · {String(r.created_at??'')}</small></div></div>):<div className="muted">No audit events yet.</div>}</div></SectionCard></div></>;
}
