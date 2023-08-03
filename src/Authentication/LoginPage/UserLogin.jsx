import React, { useContext, useState } from "react";
import "./Login.css";
import bgImg from "../LoginPage/SignImg.png";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Log.css";
import axios from "axios";
import { ThemeContext } from "../ContextApi/Contextapi";

const UserLogin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const Nav = useNavigate();
  const{verifyAlert} = useContext(ThemeContext)
    const [formData, setFormData] = useState({
      UserName: "",
      Password: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
  
    const SignIn = (e) => {
      e.preventDefault();
      const url = "https://corenet-api.onrender.com/api/log-in";
      console.log(url);
  
      axios
        .post(url, formData)
        .then((res) => {
          console.log(res);
          Nav("/adminpage");
        })
        .catch((error) => {
          console.error("Error:", error);
          if (error.response) {
            console.error("Response Data:", error.response.data);
          }
        });
    };
  
    return (
      <div className="AdminLoginPage">
         {verifyAlert && <div className='AdminwelcomeMssg'>
                  <div>
                      <p>Please check your Email a verification link has been sent to you</p>
                  </div>
              </div>}
        <div className="SignWrap">
          <div className="imag">
            <img src={bgImg} alt="" />
          </div>
          <div className="SignIn">
            <div className="SignInWrap">
              <div className="signText">
                <h1>Sign In</h1>
                <p>Get Started with coreNet</p>
              </div>
              <div className="input">
                <div className="EText">
                  <input
                    type="email"
                    placeholder="Enter your UserName"
                    name="UserName"
                    value={formData.UserName}
                    onChange={handleChange}
                  />
                </div>
                <div className="EText">
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
                <div className="EText">
                  <input type="text" placeholder="Enter your company's name" />
                </div>
                <div className="EText1">
                  <button onClick={SignIn}>Sign In</button>
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
}

export default UserLogin