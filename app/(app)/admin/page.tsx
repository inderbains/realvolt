import ModuleLanding from "@/components/ModuleLanding";
const cards = [{"title": "Workspace", "body": "Brokerage identity, offices and subscription plan."}, {"title": "Permissions", "body": "Roles, feature access and brokerage-wide settings."}, {"title": "Plans", "body": "Enable CRM-only, team or full brokerage modules."}];
export default function Page(){return <ModuleLanding title="Brokerage Admin" description="Brokerage configuration and SaaS controls." cards={cards}/>;}
