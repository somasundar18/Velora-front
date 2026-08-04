
import UserLayout from "../../../../layouts/UserLayout";
import loginImage from "../../../../assets/images/map.jpeg";

import Button from "../../../../common/Button/Button";
import {useNavigate} from "react-router-dom";
import {
    FaArrowLeft,
    FaMapMarkerAlt,
    FaMapMarkedAlt,
    FaArrowRight
} from "react-icons/fa";
import BackButton from "../../../../common/BackButton/BackButton";

function Navigation() {
    const navigate = useNavigate();
    return (
        <UserLayout>
            <BackButton />
            <div className="navigation">
                <div className="navigation-header">
                    <h1>Navigation</h1>
                </div>
               <div className="map-container">
                    <img src={loginImage} alt="Map" className="map-image" />
                </div>
                <div className="next-turn">
                    <FaMapMarkerAlt className="turn-icon"/>
                    <div>
                        <h3>Next Turn</h3>
                        <p>Turn Left after 200 m</p>
                  </div>
                </div>
                <div className="navigation-info">
                    <div className="info-box">
                        <h3>Distance Left</h3>
                        <p>3.6 km</p>
                    </div>
                   <div className="info-box">
                        <h3>Estimated Time</h3>
                       <p>9 min</p>
                    </div>
                    <div className="info-box">
                       <h3>Safety Score</h3>
                        <p>95 / 100</p>
                    </div>
                </div>
                <Button text="End Navigation" onClick={() => navigate("/safe-route")} />
            </div>
        </UserLayout>
    );
}
export default Navigation;