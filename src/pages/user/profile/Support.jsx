
import UserLayout from "../../../layouts/UserLayout";
import { useNavigate } from "react-router-dom";
import BackButton from "../../../common/BackButton/BackButton";

import {
  FiArrowLeft,
  FiUpload,
  FiSend
} from "react-icons/fi";

function Support() {

  const navigate = useNavigate();

  return (

    <UserLayout>
<BackButton />
      <div className="support-page">

        <div className="support-header">


          <h1>Support</h1>

        </div>

        <div className="support-card">

          <h2>Need Help?</h2>

          <p>
            We are here to help you.<br/>
            Send us your question or issue.
          </p>

          <label>Subject</label>

          <input
            type="text"
            placeholder="Enter subject"
          />

          <label>Category</label>

          <select>

            <option>General Support</option>

            <option>Technical Issue</option>

            <option>Emergency</option>

            <option>Feedback</option>

          </select>

          <label>Describe your Issue</label>

          <textarea
            rows="6"
            placeholder="Type your message here..."
          ></textarea>

          <label>Attach Screenshot (Optional)</label>

          <input
            type="file"
          />

          <label>Email Address</label>

          <input
            type="email"
            placeholder="priya@gmail.com"
          />

          <label>Phone Number</label>

          <input
            type="tel"
            placeholder="+91 9876543210"
          />

          <button className="submit-btn" onClick={() => navigate("/query-submitted")}>

            <FiSend />

            Submit Query

          </button>

        </div>

      </div>

    </UserLayout>

  );

}

export default Support;