
import UserLayout from "../../../../layouts/UserLayout";
import Button from "../../../../common/Button/Button";
import {useNavigate} from "react-router-dom";
function SafeZones() {
    const navigate = useNavigate();
    return (
        <UserLayout>
            <div className="safezones">
                <h1>Nearby Safe Zones</h1>
                <p>
                    Discover nearby police stations,
                    hospitals, and women's help centers.
                </p>
                <div className="zone-card">
                    <h3>Police Station</h3>
                    <p>1.2 km Away</p>
                </div>
                <div className="zone-card">
                    <h3>City Hospital</h3>
                    <p>850 m Away</p>
                </div>
                <div className="zone-card">
                    <h3>Women's Help Center</h3>
                    <p>2.4 km Away</p>
                </div>
                <Button text="View Details" onClick={() => navigate("/safe-zone-details")} />
            </div>
        </UserLayout>
    );
}
export default SafeZones;