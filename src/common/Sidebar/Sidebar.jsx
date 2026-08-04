import {useNavigate} from "react-router-dom";
import {FaHome,FaRoute,FaMapMarkedAlt,FaRobot,FaShieldAlt,FaFileAlt,FaPhoneAlt,FaSignOutAlt} from "react-icons/fa";
function Sidebar() {
  const navigate = useNavigate();
  return (
    <aside className="sidebar">
      <div>
        <h2 className="sidebar-title">Menu</h2>
        <ul className="sidebar-menu">
          <li onClick={() => navigate("/dashboard")}><FaHome />Dashboard</li>
          <li onClick={() => navigate("/safe-route")}><FaRoute />Safe Route</li>
          <li onClick={() => navigate("/safe-zones")}><FaShieldAlt />Safe Zones</li>
          <li onClick={() => navigate("/ai-analysis")}><FaRobot />AI Safety</li>
          <li onClick={() => navigate("/report")}><FaFileAlt />Report Incident</li>
          <li onClick={() => navigate("/emergency-contacts")}><FaPhoneAlt />Emergency Contacts</li>
        </ul>
      </div>
      <button className="logout-btn" onClick={() => navigate("/login")}>
        <FaSignOutAlt />Logout
      </button>
    </aside>
  );
}

export default Sidebar;