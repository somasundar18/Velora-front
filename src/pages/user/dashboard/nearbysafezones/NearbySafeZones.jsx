import {FaHospital,FaShieldAlt,FaUniversity} from "react-icons/fa";
function NearbySafeZones() {
  return (
    <div className="safezones">
      <h2>Nearby Safe Zones</h2>
      <div className="safezone-list">
        <div className="safezone-card">
          <FaShieldAlt className="safezone-icon"/>
          <div>
            <h3>Police Station</h3>
            <p>1.2 km Away</p>
          </div>
        </div>
        <div className="safezone-card">
          <FaHospital className="safezone-icon"/>
          <div>
            <h3>City Hospital</h3>
            <p>850 m Away</p>
          </div>
        </div>
        <div className="safezone-card">
          <FaUniversity className="safezone-icon"/>
          <div>
            <h3>Women's Help Center</h3>
            <p>2.4 km Away</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NearbySafeZones;