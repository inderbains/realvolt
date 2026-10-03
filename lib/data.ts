import { createSupabaseServerClient } from '@/lib/supabase/server';

export function displayName(row: Record<string, unknown>, fallback='Lead') {
  const direct = String(row.full_name ?? row.name ?? '').trim();
  const combined = `${String(row.first_name ?? '')} ${String(row.last_name ?? '')}`.trim();
  return direct || combined || fallback;
}

export async function safeCount(table: string) {
  try {
    const supabase = await createSupabaseServerClient();
    const { count, error } = await supabase.from(table).select('*',{count:'exact',head:true});
    return error ? 0 : (count ?? 0);
  } catch { return 0; }
}

export async function safeRows<T extends Record<string, unknown> = Record<string, unknown>>(table: string, limit=50): Promise<T[]> {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.from(table).select('*').limit(limit);
    return error || !data ? [] : data as T[];
  } catch { return []; }
}

export async function safeRowsBy<T extends Record<string, unknown> = Record<string, unknown>>(table: string, column: string, value: string, limit=100): Promise<T[]> {
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.from(table).select('*').eq(column,value).limit(limit);
    return error || !data ? [] : data as T[];
  } catch { return []; }
}

export async function getCurrentProfile() {
  try {
    const supabase = await createSupabaseServerClient();
    const { data: auth } = await supabase.auth.getUser();
    if (!auth.user) return null;
    const { data } = await supabase.from('profiles').select('*').eq('id',auth.user.id).maybeSingle();
    return data ?? { id: auth.user.id, email: auth.user.email, role: 'agent' };
  } catch { return null; }
}

export const demoPipeline = [
  {name:'Jas Singh', stage:'New', source:'Facebook', phone:'604-555-0128'},
  {name:'M. Kaur', stage:'Contacted', source:'Website', phone:'604-555-0174'},
  {name:'Sam Lee', stage:'Appointment', source:'Open House', phone:'778-555-0112'},
  {name:'Priya S.', stage:'Active Client', source:'Referral', phone:'236-555-0188'},
];
