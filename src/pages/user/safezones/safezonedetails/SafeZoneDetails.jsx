
import UserLayout from "../../../../layouts/UserLayout";
import {useNavigate} from "react-router-dom";
import Button from "../../../../common/Button/Button";

function SafeZoneDetails() {
    const navigate = useNavigate();
    return (
        <UserLayout>
            <div className="safezone-details">
                <h1>Safe Zone Details</h1>
               <div className="details-card">
                    <h2>Police Station</h2>
                    <p>Distance : 1.2 km</p>
                    <p>Open : 24 Hours</p>
                    <p>Contact : +91 100</p>
                </div>
                <Button text="Navigate" onClick={() => navigate("/navigate")} />
            </div>
        </UserLayout>
    );
}
export default SafeZoneDetails;