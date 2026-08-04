import { Link } from "react-router-dom";
import loginImage from "../../../../assets/images/login-banner.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";   
import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";

function Login() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

const handleLogin = () => {
    if (!phoneNumber || !password) {
        alert("Please enter both phone number and password");
        return;
    }

    localStorage.setItem("token", "dummy-token");
    localStorage.setItem("userId", phoneNumber);
    localStorage.setItem("role", "EMPLOYEE");
    localStorage.setItem("email", "");

    alert("Login Successful");
    navigate("/dashboard");
};
  return (
    <div className="login">
      <div className="login-container">
        <img src={loginImage} alt="Login" className="login-image"/>
        <h1>Welcome Back</h1>
        <p>Sign in to continue to Velora</p>

        <Input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <div className="forgot-password">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>

        <Button text="Login" onClick={handleLogin} />

        <div className="signup-link">
          Don't have an account?
          <Link to="/signup">Sign Up</Link>
        </div>

        <div className="signup-link" onClick={() => navigate("/police")}>
          Looking for Police Portal? 
          <Link>Click Here</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
