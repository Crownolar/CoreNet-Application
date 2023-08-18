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
// import { ThemeContext } from './YourThemeContextFile'; // Import your ThemeContext

function Task() {
  const [isStarted, setIsStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [description, setDescription] = useState("");
  const Writer = useSelector((state) => state.persistedReducer.writer);

  const themeContext = useContext(ThemeContext);
  const { startTimer, stopTimer, timerRemaining } = useTimer();

  const handleStartClick = () => {
    setIsStarted(true);
    startTimer(timerRemaining);
  };

  // const themeContext = useContext(ThemeContext); 

  // const handleStartClick = () => {
  //   if (!isStarted) {
  //     setDescription("Task has been started.");
  //     setIsStarted(true);
  //     themeContext.startTimer(remainingTime); 
  //   } else {
  //     setDescription("Task is in progress.");
  //   }
  // };

  const handleCompleteClick = () => {
    if (isStarted && !isCompleted) {
      setDescription("Task has been completed!");
      setIsCompleted(true);
      themeContext.stopTimer();
    } else if (!isStarted) {
      setDescription("Task has not been started yet.");
    } else {
      setDescription("Task is already completed.");
    }
  };

  // const remainingTime = themeContext.timerRemaining; writerId/accept-task/:taskId

  const TaskId = useSelector((state) => state.persistedReducer.taskId);
  const writer = useSelector((state) => state.persistedReducer.formDataWriter);
  console.log(writer);
  console.log(TaskId);
  const [taskinfo, setTaskInfo] = useState([]);
  // const { id } = useParams()
  const url = `https://corenet-api.onrender.com/api/get-one-task/${TaskId?._id}`;
  const URL = `https://corenet-api.onrender.com/api/${writer?.id}/accept-task/${TaskId?._id}`;
  console.log(url);

  const acceptTask = () => {
    axios
    .post(URL)
    .then((res) => {
      console.log(res);
      // handleStartClick(timerRemaining);
      startTimer(timerRemaining);
    })
    .catch((error) => {
      console.error(error);
    });
  }

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
    <div className="task">
      <h2>Task Title</h2>
      <p
        className={`description ${
          isCompleted ? "completed" : isStarted ? "started" : ""
        }`}
      >
        {description}
      </p>
      <button className="start-btn" onClick={acceptTask}>
        {/* {isStarted ? "Resume Task" : "Start Task"} */}
        Start Task
      </button>
      <button
        className="complete-btn"
        onClick={handleCompleteClick}
        disabled={!isStarted || isCompleted}
      >
        Complete Task
      </button>
      <p>
        Time remaining: {Math.floor(timerRemaining / 3600)}:
        {Math.floor((timerRemaining % 3600) / 60)}:{timerRemaining % 60}
      </p>
    </div>
  );
}

export default Task;
