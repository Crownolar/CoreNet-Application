import React, { useEffect, useState } from "react";
import "./Profile.css";
import { BsArrowLeft } from "react-icons/bs";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
  const Editor = useSelector((state) => state.stores.user);
  const Nav = useNavigate();
  const EditorId = Editor.editorId;
  const [EditorInfo, setEditorInfo] = useState({});
  const { token } = useParams();
  const url = `https://corenet-api.onrender.com/api/delete-editor/${EditorId}`;
  //update-editor/:id"

  const getOneEditor = () => {
    const url = `https://corenet-api.onrender.com/api/get-one-editor/${EditorId}`;
    axios.get(url).then((res) => {
      console.log(res.data.data);
      setEditorInfo(res.data.data);
    });
  };

  const deleteAdmin = () => {
    axios.delete(url).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    getOneEditor();
  }, []);

  return (
    <div className="Profilepage">
      <div className="ProfilepageWrap">
        <div className="profileview">
          <div className="backArrow"></div>
          <div className="ProfileName"></div>
          <h4>
            {EditorInfo.Surname} {EditorInfo.FirstName}
          </h4>
        </div>
        <div className="ProfileDesc">
          <div className="ProfileDescWrap">
            <div className="FirSurNAme">
              <div className="FirName">
                <h4>FirstName</h4>
                <div className="FirstName">
                  <p>{EditorInfo.FirstName}</p>
                </div>
              </div>
              <div className="SrName">
                <h4>SurName</h4>
                <div className="SurName">
                  <p>{EditorInfo.Surname}</p>
                </div>
              </div>
            </div>
            <div className="UserEmail">
              <div className="User">
                <h4>UserName</h4>
                <div className="UserName">
                  <p>{EditorInfo.UserName}</p>
                </div>
              </div>
              <div className="Email">
                <h4>Email</h4>
                <div className="EmailWrap">
                  <p>{EditorInfo.Email}</p>
                </div>
              </div>
            </div>
            <div className="PassComp">
              <div className="Pass">
                <h4 onClick={() => Nav("/adminpage/adminchangepassword")}>
                  Change Password
                </h4>
              </div>
              <div className="Comp">
                <h4>Company Name</h4>
                <div className="Company">
                  <p>{EditorInfo.CompanyName}</p>
                </div>
              </div>
            </div>
            <div className="ProfileFooter">
              <div className="Del">
                <button
                  className="Pbtn1"
                  onClick={() => Nav("/adminpage/admineditpage")}
                >
                  Edit
                </button>
                <button className="Pbtn" onClick={() => deleteAdmin()}>
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
