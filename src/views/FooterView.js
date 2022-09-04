export default function FooterView(props) {
    return (
        <div className="flex justify-content-center block bg-white font-bold text-center"
             style={{minHeight: props.height}}
        >
            <div className="flex align-items-center text-primary text-xs font-light">
                Made with love in Melbourne.<br/>
                2022 Broccoli & Co. All rights reserved.
            </div>
        </div>
    );
}