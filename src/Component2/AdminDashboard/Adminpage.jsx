import React, { useState } from "react";
import AdminSidebar from "./AdminDashLeft/AdminSidebar";
import AdminDashRight from "./AdminDashRight/AdminDashRight";
import "./Adminpage.css";
import { useDispatch, useSelector } from "react-redux";

const Adminpage = () => {
  const User = useSelector((state) => state.signup.user)
  const [blur, setBlur] = useState(false)
  // const dispatch = useDispatch()




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
