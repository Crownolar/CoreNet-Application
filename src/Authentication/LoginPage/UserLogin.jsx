import React, { useContext, useState } from "react";
import "./Login.css";
import bgImg from "../LoginPage/SignImg.png";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Log.css";
import axios from "axios";
import { ThemeContext } from "../ContextApi/Contextapi";
import { useDispatch, useSelector } from "react-redux";
import { updateformDataWriter } from "../../Redux/ActionState/ActionState";
import Loader from "../../Loader/Loader";

const UserLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState(null);
  const [showPopuperror, setShowPopupError] = useState(false);

  const user = useSelector((state) => state.stores.user);
  // console.log(user);
  const Nav = useNavigate();
  const dispatch = useDispatch();
  const { verifyAlert } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const SignIn = (e) => {
    e.preventDefault();
    setLoading(true)

    const errors = {};

    if (!formData.Password) {
      errors.Password = "Password is required";
    } else if (formData.Password.length < 8) {
      errors.Password = "Password must be 8 characters and above";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.Password)) {
      errors.Password = "Password must contain at least one special character";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    const url = "https://corenet-api.onrender.com/api/log-in";
    console.log(url);

    axios
      .post(url, formData)
      .then((res) => {
        console.log(res);
        setLoading(false);
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 10000);
        dispatch(updateformDataWriter(res.data.data));
        console.log(res.data.data)
        if (user) {
          Nav("/userpage/userdashhome");
        } else {
          console.log("Admin can't login here");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false)
        setShowPopupError(true);
        setTimeout(() => {
          setShowPopupError(false);
        }, 10000);
        if (error.response) {
          console.error("Response Data:", error.response.data);
          setError(error.response.data.message);
        }
        if (error.response && error.response.data.failed) {
          setErrors(error.response.data.failed);
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
        <div className="AdminwelcomeMssg">
          <div>
            <p>
              Please check your Email a verification link has been sent to you
            </p>
          </div>
        </div>
      )}
      {showPopuperror && (
        <div className="popup">
          <p>Login Unsuccessful</p>
        </div>
      )}
      <div className="SignWrap">
        <div className="imag">
          <img src={bgImg} alt="" />
        </div>
        <div className="SignIn">
          <div className="SignInWrap">
            <div className="signText">
              {/* <h1>Sign In</h1> */}
              <h2>Get Started with coreNet</h2>
              {/* <p style={{color: "black"}}>
              Didn't receive an Email?{" "}
              <span style={{color: "#0455B4"}} onClick={Resend}>Resend verification Email</span>{" "}
            </p> */}
            </div>
            <div className="input">
              <div className="EText">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                />
              </div>
              <div className="SignInInputPassword">
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
              {error && errors ? (
                  <p className="error-message">{errors}</p>
                ) : (
                  error && <p className="error-message">{error}</p>
                )}
              {/* {errors && <p className="error-message">{errors}</p>} */}
              <div className="ETextCheckbox">
                <input type="checkbox" onClick={() => Nav("/login")} />
                <span>Access for Editor</span>
              </div>
              {/* {error && <p className="error-message">{error}</p>} */}
              <div className="forgotpassword">
                <p onClick={() => Nav("/userforgotpassword")}>Forgot Password?</p>
              </div>
              <div className="EText1">
              <button className="Lbtn1" onClick={() => Nav("../")}>
                  Back
                </button>
                <button className="Lbtn" onClick={SignIn}>
                  {loading ? <Loader /> : "Sign In"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
