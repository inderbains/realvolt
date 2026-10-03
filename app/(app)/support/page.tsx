import ModuleLanding from "@/components/ModuleLanding";
const cards = [{"title": "Knowledge base", "body": "Brokerage and RealVolt help articles."}, {"title": "Tickets", "body": "Create and track support requests."}, {"title": "AI helpdesk", "body": "Future contextual help for platform and brokerage workflows."}];
export default function Page(){return <ModuleLanding title="Support" description="Help centre and support requests." cards={cards}/>;}
