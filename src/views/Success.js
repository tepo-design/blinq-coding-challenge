import {Divider} from "primereact/divider";
import {Button} from "primereact/button";

export default function Success(props) {

    return (
        <div>
            <div>
                All done!
            </div>
            <Divider />
            <div>
                You will be one of the first to experience <br/>
                Broccoli & Co. when we launch.
            </div>
            <div>
                <Button onClick={props.close}>
                    <div className="text-xs">
                        OK
                    </div>
                </Button>
            </div>
        </div>
    );
}