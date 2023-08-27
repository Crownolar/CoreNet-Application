import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { HiOutlineUserCircle } from "react-icons/hi";
import "./AdminAllWriter.css";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../../../Loader/Loader";

const AdminAllWriter = () => {
  const [writer, setWriter] = useState([]);
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();
  const user = useSelector((state) => state.stores.user);
  const EditorID = user.editorId;

  const url = `https://corenet-api.onrender.com/api/get-all-writers/${EditorID}`;

  const getAllWriters = () => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setWriter(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const navigateToWriterDesc = (_id) => {
    nav(`/adminpage/adminallwriterdesc/${_id}`);
  };

  useEffect(() => {
    getAllWriters();
  }, []);

  return (
    <div className="AdminAllWriter">
      <div className="AdminAllWriterWrapper">
        {loading ? (
          <div className="loading-spinner">
            <Loader /> Loading...
          </div>
        ) : writer.length === 0 ? (
          <div className="no-writer-message">No Writer has been created yet.</div>
        ) : (
          writer?.map((e) => (
            <Link
              to={`/adminpage/adminallwriterdesc/${e._id}`}
              className="AdminAllWriterWrap"
              key={e._id}
            >
              <div className="AdminAllWriterList">
                <div className="AdminAllWriterStatus">
                  <div className="AdminAllWriterIcon">{e.FullName?.charAt(0)}</div>
                </div>
                <div className="AdminAllWriterInfo">
                  <h4>{e.UserName}</h4>
                  <p>{e.Email}</p>
                </div>
                <div className="Delete"></div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminAllWriter;
