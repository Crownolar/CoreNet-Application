import React, { useEffect, useState } from "react";
import "../AdminTaskOverview/AdminTaskOverview.css";
import "../AdminTaskOverview/AdminTaskOverviewMedia.css";
import { Progress, Space } from "antd";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const AdminTaskOveview = () => {
  const TaskId = useSelector((state) => state.stores.taskId);
  const [writersDescriptions, setWritersDescriptions] = useState({});
  const TaskID = TaskId._id;
  console.log(TaskID);
  const Writer = useSelector((state) => state.stores.formDataWriter);
  console.log(Writer);
  const user = useSelector((state) => state.stores.user);
  const EditorID = user.editorId; 
  const WriterId = Writer.id;
  const [taskinfo, setTaskInfo] = useState([]);
  const [taskinfo1, setTaskInfo1] = useState(null);
  // const { id } = useParams()get-all-tasks/:writerId
  const url = `https://corenet-api.onrender.com/api/get-all-tasks/${WriterId}`;
  const URL = `https://corenet-api.onrender.com/api/get-one-task/${TaskID}`;
  const urL = `https://corenet-api.onrender.com/api/${EditorID}/get-a-writer/${WriterId}`;

  const getDescription = () => {
    axios.get(urL).then((res) => {
      console.log(res);
      setWritersDescriptions(res.data.data);
    });
  };

  const getAllTask = () => {
    axios.get(url).then((res) => {
      console.log(res);
      setTaskInfo(res.data.data);
    });
  };

  useEffect(() => {
    getAllTask();
  }, []);

  useEffect(() => {
    getDescription();
  }, []);

  const getOneTask = () => {
    axios.get(URL).then((res) => {
      console.log(res);
      setTaskInfo1(res.data.data);
    });
  };

  useEffect(() => {
    getOneTask();
    console.log(taskinfo1?.isPending);
  }, []);

  return (
    <div className="Admintaskoverview">
      <div className="Taskss">
        <div className="Taskss1">
          <div className="task">
            <div className="UserName1">
              <h2>{writersDescriptions.FullName}</h2>
            </div>
            <h3>Title: {taskinfo1?.Title}</h3>
            <h4>Description: {taskinfo1?.Description}</h4>
            <h5>Time Allocated: {taskinfo1?.taskTimeout}</h5>
          </div>

          <div className="AdmintaskoverviewStatus">
            <h2>Task Status</h2>
            <div className="AdmintaskoverviewStatusWrap">
              {taskinfo1?.isPending === true &&
                taskinfo1?.isComplete === false && (
                  <div className="colorWrap">
                    <div className="Admintaskoverviewcolor1">P</div>
                    <h4>Pending</h4>
                  </div>
                )}
              {taskinfo1?.isActive === true &&
                taskinfo1?.isComplete === false && (
                  <div className="colorWrap">
                    <div className="Admintaskoverviewcolor2">A</div>
                    <h4>Active</h4>
                  </div>
                )}
              {taskinfo1?.isComplete === true &&
                taskinfo1?.isActive === true && (
                  <div className="colorWrap">
                    <div className="Admintaskoverviewcolor3">C</div>
                    <h4>Completed</h4>
                  </div>
                )}
              {taskinfo1?.isComplete === true &&
                taskinfo1?.isPending === true && (
                  <div className="colorWrap">
                    <div className="Admintaskoverviewcolor3">C</div>
                    <h4>Completed</h4>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTaskOveview;

{
  /* <div className="task-list">
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
            )} */
}

{
  /* <div className="AdmintaskoverviewStatus">
              <button onClick={() => setTimerActive(!timerActive)}>
                Toggle Timer
              </button>
            </div> 
          </div>
        ))}
      </div> */
}
