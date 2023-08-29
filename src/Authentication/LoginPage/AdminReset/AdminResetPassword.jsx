import React, { useState } from "react";
import "./AdminResetPassword.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../../Loader/Loader";
import { FiEye, FiEyeOff } from "react-icons/fi";

const AdminResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  console.log(newPassword);
  const [showPassword, setShowPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const Editor = useSelector((state) => state.stores.user);
  const editorToken = Editor.token;
  console.log(editorToken);
  // const { token } = useParams()
  const Nav = useNavigate();

  const URL = `https://corenet-api.onrender.com/api/reset-password/${editorToken}`;
  const Password = { newPassword };

  const handleResetPassword = () => {
    setLoading(true);
    axios
      .post(URL, Password)
      .then((res) => {
        console.log(res);
        setSuccess(res.data.message);
        setLoading(false);
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
        Nav("../Login");
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
        Nav("../Login");
        if (error.response) {
          console.error("Response Data:", error.response.data);
          setError(error.response.data.message);
          // setError(error.response.data.message);
        }
      });
    // console.log('Password reset requested with new password:', newPassword);
  };

  return (
    <div className="Mainns">
      {showPopup && (
        <div className="popup">
          <p>{success}</p>
        </div>
      )}
      {error && (
        <div className="popup">
          <p>{error}</p>
        </div>
      )}
      <div className="admin-reset-container">
        <h2>Reset Password</h2>
        <input
          type={showPassword ? "text" : "password"}
          className="admin-reset-input"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        {showPassword ? (
          <FiEyeOff onClick={() => setShowPassword(false)} className="Show2" />
        ) : (
          <FiEye onClick={() => setShowPassword(true)} className="Show2" />
        )}
        <button className="admin-reset-btn" onClick={handleResetPassword}>
          {loading ? <Loader /> : "Reset Password"}
        </button>
      </div>
    </div>
  );
};

export default AdminResetPassword;
