export default function StatCard({ label, value, icon }: { label:string; value:string; icon?:React.ReactNode }) {
  return <div className="stat"><div className="stat-top"><span>{label}</span>{icon}</div><div className="stat-value">{value}</div></div>;
}
