import React, { useEffect, useState } from "react";
import "./Profile.css";
import { BsArrowLeft } from "react-icons/bs";
import { useSelector } from "react-redux";
import axios from "axios";

const Profile = () => {
  const Editor = useSelector((state) => state.persistedReducer.user);
const EditorId = Editor.editorId
    const [EditorInfo, setEditorInfo] = useState({})

    const getOneEditor = () => {
        const url = `https://corenet-api.onrender.com/api/get-one-editor/${EditorId}`
        axios
        .get(url)
        .then((res) => {
            console.log(res.data.data);
            setEditorInfo(res.data.data)
        })
    }

    useEffect(() => {
        getOneEditor()
    }, [])


  return (
    <div className="Profilepage">
      <div className="ProfilepageWrap">
        <div className="profileview">
          <div className="backArrow">
            {/* <BsArrowLeft size={30} color="#0455B4" /> */}
          </div>
          <div className="ProfileName"></div>
         <h4> {EditorInfo.Surname} {EditorInfo.FirstName}</h4>
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
                    <h4>Password</h4>
                    <div className="Password">
                        <p></p>
                    </div>
                </div>
                <div className="Comp">
                    <h4>Company Name</h4>
                    <div className="Company">
                        <p>{EditorInfo.CompanyName}</p>
                    </div>
                </div>
            </div>
          <div className="ProfileFooter">

          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
