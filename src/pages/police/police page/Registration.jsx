import React, { useState } from "react";
import police_logo from "/src/assets/image/Tamil_Nadu_Police_Logo.png";
import velora_logo from "/src/assets/image/velora-trans.png";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [officerId, setOfficerId] = useState("");
  const [station, setStation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

const handleRegister = () => {

  if (
    !name ||
    !email ||
    !officerId ||
    !station ||
    !phoneNumber ||
    !password ||
    !confirmPassword
  ) {
    alert("Please fill all fields");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  alert("Registration successful. Please log in.");
  navigate("/login");
};

  return (
    <div className="container">
      <center>
        <h1 className="header-text">
          Tamil Nadu Police Official Portal
        </h1>
      </center>

      <img
        src={velora_logo}
        alt="Velora"
        className="top-right"
      />

      <div className="logo-section">
        <img
          src={police_logo}
          alt="Police Logo"
          className="logo"
        />
      </div>

      <main className="main-content">

        <div className="form-card">

          <h2>Officer Registration</h2>

          <div className="form-grid">

            <input
              type="text"
              placeholder="Officer Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Official Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="text"
              placeholder="Officer ID / Badge Number"
              value={officerId}
              onChange={(e) => setOfficerId(e.target.value)}
            />

            <input
              type="text"
              placeholder="Department / Station Name"
              value={station}
              onChange={(e) => setStation(e.target.value)}
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="full-width"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

          </div>

          <button
            className="register-btn"
            onClick={handleRegister}
          >
            Register
          </button>

        </div>

        <div className="info-card">

          <div>

            <h3>Already have an account?</h3>

            <button
              className="login-btn"
              onClick={() => navigate("/login")}
            >
              Login
            </button>

          </div>

        </div>

      </main>
    </div>
  );
}

export default Registration;