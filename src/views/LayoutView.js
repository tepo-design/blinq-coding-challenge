export default function LayoutView({ children }) {
    return (
        <div className="card">
            <div className="card-container h-screen">
                // Header
                <div className="block bg-primary font-bold text-center" style={{minHeight: '10%'}}></div>
                // Content of children
                <div className="block bg-primary-reverse font-bold text-center" style={{minHeight: '80%'}}></div>
                // Footer
                <div className="block bg-primary font-bold text-center" style={{minHeight: '10%'}}></div>
            </div>
        </div>
    );
}