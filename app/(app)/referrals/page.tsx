import ModuleLanding from "@/components/ModuleLanding";
const cards = [{"title": "Referral record", "body": "Client, agent, fee percentage and status."}, {"title": "Agreement", "body": "Store referral documents and notes."}, {"title": "Payment tracking", "body": "Track expected and received referral amounts."}];
export default function Page(){return <ModuleLanding title="Referrals" description="Track incoming and outgoing referral opportunities." cards={cards}/>;}
