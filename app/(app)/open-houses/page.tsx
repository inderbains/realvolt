import ModuleLanding from "@/components/ModuleLanding";
const cards = [{"title": "Event builder", "body": "Date, property, hosts, signage and QR registration."}, {"title": "Visitor check-in", "body": "Mobile-friendly guest registration."}, {"title": "Lead follow-up", "body": "Push visitors to CRM and start an automation."}];
export default function Page(){return <ModuleLanding title="Open Houses" description="Create events, capture visitors and automate follow-up." cards={cards}/>;}
