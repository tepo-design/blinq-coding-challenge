import {Dialog} from "primereact/dialog";
import {useState} from "react";
import InviteSuccessView from "./InviteSuccessView";
import InvitationFormView from "./InvitationFormView";

export default function InvitationModal(props) {
    const [invitationSuccess, setInvitationSuccess] = useState(false);

    const exitModalAfterSuccess = () => {
        props.close();
        setInvitationSuccess(false);
    }

    const modalContentHandler = () => {
        setInvitationSuccess(true);
    }

    return (
        <div>
            <Dialog
                showHeader={false}
                visible={props.showModal}
                showFooter={false}
                className="md:w-4 sm:w-8"
            >
                {
                    invitationSuccess ?
                       <InviteSuccessView close={exitModalAfterSuccess}/>
                       : <InvitationFormView success={modalContentHandler} close={props.close}/>
                }
            </Dialog>
        </div>
    );
}