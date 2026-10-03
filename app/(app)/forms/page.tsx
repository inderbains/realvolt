import ModuleLanding from "@/components/ModuleLanding";
const cards = [{"title": "Form builder", "body": "Contact, home evaluation, buyer guide, open house and custom forms."}, {"title": "Embeds", "body": "Generate iframe/script embed codes."}, {"title": "CRM routing", "body": "Create the lead, source and assigned Realtor automatically."}];
export default function Page(){return <ModuleLanding title="Forms" description="Create lead-capture forms for any website." cards={cards}/>;}
