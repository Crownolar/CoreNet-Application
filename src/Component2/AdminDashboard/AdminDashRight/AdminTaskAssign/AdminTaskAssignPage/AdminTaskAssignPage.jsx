import React, { useEffect, useState } from "react";
import "./AdminTaskAssignPAge.css";
// import "../AdminTaskAssignPage/AdminTaskAssignPage.css"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateTaskId } from "../../../../../Redux/ActionState/ActionState";
import { useTimer } from "../../../../../Authentication/ContextApi/TimeContext/TimeContext";

const AdminTaskAssignPage = () => {
  const [status, setStatus] = useState();
  const [tasks, setTasks] = useState([]);
  const [Title, setTitle] = useState("");
  const [activeTaskIndex, setActiveTaskIndex] = useState(-1);
  const [remainingTime, setRemainingTime] = useState(0);
  const [Description, setDescription] = useState("");
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [timerActive, setTimerActive] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  // const [timerRemaining, setTimerRemaining] = useState(0);
  const user = useSelector((state) => state.stores.user);
  const dispatch = useDispatch()
  const EditorID = user.editorId;
  const { id } = useParams();
  const Nav = useNavigate()
  console.log(id);
  const { startTimer, timerRemaining } = useTimer();

  const addTask = () => {
    if (Title && Description && hour && minute) {
      const taskTimeout = Number(hour) + Number(minute) / 60;
      const newTask = {
        Title,
        Description,
        taskTimeout,
      };
      setTasks([...tasks, newTask]);
      setTitle("");
      setDescription("");
      setHour("00");
      setMinute("00");

      const URL = `https://corenet-api.onrender.com/api/${EditorID}/create-task/${id}`;
      axios
        .post(URL, newTask)
        .then((res) => {
          console.log("Task assigned successfully:", res.data.data);
          setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 5000);
          dispatch(updateTaskId(res.data.data))
          setStatus(res.data.data);
          setActiveTaskIndex(tasks.length);
        })
        .catch((error) => {
          console.error("Error assigning task:", error);
        });
    }
  };

  // const updateTimer = () => {
  //   if (timerActive && timerRemaining > 0) {
  //     setTimerRemaining((prevRemaining) => prevRemaining - 1);
  //   }
  // };

  // useEffect(() => {
  //   let interval;

  //   if (activeTaskIndex !== -1 && remainingTime > 0) {
  //     interval = setInterval(() => {
  //       setRemainingTime((prevRemainingTime) => prevRemainingTime - 1);
  //     }, 1000);
  //   } else {
  //     clearInterval(interval);
  //   }

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [activeTaskIndex, remainingTime]);

  // useEffect(() => {
  //   const timerInterval = setInterval(updateTimer, 1000);
  //   return () => {
  //     clearInterval(timerInterval);
  //   };
  // }, [timerActive, timerRemaining]);

  return (
    <div className="task-assignment">
      {showPopup && (
        <div className="popup">
          <p>Task Assigned Successfully</p>
        </div>
      )}
      <h2>Task Assignment</h2>
      <div className="task-form">
        <input
          type="text"
          placeholder="Title"
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="time-input">
          <label htmlFor="hour">Hour</label>
          <select value={hour} onChange={(e) => setHour(e.target.value)}>
            {Array.from({ length: 24 }, (_, index) => (
              <option key={index} value={String(index).padStart(2, "0")}>
                {String(index).padStart(2, "0")}
              </option>
            ))}
          </select>
          :
          <label htmlFor="minute">Minute</label>
          <select value={minute} onChange={(e) => setMinute(e.target.value)}>
            {Array.from({ length: 60 }, (_, index) => (
              <option key={index} value={String(index).padStart(2, "0")}>
                {String(index).padStart(2, "0")}
              </option>
            ))}
          </select>
        </div>
        <br />
        <button onClick={addTask}>Assign</button>
      </div>
      <div className="task-list">
        {tasks.map((task, index) => (
          <div className="task-card12" key={index}>
            <h3>{task.Title}</h3>
            <p>{task.Description}</p>
            <p>Timeout: {task.taskTimeout}</p>
            {activeTaskIndex !== -1 && (
              <div className="timer">
                {timerRemaining > 0 && (
                  <div>
                    Time remaining: {Math.floor(timerRemaining / 3600)}:
                    {Math.floor((timerRemaining % 3600) / 60)}:
                    {timerRemaining % 60}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminTaskAssignPage;
{
  /* {Active ? <div className="Admintaskoverviewcolor1">A</div> : null}
              {Complete ? (
                <div className="Admintaskoverviewcolor3">C</div>
              ) : null}
              {Pending ? (
                <div className="Admintaskoverviewcolor2">P</div>
              ) : null} */
}
