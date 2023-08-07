import React, { useContext, useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { FiEye, FiEyeOff } from "react-icons/fi";
// import bgImg from "../SignUpPage/SignImg.png";
import "../SignUpPage/SignUpMedia.css";
import axios from "axios";
import { ThemeContext } from "../ContextApi/Contextapi";
import { updateFormData } from "../../Redux/ActionState/ActionState";
import { userData } from "../../Redux/ActionState/ActionState"
import Loader from "../../Loader/Loader";
import 'animate.css'



const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [signInAnimation, setSignInAnimation] = useState(false);
  const dispatch = useDispatch()
  const Nav = useNavigate();
  const formData = useSelector((state) => state.signup.formData);
  const {login_alert} = useContext(ThemeContext);
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({[name]: value }))
  };

  

  


  const SignUp = (e) => {
    e.preventDefault();
    setLoading(true)
    const url = "https://corenet-api.onrender.com/api/signup";
  console.log(url);

    axios
      .post(url, formData)
      .then((res) => {
        console.log(res);
        setLoading(false)
        dispatch(userData(res.data.data))
        Nav("/login");
        login_alert()
        
      })
      .catch((error) => {
        console.error('Error:', error);
        if (error.response) {
          console.error('Response Data:', error.response.data);
        }
      });
    // console.log(SignUp);
 };



  return (
    <div className="SignUpPage">
      <div className="SignUpWrap">
        <div className="SignUpimage">
          <img src='/SignImg.png' alt="" />
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
                />
              </div>
              <div className="SignUpInputWrap">
                <input
                  type="text"
                  placeholder="Enter your Surname"
                  name="Surname"
                  value={formData.Surname}
                  onChange={handleChange}
                />
              </div>
              <div className="SignUpInputWrap">
                <input
                  type="text"
                  placeholder="Enter your Username"
                  name="UserName"
                  value={formData.UserName}
                  onChange={handleChange}
                />
              </div>
              <div className="SignUpInputWrap">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}  
                />
              </div>
              <div className="SignUpInputWrap">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your Pasword"
                  name="Password"
                  value={formData.Password}
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
              </div>
              <div className="SignUpInputWrap">
                <input type="text" placeholder="Enter your company's name" name="CompanyName"
                  value={formData.CompanyName}
                  onChange={handleChange}/>
              </div>
              <div className="SignUpInputWrap1">
                <button onClick={SignUp}>{loading ? <Loader/> : "Sign Up"}</button>
                {/* <button onClick={() => Nav("../login")}>Sign Up</button> */}
              </div>
              <div className="SignUpInputWrap2">
                <p>
                  Already have an account?{" "}
                  <span
                    onClick={() => Nav("../login")}
                  >
                    Sign in
                  </span>
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

