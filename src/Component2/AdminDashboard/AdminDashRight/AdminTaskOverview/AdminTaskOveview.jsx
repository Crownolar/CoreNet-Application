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
  const TaskID = TaskId._id;
  console.log(TaskID);
  const user = useSelector((state) => state.stores.user);
  const EditorID = user.editorId; 
  const [taskinfo, setTaskInfo] = useState([]);
  const [loading, setLoading] = useState([false]);
  const url = `https://corenet-api.onrender.com/api/all-tasks/${EditorID}`;

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
        {loading ? <Loader /> : taskinfo.length === 0 ? (
              <div className="no-writer-message">No Task available.</div>
            ) : (<div className="task-card1">
          {
            taskinfo?.map((e) => (
              <Link to={`/adminpage/admintaskoverviewdesc/${e._id}`} className="card-wrap1" key={e._id} >
           <div className="holders">
             <h3 className="task-title1">{e.Title}</h3>
            <p className="task-description1">{e.Description}</p>
            <p className="task-timeout1">Timeout: {e.taskTimeout} </p>
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
              </Link>
            ))
          }

      </div>)}
      {/* </div> */}
    </div>
  );
};

export default AdminTaskOveview;


