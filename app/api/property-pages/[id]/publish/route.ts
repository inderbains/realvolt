import { NextResponse } from "next/server";
export async function POST(_:Request,{params}:{params:Promise<{id:string}>}){const {id}=await params; /* TODO: save published_at/status/domain after database table is added */ return NextResponse.json({ok:true,id,status:"published"});}
