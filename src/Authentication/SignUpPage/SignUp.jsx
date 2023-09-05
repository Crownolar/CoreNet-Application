import React, { useContext, useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiEye, FiEyeOff } from "react-icons/fi";
// import bgImg from "../SignUpPage/SignImg.png";
import "../SignUpPage/SignUpMedia.css";
import axios from "axios";
import { ThemeContext } from "../ContextApi/Contextapi";
import { updateFormData, updateUserSignUp } from "../../Redux/ActionState/ActionState";
import { userData } from "../../Redux/ActionState/ActionState";
import Loader from "../../Loader/Loader";
import "animate.css";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [popup, setPopUp] = useState(false);
  const dispatch = useDispatch();
  const Nav = useNavigate();
  const formData = useSelector((state) => state.stores.formData);
  const user = useSelector((state) => state.stores.user);
  // const Message = userData.res?.data?.data
  // console.log(Message);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  const [passwordError, setPasswordError] = useState("");

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const errors = { ...validationErrors };
  
    if (value.trim() === "") {
      errors[name] = "This field cannot be left empty";
    } else {
      errors[name] = "";
    }
  
    setValidationErrors(errors);
  };

  const {login_alert} = useContext(ThemeContext)
   

  const isPasswordValid = (password) => {
    const minLength = 8;
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(
      password
    );
    return password.length >= minLength && hasSpecialChar;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const SignUp = (e) => {
    e.preventDefault();
    setLoading(true);

    const errors = {};

    if (!formData.FirstName.trim()) {
      errors.FirstName = "First Name is required";
    }
  
    if (!formData.Surname.trim()) {
      errors.Surname = "Surname is required";
    }
  
    if (!formData.UserName.trim()) {
      errors.UserName = "Username is required";
    }
  
    if (!formData.Email) {
      errors.Email = "Email is required";
    } else if (!isValidEmail(formData.Email)) {
      errors.Email = "Invalid email address";
    }

    if (!formData.Password) {
      errors.Password = "Password is required";
    } else if (!isPasswordValid(formData.Password)) {
      errors.Password =
        "Password should be at least 8 characters long and contain a special character";
      setPasswordError(
        "Password should be at least 8 characters long and contain a special character"
      );
    } else {
      setPasswordError("");
    }

    setValidationErrors(errors);

    if (Object.keys(errors).length > 0) {
      setLoading(false);
      setValidationErrors(errors);
      return;
    }

    if (!formData.CompanyName.trim()) {
      errors.CompanyName = "Company name is required";
    }

    if (Object.keys(errors).length > 0) {
      setLoading(false);
      setValidationErrors(errors);
      return;
    }

    const url = "https://corenet-api.onrender.com/api/signup";
    console.log(url);

    axios
      .post(url, formData)
      .then((res) => {
        console.log(res);
        dispatch(updateUserSignUp(res.data.data));
        login_alert()
        setSuccess(res.data.data.message)
        setLoading(false);
        dispatch(updateFormData({
          FirstName: "",
          Surname: "",
          UserName: "",
          Email: "",
          Password: "",
          CompanyName: "",
        }));
        Nav("/login");
      })
      .catch((error) => {
        console.error("Error:", error);
        if (error.response) {
          console.error("Response Data:", error.response.data);
          setError(error.response.data.message);
          setLoading(false);
        }
      });
    // console.log(SignUp);
  };

  return (
    <div className={"SignUpPage"}>
      <div className="SignUpWrap">
        <div className="SignUpimage">
          <img src="/SignImg.png" alt="" />
        </div>
        <div className="SignUp">
          <div className="SignUpWrap2">
            <div className="signUpText">
              <h3>Get Started with coreNet</h3>
            </div>
            <div className="SignUpInput">
              <div className="SignUpInputWrap">
                <input
                  type="text"
                  placeholder="Enter your Firstname"
                  name="FirstName"
                  value={formData.FirstName}
                  onChange={handleChange}
                  // onBlur={handleBlur}
                />
                {validationErrors.FirstName && (
                  <p className="error-message">{validationErrors.FirstName}</p>
                )}
              </div>
              <div className="SignUpInputWrap">
                <input
                  type="text"
                  placeholder="Enter your Surname"
                  name="Surname"
                  value={formData.Surname}
                  onChange={handleChange}
                  // onBlur={handleBlur}
                />
                {validationErrors.Surname && (
                  <p className="error-message">{validationErrors.Surname}</p>
                )}
              </div>
              <div className="SignUpInputWrap">
                <input
                  type="text"
                  placeholder="Enter your Username"
                  name="UserName"
                  value={formData.UserName}
                  onChange={handleChange}
                  // onBlur={handleBlur}
                />
                {validationErrors.UserName && (
                  <p className="error-message">{validationErrors.UserName}</p>
                )}
              </div>
              <div className="SignUpInputWrap">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                />
                {validationErrors.Email && (
                  <p className="error-message">{validationErrors.Email}</p>
                )}
              </div>
              <div className="SignUpInputWrap">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your Password"
                  name="Password"
                  value={formData.Password}
                  onChange={handleChange}
                />
                {validationErrors.Password && (
                  <p className="error-message">{validationErrors.Password}</p>
                )}
                {passwordError && (
                  <p className="error-message">{passwordError}</p>
                )}
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
              </div>
              <div className="SignUpInputWrap">
                <input
                  type="text"
                  placeholder="Enter your company's name"
                  name="CompanyName"
                  value={formData.CompanyName}
                  onChange={handleChange}
                  // onBlur={handleBlur}
                />
                {validationErrors.CompanyName && (
                  <p className="error-message">
                    {validationErrors.CompanyName}
                  </p>
                )}
              </div>
              <div className="SignUpInputWrap1">
                <button className="BTN" onClick={() => Nav("../")}>
                  Back
                </button>
                <button className="BTN1" onClick={SignUp}>
                  {loading ? <Loader /> : "Sign Up"}
                </button>
              </div>
              {error && <p className="error-message">{error}</p>}
              <div className="SignUpInputWrap3">
                <p>
                  Already have an account?{" "}
                  <span onClick={() => Nav("../login")}> Sign in</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

// import React, { useContext, useState } from "react";
// import "./SignUp.css";
// import { useNavigate } from "react-router-dom";
// import { FiEye, FiEyeOff } from "react-icons/fi";
// import bgImg from "../SignUpPage/SignImg.png";
// import "../SignUpPage/SignUpMedia.css";
// import axios from "axios";
// import { ThemeContext } from "../ContextApi/Contextapi";

// const SignUp = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const Nav = useNavigate();
//   const { login_alert } = useContext(ThemeContext);

//   const [formData, setFormData] = useState({
//     FirstName: "",
//     Surname: "",
//     UserName: "",
//     Email: "",
//     Password: "",
//     CompanyName: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const url = "https://corenet-api.onrender.com/api/signup";
//     console.log(url);

//     axios
//       .post(url, formData)
//       .then((res) => {
//         console.log(res);
//         Nav("/login");
//         login_alert();
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         if (error.response) {
//           console.error("Response Data:", error.response.data);
//         }
//       });
//   };

//   return (
//     <div className="LoginPage">
//       <div className="SignWrap">
//         <div className="imag">
//           <img src={bgImg} alt="" />
//         </div>
//         <div className="SignIn">
//           <div className="SignInWrap">
//             <div className="signText">
//               <h1>Sign Up</h1>
//               <p>Get Started with coreNet</p>
//             </div>
//             <form onSubmit={handleSubmit} className="input">
//               <div className="EText">
//                 <input
//                   type="text"
//                   placeholder="Enter your Firstname"
//                   name="FirstName"
//                   value={formData.FirstName}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="EText">
//                 <input
//                   type="text"
//                   placeholder="Enter your Surname"
//                   name="Surname"
//                   value={formData.Surname}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="EText">
//                 <input
//                   type="text"
//                   placeholder="Enter your Username"
//                   name="UserName"
//                   value={formData.UserName}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="EText">
//                 <input
//                   type="email"
//                   placeholder="Enter your Email"
//                   name="Email"
//                   value={formData.Email}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="EText">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Enter your Pasword"
//                   name="Password"
//                   value={formData.Password}
//                   onChange={handleChange}
//                 />
//                 {showPassword ? (
//                   <FiEyeOff
//                     onClick={() => setShowPassword(false)}
//                     className="Show"
//                   />
//                 ) : (
//                   <FiEye
//                     onClick={() => setShowPassword(true)}
//                     className="Show"
//                   />
//                 )}
//               </div>
//               <div className="EText">
//                 <input
//                   type="text"
//                   placeholder="Enter your company's name"
//                   name="CompanyName"
//                   value={formData.CompanyName}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="EText1">
//                 <button type="submit">Sign Up</button>
//               </div>
//               <div className="EText1">
//                 <p>
//                   Already have an account?{" "}
//                   <span
//                     style={{ cursor: "pointer", color: "#0455B4" }}
//                     onClick={() => Nav("../login")}
//                   >
//                     Sign in
//                   </span>
//                 </p>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
