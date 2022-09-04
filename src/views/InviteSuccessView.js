import {Divider} from "primereact/divider";
import {Button} from "primereact/button";

export default function InviteSuccessView(props) {
    return (
        <div className="flex flex-column gap-2">
            <div className="flex font-italic justify-content-center pt-1">
                    All done!
            </div>
            <Divider />
            <div className="text-sm text-center mb-3">
                You will be one of the first to experience <br/>
                Broccoli & Co when we launch.
            </div>
            <div className="flex justify-content-center">
                <Button onClick={props.close}>
                    <div className="text-xs">
                        OK
                    </div>
                </Button>
            </div>
        </div>
    );
}