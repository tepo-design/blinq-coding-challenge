import HeaderView from "./HeaderView";
import FooterView from "./FooterView";

export default function LayoutView({ children }) {
    return (
        <div className="card">
            <div className="card-container h-screen">
                <HeaderView/>
                <div className="block bg-primary-reverse card" style={{minHeight: '80%', paddingTop: 104}}>
                    {children}
                </div>
                <FooterView />
            </div>
        </div>
    );
}