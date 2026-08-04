
import UserLayout from "../../../layouts/UserLayout";

import { useNavigate } from "react-router-dom";

import { FiArrowLeft, FiCamera, FiSave } from "react-icons/fi";

import user from "../../../assets/images/user.png";

function EditProfile() {

    const navigate = useNavigate();

    return (

        <UserLayout>

            <div className="editprofile-page">

                <div className="edit-header">

                  

                    <h1>Edit Profile</h1>

                </div>

                <div className="profile-image">

                    <img
                        src={user}
                        alt="User"
                        className="user-image"
                    />

                    <button className="change-photo">

                        <FiCamera />

                        Change Photo

                    </button>

                </div>

                <div className="edit-form">

                    <label>User Name</label>

                    <input
                        type="text"
                        placeholder="Priya Sharma"
                    />

                    <label>Phone Number</label>

                    <input
                        type="tel"
                        placeholder="+91 9876543210"
                    />

                    <label>Email</label>

                    <input
                        type="email"
                        placeholder="priya@velora.app"
                    />

                    <label>Address</label>

                    <textarea
                        rows="4"
                        placeholder="Enter your address"
                    ></textarea>

                    <label>Preferred Language</label>

                    <select defaultValue="English">

                        <option>English</option>

                        <option>Tamil</option>

                        <option>Hindi</option>

                    </select>

                </div>

                <button className="save-btn" onClick={() => navigate("/profile")}>

                    <FiSave />

                    Save Changes

                </button>

            </div>

        </UserLayout>

    );

}

export default EditProfile;