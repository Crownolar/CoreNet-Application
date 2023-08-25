import React, { useEffect, useState } from "react";
import "../AdminTaskOverview/AdminTaskOverview.css";
import "../AdminTaskOverview/AdminTaskOverviewMedia.css";
import { Progress, Space } from "antd";
import { Link, useParams, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Loader from "../../../../Loader/Loader";

const AdminTaskOveview = () => {
  const TaskId = useSelector((state) => state.stores.taskId);
  // const [writersDescriptions, setWritersDescriptions] = useState({});
  const TaskID = TaskId._id;
  console.log(TaskID);
  // const Editor = useSelector((state) => state.stores.user);
  // const WriterInfo = useSelector((state) => state.stores.writerInfo);
  // console.log(WriterInfo)
  // console.log(Editor); :id/create-editor-comment/:editorId
  const user = useSelector((state) => state.stores.user);
  const EditorID = user.editorId; 
  // const EditorId = Editor.id;
  const [comment, setComment] = useState('');
  const [taskinfo, setTaskInfo] = useState([]);
  const [loading, setLoading] = useState([false]);
  const url = `https://corenet-api.onrender.com/api/all-tasks/${EditorID}`;
  const URL = `https://corenet-api.onrender.com/api/${TaskID}/create-editor-comment/${EditorID}`;

  const editorComment = () => {
    axios.post()
  }

  const getAllTask = () => {
    setLoading(true)
    axios.get(url).then((res) => {
      console.log(res);
      setLoading(false)
      setTaskInfo(res.data.data);
      console.log(res.data.data)
    })
    .catch((error) => {
      console.error("Error:", error);
      setLoading(false)
      if (error.response) {
        console.error("Response Data:", error.response.data);
      }
    });
  };

  useEffect(() => {
    getAllTask();
  }, []);

  return (
    <div className="AllTask1">
        {loading ? <Loader /> : taskinfo.length === 0 ? ( // Show "No Writer" message
              <div className="no-writer-message">No Task available.</div>
            ) : (<div className="task-card1">
          {
            taskinfo?.map((e) => (
              <div className="card-wrap1" key={e.id} >
           <div className="holders">
             <h3 className="task-title1">{e.Title}</h3>
            <p className="task-description1">{e.Description}</p>
            <p className="task-timeout1">Timeout: {e.taskTimeout} </p>
            <div className="commentBox">
              <input type="text" onChange={(e) => setComment(e.target.value)} />
            </div>
           </div>

            <div className="task-status1">
            Status:
              <div className="statusstate1">
                {e.isPending === true && e.isComplete === false && (
                  <div className="colorWrap1">
                    <div className="Admintaskoverviewcolor111">P</div>
                    <h4>Pending</h4>
                  </div>
                )}
                {e.isActive === true && e.isComplete === false && (
                  <div className="colorWrap1">
                    <div className="Admintaskoverviewcolor211">A</div>
                    <h4>Active</h4>
                  </div>
                )}
                {e.isComplete === true && e.isActive === true && (
                  <div className="colorWrap1">
                    <div className="Admintaskoverviewcolor311">C</div>
                    <h4>Completed</h4>
                  </div>
                )}
                {e.isComplete === true && e.isPending === true && (
                  <div className="colorWrap1">
                    <div className="Admintaskoverviewcolor311">C</div>
                    <h4>Completed</h4>
                  </div>
                )}
              </div>
            </div>
              </div>
            ))
          }

      </div>)}
      {/* </div> */}
    </div>
  );
};

export default AdminTaskOveview;
{/* {taskinfo?.map((e) => ( */}
  {/* <NavLink to={`/adminpage/admintaskoverviewdesc/${e.id}`} className="card-wrap1">
    <h3 className="task-title1">{e.Title}</h3>
    <p className="task-description1">{e.Description}</p>
    <p className="task-timeout1">Timeout: {e.taskTimeout} </p>
    <div className="task-status1">
      Status:
      <div className="statusstate1">
        {e.isPending === true && e.isComplete === false && (
          <div className="colorWrap1">
            <div className="Admintaskoverviewcolor111">P</div>
            <h4>Pending</h4>
          </div>
        )}
        {e.isActive === true && e.isComplete === false && (
          <div className="colorWrap1">
            <div className="Admintaskoverviewcolor211">A</div>
            <h4>Active</h4>
          </div>
        )}
        {e.isComplete === true && e.isActive === true && (
          <div className="colorWrap1">
            <div className="Admintaskoverviewcolor311">C</div>
            <h4>Completed</h4>
          </div>
        )}
        {e.isComplete === true && e.isPending === true && (
          <div className="colorWrap1">
            <div className="Admintaskoverviewcolor311">C</div>
            <h4>Completed</h4>
          </div>
        )}
      </div>
    </div>
  </NavLink> */}
{/* ))} */}

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

// import { useSelector } from "react-redux";
// import "../AdminTaskOverview/AdminTaskOverview.css";
// import "../AdminTaskOverview/AdminTaskOverviewMedia.css";
// import axios from "axios";
// import { useEffect, useState } from "react";

// const AcceptTask = () => {
//   const Writer = useSelector((state) => state.stores.formDataWriter);
//   const WriterId = Writer.id;
//   console.log(WriterId)
//   const [taskinfo, setTaskInfo] = useState([]);
//   // const { id } = useParams()get-all-tasks/:writerId
//   const url = `https://corenet-api.onrender.com/api/get-all-tasks/${WriterId}`;

//   const getAllTask = () => {
//     axios
//       .get(url)
//       .then((res) => {
//         console.log(res);
//         setTaskInfo(res.data.data);
//         console.log(res.data.data);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         if (error.response) {
//           console.error("Response Data:", error.response.data);
//         }
//       });
//   };

//   useEffect(() => {
//     getAllTask();
//   }, []);

//   return (
//     <div className="AllTask">
//       <div className="task-card">
//         {taskinfo?.map((e) => (
//           <div className="task-card-wrap">
//             <h3 className="task-title">{e.Title}</h3>
//             <p className="task-description">{e.Description}</p>
//             <p className="task-timeout">Timeout: {e.taskTimeout} </p>
//             <div className="task-status">
//               Status:
//               <div className="statusstate">
//                 {e.isPending === true && e.isComplete === false && (
//                   <div className="colorWrap">
//                     <div className="Admintaskoverviewcolor11">P</div>
//                     <h4>Pending</h4>
//                   </div>
//                 )}
//                 {e.isActive === true && e.isComplete === false && (
//                   <div className="colorWrap">
//                     <div className="Admintaskoverviewcolor21">A</div>
//                     <h4>Active</h4>
//                   </div>
//                 )}
//                 {e.isComplete === true && e.isActive === true && (
//                   <div className="colorWrap">
//                     <div className="Admintaskoverviewcolor31">C</div>
//                     <h4>Completed</h4>
//                   </div>
//                 )}
//                 {e.isComplete === true && e.isPending === true && (
//                   <div className="colorWrap">
//                     <div className="Admintaskoverviewcolor31">C</div>
//                     <h4>Completed</h4>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AcceptTask;

