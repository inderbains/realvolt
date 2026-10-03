import ModuleLanding from "@/components/ModuleLanding";
const cards = [{"title": "Sales pipeline", "body": "Lead conversion and stage performance."}, {"title": "Commission reporting", "body": "Gross commission, splits, deductions and payouts."}, {"title": "Operations", "body": "Missing documents, upcoming completions and reconciliation queues."}];
export default function Page(){return <ModuleLanding title="Reports" description="Sales, lead-source, transaction and brokerage reporting." cards={cards}/>;}
