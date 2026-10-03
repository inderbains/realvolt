export default function PageHeader({ title, description, actions }: { title:string; description:string; actions?:React.ReactNode }) {
  return <div className="page-head"><div><h1>{title}</h1><p>{description}</p></div>{actions ? <div className="toolbar">{actions}</div> : null}</div>;
}
