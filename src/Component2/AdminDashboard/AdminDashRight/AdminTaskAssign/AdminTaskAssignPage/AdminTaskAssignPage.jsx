import React, { useState } from "react";
import "./AdminTaskAssignPAge.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminTaskAssignPage = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueTime, setDueTime] = useState('');
  const user = useSelector((state) => state.persistedReducer.user);
  const EditorID = user.editorId;
  const { id } = useParams()

  const addTask = () => {
    if (title && description && dueTime) {
      const newTask = {
        title,
        description,
        dueTime,
      };
      setTasks([...tasks, newTask]);
      setTitle('');
      setDescription('');
      setDueTime('');

        const URL = `https://corenet-api.onrender.com/api/editors/${EditorID}/writers/${id}`;
      axios.post(URL, newTask)
        .then((res) => {
          console.log('Task assigned successfully:', res.data);
        })
        .catch((error) => {
          console.error('Error assigning task:', error);
        });
    }
  };


  return (
    <div className="task-assignment">
      <h2>Task Assignment</h2>
      <div className="task-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Due Time"
          value={dueTime}
          onChange={(e) => setDueTime(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="task-list">
        {tasks.map((task, index) => (
          <div className="task-card" key={index}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due: {task.dueTime}</p>
          </div>
        ))}
      </div>
    </div>

    // <div className="AdminTaskAssignPage">
    //   <div className="AdminTaskAssignPageWrap">
    //     <div className="AdminTaskassigned">
    //       <p>Assign Task</p>
    //     </div>
    //     <div className="AdminTaskAssignInputsTag">
    //       <div className="AdminInput">
    //         <input
    //           type="text"
    //           placeholder="Enter task"
    //           value={add}
    //           onChange={OnChange}
    //         />
    //       </div>
    //     </div>
    //     <div className="AdminTaskassineeID">
    //       <div
    //         className="user-card"
    //       >
    //         <div className="avatar"></div>
    //         <div className="user-info">
    //           <h3></h3>
    //           <p></p>
    //         </div>
    //       </div>
    //         <div className="AdminTaskAssignCreateTaskButton">
    //           <button onClick={handleTaskAssignment}>Assign Task</button>
    //         </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default AdminTaskAssignPage;
