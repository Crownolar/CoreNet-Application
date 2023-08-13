import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { HiOutlineUserCircle } from "react-icons/hi";
import "./AdminAllWriter.css";
import { Link, useNavigate, } from "react-router-dom";

const AdminAllWriter = () => {
  const [writer, setWriter] = useState([]);
  const nav = useNavigate()
  const user = useSelector((state) => state.persistedReducer.user);
  const EditorID = user.editorId;

  const url = `https://corenet-api.onrender.com/api/get-all-writers/${EditorID}`;

  const getAllWriters = () => {
    axios.get(url).then((res) => {
      console.log(res)
      setWriter(res.data.data);
    });
  };

  // const DeletwWriter = (_id) => {
  //   axios.delete(Url).then((res) => {
  //     console.log(res);
  //   });
  // };

  const navigateToWriterDesc = (_id) => {
    nav(`/adminpage/adminallwriterdesc/${_id}`);
  };

  useEffect(() => {
    getAllWriters();
  }, []);

  return (
    <div className="AdminAllWriter">
      <div className="AdminAllWriterWrapper">
        {writer?.map((e) => (
          <Link to={`/adminpage/adminallwriterdesc/${e._id}`} className="AdminAllWriterWrap" key={e._id}>
            <div className="AdminAllWriterList">
              <div className="AdminAllWriterStatus">
                {/* <HiOutlineUserCircle  className='AdminAllWriterIcon'/> */}
                <div
                  className="AdminAllWriterIcon"
                >
                  {e.FullName?.charAt(0)}
                </div>
              </div>
              <div className="AdminAllWriterInfo">
                <h4>{e.UserName}</h4>
                <p>{e.Email}</p>
              </div>
              <div className="Delete">
                <button
                  style={{ backgroundColor: "red", color: "white" }}
                  onClick={() => DeletwWriter(e._id)}
                >
                  Del
                </button>
              </div>
            </div>
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminAllWriter;
