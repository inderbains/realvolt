import ModuleLanding from "@/components/ModuleLanding";
const cards = [{"title": "Transaction files", "body": "Keep contracts, amendments and statements together."}, {"title": "Templates", "body": "Brokerage-approved forms and checklists."}, {"title": "Audit history", "body": "Preserve versions and who changed what."}];
export default function Page(){return <ModuleLanding title="Documents" description="Brokerage and transaction document workspace." cards={cards}/>;}
