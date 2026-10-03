import ModuleLanding from "@/components/ModuleLanding";
const cards = [{"title": "Triggers", "body": "New lead, stage change, open house, no contact, completion and more."}, {"title": "Actions", "body": "Email, task, tag, assign, wait, notify and move stage."}, {"title": "Stop rules", "body": "Stop sequences when a contact replies or converts."}];
export default function Page(){return <ModuleLanding title="Automations" description="Build follow-up and operations workflows." cards={cards}/>;}
