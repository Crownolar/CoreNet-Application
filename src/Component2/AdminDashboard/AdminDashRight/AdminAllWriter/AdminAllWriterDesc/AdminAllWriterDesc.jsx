import React, { useEffect, useState } from "react";
import "./AdminAllWriterDesc.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { clearWriter } from "../../../../../Redux/ActionState/ActionState";

const AdminAllWriterDesc = () => {
  const [writersDescriptions, setWritersDescriptions] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const { id } = useParams();
  console.log(id)
  const dispatch = useDispatch();
  const Nav = useNavigate()
  const user = useSelector((state) => state.stores.user);
  const EditorID = user.editorId;
  const URL = `https://corenet-api.onrender.com/api/${EditorID}/get-a-writer/${id}`;
  const url = `https://corenet-api.onrender.com/api/delete-writer/${id}`;
  console.log(url);

  const deleteWriter = () => {
    axios
    .delete(url)
    .then((res) => {
      console.log(res);
      setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 5000);
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
      {showPopup && (
        <div className="popup">
          <p>Writer Deleted Succssfully</p>
        </div>
      )}
      <div className="user-card1">
        {/* <div className="avatar"></div> */}
        <div className="user-info1">
          <h1>{writersDescriptions.UserName}</h1>
          <p>{writersDescriptions.FullName}</p>
          <p>{writersDescriptions.Email}</p>
        </div>
        <button className="btns" onClick={deleteWriter}>Delete</button>
      </div>
    </div>
  );
};

export default AdminAllWriterDesc;
