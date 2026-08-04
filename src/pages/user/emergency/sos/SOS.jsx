import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function SOS() {
    const navigate = useNavigate();
    const [count, setCount] = useState(5);
    useEffect(() => {
        if (count === 0) {
            navigate("/emergency-alert");
            return;
        }
        const timer = setTimeout(() => {
            setCount(count - 1);
        }, 1000);
        return () => clearTimeout(timer);
    }, [count, navigate]);
    return (
        <div className="sos-page">
            <div className="sos-card">
                <div className="sos-circle">{count}</div>
                <h1>Emergency SOS</h1>
                <p>Emergency alert will be sent in<strong> {count} seconds</strong></p>
                <p className="cancel-text">Stay calm. Your trusted contacts will be notified shortly.</p>
                <button className="cancel-btn" onClick={() => navigate("/dashboard")}>Cancel SOS</button>
            </div>
        </div>
    );
}
export default SOS;