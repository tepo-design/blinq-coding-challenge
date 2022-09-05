export default function Header(props) {
    return (
        <div
            className="flex justify-content-start block bg-white font-bold text-center"
            style={{minHeight: props.height}}
        >
            <div className="flex align-items-center text-primary ml-6">
                BROCCOLI & CO.
            </div>
        </div>
    );
}