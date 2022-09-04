import {Button} from "primereact/button";
import InvitationForm from "../components/InvitationForm";
import {Divider} from "primereact/divider";

export default function InvitationFormView(props) {
    return (
        <div className="flex flex-column justify-content-center gap-3 mb-2">
                <div className="flex text-lg justify-content-center pt-3  text-white text-700">
                    Request an invite
                </div>
                <Button className="surface-card border-none h-1rem absolute top-0 mt-3 right-0" onClick={props.close}>
                    <i className="pi pi-times" style={{color: "var(--primary-color"}}></i>
                </Button>
            <Divider />
            <InvitationForm inviteSent={props.success} />
        </div>
    );
}