import React, { useEffect, useState } from "react";
import AdminSidebar from "./AdminDashLeft/AdminSidebar";
import AdminDashRight from "./AdminDashRight/AdminDashRight";
import "./Adminpage.css";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../Redux/ActionState/ActionState";

const Adminpage = () => {
  const User = useSelector((state) => state.persistedReducer.user)
  const [showWelcome, setShowWelcome] = useState(true);
  const userInfo = userData
  // const dispatch = useDispatch()




  return (
    <div className="Admin_Mainbody">
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
