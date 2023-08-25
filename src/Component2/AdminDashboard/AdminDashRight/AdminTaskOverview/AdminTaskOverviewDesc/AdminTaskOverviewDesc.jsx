import React, { useEffect, useState } from 'react'
import "./AdminTaskOverviewDesc.css"
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AdminTaskOverviewDesc = () => {
    const TaskId = useSelector((state) => state.stores.taskId);
    const [writersDescriptions, setWritersDescriptions] = useState({});
    const TaskID = TaskId._id;
    console.log(TaskID);
    const Writer = useSelector((state) => state.stores.formDataWriter);
    // const WriterInfo = useSelector((state) => state.stores.writerInfo);
    // console.log(WriterInfo)
    console.log(Writer);
    const user = useSelector((state) => state.stores.user);
    const EditorID = user.editorId; 
    const WriterId = Writer.id;
    const [taskinfo, setTaskInfo] = useState([]);
    const [taskinfo1, setTaskInfo1] = useState(null);
    const { id } = useParams()
    console.log(id)
    // const url = `https://corenet-api.onrender.com/api/get-all-tasks/${WriterId}`;
    const URL = `https://corenet-api.onrender.com/api/get-one-task/${id}`;
    const urL = `https://corenet-api.onrender.com/api/${EditorID}/get-a-writer/${WriterId}`;

    const getOneTask = () => {
        axios.get(URL).then((res) => {
          console.log(res);
          setTaskInfo1(res.data.data);
        });
      };
    
    const getDescription = () => {
        axios.get(urL).then((res) => {
          console.log(res);
          setWritersDescriptions(res.data.data);
        });
      };

      useEffect(() => {
        getOneTask();
        console.log(taskinfo1?.isPending);
      }, []);

      useEffect(() => {
        getDescription();
      }, []);


  return (
    <div className='AdminTasOverviewDesc'>
        <div className="Taskss">
        <div className="Taskss1">
          <div className="task">
            <div className="taskwrap">
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
    </div>
  )
}

export default AdminTaskOverviewDesc