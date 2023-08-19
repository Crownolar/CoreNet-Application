import React, { useEffect, useState } from "react";
import AdminSidebar from "./AdminDashLeft/AdminSidebar";
import AdminDashRight from "./AdminDashRight/AdminDashRight";
import "./Adminpage.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { userData } from "../../Redux/ActionState/ActionState";

const Adminpage = () => {
  const User = useSelector((state) => state.stores.user)
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate()

useEffect(() => {
  if (!User && User.isVerified === false) {
    navigate("/login"); 
  }
},[])
//



  return (
    <div className="Admin_Mainbody">
      <div className="Admin_MainBodyWrap">
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
