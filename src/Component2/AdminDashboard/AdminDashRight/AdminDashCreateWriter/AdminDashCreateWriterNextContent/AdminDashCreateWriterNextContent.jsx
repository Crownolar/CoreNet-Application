import React, { useEffect, useState } from "react";
import "./AdminDashCreateWriterNextContent.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateformDataWriter } from "../../../../../Redux/ActionState/ActionState";
import { updateWriter } from "../../../../../Redux/ActionState/ActionState";
import Loader from "../../../../../Loader/Loader";
import { FiEye, FiEyeOff } from "react-icons/fi";

const AdminDashCreateWriterNextContent = ({ editorID }) => {
  const [showPassword, setShowPassword] = useState(false);
  const formDataWriter = useSelector((state) => state.stores.formDataWriter);
  const dispatch = useDispatch();
  const Nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.stores.user);
  const [validationErrors, setValidationErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  // const EditorId = user.editorId

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateformDataWriter({ [name]: value }));
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const SignUp = (e) => {
    e.persist()
    e.preventDefault();
    setLoading(true);

    const errors = {};

    if (!formDataWriter.FullName) {
      errors.FirstName = "First Name is required";
    }

    if (!formDataWriter.UserName) {
      errors.UserName = "Username is required";
    }

    if (!formDataWriter.Email) {
      errors.Email = "Email is required";
    } else if (!isValidEmail(formDataWriter.Email)) {
      // Implement your email validation function
      errors.Email = "Invalid email address";
    }
    if (!formDataWriter.Password) {
      errors.Password = "Password is required";
    }

    if (Object.keys(errors).length > 0) {
      setLoading(false);
      setValidationErrors(errors);
      return;
    }

    const url = `https://corenet-api.onrender.com/api/createwriter/${editorID}`;
    console.log(url);
    if (!user.editorId) {
      console.error("user's editorId is missing!");
      return;
    }

// dispatch(
//           updateformDataWriter({
//             FullName: "",
//             UserName: "",
//             Email: "",
//             Password: "",
//           })
        // );
        // setShowPopup(true);
        // setTimeout(() => {
        //   setShowPopup(false);
        //   Nav("/userlogin");
        //   login_alert();
        // }, 3000);
    axios
      .post(url, formDataWriter)
      .then((res) => {
        console.log(res);
        setLoading(false);
        dispatch(updateWriter(res.data.data));
        Nav("/userlogin");
        login_alert();        
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
        if (error.response) {
          console.error("Response Data:", error.response.data);
        }
      });
    // console.log(SignUp);
  };

  return (
    <div className="signup-form-container">
      <h2>Create New Writer</h2>
      {showPopup && (
        <div className="popup">
          <p>Writer Successfully Created</p>
        </div>
      )}
      <form>
        {validationErrors.FullName && (
          <p className="error-message">{validationErrors.FullName}</p>
        )}
        <input
          placeholder="Full Name"
          type="text"
          name="FullName"
          value={formDataWriter.FullName}
          onChange={handleChange}
        />
        {validationErrors.UserName && (
          <p className="error-message">{validationErrors.UserName}</p>
        )}
        <input
          placeholder="Username"
          type="text"
          name="UserName"
          value={formDataWriter.UserName}
          onChange={handleChange}
        />
        {validationErrors.Email && (
          <p className="error-message">{validationErrors.Email}</p>
        )}
        <input
          placeholder="Email"
          type="email"
          name="Email"
          value={formDataWriter.Email}
          onChange={handleChange}
        />
        {validationErrors.Password && (
          <p className="error-message">{validationErrors.Password}</p>
        )}
        <input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          name="Password"
          value={formDataWriter.Password}
          onChange={handleChange}
        />
        {showPassword ? (
                  <FiEyeOff
                    onClick={() => setShowPassword(false)}
                    className="Show"
                  />
                ) : (
                  <FiEye
                    onClick={() => setShowPassword(true)}
                    className="Show"
                  />
                )}
        <button type="submit" onClick={SignUp}>
          {loading ? <Loader /> : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default AdminDashCreateWriterNextContent;
