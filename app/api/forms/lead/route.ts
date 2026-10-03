import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createSupabaseAdmin } from '@/lib/admin';
const Schema=z.object({brokerage_id:z.string().uuid(),first_name:z.string().min(1).max(100),last_name:z.string().max(100).optional().default(''),email:z.string().email().optional().or(z.literal('')),phone:z.string().max(40).optional().default(''),source:z.string().max(80).optional().default('Website Form'),message:z.string().max(3000).optional().default('')});
export async function POST(req:Request){try{const body=Schema.parse(await req.json());const admin=createSupabaseAdmin();const {data,error}=await admin.from('leads').insert({...body,status:'new'}).select('*').single();if(error) return NextResponse.json({error:error.message},{status:400});return NextResponse.json({ok:true,lead:data});}catch(error){return NextResponse.json({error:error instanceof Error?error.message:'Invalid request'},{status:400});}}
