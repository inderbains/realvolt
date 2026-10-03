'use client';
import { useState } from 'react';
import { createSupabaseBrowserClient } from '@/lib/supabase/client';
import { ArrowRight, Building2, LockKeyhole, Mail } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setMessage('');
    try {
      const supabase = createSupabaseBrowserClient();
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) return setMessage(error.message);
      window.location.href = '/dashboard';
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Unable to sign in');
    }
  }

  return (
    <main className="auth-page">
      <div className="auth-card">
        <div className="auth-brand"><span className="brand-mark">RV</span><div><strong>RealVolt</strong><span>Brokerage Operating System</span></div></div>
        <div className="auth-copy"><h1>Welcome back</h1><p>Sign in to your brokerage workspace.</p></div>
        <form className="form-stack" onSubmit={login}>
          <label className="field"><span>Email</span><div className="input-icon"><Mail size={17}/><input type="email" value={email} onChange={e=>setEmail(e.target.value)} required /></div></label>
          <label className="field"><span>Password</span><div className="input-icon"><LockKeyhole size={17}/><input type="password" value={password} onChange={e=>setPassword(e.target.value)} required /></div></label>
          {message && <div className="alert error">{message}</div>}
          <button className="btn primary full" type="submit">Sign in <ArrowRight size={16}/></button>
        </form>
        <div className="callout" style={{marginTop:18}}><Building2 size={16}/> Brokerage administrators invite agents and assign commission plans from Agents &amp; Access.</div>
      </div>
    </main>
  );
}
