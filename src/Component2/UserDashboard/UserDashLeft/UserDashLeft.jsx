import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./UserDashLeft.css"
import { PiUserCircleThin } from "react-icons/pi"
import { GoHome } from "react-icons/go"

const UserDashLeft = () => {
//     const [newTaskClicked, setNewTaskClicked] = useState(false);
//   const [acceptTaskClicked, setAcceptTaskClicked] = useState(false);
const Nav = useNavigate();
const [activeTab, setActiveTab] = useState("");


//   const handleAcceptTaskClick = () => {
//     setAcceptTaskClicked(!acceptTaskClicked);
//   }

  return (
    <div className='main'>
    <div className='main2'>
    <div className='leftBarHolder'>
        <div className='leftHolderAlign'>
          <div className='topSpace'></div>
          <div className='contentHolder'>

            <div className='iconHolder' onClick={() => Nav("/")}>
              <div className='icon'>   <img src="/CORENETrem.png" alt="" className="AdminLogo_SideBar" /> </div>
            </div>
            <div className='contentSpace'></div>
            <div className='contentSpace'></div>
            <div className='contentSpace'></div>
            <div className='contentSpace'></div>

            <div className='content'>

              <div 
                  className={`newTask ${
                    activeTab === "accepttask" ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveTab("accepttask");
                    Nav("/userpage/accepttask");
                    console.log("activeTab");
                  }}>
                  <div className='newTaskIcon'> <GoHome className='newTaskIconContent' /></div>
                  <div className='newTaskText'> Accept Task</div>
                </div>

                <div className='contentSpace'></div>
                <div className='contentSpace'></div>

                <div 
                  className={`newTask ${
                    activeTab === "taskupdate" ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveTab("taskupdate");
                    Nav("/userpage/taskupdate");
                    console.log("activeTab");
                  }}>
                  <div className='newTaskIcon'> <GoHome className='newTaskIconContent' /></div>
                  <div className='newTaskText'> Task  Update</div>
                </div>

                <div className='contentSpace'></div>
                <div className='contentSpace'></div>

                <div 
                  className={`newTask ${
                    activeTab === "usertaskdetail" ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveTab("usertaskdetail");
                    Nav("/userpage/usertaskdetail");
                    console.log("activeTab");
                  }}>
                  <div className='newTaskIcon'> <GoHome className='newTaskIconContent' /></div>
                  <div className='newTaskText'> Task Detail</div>
                </div>



              </div>

            <div className='topSpace'></div>
            <div className='topSpace'></div>
            <div className='topSpace'></div>
            <div className='topSpace'></div>
            <div className='topSpace'></div>
            <div className='topSpace'></div>
            <div className='topSpace'></div>
            <div className='topSpace'></div>
            <div className='user' onClick={() => Nav("../usersignout")} 
            > Sign Out</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserDashLeft