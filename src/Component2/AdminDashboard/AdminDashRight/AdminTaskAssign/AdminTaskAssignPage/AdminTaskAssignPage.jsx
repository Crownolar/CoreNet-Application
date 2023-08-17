import React, { useEffect, useState } from "react";
import "./AdminTaskAssignPAge.css";
// import "../AdminTaskAssignPage/AdminTaskAssignPage.css"
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

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
  const [timerRemaining, setTimerRemaining] = useState(0);
  const user = useSelector((state) => state.persistedReducer.user);
  const EditorID = user.editorId;
  const { id } = useParams();
  // const Active = status.isActive;
  // const Complete = status.isComplete;
  // const Pending = status.isPending;
  // const TaskTimeOut = status.taskTimeout;

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
          setStatus(res.data.data);
          setActiveTaskIndex(tasks.length); // Set the index of the newly added task
          setRemainingTime(taskTimeout * 60 * 60);
          // if (timerActive) {
          //   setTimerRemaining(taskTimeout);
          // }
        })
        .catch((error) => {
          console.error("Error assigning task:", error);
        });
    }
  };

  // const renderTimer = () => {
  //   if (!timerActive) return null;
  //   const minutes = Math.floor(timerRemaining / 60);
  //   const seconds = timerRemaining % 60;

  //   return (
  //     <div>
  //       {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
  //     </div>
  //   );
  // };

  const updateTimer = () => {
    if (timerActive && timerRemaining > 0) {
      setTimerRemaining((prevRemaining) => prevRemaining - 1);
    }
  };

  useEffect(() => {
    let interval;

    if (activeTaskIndex !== -1 && remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime((prevRemainingTime) => prevRemainingTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [activeTaskIndex, remainingTime]);

  useEffect(() => {
    const timerInterval = setInterval(updateTimer, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  }, [timerActive, timerRemaining]);

  return (
    <div className="task-assignment">
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
          <select value={hour} onChange={(e) => setHour(e.target.value)}>
            {Array.from({ length: 24 }, (_, index) => (
              <option key={index} value={String(index).padStart(2, "0")}>
                {String(index).padStart(2, "0")}
              </option>
            ))}
          </select>
          :
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
          <div className="task-card" key={index}>
            <h3>{task.Title}</h3>
            <p>{task.Description}</p>
            <p>Timeout: {task.taskTimeout}</p>
            {activeTaskIndex !== -1 && (
              <div className="timer">
                {remainingTime > 0 && (
                  <div>
                    Time remaining: {Math.floor(remainingTime / 3600)}:
                    {Math.floor((remainingTime % 3600) / 60)}:
                    {remainingTime % 60}
                  </div>
                )}
              </div>
            )}

            <div className="AdmintaskoverviewStatus">
              <button onClick={() => setTimerActive(!timerActive)}>
                Toggle Timer
              </button>
            </div>
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
