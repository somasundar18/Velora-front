import React from 'react';
import forgotImage from '/src/assets/image/forgot-password.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function ForgotPassword() {

  const navigate=useNavigate();


  const handleSubmit = () => {

    alert("OTP Sent Successfully");

  };


  return (

    <div className="forgot">


      <div className="forgot-container">


        <img
          src={forgotImage}
          alt="Forgot Password"
          className="forgot-image"
        />



        <h1>
          Forgot Password?
        </h1>



        <p style={{color:'black'}}>
          Enter your registered mobile number.
          We'll send you an OTP to reset your password.
        </p>


        <input type="tel" placeholder="Mobile Number" className="mobile-input"/>

        <button className="otp-button" onClick={handleSubmit} > <Link to="/otp" >Send OTP</Link></button>



      </div>


    </div>

  );

}


export default ForgotPassword;