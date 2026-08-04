import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import otpImage from "../../../../assets/images/otp-banner.png";
import Button from "../../../../common/Button/Button";
function OTP() {
  const navigate = useNavigate();
  return (
    <div className="otp">
      <div className="otp-container">
          <img src={otpImage} alt="OTP Verification" className="otp-image"/>
        <h1>OTP Verification</h1>
        <p>Enter the 6-digit verification code sent to your mobile number.</p>
        <div className="otp-inputs">
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
        </div>
        <Button text="Verify OTP" onClick={() => navigate("/emergency-contact-setup")} />
        <div className="resend">
          Didn't receive the code?
          <Link to="#">Resend OTP</Link>
        </div>
        <div className="resend">
          Back to Sign Up?
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
}
export default OTP;