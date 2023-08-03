import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import AdminTaskOveview from "./AdminTaskOverview/AdminTaskOveview";
import AdminTaskAssign from "./AdminTaskAssign/AdminTaskAssign";
import "./AdminDashRight.css";
import { FaRegCircle } from "react-icons/fa6";
import { BiTask } from "react-icons/bi";
import { GoTasklist } from "react-icons/go";
import { MdAddTask } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import { PiSignOut } from "react-icons/pi";
import AdminDashCreateWriter from "./AdminDashCreateWriter/AdminDashCreateWriter";
import AdminAllWriter from "./AdminAllWriter/AdminAllWriter";
import AdminDashCreateWriterNextContent from "./AdminDashCreateWriter/AdminDashCreateWriterNextContent/AdminDashCreateWriterNextContent";
const AdminDashRight = () => {
  const [openSiderBar, setOpenSideBar] = useState(false);
  const navigate = useNavigate();

  const MobileDropDown = (  

    openSiderBar && (
     <div className="Adminsidebar_MobileView">
       <div className=".AdminSide_Wrap">
         <div className="Adminsidebarlogo">
           <img src="/CORENETrem.png" alt="" className="AdminLogo_SideBar" />
         </div>
         <FaRegCircle className="AdminSideBarCloseIcon"  onClick={() => setOpenSideBar(!openSiderBar)}/>
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
             <div className="Admintask" onClick={() => navigate("./adminpage/admincreatewriter")}>
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
          <p>Admin Name</p>
          <p className="AdminNotificationIcon">Notify</p>
          <div className="AdminUserIcon">
            {
            openSiderBar ? 
              <FaRegCircle onClick={() => setOpenSideBar(!openSiderBar)} />
             : 
              <FaRegCircle onClick={() => setOpenSideBar(!openSiderBar)} />
            }
             {openSiderBar && MobileDropDown}
          </div> 
        </div>
      </div>
      <div className="AdminDashRightContent">
        <Routes>
          <Route path="/admintaskoverview" element={<AdminTaskOveview />} />
          <Route path="/admintaskassign" element={<AdminTaskAssign />} />
          <Route path="/admincreatewriter/*" element={<AdminDashCreateWriter />} />
          <Route path="/adminallwriter" element={<AdminAllWriter />} />
          {/* <Route path='/admincreatewriternextcontent' element={<AdminDashCreateWriterNextContent />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashRight;
