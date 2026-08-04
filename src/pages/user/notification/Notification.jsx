
import UserLayout from "../../../layouts/UserLayout";

import {
    FiAlertTriangle,
    FiArrowLeft,
    FiCheck,
    FiChevronRight,
    FiMapPin,
    FiStar,
    FiTrendingUp
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import BackButton from "../../../common/BackButton/BackButton";
function Notification() {
    const navigate = useNavigate();
    return (
        <UserLayout>
          <div className="notification-page">
               <div className="notify-header">
                   <h1>Notifications</h1>
                </div>
                <h2 className="notify-section-title">
                   Emergency Alerts
               </h2>
                <div className="notify-menu-box">
                    <div className="notify-menu-item">
                        <div className="notify-menu-left">
                            <div className="notify-menu-icon danger">
                                <FiAlertTriangle />
                            </div>
                            <div>
                                <h3>Incident Reported Nearby</h3>
                                <p>
                                   A harassment incident was reported
                                   300m from your current location.
                                </p>
                                <span>12 min ago</span>
                            </div>
                        </div>
                        <FiChevronRight className="notify-arrow"/>
                   </div>
                </div>
                <div className="notify-menu-box">
                    <div className="notify-menu-item">
                        <div className="notify-menu-left">
                            <div className="notify-menu-icon warning">
                                <FiAlertTriangle />
                            </div>
                            <div>
                               <h3>High Risk Zone Alert</h3>
                                <p>
                                   You are approaching a high-risk area.
                                   Consider the safer route.
                               </p>
                               <span>1 hour ago</span>
                            </div>
                        </div>
                        <FiChevronRight className="notify-arrow"/>
                    </div>
                </div>
                <h2 className="notify-section-title">
                   System Notifications
               </h2>
                <div className="notify-menu-box">
                    <div className="notify-menu-item">
                        <div className="notify-menu-left">
                            <div className="notify-menu-icon success">
                                <FiStar />
                            </div>
                            <div>
                                <h3>Safety Score Updated</h3>
                                <p>
                                   Congratulations! Your safety score
                                   increased to 87.
                               </p>
                               <span>3 hours ago</span>
                            </div>
                        </div>
                        <FiChevronRight className="notify-arrow"/>
                    </div>
                </div>
               <div className="notify-menu-box">
                    <div className="notify-menu-item">
                        <div className="notify-menu-left">
                            <div className="notify-menu-icon success">
                                <FiCheck />
                           </div>
                            <div>
                                <h3>Emergency Contact Accepted</h3>
                                <p>
                                   Anjali Mehta accepted your emergency
                                   contact request.
                               </p>
                                <span>Yesterday</span>
                            </div>
                        </div>
                        <FiChevronRight className="notify-arrow"/>
                    </div>
               </div>
                <div className="notify-menu-box">
                    <div className="notify-menu-item">
                        <div className="notify-menu-left">
                            <div className="notify-menu-icon info">
                                <FiTrendingUp />
                            </div>
                            <div>
                                <h3>Weekly Safety Report</h3>
                                <p>
                                   Your weekly AI safety analysis
                                   is now available.
                               </p>
                                <span>2 days ago</span>
                            </div>
                        </div>
                       <FiChevronRight className="notify-arrow"/>
                    </div>
                </div>
                <div className="notify-menu-box">
                    <div className="notify-menu-item">
                        <div className="notify-menu-left">
                            <div className="notify-menu-icon primary">
                                <FiMapPin />
                            </div>
                            <div>
                                <h3>New Safe Zone Added</h3>
                                <p>
                                   A new women safety center has been
                                   added near your location.
                               </p>
                                <span>3 days ago</span>
                            </div>
                        </div>
                        <FiChevronRight className="notify-arrow"/>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}
export default Notification;