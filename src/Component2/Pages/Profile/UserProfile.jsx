import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const [writersDescriptions, setWritersDescriptions] = useState({});
    const  Nav  = useNavigate()
    const dispatch = useDispatch();
    const user = useSelector((state) => state.stores.user);
    const writer = useSelector((state) => state.stores.formDataWriter);
    const WriterID = writer.id
    const WriterID1 = writer.token
    console.log(WriterID1);
    const EditorID = user.editorId;
    console.log(EditorID)
    const URL = `https://corenet-api.onrender.com/api/${EditorID}/get-a-writer/${WriterID}`;

  // /api/change-pass/:token
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
    <div className="Profilepage">
      <div className="ProfilepageWrap">
        <div className="profileview">
          <div className="backArrow">
          </div>
          <div className="ProfileName"></div>
          <h4>
            {writersDescriptions.FullName}
          </h4>
        </div>
        <div className="ProfileDesc">
          <div className="ProfileDescWrap">
            <div className="FirSurNAme">
              <div className="FirName">
                <h4>FirstName</h4>
                <div className="FirstName">
                  <p>{writersDescriptions.FullName}</p>
                </div>
              </div>
            </div>
            <div className="UserEmail">
              <div className="User">
                <h4>UserName</h4>
                <div className="UserName">
                  <p>{writersDescriptions.UserName}</p>
                </div>
              </div>
              <div className="Email">
                <h4>Email</h4>
                <div className="EmailWrap">
                  <p>{writersDescriptions.Email}</p>
                </div>
              </div>
            </div>
            <div className="PassComp">
              <div className="Pass" onClick={() => Nav("/userpage/userchangepassword")}>
                <h4>Password</h4>
                <div className="Password">
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
