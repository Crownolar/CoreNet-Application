import React, { useEffect, useState } from "react";
import AdminSidebar from "./AdminDashLeft/AdminSidebar";
import AdminDashRight from "./AdminDashRight/AdminDashRight";
import "./Adminpage.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { userData } from "../../Redux/ActionState/ActionState";

const Adminpage = () => {
  const User = useSelector((state) => state.persistedReducer.user)
  // console.log(User.isVerified);
  console.log(User);
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate()
  // const userInfo = userData
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   navigate()
  // },[navigate])




  return (
    <div className="Admin_Mainbody">
      {
        User ? navigate("./login") : null
      }
      <div className="Admin_MainBodyWrap">
        {/* {userInfo ? } */}
        <div className="Admin_Leftsidebar">
          <AdminSidebar />
        </div>
        <div className="Admin_Rightsidebar">
          <AdminDashRight />
        </div>
      </div>
    </div>
  );
};

export default Adminpage;
