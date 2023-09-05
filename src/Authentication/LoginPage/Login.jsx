import React, { useContext, useEffect, useState } from "react";
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
import "animate.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const Nav = useNavigate();
  const formDatasignin = useSelector((state) => state.stores.formDatasignin);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopuperror, setShowPopupError] = useState(false);
  const Email = formDatasignin.Email;

  const { verifyAlert, verifiedUser } = useContext(ThemeContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormDataSignin({ [name]: value }));
  };

  const SignIn = (e) => {
    e.preventDefault();
    setLoading(true);
    const url = "https://corenet-api.onrender.com/api/login";
    console.log(url);

    axios
      .post(url, formDatasignin)
      .then(function (res) {
        console.log(res);
        dispatch(userData(res.data.data));
        setLoading(false);
        console.log(res.data.data);
        res.data.data.email === formDatasignin.email
          ? dispatch(userData(res.data.data))
          : null;
        dispatch(
          updateFormDataSignin({
            Email: "",
            Password: "",
          })
        );
        Nav("/adminpage/admindashhome");
        // login_alert()
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
        if (error.response) {
          console.error("Response Data:", error.response.data);
          setError(error.response.data.message);
        }
        if (error.response && error.response.data.failed) {
          setErrors(error.response.data.failed);
        }
      });
  };

  return (
    <div className="AdminLoginPage">
      {verifyAlert && (
        <div className="popup">
          <p style={{color: "black"}}>Check your Email for verification</p>
        </div>
      )}
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
                <span
                  onClick={() => Nav("/adminresendemailverification")}
                >
                  Resend verification Email
                </span>
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
                <input
                  className="checks"
                  type="checkbox"
                  onClick={() => Nav("/userlogin")}
                />
                <span>Access for Writer</span>
              </div>

              <div style={{ display: "flex" }}>
                {error && errors ? (
                  <p className="error-message">{errors}</p>
                ) : (
                  error && <p className="error-message">{error}</p>
                )}
              </div>
              <div className="forgotpassword">
                <p onClick={() => Nav("/adminforgotpassword")}>
                  Forgot Password?
                </p>
              </div>
              <div className="EText1">
                <button className="Lbtn1" onClick={() => Nav("../")}>Back</button>
                <button className="Lbtn" onClick={SignIn}>
                  {loading ? <Loader /> : "Sign In"}
                </button>
              </div>
              <div className="EText4">
                <p>
                  Don't have an account yet?
                  <span
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
