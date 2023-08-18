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

const UserLogin = () => {
    const [showPassword, setShowPassword] = useState(false);
  const user = useSelector((state) => state.persistedReducer.user);
  console.log(user)
    const Nav = useNavigate();
    const dispatch = useDispatch()
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
          dispatch(updateformDataWriter(res.data.data))
          if(user){
            Nav("/userpage/userdashhome");}
            else{
              console.log("Admin can't login here");
            }
          
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
                {/* <h1>Sign In</h1> */}
                <h2>Get Started with coreNet</h2>
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
                <div className="ETextCheckbox">
                <input type="checkbox" onClick={()=> Nav("/login")}/>
                <span>Access for Editor</span>
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