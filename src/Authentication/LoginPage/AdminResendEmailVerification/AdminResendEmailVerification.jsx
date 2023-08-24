import React, { useState } from "react";
import "./AdminResendEmailVerification.css";
import axios from "axios";

const AdminResendEmailVerification = () => {
  const [Email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupError, setShowPopupError] = useState(false);
  console.log(Email);

  const data = { Email };

  const Resend = () => {
    const url = `https://corenet-api.onrender.com/api/resend-verification-email`;
    console.log(url)

    axios
      .post(url, data)
      .then(function (res) {
        console.log(res);
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Error:", error);
        setShowPopupError(true);
        setTimeout(() => {
          setShowPopupError(false);
        }, 10000);
        if (error.response) {
          console.error("Response Data:", error.response.data);
        }
      });
  };

  return (
    <div className="mainn">
        {showPopup && (
        <div className="popup">
          <p>Email sent</p>
        </div>
      )}
        {showPopupError && (
        <div className="popup">
          <p>Email Not Sent</p>
        </div>
      )}
      <div className="corenet">
        <div className="imgcore">
          <img src="./realbluelogo.png" alt="" />
        </div>
        <h2>CoreNet</h2>
      </div>
      <div className="forgot-password-container">
        <h2>Didn't receive your Email verification Link?</h2>
        <p>No worries! Enter your email below to receive receive your verification link.</p>
        <div className="input-container">
          <input
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <button onClick={Resend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default AdminResendEmailVerification;
