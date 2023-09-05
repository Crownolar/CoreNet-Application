import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./UserDashLeft.css"
import { FcAcceptDatabase} from "react-icons/fc"
import { RxUpdate} from "react-icons/rx"
import { CgDetailsMore } from "react-icons/cg"
import { PiSignOut } from 'react-icons/pi';

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
                  <div className='newTaskIcon'> <FcAcceptDatabase className='newTaskIconContent' /></div>
                  <div className='newTaskText'> All Task</div>
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
                  <div className='newTaskIcon'> <RxUpdate className='newTaskIconContent' /></div>
                  <div className='newTaskText'> Task  Update</div>
                </div>

                <div className='contentSpace'></div>
                <div className='contentSpace'></div>

                {/* <div 
                  className={`newTask ${
                    activeTab === "usertaskdetail" ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveTab("usertaskdetail");
                    Nav("/userpage/usertaskdetail");
                    console.log("activeTab");
                  }}>
                  <div className='newTaskIcon'> <CgDetailsMore className='newTaskIconContent' /></div>
                  <div className='newTaskText'> Task Detail</div>
                </div> */}



              </div>

            <div className='topSpace'></div>
            <div className='topSpace'></div>
            <div className='topSpace'></div>
            <div className='topSpace'></div>
            <div className='topSpace'></div>
            <div className='topSpace'></div>
            <div className='topSpace'></div>
            {/* <div className='topSpace'></div> */}
            <div className='user' onClick={() => Nav("../usersignout")} 
            > 
            <PiSignOut />
            Sign Out
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserDashLeft