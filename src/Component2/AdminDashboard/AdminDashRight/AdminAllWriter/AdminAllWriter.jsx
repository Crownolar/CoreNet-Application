import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { HiOutlineUserCircle } from "react-icons/hi";
import "./AdminAllWriter.css";

const AdminAllWriter = () => {
  const [writer, setWriter] = useState([]);
  // const writer = useSelector((state) => state.signup.writer);
  const user = useSelector((state) => state.persistedReducer.user);
  const Writer = useSelector((state) => state.persistedReducer.writer);
  const Writers = useSelector((state) => state.persistedReducer.writer);
  console.log(Writers);
  const deleteWriter = Writers._id
  console.log(Writer);
  const OneWriter = Writer._id
  console.log(OneWriter)
  console.log(user);
  const EditorID = user.editorId;
  console.log(EditorID);
  // const dispatch = useDispatch()
  const [task, setTask] = useState({
    entertask: "",
  });

  const Url = `https://corenet-api.onrender.com/api/writers/${deleteWriter}`
  const url = `https://corenet-api.onrender.com/api/get-all-writers/${EditorID}`;
  const URL =  `https://corenet-api.onrender.com/api/${OneWriter}`
  console.log(URL)
  console.log(Url);



  const WritersDescription = () => {
    axios.get(URL)
    .then((res) => {
      console.log(res?.data.data);
    })
  }


  const getAllWriters = () => {
    axios.get(url).then((res) => {
      setWriter(res?.data.data);

      {
        console.log(res.data);
      }
    });
  };


  const DeletwWriter = (_id) => {
    axios
    .delete(Url)
    .then((res) => {
      console.log(res);
    })
  }
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
          <div className="AdminAllWriterWrap">
            <div className="AdminAllWriterList">
              <div className="AdminAllWriterStatus">
                {/* <HiOutlineUserCircle  className='AdminAllWriterIcon'/> */}
                <div className="AdminAllWriterIcon" onClick={WritersDescription}>
                  {e.FullName?.charAt(0)}
                </div>
              </div>
              <div className="AdminAllWriterInfo">
                <h4>{e.FullName}</h4>
                <p>{e.Email}</p>
              </div>
              <div className="Delete">
                <button style={{backgroundColor: "red", color: "white"}} onClick={DeletwWriter}>Del</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminAllWriter;
