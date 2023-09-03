import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../../../../Loader/Loader";
import "./AdminDashCreateWriterNextContent.css";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function AdminCreateWriter({ editorID }) {
  const [formDataWriter, setFormDataWriter] = useState({
    FullName: "",
    UserName: "",
    Email: "",
    Password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showPopuperror, setShowPopupError] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const Nav = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataWriter((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const url = `https://corenet-api.onrender.com/api/createwriter/${editorID}`;
  const CreateWriter = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(url, formDataWriter);
      console.log(response.data);
      setLoading(false);
      setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          Nav("/adminpage/adminallwriter");
        }, 5000);
    } catch (error) {
      console.error(error.response.data);
      setShowPopupError(true);
        setTimeout(() => {
          setShowPopupError(false);
        }, 10000);
      setLoading(false);
      setValidationErrors(error.response.data.error);
    }
  };

  return (
    <div>
      
      <div className="signup-form-container">
        <h2>Create New Writer</h2>
        {showPopup && (
        <div className="popup">
          <p>Writer Successfully Created</p>
        </div>
      )}
      {showPopuperror && (
        <div className="popup">
          <p>{validationErrors}</p>
        </div>
      )}
        <form className="FORM">
        
          <input
            placeholder="Full Name"
            type="text"
            name="FullName"
            value={formDataWriter.FullName}
            onChange={handleChange}
          />
          <input
            placeholder="Username"
            type="text"
            name="UserName"
            value={formDataWriter.UserName}
            onChange={handleChange}
          />
          <input
            placeholder="Email"
            type="email"
            name="Email"
            value={formDataWriter.Email}
            onChange={handleChange}
          />
          <input
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            name="Password"
            value={formDataWriter.Password}
            onChange={handleChange}
          />
          {showPassword ? (
          <FiEyeOff onClick={() => setShowPassword(false)} className="Show" />
        ) : (
          <FiEye onClick={() => setShowPassword(true)} className="Show" />
        )}
          <button type="submit" onClick={CreateWriter}>
            {loading ? <Loader /> : "Create Writer"}
          </button>
        </form>
      </div>
    </div>
  );
}
