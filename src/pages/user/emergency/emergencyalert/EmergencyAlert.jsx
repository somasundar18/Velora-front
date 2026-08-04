import UserLayout from "../../../../layouts/UserLayout";
import { FaCheckCircle, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function EmergencyAlert() {
    const navigate = useNavigate();
    return (
        <UserLayout>
            <div className="emergency-alert">
                <FaCheckCircle className="success-icon" />
                <h1>Emergency Alert Sent!</h1>
                <p>Your emergency alert has been successfully sent to your trusted contacts.</p>
                <div className="contact-list">
                    <div className="contact-card">
                        <FaUserCircle className="contact-icon"/>
                        <div>
                            <h3>Mom</h3>
                            <p>Alert Delivered</p>
                        </div>
                    </div>
                    <div className="contact-card">
                        <FaUserCircle className="contact-icon"/>
                        <div>
                            <h3>Brother</h3>
                            <p>Alert Delivered</p>
                        </div>
                    </div>
                    <div className="contact-card">
                        <FaUserCircle className="contact-icon"/>
                        <div>
                            <h3>Best Friend</h3>
                            <p>Alert Delivered</p>
                        </div>
                    </div>
                </div>
               <button className="back-dashboard-btn" onClick={() => navigate("/dashboard")}>Back to Dashboard</button>
            </div>
        </UserLayout>
    );
}
export default EmergencyAlert;