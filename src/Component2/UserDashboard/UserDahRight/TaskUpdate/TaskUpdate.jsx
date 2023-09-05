// import './TaskUpdateWeb.css'

// const TaskUpdate = () => {
//     return (
//         <div className="TaskUpadate">
//             <div className='TaskUpadateWrap'>
//                     <div className='TaskUpdatecontentHold'>

//                             <h1>Task Update</h1>

//                             <div className='taskUpdateHolder'>

//                                 <button className='circle2'></button>
//                                 <button className='circle2'>Accept</button>
//                                 <button className='circle2'></button>
//                             </div>

//                     </div>
//                 </div>
//         </div>
//     )
// }

// export default TaskUpdate

// Task.js
// import React, { useState } from 'react';
// import './TaskUpdateWeb.css';

// function Task() {
//   const [isStarted, setIsStarted] = useState(false);
//   const [isCompleted, setIsCompleted] = useState(false);
//   const [description, setDescription] = useState('');

//   const handleStartClick = () => {
//     if (!isStarted) {
//       setDescription('Task has been started.');
//       setIsStarted(true);
//     } else {
//       setDescription('Task is in progress.');
//     }
//   };

//   const handleCompleteClick = () => {
//     if (isStarted && !isCompleted) {
//       setDescription('Task has been completed!');
//       setIsCompleted(true);
//     } else if (!isStarted) {
//       setDescription('Task has not been started yet.');
//     } else {
//       setDescription('Task is already completed.');
//     }
//   };

//   return (
//     <div className="task">
//       <h2>Task Title</h2>
//       <p className={`description ${isCompleted ? 'completed' : isStarted ? 'started' : ''}`}>
//         {description}
//       </p>
//       <button className="start-btn" onClick={handleStartClick}>
//         {isStarted ? 'Resume Task' : 'Start Task'}
//       </button>
//       <button className="complete-btn" onClick={handleCompleteClick} disabled={!isStarted || isCompleted}>
//         Complete Task
//       </button>
//     </div>
//   );
// }

// export default Task;

import React, { useState, useContext, useEffect } from "react";
import "./TaskUpdateWeb.css";
import { ThemeContext } from "../../../../Authentication/ContextApi/Contextapi";
import { useSelector } from "react-redux";
import axios from "axios";
import { useTimer } from "../../../../Authentication/ContextApi/TimeContext/TimeContext";
import Loader from "../../../../Loader/Loader";

function Task() {
  const [isActive, setIsActive] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [description, setDescription] = useState("");
  const [taskinfo, setTaskInfo] = useState(null);
  const [taskupdate, setTaskUpdate] = useState();
  const [timeElapsed, setTimeElapsed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [startButtonClicked, setStartButtonClicked] = useState(false);

  
  // const Writer = useSelector((state) => state.persistedReducer.writer);
  // /:writerId/update-task/:taskId

  const themeContext = useContext(ThemeContext);
  const { startTimer, stopTimer, timerRemaining } = useTimer();

  const handleStartClick = () => {
    if (!isCompleted && !isPending);
    setDescription("Task is in progress.");
     setIsActive(true);
    startTimer(taskinfo?.taskTimeout / 1000);
  };

  const handleCompleteClick = () => {
    if (isActive && !isCompleted) {
      setDescription("Task has been completed!");
      setIsCompleted(true);
      stopTimer();
      localStorage.removeItem("timerRemaining");
      localStorage.removeItem("startTime");
      localStorage.setItem("taskCompleted", "true");
    } else if (!isActive) {
      setDescription("Task has not been started yet.");
    } 
    else if (isPending) {
      setDescription("Task is already completed.");
      setIsPending(true);
    } else if(!isActive || !isCompleted || !isPending){
      setDescription("No Task has been assigned yet")
    }
  };

  const TaskId = useSelector((state) => state.stores.taskId);
  const TaskID = TaskId._id;
  console.log(TaskID);
  const Writer = useSelector((state) => state.stores.formDataWriter);
  const WriterId = Writer?.id;
  console.log(WriterId);
  console.log(Writer);
  // console.log(TaskId);
  // const { id } = useParams()
  const url = `https://corenet-api.onrender.com/api/get-one-task/${TaskID}`;
  const URL = `https://corenet-api.onrender.com/api/${WriterId}/accept-task/${TaskId?._id}`;
  const Url = `https://corenet-api.onrender.com/api/${WriterId}/update-task/${TaskId?._id}`;
  // console.log(url);
  // console.log(Url);

  const UpdateTask = () => {
    setLoading1(true);
    axios
      .put(Url)
      .then((res) => {
        console.log(res);
        setTaskUpdate(res.data.data);
        handleCompleteClick();
        setLoading1(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading1(false);
      });
  };

  useEffect(() => {
    handleCompleteClick();
  }, []);

  const acceptTask = () => {
    setLoading(true);
    axios
      .post(URL)
      .then((res) => {
        console.log(res);
        handleStartClick();
        setLoading(false);
        localStorage.setItem("taskCompleted", "false");
        setStartButtonClicked(true);
        // startTimer(timerRemaining);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  // console.log(UpdateTask)

  const getOneTask = () => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        localStorage.setItem("taskCompleted", "false");
        setTaskInfo(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getOneTask();
  }, []);

  const buttonText =
    localStorage.getItem("taskCompleted") === "true"
      ? "Task Completed"
      : "Start Task";

  useEffect(() => {
    // Check if the time has elapsed
    if (timerRemaining <= 0 && isActive && !isCompleted) {
      setTimeElapsed(true);
      setDescription("Task time has elapsed.");
      setIsCompleted(true);
      stopTimer();
      localStorage.removeItem("timerRemaining");
      localStorage.removeItem("startTime");
    }
  }, [timerRemaining, isActive, isCompleted]);

  return (
    <div className="mainnz">
      <div className="task1">
        <h2>{taskinfo?.Title}</h2>
        <p
          className={`description ${
            timeElapsed
              ? "time-elapsed"
              : isCompleted
              ? "completed"
              : isActive
              ? "started"
              : ""
          }`}
        >
          {description}
        </p>
        <h4>Description: {taskinfo?.Description}</h4>
        <button
          disabled={
            taskinfo?.isActive === true ||
            taskinfo?.isComplete === true ||
            taskupdate?.isComplete == true ||
            taskupdate?.isPending === true ||
            taskinfo?.isPending === true ||
            localStorage.getItem("taskCompleted") === "true" ||
            timeElapsed ||
            startButtonClicked
          }
          className="start-btn"
          onClick={acceptTask}
        >
          {/* {buttonText} */}
          {loading ? "Loading..." : buttonText}
        </button>
        <button
          className="complete-btn"
          onClick={UpdateTask}
          disabled={
            taskinfo?.isActive === true ||
            taskinfo?.isComplete === true ||
            taskupdate?.isComplete === true ||
            taskupdate?.isPending === true ||
            taskinfo?.isPending === true || 
            timeElapsed
          }
        >
          {loading1 ? "Loading..." : "Complete Task"}
        </button>
        <p className="time">
          Time remaining: {Math.floor(timerRemaining / 3600)}:
          {Math.floor((timerRemaining % 3600) / 60)}:{timerRemaining % 60}
        </p>
        <span className="time">
          Time allocated:
          {taskinfo ? `(${(taskinfo.taskTimeout / 3600000).toFixed(2)}) hours` : ""}
        </span>
      </div>
    </div>
  );
}

export default Task;
