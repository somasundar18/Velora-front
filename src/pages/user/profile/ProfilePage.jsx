
import UserLayout from "../../../layouts/UserLayout";
import { useNavigate } from "react-router-dom";

import user from "../../../assets/images/user.png";

import {
    FiUser,
    FiShield,
    FiSettings,
    FiPhone,
    FiMapPin,
    FiBell,
    FiChevronRight,
    FiLogOut
} from "react-icons/fi";

function ProfilePage() {

    const navigate = useNavigate();

    return (

        <UserLayout>

            <div className="profile-page">

                <h1 className="profile-title">
                    My Profile
                </h1>

                <div className="user-info">

                    <img
                        src={user}
                        alt="User"
                        className="user-img"
                    />

                    <h2>Priya Sharma</h2>

                    <p>
                        +91 9876543210
                    </p>

                    <p>
                        priya@velora.app
                    </p>

                </div>

                <div className="stats">

                    <div className="stat-card">

                        <h2>87</h2>

                        <p>Safety Score</p>

                    </div>

                    <div className="stat-card">

                        <h2>4</h2>

                        <p>Contacts</p>

                    </div>

                    <div className="stat-card">

                        <h2>12</h2>

                        <p>Reports</p>

                    </div>

                </div>

                <h3 className="section-title">Safety</h3>

                <div className="menu-box">

                    <div className="menu-item" onClick={()=>navigate("/emergency-contacts")}>

                        <div className="menu-left">

                            <FiPhone className="menu-icon"/>

                            <span>Emergency Contacts</span>

                        </div>

                        <FiChevronRight/>

                    </div>

                   
                    <div className="menu-item" onClick={()=>navigate("/notification")}>

                        <div className="menu-left">

                            <FiBell className="menu-icon"/>

                            <span>Notifications</span>

                        </div>

                        <FiChevronRight/>

                    </div>

                </div>

                <h3 className="section-title">

                    Account

                </h3>

                <div className="menu-box">

                    <div className="menu-item" onClick={()=>navigate("/edit-profile")}>

                        <div className="menu-left">

                            <FiUser className="menu-icon"/>

                            <span>Edit Profile</span>

                        </div>

                        <FiChevronRight/>

                    </div>

                    <div className="menu-item" onClick={()=>navigate("/privacy")}>

                        <div className="menu-left">

                            <FiShield className="menu-icon"/>

                            <span>Privacy Settings</span>

                        </div>

                        <FiChevronRight/>

                    </div>

                    <div className="menu-item" onClick={()=>navigate("/profile-settings")}>

                        <div className="menu-left">

                            <FiSettings className="menu-icon"/>

                            <span>App Settings</span>
                            
                        </div>

                        <FiChevronRight/>

                    </div>

                </div>

               

            </div>
       
        </UserLayout>

    );

}

export default ProfilePage;