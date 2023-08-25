import React, { useEffect, useState } from "react";
import "./AdminTaskAssign.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import AdminTaskAssignPage from "./AdminTaskAssignPage/AdminTaskAssignPage";
import Loader from "../../../../Loader/Loader";

const AdminTaskAssign = () => {
  const [writer, setWriter] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const user = useSelector((state) => state.stores.user);
  const navigate = useNavigate();
  const EditorID = user.editorId;
  const { id } = useParams();
  const url = `https://corenet-api.onrender.com/api/get-all-writers/${EditorID}`;

  const getAllWriters = () => {
    axios
      .get(url)
      .then((res) => {
        setWriter(res?.data.data);
        setLoading(false); // API call completed, hide loading
      })
      .catch((error) => {
        console.error("Error:", error);
        if (error.response) {
          console.error("Response Data:", error.response.data);
        }
        setLoading(false); // Error occurred, hide loading
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
            {loading ? (
              <div className="loading-spinner"> <Loader /> Loading...</div>
            ) : writer.length === 0 ? (
              <div className="no-writer-message">No Writer available for task assignment.</div>
            ) : (
              writer.map((e) => (
                <Link
                  to={`/adminpage/admintaskassignpage/${e._id}`}
                  className="user-card"
                  key={e._id}
                >
                  <div className="avatar">
                    {e.Email.charAt(0).toUpperCase()}
                  </div>
                  <div className="user-info">
                    <h3>{e.UserName}</h3>
                    <p>{e.Email}</p>
                  </div>
                  <div className="AdminTaskAssignCreateTaskButton">
                    <button>Assign Task</button>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTaskAssign;
