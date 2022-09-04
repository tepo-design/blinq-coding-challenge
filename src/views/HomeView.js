import {Button} from "primereact/button";
import {useState} from "react";
import InvitationModal from "./InvitationModal";

export default function HomeView() {
    const [displayForm, setDisplayForm] = useState(false);
    const openInviteModal = () => setDisplayForm(true);
    const closeInviteModal = () => setDisplayForm(false);

    return (
        <div className="flex flex-1 justify-content-center align-items-center card-container"
            style={{height: "auto"}}
        >
            <div className="card" >
                <div className="text-5xl text-700 font-semibold mb-4">
                    A better way <br/>
                    to enjoy every day.
                </div>
                <div className="text-small text-200 mb-4">
                    Be the first to know when we launch.
                </div>
                <Button onClick={openInviteModal} className="bg-blue-100 border-none">
                    <div className="text-xs text-50">
                        Request an Invite
                    </div>
                </Button>
                <InvitationModal showModal={displayForm} close={closeInviteModal}/>
            </div>
        </div>
    );
}