import React, { useState } from "react";
import "./UserForgotPassword.css"; // Import your CSS file
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const UserForgotPassword = () => {
  const [Email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  console.log(Email);
  const Writer = useSelector((state) => state.stores.formDataWriter);
  console.log(Writer)
  const writerToken = Writer.token
  console.log(writerToken);

  const data = { Email };
  // const {token} = useParams()forgot-pass/:token

  const forgotPassword = () => {
    const URL = `https://corenet-api.onrender.com/api/forgot-pass/${writerToken}`;
    console.log(URL);

    axios
      .post(URL, data)
      .then((res) => {
        console.log(res);
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          login_alert();
        }, 5000);
      })
      .catch((error) => {
        console.error("Error:", error);
        if (error.response) {
          console.error("Response Data:", error.response.data);
          // setError(error.response.data.message);
        }
      });
  };

  //<input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
  return (
    <div className="mainn">
        {showPopup && (
        <div className="popup">
          <p>Check your Email to reset your password</p>
        </div>
      )}
      <div className="corenet">
        <div className="imgcore">
          <img src="./realbluelogo.png" alt="" />
        </div>
        <h2>CoreNet</h2>
      </div>
      <div className="forgot-password-container">
        <h2>Forgot Your Password?</h2>
        <p>No worries! Enter your email below to receive a reset code.</p>
        <div className="input-container">
          <input
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <button onClick={forgotPassword}>Send Reset Code</button>
        </div>
      </div>
    </div>
  );
};

export default UserForgotPassword;
