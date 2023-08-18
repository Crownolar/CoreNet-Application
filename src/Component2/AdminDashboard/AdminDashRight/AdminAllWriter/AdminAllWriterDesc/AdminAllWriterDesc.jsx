import React, { useEffect, useState } from "react";
import "./AdminAllWriterDesc.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { clearWriter } from "../../../../../Redux/ActionState/ActionState";

const AdminAllWriterDesc = () => {
  const [writersDescriptions, setWritersDescriptions] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  const Nav = useNavigate()
  const user = useSelector((state) => state.persistedReducer.user);
  const EditorID = user.editorId;
  const URL = `https://corenet-api.onrender.com/api/${EditorID}/get-a-writer/${id}`;
  const url = `https://corenet-api.onrender.com/api/delete-writer/${id}`;
  console.log(url);

  const deleteWriter = () => {
    axios
    .delete(url)
    .then((res) => {
      console.log(res);
      dispatch(clearWriter(res.data.data))
      Nav("/adminpage/adminallwriter")
    });
  };


  const getDescription = () => {
    axios.get(URL).then((res) => {
      console.log(res);
      setWritersDescriptions(res.data.data);
    });
  };

  useEffect(() => {
    getDescription();
  }, []);

  return (
    <div className="writerdsc">
      <div className="user-card">
        {/* <div className="avatar"></div> */}
        <div className="user-info">
          <h3>{writersDescriptions.UserName}</h3>
          <p>{writersDescriptions.FullName}</p>
          <p>{writersDescriptions.Email}</p>
        </div>
        <button onClick={deleteWriter} style={{border: "none", backgroundColor: "red", color: "White", padding: "20px"}}>Delete</button>
      </div>
    </div>
  );
};

export default AdminAllWriterDesc;
