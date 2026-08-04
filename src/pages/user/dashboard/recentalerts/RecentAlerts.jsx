import { useNavigate } from "react-router-dom";
import {FaBell,FaExclamationTriangle,FaMapMarkerAlt} from "react-icons/fa";
function RecentAlerts() {
  const navigate = useNavigate();
  return (
    <div className="recent-alerts">
      <h2>Recent Alerts</h2>
      <div className="alert-list">
        <div className="alert-card">
          <FaBell className="alert-icon" />
          <div className="alert-info">
            <h3>Safety Reminder</h3>
            <p>Share your live location while travelling at night.</p>
          </div>
        </div>
        <div className="alert-card">
          <FaExclamationTriangle className="alert-icon warning" />
          <div className="alert-info">
            <h3>High Risk Area</h3>
            <p>Avoid the nearby route due to recent incidents.</p>
          </div>
        </div>
        <div className="alert-card">
          <FaMapMarkerAlt className="alert-icon location" />
          <div className="alert-info">
            <h3>Safe Zone Updated</h3>
            <p>A new women's help center has been added nearby.</p>
          </div>
        </div>
      </div>
      <button className="view-btn" onClick={() => navigate("/notification")}>View All Alerts</button>
    </div>
  );
}
export default RecentAlerts;