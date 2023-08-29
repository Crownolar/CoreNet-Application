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

function Task() {
  const [isActive, setIsActive] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [description, setDescription] = useState("");
  const [taskinfo, setTaskInfo] = useState(null);
  const [taskupdate, setTaskUpdate] = useState();
  const [timeElapsed, setTimeElapsed] = useState(false);
  // const Writer = useSelector((state) => state.persistedReducer.writer);
  // /:writerId/update-task/:taskId

  const themeContext = useContext(ThemeContext);
  const { startTimer, stopTimer, timerRemaining } = useTimer();

  const handleStartClick = () => {
    if (!isCompleted && !isPending)
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
    } else if(isPending) {
      setDescription("Task is already completed.");
      setIsPending(true)
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
    axios
      .put(Url)
      .then((res) => {
        console.log(res);
        setTaskUpdate(res.data.data);
        handleCompleteClick();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    handleCompleteClick();
  }, []);

  const acceptTask = () => {
    axios
      .post(URL)
      .then((res) => {
        console.log(res);
        handleStartClick();
        localStorage.setItem("taskCompleted", "false");
        // startTimer(timerRemaining);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // console.log(UpdateTask)

  const getOneTask = () => {
    axios.get(url).then((res) => {
      console.log(res);
      localStorage.setItem("taskCompleted", "false");
      setTaskInfo(res.data.data);
      console.log(res.data.data)
    })
    .catch((error) => {
      console.error(error);
    });
  };

  useEffect(() => {
    getOneTask();
  }, []);

  const buttonText = localStorage.getItem("taskCompleted") === "true" ? "Task Completed" : "Start Task";

  useEffect(() => {
    // Check if the time has elapsed
    if (timerRemaining <= 0 && isActive && !isCompleted) {
      setTimeElapsed(true);
      setDescription('Task time has elapsed.');
      setIsCompleted(true);
      stopTimer();
      localStorage.removeItem('timerRemaining');
      localStorage.removeItem('startTime');
    }
  }, [timerRemaining, isActive, isCompleted]);

  return (
    <div className="mainnz">
      {/* {taskinfo === null ? (
        // Display a pop-up or message when taskinfo is null
        <div className="no-task-popup">
          <p>No task has been assigned yet.</p>
        </div>
      ) : ( */}
        <div className="task1">
          <h2>{taskinfo?.Title}</h2>
          {/* <h2>Title</h2> */}
          {/* <p
            className={`description ${
              isCompleted ? "completed" : isActive ? "started" : ""
            }`}
          >
            {description}
          </p> */}
          
        <p
          className={`description ${
            timeElapsed
              ? 'time-elapsed'
              : isCompleted
              ? 'completed'
              : isActive
              ? 'started'
              : ''
          }`}
        >
          {description}
        </p>
          <h4>Description: {taskinfo?.Description}</h4>
          <button disabled={isActive || isCompleted || isPending || localStorage.getItem("taskCompleted") === "true"} className="start-btn" onClick={acceptTask}>
            {/* {isStarted ? "Resume Task" : "Start Task"} */}
            {buttonText}
          </button>
          <button
            className="complete-btn"
            onClick={UpdateTask}
            disabled={taskinfo?.isActive || taskinfo?.isComplete}
          >
            Complete Task
          </button>
          <p className="time">
            Time remaining: {Math.floor(timerRemaining / 3600)}:
            {Math.floor((timerRemaining % 3600) / 60)}:{timerRemaining % 60}
          </p>
          <p className="time">
          Time allocated: {taskinfo ? `${taskinfo.taskTimeout / 3600000}hr` : ""}
          </p>
        </div>
      {/* )}  */}
      <div className="status">
        <div>
          {taskinfo?.isActive === true
            ? "Active" && <div className="bluebar"></div>
            : taskinfo?.isComplete === true
            ? "Completed"
            : taskinfo?.isActive === true && taskinfo.isComplete === true
            ? "Achieved"
            : null}
        </div>
        {taskupdate?.isActive === true && taskupdate.isComplete === true ? (
          "Done"
        ) : taskupdate?.isComplete == true ? (
          <div className="bluebar"></div>
        ) : taskupdate?.isActive === true && taskupdate?.isComplete === true ? (
          <div className="pinkbar"></div>
        ) : taskupdate?.isPending === true ? (
          <div className="pinkbar"></div>
        ) : null}
      </div>
    </div>
  );
}

export default Task;
