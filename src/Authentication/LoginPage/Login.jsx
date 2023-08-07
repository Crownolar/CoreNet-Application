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
// import { EditorID } from "../../Redux/ActionState/ActionState";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch()
  const Nav = useNavigate();
  const formDatasignin = useSelector((state) => state.signup.formDatasignin);
  const {login_alert} = useContext(ThemeContext)
  const{verifyAlert} = useContext(ThemeContext)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormDataSignin({[name]: value}))
  };

  const SignIn = (e) => {
    e.preventDefault();
    setLoading(true)
    const url = "https://corenet-api.onrender.com/api/login";
    console.log(url);

    axios
      .post(url, formDatasignin)
      .then(function(res){
        console.log(res);
        setLoading(false)
        console.log(res.data.data);
        res.data.data.email === formDatasignin.email ? dispatch(userData(res.data.data)): null
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
              <h3>Get Started with coreNet</h3>
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
                <input type="checkbox" onClick={()=> Nav("/userlogin")}/>
                <span>Not a Writer</span>
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
