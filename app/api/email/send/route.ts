import { NextResponse } from "next/server";
export async function POST(request:Request){const body=await request.json(); if(!process.env.RESEND_API_KEY){return NextResponse.json({ok:false,message:"Email provider is not configured yet.",preview:body},{status:501});} /* TODO: call Resend/Postmark here */ return NextResponse.json({ok:true,queued:true});}
