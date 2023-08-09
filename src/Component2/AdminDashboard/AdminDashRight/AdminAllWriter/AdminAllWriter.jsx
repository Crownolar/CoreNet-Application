import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {HiOutlineUserCircle} from "react-icons/hi"
import "./AdminAllWriter.css"

const AdminAllWriter = () => {

  


  const [writer, setWriter] = useState([])
  // const writer = useSelector((state) => state.signup.writer);
  const user = useSelector((state) => state.persistedReducer.user);
  console.log(user);
  const EditorID = user.editorId
  console.log(EditorID);
  // const dispatch = useDispatch()
const  [task, setTask] = useState({
  entertask: "",

})

  const url = `https://corenet-api.onrender.com/api/get-all-writers/${EditorID}`;

  const getAllWriters = () => {
    axios.get(url)
    .then((res) =>{
      setWriter(res?.data.data);
    
      {console.log(res.data)}
    })
    
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
      {
        writer?.map((e) => (

          <div className="AdminAllWriterWrap">
        <div className="AdminAllWriterList">
          <div className="AdminAllWriterStatus">
            {/* <HiOutlineUserCircle  className='AdminAllWriterIcon'/> */}
            <div className="AdminAllWriterIcon">{e.FullName?.charAt(0)}</div>
          </div>
          <div className="AdminAllWriterInfo">
            <h4>{e.FullName}</h4>
            <p>{e.Email}</p>
          </div>
        </div>
      </div>
        ))
      }
          </div>
    </div>
  )
}

export default AdminAllWriter