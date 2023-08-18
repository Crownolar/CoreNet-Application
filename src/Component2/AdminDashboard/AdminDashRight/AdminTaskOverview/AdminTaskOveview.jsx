import React, { useEffect, useState } from "react";
import "../AdminTaskOverview/AdminTaskOverview.css";
import "../AdminTaskOverview/AdminTaskOverviewMedia.css"
import { Progress, Space } from 'antd';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";


const AdminTaskOveview = () => {

  const TaskId = useSelector((state) => state.persistedReducer.taskId);
  console.log(TaskId);
  const [taskinfo, setTaskInfo] = useState([]);
  // const { id } = useParams()
  const url = `https://corenet-api.onrender.com/api/tasks/${TaskId}`;

  const getOneTask = () => {
    axios
    .get(url)
    .then((res) => {
      console.log(res);
      setTaskInfo(res.data.data);
    });
  };

  useEffect(() => {
    getOneTask();
  }, []);

  return (
    <div className="Admintaskoverview">
       <div className="task-list">
        {taskinfo.map((task, index) => (
          <div className="task-card" key={index}>
            <h3>{task.Title}</h3>
            <p>{task.Description}</p>
            <p>Timeout: {task.taskTimeout}</p>
            {/* {activeTaskIndex !== -1 && (
              <div className="timer">
                {remainingTime > 0 && (
                  <div>
                    Time remaining: {Math.floor(remainingTime / 3600)}:
                    {Math.floor((remainingTime % 3600) / 60)}:
                    {remainingTime % 60}
                  </div>
                )}
              </div>
            )} */}

            {/* <div className="AdmintaskoverviewStatus">
              <button onClick={() => setTimerActive(!timerActive)}>
                Toggle Timer
              </button>
            </div> */}
          </div>
        ))}
      </div>
      <div className="Admintaskassigner">
        <div className="Admintaskassignerwrap">
          <div className="Admintaskassigntext">
            <p>Deliver an article about The CurveAfrica</p>
            <span>Tijani Ezekiel</span>
          </div>
          <div className="AdmintaskoverviewStatus">
            <div className="Admintaskoverviewcolor1">I</div>
            <div className="Admintaskoverviewcolor2">P</div>
            <div className="Admintaskoverviewcolor3">C</div>
          </div>
        </div>  
      </div>
      <div className="Admintaskassigner">
        <div className="Admintaskassignerwrap">
          <div className="Admintaskassigntext">
            <p>Deliver an article about The CurveAfrica</p>
            <span>Tijani Ezekiel</span>
          </div>
          <div className="AdmintaskoverviewStatus">
            <div className="Admintaskoverviewcolor1">I</div>
            <div className="Admintaskoverviewcolor2">P</div>
            <div className="Admintaskoverviewcolor3">C</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTaskOveview;
