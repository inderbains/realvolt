import ModuleLanding from "@/components/ModuleLanding";
const cards = [{"title": "Prepare", "body": "Upload a PDF and place signer fields."}, {"title": "Send", "body": "Sequential or parallel signing workflow."}, {"title": "Archive", "body": "Final signed PDF and completion certificate stored with the file."}];
export default function Page(){return <ModuleLanding title="E-Sign" description="Signature workflow foundation for RealVolt." cards={cards}/>;}
