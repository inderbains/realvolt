'use client';
import { useMemo, useState } from 'react';

function money(n:number){return n.toLocaleString('en-CA',{style:'currency',currency:'CAD'});}

export default function CommissionCalculator(){
  const [commission,setCommission]=useState(15000);
  const [deposit,setDeposit]=useState(25000);
  const [agentSplit,setAgentSplit]=useState(70);
  const [monthlyFee,setMonthlyFee]=useState(0);
  const [transactionFee,setTransactionFee]=useState(395);
  const [referral,setReferral]=useState(0);
  const values=useMemo(()=>{
    const gst=commission*0.05;
    const total=commission+gst;
    const agentGross=commission*(agentSplit/100);
    const brokerage=commission-agentGross;
    const net=Math.max(0,agentGross-monthlyFee-transactionFee-referral);
    return {gst,total,agentGross,brokerage,net,trustRemaining:Math.max(0,deposit-total)};
  },[commission,deposit,agentSplit,monthlyFee,transactionFee,referral]);
  return <div className="calculator-grid">
    <div className="form-grid">
      <label className="field"><span>Trust deposit</span><input type="number" value={deposit} onChange={e=>setDeposit(Number(e.target.value)||0)}/></label>
      <label className="field"><span>Gross commission</span><input type="number" value={commission} onChange={e=>setCommission(Number(e.target.value)||0)}/></label>
      <label className="field"><span>Agent split %</span><input type="number" value={agentSplit} onChange={e=>setAgentSplit(Number(e.target.value)||0)}/></label>
      <label className="field"><span>GST</span><input value="5%" readOnly/></label>
      <label className="field"><span>Transaction fee</span><input type="number" value={transactionFee} onChange={e=>setTransactionFee(Number(e.target.value)||0)}/></label>
      <label className="field"><span>Monthly fee deduction</span><input type="number" value={monthlyFee} onChange={e=>setMonthlyFee(Number(e.target.value)||0)}/></label>
      <label className="field"><span>Referral fee</span><input type="number" value={referral} onChange={e=>setReferral(Number(e.target.value)||0)}/></label>
    </div>
    <div className="calc-summary">
      <div><span>Commission</span><strong>{money(commission)}</strong></div>
      <div><span>GST @ 5%</span><strong>{money(values.gst)}</strong></div>
      <div className="total"><span>Commission + GST</span><strong>{money(values.total)}</strong></div>
      <div><span>Agent gross</span><strong>{money(values.agentGross)}</strong></div>
      <div><span>Brokerage portion</span><strong>{money(values.brokerage)}</strong></div>
      <div><span>Agent net after entered deductions</span><strong>{money(values.net)}</strong></div>
      <div className="total"><span>Trust remaining after commission release</span><strong>{money(values.trustRemaining)}</strong></div>
    </div>
  </div>;
}
