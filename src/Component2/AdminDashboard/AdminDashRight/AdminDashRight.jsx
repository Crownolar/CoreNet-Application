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
import AdminChangePassword from "../../Pages/Profile/AdminChange/AdminChangePassword";
import AdminTaskOverviewDesc from "./AdminTaskOverview/AdminTaskOverviewDesc/AdminTaskOverviewDesc";
import Authenticate from "../../../Authentication/Authenticate";
import AdminAuth from "../../../Authentication/AdminAuth";
import AdminEditPage from "../../Pages/Profile/AdminEditPage/AdminEditPage";

const AdminDashRight = () => {
  const [openSiderBar, setOpenSideBar] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();
  const User = useSelector((state) => state.stores.user);
  const Uname = User.UserName;
  const [selectedSection, setSelectedSection] = useState("Welcome to CoreNet");
  const [show, setShow] = useState(false);

  const handlecloseMobile = () => {
    setOpenSideBar(false);
  };

  const Navigate = (path, sectionTitle) => {
    navigate(path);
    setSelectedSection(sectionTitle);
    handlecloseMobile();
  };

  // const Navigate = (path) => {
  //   navigate(path);
  //   handlecloseMobile();
  // };

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
              onClick={() =>
                Navigate("/adminpage/admintaskoverview", "Task Overview")
              }
              className="Admintask"
            >
              <BiTask />
              <span> Task Overview</span>
            </div>
            <div
              onClick={() =>
                Navigate("/adminpage/admintaskassign", "Task Assignment")
              }
              className="Admintask"
            >
              <GoTasklist />
              <span>Task Assignment</span>
            </div>
            <div
              onClick={() =>
                Navigate("/adminpage/admincreatewriter", "Create Writer")
              }
              className="Admintask"
            >
              <MdAddTask />
              <span> Create writer</span>
            </div>
            <div
              onClick={() =>
                Navigate("/adminpage/adminallwriter", "All Writer")
              }
              className="Admintask"
            >
              <BsListTask />
              <span>All writers</span>
            </div>
          </div>
          <div
            className="AdminSignOutDiv"
            onClick={() => Navigate("../signout")}
          >
            <PiSignOut />
            <span>Sign Out</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="AdminDashRightMain">
      <div className="AdminDashRightHeader">
        <div className="AdminDashRightHeader_Wrap">
          <div className="optUser1" onClick={() => setShow(!show)}>
            {Uname?.charAt(0)}
          </div>
          {selectedSection !== "Welcome to CoreNet"
            ? selectedSection
            : ""}
            <h3 style={{ cursor: "pointer" }}>{User.UserName}</h3>
          {show ? (
            <div className="userprofile">
              <ul className="userbox">
                {User ? (
                  <li
                    // onClick={() => Navigate("/adminpage/profile", "Profile")}
                    onClick={() => Navigate("/adminpage/profile")}
                  >
                    Profile
                  </li>
                ) : null}
              </ul>
            </div>
          ) : null}
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
          <Route element={<Authenticate />}>
            <Route
              path="/admincreatewriter/*"
              element={<AdminDashCreateWriter />}
            />
            <Route path="/admintaskassign/*" element={<AdminTaskAssign />} />
            <Route path="/admintaskoverview/*" element={<AdminTaskOveview />} />
            <Route path="/adminallwriter/*" element={<AdminAllWriter />} />
            <Route
              path="/admintaskoverviewdesc/:id"
              element={<AdminTaskOverviewDesc />}
            />
            <Route path="/profile/*" element={<Profile />} />
            <Route path="/admineditpage" element={<AdminEditPage />} />
            <Route
              path="/adminchangepassword"
              element={<AdminChangePassword />}
            />
            <Route
              path="/adminallwriterdesc/:id"
              element={<AdminAllWriterDesc />}
            />
            <Route
              path="/admintaskassignpage/:id"
              element={<AdminTaskAssignPage />}
            />
            <Route path="/admindashhome" element={<AdminDashHome />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashRight;
