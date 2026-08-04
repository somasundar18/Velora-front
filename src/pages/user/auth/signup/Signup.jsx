import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";   
import signupImage from "../../../../assets/images/signup-banner.png";
import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";

function Signup() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

 const handleSignup = () => {

  if (!fullName || !phoneNumber || !email || !password || !confirmPassword) {
    alert("Please fill in all fields");
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
    <div className="signup">
      <div className="signup-container">
        <img src={signupImage} alt="Signup" className="signup-image"/>
        <h1>Create Account</h1>
        <p>Join Velora and stay safe everywhere</p>

        <Input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <Input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <Input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

        <Button text="Sign Up" onClick={navigate("/dashboard") } />

        <div className="login-link">
          Already have an account?
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
