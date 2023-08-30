import React, { useState } from 'react';
import './AdminEditPage.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../../Loader/Loader';

function AdminEditPage() {
    const [loading, setLoading] = useState(false)
    const Nav = useNavigate()
  const Editor = useSelector((state) => state.stores.user);
  const EditorId = Editor.editorId;
  const uRL = `https://corenet-api.onrender.com/api/update-editor/${EditorId}`;
  const [EditorData, setEditorData] = useState({
    FirstName: "",
    SurName: "",
    UserName: "",
    Email: "",
    CompanyName: "",
})
console.log(EditorData)

const { FirstName, SurName, UserName, Email, CompanyName } = EditorData

const onInputChange = (e) => {
  setEditorData({ ...EditorData, [e.target.name]: e.target.value })
}

  const updateEditor = () => {
    setLoading(true)
    axios
    .put(uRL, EditorData)
    .then((res) => {
      console.log(res)
      setLoading(false)
      Nav("/adminpage/profile")
    })
    .catch((error) => {
      console.error("Error:", error);
      setLoading(false)
      if (error.response) {
        console.error("Response Data:", error.response.data);
      }
    });
  }


//   const handleSave = () => {
//     // Handle saving the edited information here
//   };

  return (
    <div className="edit-container">
      <h2>Edit Profile</h2>
      <div className="edit-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name='FirstName'
            value={FirstName}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="surName">SurName</label>
          <input
            type="text"
            id="surName"
            name='SurName'
            value={SurName}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userName">UserName</label>
          <input
            type="text"
            id="userName"
            name='UserName'
            value={UserName}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name='Email'
            value={Email}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            name='CompanyName'
            value={CompanyName}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <button className="save-btn" onClick={updateEditor}>
          {loading ? <Loader /> : "Save"}
        </button>
      </div>
    </div>
  );
}

export default AdminEditPage;
