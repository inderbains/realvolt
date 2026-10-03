import ModuleLanding from "@/components/ModuleLanding";
const cards = [{"title": "Meta", "body": "Facebook/Instagram Lead Ads webhooks and attribution."}, {"title": "Google", "body": "Calendar, Gmail/Workspace, Maps and Drive architecture."}, {"title": "Email", "body": "Transactional email provider for automation and notifications."}];
export default function Page(){return <ModuleLanding title="Integrations" description="Connect the tools Realtors and brokerages already use." cards={cards}/>;}
