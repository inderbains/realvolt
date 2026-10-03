import ModuleLanding from "@/components/ModuleLanding";
const cards = [{"title": "Profile", "body": "Photo, bio, phone, email, website and social links."}, {"title": "Branding", "body": "Logo, colours and public profile settings."}, {"title": "Notifications", "body": "Email, task and workflow preferences."}];
export default function Page(){return <ModuleLanding title="Workspace Settings" description="Personal, team and workspace preferences." cards={cards}/>;}
