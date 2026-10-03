import ModuleLanding from "@/components/ModuleLanding";
const cards = [{"title": "Agent updates", "body": "Share wins, listings, questions and market notes."}, {"title": "Recognition", "body": "Celebrate milestones and brokerage activity."}, {"title": "Permissions", "body": "Brokerage controls what can be shared."}];
export default function Page(){return <ModuleLanding title="Community" description="Optional brokerage social feed for internal collaboration." cards={cards}/>;}
