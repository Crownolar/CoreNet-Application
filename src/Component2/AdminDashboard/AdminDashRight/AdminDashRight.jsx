import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import AdminTaskOveview from "./AdminTaskOverview/AdminTaskOveview";
import AdminTaskAssign from "./AdminTaskAssign/AdminTaskAssign";
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
const AdminDashRight = () => {
  const [openSiderBar, setOpenSideBar] = useState(false);
  // const [logo, setLogo] = useState(false);
  const navigate = useNavigate();
  const User = useSelector((state) => state.signup.user);
  const UserName = User?.data?.data?.editorId

  const MobileDropDown = (  

    openSiderBar && (
     <div className="Adminsidebar_MobileView">
       <div className=".AdminSide_Wrap">
         <AiOutlineClose className="AdminSideBarCloseIcon"  onClick={() => setOpenSideBar(!openSiderBar)}/>
         <div className="Adminsidebarlogo">
           <img src={openSiderBar ? "/LogoCorerem.png" : "CORENETrem.png"} alt="" className="AdminLogo_SideBar" />
         </div>
         <div className="AdminsidebarNav">
           <div className="AdminsidebarNav_Wrap">
             <div
               onClick={() => navigate("/adminpage/admintaskoverview")}
               className="Admintask"
             >
               <BiTask />
               <p> Task Overview</p>
             </div>
             <div
               className="Admintask"
               onClick={() => navigate("/adminpage/admintaskassign")}
             >
               <GoTasklist />
               <p>Task Assignment</p>
             </div>
             <div className="Admintask" onClick={() => navigate("/adminpage/admincreatewriter")}>
               <MdAddTask />
               <p> Create writer</p>
             </div>
             <div className="Admintask" onClick={()=> navigate("/adminpage/adminallwriter")}>
               <BsListTask />
               <p>All writers</p>
             </div>
           </div>
           <div className="AdminSignOutDiv" onClick={() => navigate("../signout")}>
           <PiSignOut />
             <p>Sign Out</p>
           </div>
         </div>
       </div>
     </div>
   ));

  return (
    <div className="AdminDashRightMain">
      <div className="AdminDashRightHeader">
        <div className="AdminDashRightHeader_Wrap">
          {UserName}
          {/* {!User ? (<h3>Welcome to Corenet</h3>) : null}? */}
          {User ? ( <h4>Welcome To CoreNet</h4>  ) : null}
          <p className="AdminNotificationIcon">Notify</p>
          <div className="AdminUserIcon">
            {
            openSiderBar ? 
              <RxHamburgerMenu onClick={() => setOpenSideBar(!openSiderBar)} />
             : 
              <RxHamburgerMenu style={{fontSize: "25px"}} onClick={() => setOpenSideBar(!openSiderBar)} />
            }
             {openSiderBar && MobileDropDown}
          </div> 
        </div>
      </div>
      <div className="AdminDashRightContent" >
        <Routes>
          <Route path="/admintaskoverview" element={<AdminTaskOveview />} />
          <Route path="/admintaskassign" element={<AdminTaskAssign />} />
          <Route path="/admincreatewriter/*" element={<AdminDashCreateWriter />} />
          <Route path="/adminallwriter" element={<AdminAllWriter />} />
          {/* <Route path='/admincreatewriternextcontent' element={<AdminDashCreateWriterNextContent />} /> */}
        </Routes>
        {/* <button onClick={(()=> console.log("clicked"))}>clicke me</button> */}
      </div>
    </div>
  );
};

export default AdminDashRight;
