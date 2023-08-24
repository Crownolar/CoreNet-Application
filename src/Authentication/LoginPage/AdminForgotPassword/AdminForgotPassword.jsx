import React, { useState } from "react";
import "./AdminForgotPassword.css"; // Import your CSS file
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../../../Loader/Loader";

const AdminForgotPassword = () => {
  const [Email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState('');
  console.log(Email);
  // const Editor = useSelector((state) => state.stores.user);
  // console.log(Editor)
  // const editorToken = Editor.token
  // console.log(editorToken);

  const data = { Email };
  // const {token} = useParams()

  const forgotPassword = () => {
        setLoading(true)
        const URL = `https://corenet-api.onrender.com/api/forgot-password`;
    console.log(URL);

    axios
      .post(URL, data)
      .then((res) => {
        console.log(res);
        setLoading(false)
        setShowPopup(true);
        setTimeout(() => {  
          setShowPopup(false);
          login_alert();
        }, 5000);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false)
        if (error.response) {
          console.error("Response Data:", error.response.data);
          setError(error.response.data.message);
        }
        setShowPopup(true);
        setTimeout(() => {  
          setShowPopup(false);
          login_alert();
        }, 5000);
      });
  };

  //<input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
  return (
    <div className="mainn">
        {showPopup && (
        <div className="popup">
          <p>Email sent</p>
        </div>
      )}
        {showPopup && (
        <div className="popup">
          <p>{error}</p>
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
          <button onClick={forgotPassword}>{loading ? <Loader /> : "Send Reset Code"}</button>
        </div>
      </div>
    </div>
  );
};

export default AdminForgotPassword;
