"use client";
import Link from "next/link";
import { useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export default function LoginPage(){
  const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [msg,setMsg]=useState("");
  async function submit(e:React.FormEvent){e.preventDefault(); setMsg(""); try{const supabase=createSupabaseBrowserClient(); const {error}=await supabase.auth.signInWithPassword({email,password}); if(error){setMsg(error.message);return;} window.location.href="/dashboard";}catch(err){setMsg(err instanceof Error?err.message:"Unable to log in");}}
  return <div className="auth-wrap"><div className="auth-side"><div className="brand"><span className="brand-badge">RV</span>RealVolt</div><h1>Your real estate business, connected.</h1><p style={{color:"#94a3b8",fontSize:18,lineHeight:1.7}}>CRM, marketing, transactions, accounting and brokerage operations in one workspace.</p></div><div className="auth-panel"><form className="auth-card" onSubmit={submit}><h2>Welcome back</h2><p className="muted">Log in to your RealVolt workspace.</p><div className="field"><label>Email</label><input className="input" type="email" value={email} onChange={e=>setEmail(e.target.value)} required/></div><div className="field"><label>Password</label><input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} required/></div>{msg?<p className="muted">{msg}</p>:null}<button className="btn btn-primary" style={{width:"100%"}}>Log in</button><p className="muted">New to RealVolt? <Link href="/signup"><b>Create account</b></Link></p></form></div></div>
}
