import React, { useEffect, useState } from "react";
import "./Profile.css";
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Profile = () => {
    const [writersDescriptions, setWritersDescriptions] = useState({});
    const dispatch = useDispatch();
    const user = useSelector((state) => state.stores.user);
    const writer = useSelector((state) => state.stores.formDataWriter);
    const WriterID = writer.id
    const EditorID = user.editorId;
    const URL = `https://corenet-api.onrender.com/api/${EditorID}/get-a-writer/${WriterID}`;
  
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
              <div className="Pass">
                <h4>Password</h4>
                <div className="Password">
                  <p></p>
                </div>
              </div>
            </div>
            <div className="ProfileFooter">
              <div className="Del"> 
                <button
                  style={{ backgroundColor: "red", color: "white" }}
                  onClick={() => deleteAdmin()}
                >
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
