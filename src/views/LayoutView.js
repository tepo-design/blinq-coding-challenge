import HeaderView from "./HeaderView";
import FooterView from "./FooterView";

export default function LayoutView({ children }) {
    return (
        <div className="card">
            <div className="card-container h-screen">
                <HeaderView height="10%"/>
                <div className="block bg-primary-reverse flex align-items-stretch card" style={{minHeight: '80%'}}>
                    {children}
                </div>
                <FooterView height="10%"/>
            </div>
        </div>
    );
}