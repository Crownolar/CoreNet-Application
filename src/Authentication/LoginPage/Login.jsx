import React, { useContext, useState } from "react";
import "./Login.css";
import bgImg from "../LoginPage/SignImg.png";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./Log.css";
import axios from "axios";
import { ThemeContext } from "../ContextApi/Contextapi";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../Redux/ActionState/ActionState";
import { updateFormDataSignin } from "../../Redux/ActionState/ActionState";
import Loader from "../../Loader/Loader";
import 'animate.css'


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch()
  const Nav = useNavigate();
  const formDatasignin = useSelector((state) => state.stores.formDatasignin);
  // const{verifyAlert} = useContext(ThemeContext)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopuperror, setShowPopupError] = useState(false);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormDataSignin({[name]: value}))
  };

  

  
  const SignIn = (e) => {
    e.preventDefault();
    setLoading(true)

    // const errors = {}

    // if (!formData.FirstName) {
    //   errors.FirstName = "First Name is required";
    // }

    // if (!formData.Surname) {
    //   errors.Surname = "Surname is required";
    // }

    const url = "https://corenet-api.onrender.com/api/login";
    console.log(url);

    axios
      .post(url, formDatasignin)
      .then(function(res){
        console.log(res);
        setLoading(false)
        console.log(res.data.data);
        res.data.data.email === formDatasignin.email ? dispatch(userData(res.data.data)): null
        dispatch(updateFormDataSignin({
          Email: "",
          Password: "",
        }))
          Nav("/adminpage/admindashhome");

      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
        if (error.response) {
          console.error("Response Data:", error.response.data);
          setError(error.response.data.message);
        }
      });
  };

  const Resend = () => {
    const url = `https://corenet-api.onrender.com/api/resend-email`
    axios
    .post(url, {Email})
    .then(function(res) {
      console.log(res)
      setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 10000);
    })
    .catch((error) => {
      console.error("Error:", error);
      setShowPopupError(true);
        setTimeout(() => {
          setShowPopupError(false);
        }, 10000);
      if (error.response) {
        console.error("Response Data:", error.response.data);
      }
    });
  }

  return (
    <div className="AdminLoginPage">
      {showPopup && (
        <div className="popup">
          
          <p>Login Successful</p>
        </div>
      )}
       {/* {verifyAlert && <div className='AdminwelcomeMssg'>
                    <p>Please check your Email a verification link has been sent to you</p>
                    </div>} */}
      <div className="SignWrap">
        <div className="imag">
          <img src={bgImg} alt="" />
        </div>
        <div className="SignIn">
          <div className="SignInWrap">
            <div className="signText">
              <h3>Get Started with coreNet</h3>
              <p>
              Didn't receive an Email?{" "}
              <span style={{color: "#0455B4"}} onClick={Resend}>Resend verification Email</span>{" "}
            </p>
            </div>
            <div className="input">
              <div className="EText">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  name="Email"
                  value={formDatasignin.Email}
                  onChange={handleChange}
                />
              </div>
              <div className="SignInInputPassword">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your Password"
                  name="Password"
                  value={formDatasignin.Password}
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
              <div className="ETextCheckbox">
                <input className="checks" type="checkbox" onClick={()=> Nav("/userlogin")}/>
                <span>Access for Writer</span>
              </div>
              {error && <p className="error-message">{error}</p>}
              <div className="forgotpassword">
                <p onClick={() => Nav("/adminforgotpassword")}>Forgot Password?</p>
              </div>
              <div className="EText1">
                <button onClick={SignIn}>{loading ? <Loader /> : "Sign In"}</button>
              </div>
              <div className="EText1">
                <p>
                  Don't have an account yet?{" "}
                  <span
                    style={{ cursor: "pointer", color: "#0455B4" }}
                    onClick={() => Nav("/signup")}
                  >
                    Sign Up
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

export default Login;
