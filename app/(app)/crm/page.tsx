import PageHeader from "@/components/PageHeader";
import { Search, Plus } from "lucide-react";
export default function CRM(){
 const rows=[["Aman Gill","aman@example.com","Facebook","New"],["Jas Singh","jas@example.com","Property Website","Contacted"],["M. Kaur","mkaur@example.com","Open House","Appointment"]];
 return <div className="page"><PageHeader title="CRM" description="Contacts, leads, follow-up and lead-source tracking." actions={<><button className="btn btn-outline"><Search size={16}/> Search</button><button className="btn btn-primary"><Plus size={16}/> Add lead</button></>}/><div className="stats">{[["Total contacts","1,284"],["New this month","86"],["Appointments","24"],["Hot leads","17"]].map(([a,b])=><div className="stat" key={a}><div className="stat-top">{a}</div><div className="stat-value">{b}</div></div>)}</div><div className="table-wrap"><table><thead><tr><th>Name</th><th>Email</th><th>Source</th><th>Status</th></tr></thead><tbody>{rows.map(r=><tr key={r[0]}><td><b>{r[0]}</b></td><td>{r[1]}</td><td>{r[2]}</td><td><span className="badge">{r[3]}</span></td></tr>)}</tbody></table></div></div>
}
