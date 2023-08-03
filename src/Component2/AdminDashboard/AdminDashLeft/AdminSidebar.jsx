import React from "react";
import { Link } from "react-router-dom";
import { BiTask } from "react-icons/bi";
import { GoTasklist } from "react-icons/go";
import { MdAddTask } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import { PiSignOut } from "react-icons/pi";
// import coreNet from "./CORENETrem.png";
import { useNavigate } from "react-router-dom";
import "./AdminSidebar.css";

const AdminSidebar = () => {
  const Nav = useNavigate();
 

  return (
    <div className="Adminsidebar">
      <div className="AdminSide_Wrap">
        <div className="Adminsidebarlogo">
          <img src="/CORENETrem.png" alt="" className="AdminLogo_SideBar" />
        </div>
        <div className="AdminsidebarNav">
          <div className="AdminsidebarNav_Wrap">
            <div
              onClick={() => Nav("/adminpage/admintaskoverview")}
              className="Admintask"
            >
              <BiTask />
              <p> Task Overview</p>
            </div>
            <div
              className="Admintask"
              onClick={() => Nav("/adminpage/admintaskassign")}
            >
              <GoTasklist />
              <p>Task Assignment</p>
            </div>
            <div className="Admintask" onClick={() => Nav("/adminpage/admincreatewriter")}>
              <MdAddTask />
              <p> Create writer</p>
            </div>
            <div className="Admintask" onClick={()=> Nav("/adminpage/adminallwriter")}>
              <BsListTask />
              <p>All writers</p>
            </div>
          </div>
          <div onClick={() => Nav("../signout")} className="AdminSignOutDiv">
            <PiSignOut />
            <p>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
