
import UserLayout from "../../../../layouts/UserLayout";

import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";
import {useNavigate} from "react-router-dom";
import { FaMapMarkedAlt, FaRoute } from "react-icons/fa";
import loginImage from "../../../../assets/images/map.jpeg";

function SafeRoute() {
    const navigate = useNavigate();
    return (
        <UserLayout>
            <div className="safe-route">
                <h1>Safe Route</h1>
                <p>Find the safest route to your destination.</p>
                <div className="route-form">
                   <Input type="text" placeholder="Current Location"/>
                   <Input type="text" placeholder="Destination"/>
                    <Button text="Find Route" onClick={() => navigate("/route-details")} />
                </div>
                <div className="map-card">
                   <img src={loginImage} alt="Map" className="map-image" />
                </div>
                <div className="route-info">
                    <div className="info-card">
                        <h3>Distance</h3>
                        <p>4.8 km</p>
                    </div>
                    <div className="info-card">
                        <h3>Estimated Time</h3>
                        <p>12 Minutes</p>
                    </div>
                    <div className="info-card">
                        <h3>Safety Score</h3>
                       <p>95 / 100</p>
                   </div>
                </div>
                <Button text="Start Navigation" onClick={() => navigate("/navigate")} />
            </div>
        </UserLayout>
    );
}
export default SafeRoute;