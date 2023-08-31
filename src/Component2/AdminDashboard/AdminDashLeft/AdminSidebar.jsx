import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiTask } from "react-icons/bi";
import { GoTasklist } from "react-icons/go";
import { MdAddTask } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import { PiSignOut } from "react-icons/pi";
// import coreNet from "./CORENETrem.png";
import { useNavigate } from "react-router-dom";
import "./AdminSidebar.css";
import { TbHomeCheck } from "react-icons/tb";
import { useSelector } from "react-redux";

const AdminSidebar = () => {
  const Nav = useNavigate();
  const [activeTab, setActiveTab] = useState("");
  const user = useSelector((state) => state.stores.user)

  const handleSignOut = () => {
    if (user) {
      Nav("../signout");
    } else {
      Nav("/login");
    }
  };

  //   const handlecloseMobile = () => {
  //     setMobile(false)
  // }

  //   const Navigate = (path) => {
  //     Nav(path);
  //     handlecloseMobile
  //   }

  return (
    <div className="Adminsidebar">
      <div className="AdminSide_Wrap">
        <div className="Adminsidebarlogo" onClick={() => Nav("/")}>
          <img src="/CORENETrem.png" alt="" className="AdminLogo_SideBar" />
        </div>
        <div className="AdminsidebarNav">
          <div className="AdminsidebarNav_Wrap">
            <div
              onClick={() => {
                setActiveTab("admintaskoverview");
                Nav("/adminpage/admintaskoverview");
                console.log("activeTab");
              }}
              className={`Admintask ${
                activeTab === "admintaskoverview" ? "active" : ""
              }`}
            >
              <BiTask />
              <p> Task Overview</p>
            </div>
            <div
              onClick={() => {
                setActiveTab("admintaskassign");
                Nav("/adminpage/admintaskassign");
                console.log("activeTab");
              }}
              className={`Admintask ${
                activeTab === "admintaskassign" ? "active" : ""
              }`}
            >
              <GoTasklist />
              <p>Task Assignment</p>
            </div>
            <div
              onClick={() => {
                setActiveTab("admincreatewriter");
                Nav("/adminpage/admincreatewriter");
                console.log("activeTab");
              }}
              className={`Admintask ${
                activeTab === "admincreatewriter" ? "active" : ""
              }`}
            >
              <MdAddTask />
              <p> Create writer</p>
            </div>
            <div
              onClick={() => {
                setActiveTab("adminallwriter");
                Nav("/adminpage/adminallwriter");
                console.log("activeTab");
              }}
              className={`Admintask ${
                activeTab === "adminallwriter" ? "active" : ""
              }`}
            >
              <BsListTask />
              <p>All writers</p>
            </div>
          </div>
          <div onClick={handleSignOut} className="AdminSignOutDiv">
            <PiSignOut />
            <p>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
