import React, { useState } from "react";
import "./AdminChangePassword.css"; // Import your CSS file
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminChangePassword = () => {
  const [existingpassword, setExistingPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [msg, setMsg] = useState(null);
  const [newpassword, setNewPassword] = useState("");
  console.log(existingpassword, newpassword);
  const Editor = useSelector((state) => state.stores.user);
  const editorToken = Editor.token
  console.log(editorToken);
//   const { token } = useParams();
  const url = `https://corenet-api.onrender.com/api/change-password/${editorToken}`;
//   console.log(url);

  const changePassword = () => {

    const data = {
    existingPassword: existingpassword,
    newPassword: newpassword
  };
    axios
    .post(url, data)
    .then(function (res) {
        console.log(res);
        // console.log(res.data.message);
      setMsg(res.data.message)
      setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 5000);
    })
    .catch((error) => {
      console.error("Error:", error);
      if (error.response) {
        console.error("Response Data:", error.response.data);
      }
    });
  }

  return (
    <div className="adminpasswordchange">
        {showPopup && (
        <div className="popup">
          <p>{msg}</p>
        </div>
      )}
      <div className="change-password-container">
        <h2>Change Your Password</h2>
        <div className="input-container">
          <input
            type="password"
            value={existingpassword}
            onChange={(e) => setExistingPassword(e.target.value)}
            placeholder="Existing Password"
          />
        </div>
        <div className="input-container">
          <input type="password"
            value={newpassword}
            onChange={(e) => setNewPassword(e.target.value)} placeholder="New Password" />
        </div>
        <div className="input-container">
          <button onClick={changePassword}>Change Password</button>
        </div>
      </div>
    </div>
  );
};

export default AdminChangePassword;
