import React, { useState } from "react";
import police_logo from "/src/assets/image/Tamil_Nadu_Police_Logo.png";
import velora_logo from "/src/assets/image/velora-trans.png";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (!phoneNumber || !password) {
      alert("Please enter Phone Number and Password");
      return;
    }

    localStorage.setItem("token", "police-token");
    localStorage.setItem("role", "MANAGER");
    localStorage.setItem("userId", phoneNumber);
    localStorage.setItem("email", "");

    alert("Police Login Successful");

    navigate("/dashboard");
  };

  return (
    <div className="login-container">

      <header className="top-header">

        <h1
          className="header-title"
          style={{ marginLeft: "250px" }}
        >
          Tamil Nadu Police Department
        </h1>

        <img
          src={velora_logo}
          alt="Logo"
          className="top-right-logo-1"
        />

      </header>

      <div className="login-card">

        <div className="header-bar">
          POLICE OFFICER SECURE LOGIN
        </div>

        <div className="avatar-placeholder">

          <img
            src={police_logo}
            alt="Police Logo"
            className="user-icon"
          />

        </div>

        <div className="input-group">

          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

        </div>

        <div className="input-group">

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

        </div>

        <div className="options">

          <label>
            <input type="checkbox" />
            Remember Me
          </label>

          <p>
            <Link to="/forgotpassword">
              Forgot Password?
            </Link>
          </p>

        </div>

        <button
          className="login-btn"
          onClick={handleLogin}
        >
          LOG IN
        </button>

      </div>

      <br />

      <p>New User?</p>

      <Link to="/register">
        Register Now
      </Link>

    </div>
  );
}

export default Login;