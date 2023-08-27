import React, { useEffect, useState } from 'react'
import "./AdminTaskOverviewDesc.css"
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { clearTask } from '../../../../../Redux/ActionState/ActionState';
import Loader from '../../../../../Loader/Loader';

const AdminTaskOverviewDesc = () => {
    const TaskId = useSelector((state) => state.stores.taskId);
    const [writersDescriptions, setWritersDescriptions] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState('');
  const Nav = useNavigate()
  const dispatch = useDispatch()
  const TaskID = TaskId._id;
    console.log(TaskID);
    const Writer = useSelector((state) => state.stores.formDataWriter);
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
    const url = `https://corenet-api.onrender.com/api/delete-task/${TaskID}`;

    const deleteTask = () => {
    setLoading(true)
    axios
      .delete(url)
      .then((res) => {
        console.log(res)
        dispatch(clearTask(res))
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          Nav("/adminpage/admintaskoverview/:id");
        }, 5000);
      })
      .catch((error) => {
        console.error("Error:", error)
      setLoading(false)
      if (error.response) {
        console.error("Response Data:", error.response.data);
      }
    })
    }


    const data = { comment }
  
  const editorComment = () => {
    setLoading(true)
    const URL = `https://corenet-api.onrender.com/api/${TaskID}/create-editor-comment/${EditorID}`;
    axios
    .post(URL, data)
    .then((res) => {
      console.log(res)
      setLoading(false)
    })
    .catch((error) => {
      console.error("Error:", error);
      setLoading(false)
      if (error.response) {
        console.error("Response Data:", error.response.data);
      }
    });
  }

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
      {showPopup && (
        <div className="popup">
          <p>Deleted Successfully</p>
        </div>
      )}

<div className="task-component">
      <h3>Title: {taskinfo1?.Title}</h3>
      <p>Description: {taskinfo1?.Description}</p>
      <p className="time-allocated">Time Allocated: {taskinfo1?.taskTimeout}</p>
      <div className="task-status"><div className="AdmintaskoverviewStatus">
            <h3>Task Status</h3>
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
          </div></div>
      <div className="comment-section">
        <textarea
          className="comment-input"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button className="add-comment-button" onClick={editorComment}>Add Comment</button>
      </div>
      <br />
      <button onClick={deleteTask} className="delete-button">{loading ? <Loader /> : "Delete"}</button>
    </div>

        {/* <div className="Taskss">
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
        </div> */}
    </div>
  )
}

export default AdminTaskOverviewDesc