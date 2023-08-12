import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { HiOutlineUserCircle } from "react-icons/hi";
import "./AdminAllWriter.css";
import { updateWriterList } from "../../../../Redux/ActionState/ActionState";
import { useNavigate } from "react-router-dom";

const AdminAllWriter = () => {
  const [writer, setWriter] = useState([]);
  const dispatch = useDispatch()
  const nav = useNavigate()
  const user = useSelector((state) => state.persistedReducer.user);
  const Writers = useSelector((state) => state.persistedReducer.writer);
  const WriterList = useSelector((state) => state.persistedReducer.writerlist);
  console.log(WriterList);
  const deleteWriter = Writers._id;
  const EditorID = user.editorId;
  const [task, setTask] = useState({
    entertask: "",
  });

  const Url = `https://corenet-api.onrender.com/api/writers/${deleteWriter}`;
  const url = `https://corenet-api.onrender.com/api/get-all-writers/${EditorID}`;

  const getAllWriters = () => {
    axios.get(url).then((res) => {
      setWriter(res?.data.data);
      dispatch(updateWriterList(res?.data.data))
      {
        console.log(res.data.data);
      }
    });
  };

  const DeletwWriter = (_id) => {
    axios.delete(Url).then((res) => {
      console.log(res);
    });
  };

  const navigateToWriterDesc = (_id) => {
    nav(`/adminpage/adminallwriterdesc/${_id}`);
  };
  // console.log(getAllWriters);

  useEffect(() => {
    getAllWriters();
  }, []);

  useEffect(() => {
    console.log(writer);
  }, [writer]);

  return (
    <div className="AdminAllWriter">
      {/* <div className="AdminAllWriterH1">
            <h1>All Writers</h1>
          </div> */}
      <div className="AdminAllWriterWrapper">
        {writer?.map((e) => (
          <div className="AdminAllWriterWrap" key={e._id}>
            <div className="AdminAllWriterList">
              <div className="AdminAllWriterStatus">
                {/* <HiOutlineUserCircle  className='AdminAllWriterIcon'/> */}
                <div
                  className="AdminAllWriterIcon"
                  // onClick={() => {
                  //   OneWriterDescription(e._id), console.log(e._id);
                  //   setIsDropdownOpen(!isDropdownOpen)
                  // }}
                  onClick={() => navigateToWriterDesc(e._id)}
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
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminAllWriter;
