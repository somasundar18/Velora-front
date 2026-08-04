import { useState } from "react";
import { useNavigate } from "react-router-dom";

import forgotImage from "../../../../assets/images/forgot-password.png";
import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";

function ForgotPassword() {

  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSendOTP = () => {

  if (!phoneNumber) {
    alert("Please enter your phone number");
    return;
  }

  alert("OTP sent successfully!");
  navigate("/otp");

};

  return (
    <div className="forgot">
      <div className="forgot-container">

        <img
          src={forgotImage}
          alt="Forgot Password"
          className="forgot-image"
        />

        <h1>Forgot Password?</h1>

        <p>
          Enter your registered mobile number.
          We'll send you an OTP to reset your password.
        </p>

        <Input
          type="text"
          placeholder="Mobile Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        {/* Firebase reCAPTCHA will render here */}
        <div id="recaptcha-container"></div>

        <Button
          text="Send OTP"
          onClick={handleSendOTP}
        />

      </div>
    </div>
  );
}

export default ForgotPassword;