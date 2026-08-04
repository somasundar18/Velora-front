import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Velora</h2>
      </div>
      <div className="navbar-right">
        <FaBell className="nav-icon" onClick={() => navigate("/notification")} />
        <FaUserCircle className="profile-icon" onClick={() => navigate("/profile")} />
      </div>
    </nav>
  );
}

export default Navbar;