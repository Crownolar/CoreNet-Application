import React, { useState } from "react";
import "./AdminTaskAssignPage.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminTaskAssignPage = () => {
  const [tasks, setTasks] = useState([]);
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const user = useSelector((state) => state.persistedReducer.user);
  const EditorID = user.editorId;
  const { id } = useParams();

  const addTask = () => {
    if (Title && Description && hour && minute) {
      const taskTimeout = Number(hour) * 60 + Number(minute);
      const newTask = {
        Title,
        Description,
        taskTimeout,
      };
      setTasks([...tasks, newTask]);
      setTitle('');
      setDescription('');
      setHour("00");
      setMinute("00");

      const URL = `https://corenet-api.onrender.com/api/${EditorID}/create-task/${id}`;
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
        <button onClick={addTask}>Assign</button>
      </div>
      <div className="task-list">
        {tasks.map((task, index) => (
          <div className="task-card" key={index}>
            <h3>{task.Title}</h3>
            <p>{task.Description}</p>
            <p>Timeout: {task.taskTimeout}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminTaskAssignPage;
    

