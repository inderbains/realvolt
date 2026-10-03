import ModuleLanding from "@/components/ModuleLanding";
const cards = [{"title": "Courses", "body": "Onboarding, compliance and sales training."}, {"title": "Resources", "body": "Scripts, checklists, templates and guides."}, {"title": "Progress", "body": "Track required learning later."}];
export default function Page(){return <ModuleLanding title="Learning & Resources" description="Brokerage training and internal resources." cards={cards}/>;}
