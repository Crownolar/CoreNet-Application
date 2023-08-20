import React, { useState } from 'react';
import './AdminResetPassword.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../Loader/Loader';

const AdminResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const Editor = useSelector((state) => state.stores.user);
  const editorToken = Editor.token
  console.log(editorToken);
  const Nav = useNavigate()


  const URL = `https://corenet-api.onrender.com/api/reset-password/${editorToken}`;
    const NewPassword = { newPassword }

  const handleResetPassword = () => {
    setLoading(true)
    axios
    .post(URL, {NewPassword})
    .then((res) => {
        console.log(res);
        setLoading(false)
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
        setShowPopup(false);
        Nav("./Login")
    })
    .catch((error) => {
        console.error("Error:", error);
        setLoading(false)
        if (error.response) {
          console.error("Response Data:", error.response.data);
          setError(error.response.data.message)
          // setError(error.response.data.message);
        }
      });
    // console.log('Password reset requested with new password:', newPassword);
  };

  return (
    <div className="Mainns">
        {showPopup && (
        <div className="popup">
          <p>Password Reset Successfully</p>
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
        type="password"
        className="admin-reset-input"
        placeholder="Enter new password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button className="admin-reset-btn" onClick={handleResetPassword}>
        {loading ? <Loader /> : "Reset Password"}
      </button>
    </div>
    </div>
  );
};

export default AdminResetPassword;
