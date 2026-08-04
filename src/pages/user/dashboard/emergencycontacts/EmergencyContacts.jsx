import { useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaUserCircle } from "react-icons/fa";
function EmergencyContacts() {
  const navigate = useNavigate();
  return (
    <div className="emergency-contacts">
      <h2>Emergency Contacts</h2>
      <div className="contact-list">
        <div className="contact-card">
          <FaUserCircle className="contact-icon" />
          <div className="contact-info">
            <h3>Mom</h3>
            <p>+91 98765 43210</p>
          </div>
          <FaPhoneAlt className="call-icon" />
        </div>
        <div className="contact-card">
          <FaUserCircle className="contact-icon" />
          <div className="contact-info">
            <h3>Brother</h3>
            <p>+91 98765 43211</p>
          </div>
          <FaPhoneAlt className="call-icon" />
        </div>
        <div className="contact-card">
          <FaUserCircle className="contact-icon" />
          <div className="contact-info">
            <h3>Best Friend</h3>
            <p>+91 98765 43212</p>
          </div>
          <FaPhoneAlt className="call-icon" />
        </div>
      </div>
      <button className="manage-btn" onClick={() => navigate("/emergency-contacts")}>Manage Contacts</button>
    </div>
  );
}
export default EmergencyContacts;