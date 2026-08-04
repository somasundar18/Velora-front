import React from 'react';
import otpImage from '/src/assets/image/otp-banner.png';
import { Link } from 'react-router-dom';



function OTP() {
  const resend=()=>{
    alert("successfully send 👍")
  }
  const verifyOTP = () => {
    alert("OTP Verified Successfully");
  };
  return (
    <div className="otp"  style={{backgroundImage:"#0b0f19"}}>
      <div className="otp-container">

        <img src={otpImage} alt="OTP Verification" className="otp-image"/>
        <h1>OTP Verification</h1>

        <p className="otp-text">Enter the 6-digit verification code sent to your mobile number.

        </p>

        <div className="otp-inputs">

          <input type="text" maxLength="1" />

          <input type="text" maxLength="1" />

          <input type="text" maxLength="1" />

          <input type="text" maxLength="1" />

          <input type="text" maxLength="1" />

          <input type="text" maxLength="1" />


        </div>

        <button

          className="verify-btn" onClick={verifyOTP}><Link to="/dashboard">Verify OTP</Link></button>
          <div className="resend">Didn't receive the code?
            <Link onClick={resend}>Resend OTP</Link>
         


        </div>




      </div>


    </div>

  );

}


export default OTP;