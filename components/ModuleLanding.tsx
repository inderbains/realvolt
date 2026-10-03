import PageHeader from "./PageHeader";
export default function ModuleLanding({ title, description, cards }: { title:string; description:string; cards:{title:string;body:string}[] }) {
  return <div className="page"><PageHeader title={title} description={description}/><div className="module-grid">{cards.map(c=><div className="module-card" key={c.title}><h3>{c.title}</h3><p>{c.body}</p></div>)}</div></div>;
}
