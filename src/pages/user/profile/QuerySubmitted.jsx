
import UserLayout from "../../../layouts/UserLayout";
import { useNavigate } from "react-router-dom";

import { FiCheckCircle } from "react-icons/fi";

function QuerySubmitted() {

    const navigate = useNavigate();

    return (

        <UserLayout>

            <div className="query-page">

                <div className="query-card">

                    <FiCheckCircle className="success-icon"/>

                    <h1>Query Submitted!</h1>

                    <p>

                        Thank you for contacting Velora Support.

                    </p>

                    <p>

                        Your support request has been received successfully.

                    </p>

                    <div className="ticket-box">

                        <h3>Ticket ID</h3>

                        <h2>VLR-2026-00125</h2>

                    </div>

                    <div className="status-box">

                        <p>

                            Our support team will contact you within

                            <strong> 24 hours.</strong>

                        </p>

                    </div>

                    <button

                        className="home-btn"

                        onClick={() => navigate("/profile")}

                    >

                        Back to Profile

                    </button>

                </div>

            </div>

        </UserLayout>

    );

}

export default QuerySubmitted;