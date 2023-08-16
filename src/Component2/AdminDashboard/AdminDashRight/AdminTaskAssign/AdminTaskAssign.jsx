import React, { useEffect, useState } from "react";
import "./AdminTaskAssign.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import AdminTaskAssignPage from "./AdminTaskAssignPage/AdminTaskAssignPage";

const AdminTaskAssign = () => {
  const [writer, setWriter] = useState([]);
  const user = useSelector((state) => state.persistedReducer.user);
  const navigate = useNavigate()
  const EditorID = user.editorId;
  console.log(EditorID);
  const { id } = useParams();
  console.log(id);
  const url = `https://corenet-api.onrender.com/api/get-all-writers/${EditorID}`;

  const getAllWriters = () => {
    axios
      .get(url)
      .then((res) => {
        setWriter(res?.data.data);

        {
          console.log(res.data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        if (error.response) {
          console.error("Response Data:", error.response.data);
        }
      });
  };

 


  useEffect(() => {
    getAllWriters();
  }, []);

  useEffect(() => {
    console.log(writer);
  }, [writer]);


  return (
    <div className="AdminTaskAssign">
      <div className="AdminTaskAssignWrap">
        
        <div className="AdminTaskAssignInput">
          

          <div className="AdminTaskAssignSelect">
              {/* <div className="AdminTaskAssignSelectWrap"> */}
            {writer.map((e) => (
                <Link to={`/adminpage/admintaskassignpage/${e._id}`} className="user-card">
                  <div className="avatar">{(e.Email.charAt(0)).toUpperCase()}</div>
                  <div className="user-info">
                    <h3>{e.UserName}</h3>
                    <p>{e.Email}</p>
                  </div>
                  <div className="AdminTaskAssignCreateTaskButton">
                    <button>Assign Task</button>
                  </div>
                </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTaskAssign;
