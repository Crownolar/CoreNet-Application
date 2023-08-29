import { useSelector } from "react-redux";
import "./AcceptTask.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../../../Loader/Loader";
import { Link } from "react-router-dom";

const AcceptTask = () => {
  const Writer = useSelector((state) => state.stores.formDataWriter);
  const WriterId = Writer.id;
  const [taskinfo, setTaskInfo] = useState([]);
  const [loading, setLoading] = useState(false)
  // const { id } = useParams()get-all-tasks/:writerId
  const url = `https://corenet-api.onrender.com/api/get-all-tasks/${WriterId}`;

  const getAllTask = () => {
    setLoading(true)
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setLoading(false)
        setTaskInfo(res.data.data);
        console.log(res.data.data);
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
    // <div className="AcceptTask">
    //   <div className="AcceptTaskWrap">
    //     {taskinfo?.map((e) => (
    //       <div className="Taskcontainer" key={e._id}>
    //       <div className="Taskdetails">
    //         <h2>{e.Title}</h2>
    //         <div className="taskdesctime">
    //           <h4>{e.Description}</h4>
    //           <span>{e.taskTimeout}</span>
    //         </div>
    //       </div>
    //       <div className="Taskstatus">
    //         <div className="status"></div>
    //       </div>
    //     </div>
    //     ))}
    //   </div>
    // </div>
    <div className="AllTask">
      {loading ? <Loader /> : taskinfo.length === 0 ? ( // Show "No Writer" message
              <div className="no-writer-message">No Task available.</div>
            ) : <div className="task-card">
        {taskinfo?.map((e) => (
          <Link to={`/userpage/alltaskdesc/${e._id}`} className="task-card-wrap" key={e._id}>
            <h3 className="task-title">{e.Title}</h3>
            <p className="task-description">{e.Description}</p>
            <p className="task-timeout">Timeout: {e.taskTimeout} </p>
            <div className="task-status">
              Status:
              <div className="statusstate">
                {e.isPending === true && e.isComplete === false && (
                  <div className="colorWrap">
                    <div className="Admintaskoverviewcolor11">P</div>
                    <h4>Pending</h4>
                  </div>
                )}
                {e.isActive === true && e.isComplete === false && (
                  <div className="colorWrap">
                    <div className="Admintaskoverviewcolor21">A</div>
                    <h4>Active</h4>
                  </div>
                )}
                {e.isComplete === true && e.isActive === true && (
                  <div className="colorWrap">
                    <div className="Admintaskoverviewcolor31">C</div>
                    <h4>Completed</h4>
                  </div>
                )}
                {e.isComplete === true && e.isPending === true && (
                  <div className="colorWrap">
                    <div className="Admintaskoverviewcolor31">C</div>
                    <h4>Completed</h4>
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>}
    </div>
  );
};

export default AcceptTask;
