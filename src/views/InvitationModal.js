import {Dialog} from "primereact/dialog";
import {useState} from "react";
import InvitationForm from "./InvitationForm";
import Success from "./Success";

export default function InvitationModal(props) {
    const [success, setSuccess] = useState(false);

    const closeSuccessHandler = () => {
        props.close();
        setSuccess(false);
    }

    const formHandler = () => {
        setSuccess(true);
    }

    return (
        <div>
            <Dialog showHeader={false} visible={props.showModal} showFooter="false" onHide={closeSuccessHandler}>
                {
                    success ?
                       <Success close={closeSuccessHandler}/>
                       : <InvitationForm success={formHandler} close={props.close}/>
                }
            </Dialog>
        </div>
    );
}