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
// import { EditorID } from "../../Redux/ActionState/ActionState";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch()
  const Nav = useNavigate();
  const formDatasignin = useSelector((state) => state.signup.formDatasignin);
  const {login_alert} = useContext(ThemeContext)
  const{verifyAlert} = useContext(ThemeContext)
  // const formData = useState({
  //   UserName: "",
  //   Password: "",
  // });
  // const [formData, setFormData] = useState({
  //   UserName: "",
  //   Password: "",
  // });

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormDataSignin({[name]: value}))
    //   }
  };
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  // };

  const SignIn = (e) => {
    e.preventDefault();
    const url = "https://corenet-api.onrender.com/api/login";
    console.log(url);

    axios
      .post(url, formDatasignin)
      .then(function(res){
        console.log(res);
        res.data.data.email === formDatasignin.email ? dispatch(userData(res.data.data)): null
        // dispatch(EditorID(res.data.data.editorId))
        // console.log(res.data.data.editorId);

        // const userInfo = res.data.data.editorId
        // if(userInfo){

        // }
        // if(userInfo.isVerified === true) {
        //   Nav("/adminpage");
        // }else{
        //   login_alert()
        // }
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
                  value={formDatasignin.UserName}
                  onChange={handleChange}
                />
              </div>
              <div className="EText">
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
                <span>Not an Editor</span>
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
};

export default Login;
