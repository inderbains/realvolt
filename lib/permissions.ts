import { createSupabaseServerClient } from '@/lib/supabase/server';
const STAFF=new Set(['owner','admin','broker','managing_broker','back_office','backoffice','accountant','office_admin']);
export async function requireBrokerStaff(){
  const supabase=await createSupabaseServerClient();
  const {data:{user}}=await supabase.auth.getUser();
  if(!user) throw new Error('Unauthorized');
  const {data:profile}=await supabase.from('profiles').select('*').eq('id',user.id).maybeSingle();
  const role=String(profile?.role??'').toLowerCase();
  if(!STAFF.has(role)&&!profile?.can_view_all_crm) throw new Error('Forbidden');
  return {user,profile};
}
