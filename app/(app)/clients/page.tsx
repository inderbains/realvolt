import ModuleLanding from "@/components/ModuleLanding";
const cards = [{"title": "Client profiles", "body": "Contact information, notes, tags and relationship history."}, {"title": "Properties", "body": "Link listings, searches and transactions to each client."}, {"title": "Communication", "body": "Keep calls, emails, forms and follow-up in one timeline."}];
export default function Page(){return <ModuleLanding title="Clients" description="Your buyer, seller, landlord and tenant relationships." cards={cards}/>;}
