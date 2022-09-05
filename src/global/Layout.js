import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div className="card">
            <div className="card-container h-screen">
                <Header height="10%"/>
                <div className="block bg-primary-reverse flex align-items-stretch card" style={{minHeight: "80%"}}>
                    {children}
                </div>
                <Footer height="10%"/>
            </div>
        </div>
    );
}