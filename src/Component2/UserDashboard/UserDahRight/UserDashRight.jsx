import React, { useEffect } from "react";
import "./UserDashRight.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserTaskDetail from "../UserDahRight/UserTaskDetails/UserTaskDetail";
import TaskUpdate from "../UserDahRight/TaskUpdate/TaskUpdate";
import AcceptTask from "../UserDahRight/AcceptTask/AcceptTask";
import { useState } from "react";
import { PiSignOut, PiUserCircleThin } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { RxHamburgerMenu, RxUpdate } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import UserProfile from "../../Pages/Profile/UserProfile"
import UserDashHome from "./UserDashHome/UserDashHome"
import { FcAcceptDatabase } from "react-icons/fc";
import { CgDetailsMore } from "react-icons/cg";
import Authenticate2 from "../../../Authentication/Authenticate2";
import AllTaskDesc from "./AcceptTask/AllTaskDesc/AllTaskDesc";
import UserChangePassword from "../../Pages/Profile/UserChangePassword/UserChangePassword";

const UserDashRight = () => {
  const [openSiderBar, setOpenSideBar] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();
  const User = useSelector((state) => state.stores.formDataWriter);
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
    <div className="main_MobileView">
      <div className="main2_MobileView">
        <div className="leftBarHolder_MobileView">
          <div className="leftHolderAlign_MobileView">
            <div className="topSpace"></div>
            <div className="contentHolder">
              <div className="iconHolder">
                <div className="icon">
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

              <div className="contentSpace"></div>
              <div className="contentSpace"></div>
              <div className="contentSpace"></div>
              <div className="contentSpace"></div>

              <div className="content">
                <div
                  className="newTask"
                  onClick={() => Navigate("/userpage/accepttask", "All Task")}
                >
                  <div className="newTaskIcon">
                    <FcAcceptDatabase className="newTaskIconContent" />
                  </div>
                  <div className="newTaskText"> All Task</div>
                </div>

                <div className="contentSpace"></div>
                <div className="contentSpace"></div>

                <div
                  className="newTask"
                  onClick={() => Navigate("/userpage/taskupdate", "Task Update")}
                >
                  <div className="newTaskIcon">
                    <RxUpdate className="newTaskIconContent" />
                  </div>
                  <div className="newTaskText"> Task Update</div>
                </div>

                <div className="contentSpace"></div>
                <div className="contentSpace"></div>

                {/* <div
                  className="newTask"
                  onClick={() => Navigate("/userpage/usertaskdetail", "Task Detail")}
                >
                  <div className="newTaskIcon">
                    <CgDetailsMore className="newTaskIconContent" />
                  </div>
                  <div className="newTaskText"> Task Detail</div>
                </div> */}
              </div>

              <div className="topSpace"></div>
              <div className="topSpace"></div>
              <div className="topSpace"></div>
              <div className="topSpace"></div>
              <div className="iconHolder"></div>
              <div className="user" onClick={() => Navigate("../usersignout")}>
              <PiSignOut className="signouut" />
                Sign Out
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className="userDashBoardHolder">
        <div className="UserDashRightHeader">
          <div className="UserDashRightHeader_Wrap">
          <div className="optUser11" onClick={() => setShow(!show)}>
            {Uname?.charAt(0)}
          </div>
          {/* {User && User.UserName ? <h4>Welcome To CoreNet</h4> : null} */}
          {selectedSection !== "Welcome to CoreNet"
            ? selectedSection
            : "Welcome To CoreNet"}
            <h3 style={{ cursor: "pointer" }}>{User.UserName}</h3>
          {show ? (
            <div className="userprofile11">
              <ul className="userbox11">
                {User ? (
                  <li
                    // onClick={() => Navigate("/adminpage/profile", "Profile")}
                    onClick={() => Navigate("/userpage/Userprofile", "Profile")}
                  >
                    Profile
                  </li>
                ) : null}
              </ul>
            </div>
          ) : null}
            <div className="UserUserIcon">
              {openSiderBar ? (
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
        <div className="UserDashRightContent">
          <Routes>
            <Route element={<Authenticate2 />}>
            <Route path="/usertaskdetail" element={<UserTaskDetail />} />
            <Route path="/userchangepassword" element={<UserChangePassword />} />
            <Route path="/userdashhome" element={<UserDashHome />} />
            <Route path="/accepttask/" element={<AcceptTask />} />
            <Route path="/alltaskdesc/:id" element={<AllTaskDesc />} />
            <Route path="/taskupdate" element={<TaskUpdate />} />
            <Route path="/userprofile" element={<UserProfile />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default UserDashRight;
