import ModuleLanding from "@/components/ModuleLanding";
const cards = [{"title": "New", "body": "Fresh website, Meta and referral leads."}, {"title": "Contacted", "body": "Follow-up started and next action scheduled."}, {"title": "Appointment", "body": "Showing, consultation or call booked."}, {"title": "Active Client", "body": "Ready for listing or buyer transaction."}];
export default function Page(){return <ModuleLanding title="Pipeline" description="Move leads from first inquiry to active client." cards={cards}/>;}
