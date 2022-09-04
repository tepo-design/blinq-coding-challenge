import {Button} from "primereact/button";

export default function HomeView() {
    return (
        <div className="flex justify-content-center align-content-center card-container">
            <div className="flex flex-column" >
                <div className="flex-1 flex align-items-center justify-content-center text-5xl font-semibold mb-4">
                    A better way <br/>
                    to enjoy every day.
                </div>
                <div className="flex-1 flex align-items-center justify-content-center text-small mb-4">
                    Be the first to know when we launch.
                </div>
                <div className="flex-1 flex align-items-center justify-content-center">
                    <Button>
                        <div className="text-xs">
                            Request an Invite
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    );
}