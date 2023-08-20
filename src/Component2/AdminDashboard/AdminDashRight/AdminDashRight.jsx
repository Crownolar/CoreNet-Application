import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import AdminTaskOveview from "./AdminTaskOverview/AdminTaskOveview";
import AdminTaskAssign from "./AdminTaskAssign/AdminTaskAssign.jsx";
import "./AdminDashRight.css";
// import { FaRegCircle } from "react-icons/fa6";
import { BiTask } from "react-icons/bi";
import { GoTasklist } from "react-icons/go";
import { MdAddTask } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import { PiSignOut } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import AdminDashCreateWriter from "./AdminDashCreateWriter/AdminDashCreateWriter";
import AdminAllWriter from "./AdminAllWriter/AdminAllWriter";
import AdminDashCreateWriterNextContent from "./AdminDashCreateWriter/AdminDashCreateWriterNextContent/AdminDashCreateWriterNextContent";
import { useSelector } from "react-redux";
import "animate.css";
import Profile from "../../Pages/Profile/Profile";
import AdminAllWriterDesc from "./AdminAllWriter/AdminAllWriterDesc/AdminAllWriterDesc";
import AdminTaskAssignPage from "./AdminTaskAssign/AdminTaskAssignPage/AdminTaskAssignPage";
import { TbHomeCheck } from "react-icons/tb";
import AdminDashHome from "./AdminDashHome/AdminDashHome";
import AdminChangePassword from "../../Pages/Profile/AdminChangePAssword/AdminChangePassword";

const AdminDashRight = () => {
  const [openSiderBar, setOpenSideBar] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();
  const User = useSelector((state) => state.stores.user);

  const handlecloseMobile = () => {
    setOpenSideBar(false);
  };

  const Navigate = (path) => {
    navigate(path);
    handlecloseMobile();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const MobileDropDown = openSiderBar && (
    <div
      className="Adminsidebar_MobileView"
      style={{
        animation: openSiderBar ? null : "fadeInRight",
        animationDuration: openSiderBar ? null : "0.01s",
      }}
    >
      <div className="AdminSideWrap">
        <div className="Adminsidebarlogo">
          <div className="iconclose">
            <AiOutlineClose
              className="AdminSideBarCloseIcon"
              onClick={() => setOpenSideBar(!openSiderBar)}
            />
          </div>
          <div className="logoimage">
            <img
              src={openSiderBar ? "CORENETrem.png" : "/LogoCorerem.png"}
              alt=""
              className="AdminLogo_SideBar"
              onClick={() => Navigate("/")}
            />
          </div>
        </div>
        <div className="AdminsidebarNav">
          <div className="AdminsidebarNav_Wrap">
            <div
              onClick={() => Navigate("/adminpage/admintaskoverview")}
              className="Admintask"
            >
              <BiTask />
              <p> Task Overview</p>
            </div>
            <div
              onClick={() => Navigate("/adminpage/admintaskassign")}
              className="Admintask"
            >
              <GoTasklist />
              <p>Task Assignment</p>
            </div>
            <div
              onClick={() => Navigate("/adminpage/admincreatewriter")}
              className="Admintask"
            >
              <MdAddTask />
              <p> Create writer</p>
            </div>
            <div
              onClick={() => Navigate("/adminpage/adminallwriter")}
              className="Admintask"
            >
              <BsListTask />
              <p>All writers</p>
            </div>
          </div>
          <div
            className="AdminSignOutDiv"
            onClick={() => Navigate("../signout")}
          >
            <PiSignOut />
            <p>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="AdminDashRightMain">
      <div className="AdminDashRightHeader">
        <div className="AdminDashRightHeader_Wrap">
          <h3
            onClick={() => Navigate("/adminpage/profile")}
            style={{ cursor: "pointer" }}
          >
            {User.UserName}
          </h3>
          {User && User.UserName ? <h4>Welcome To CoreNet</h4> : null}
          <p className="AdminNotificationIcon">Notify</p>
          <div className="AdminUserIcon">
            {openSiderBar ? (
              // <RxHamburgerMenu onClick={() => setOpenSideBar(!openSiderBar)} />
              ""
            ) : (
              <RxHamburgerMenu
                style={{ fontSize: "25px" }}
                onClick={() => setOpenSideBar(!openSiderBar)}
              />
            )}
            {openSiderBar && MobileDropDown}
          </div>
        </div>
      </div>
      <div className="AdminDashRightContent">
        {/* {showWelcome && User && (
          <div className="welcome-message">
            <h3>Welcome to CoreNet Dashboard!</h3>
            <p>Explore, manage, and conquer your network like never before.</p>
          </div>
        )} */}

        

        <Routes>
          <Route path="/admindashhome" element={<AdminDashHome />} />
          <Route path="/admintaskoverview" element={<AdminTaskOveview />} />
          <Route path="/admintaskassign/*" element={<AdminTaskAssign />} />
          <Route
            path="/admincreatewriter/*"
            element={<AdminDashCreateWriter />}
          />
          <Route path="/adminallwriter/*" element={<AdminAllWriter />} />
          <Route path="/adminchangepassword" element={<AdminChangePassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/adminallwriterdesc/:id"
            element={<AdminAllWriterDesc />}
          />
          <Route
            path="/admintaskassignpage/:id"
            element={<AdminTaskAssignPage />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashRight;
