
import UserLayout from "../../../layouts/UserLayout";
import { useNavigate } from "react-router-dom";
import BackButton from "../../../common/BackButton/BackButton";

import {
  FiArrowLeft,
  FiMap,
  FiMapPin,
  FiBell,
  FiShield,
  FiLock,
  FiDownload,
  FiTrash2,
  FiChevronRight
} from "react-icons/fi";

function PrivacySettings() {

  const navigate = useNavigate();

  return (

    <UserLayout>
<BackButton />
      <div className="privacy-page">

        <div className="privacy-header">

        

          <h1>Privacy Settings</h1>

        </div>

        <div className="privacy-card">

          <h2>Location Privacy</h2>

          <div className="setting">

            <div className="setting-left">

              <FiMap className="icon"/>

              <div>

                <h3>Share Live Location</h3>

                <p>Share your live location with emergency contacts.</p>

              </div>

            </div>

            <button className="toggle on">ON</button>

          </div>

          <div className="setting">

            <div className="setting-left">

              <FiMapPin className="icon"/>

              <div>

                <h3>Location History</h3>

                <p>Save recent routes for safety analysis.</p>

              </div>

            </div>

            <button className="toggle off">OFF</button>

          </div>

        </div>

        <div className="privacy-card">

          <h2>Security</h2>

          <div className="setting">

            <div className="setting-left">

              <FiBell className="icon"/>

              <div>

                <h3>Emergency Notifications</h3>

                <p>Receive important safety alerts.</p>

              </div>

            </div>

            <button className="toggle on">ON</button>

          </div>

          <div className="setting">

            <div className="setting-left">

              <FiLock className="icon"/>

              <div>

                <h3>Biometric Login</h3>

                <p>Use fingerprint or Face ID.</p>

              </div>

            </div>

            <button className="toggle on">ON</button>

          </div>

          <div className="setting">

            <div className="setting-left">

              <FiShield className="icon"/>

              <div>

                <h3>AI Safety Analysis</h3>

                <p>Allow AI to analyse your safety.</p>

              </div>

            </div>

            <button className="toggle off">OFF</button>

          </div>

        </div>

     

      </div>

    </UserLayout>

  );

}

export default PrivacySettings;