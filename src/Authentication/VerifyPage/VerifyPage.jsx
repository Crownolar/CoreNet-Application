import React, { useEffect, useState } from "react";
import "./VerifyPage.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const VerifyPage = () => {
  const { token } = useParams();
  const [showPopup, setShowPopup] = useState(false);
  const [showPopuperror, setShowPopupError] = useState(false);
  const [isVerified, setIsVerified] = useState(1);
  console.log(token);
  const Nav = useNavigate();
  const formDatasignin = useSelector((state) => state.stores.formDatasignin);
  const Email = formDatasignin.Email

  useEffect(() => {
    const verifyUser = () => {
      axios
        .get(`https://corenet-api.onrender.com/api/verify-email/${token}`)
        .then((res) => {
          console.log(res);
          setIsVerified(2);
        })
        .catch((error) => {
          console.error("Error:", error);
          if (error.response) {
            console.error("Response Data:", error.response.data);
          }
        });
    };
    verifyUser();
  }, []);

  const Resend = () => {
    const url = `https://corenet-api.onrender.com/api/resend-verification-email`
    axios
    .post(url, {Email})
    .then(function(res) {
      console.log(res)
      setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 10000);
    })
    .catch((error) => {
      console.error("Error:", error);
      setShowPopupError(true);
        setTimeout(() => {
          setShowPopupError(false);
        }, 10000);
      if (error.response) {
        console.error("Response Data:", error.response.data);
      }
    });
  }

  return (
    <div className="veifypage">
      {showPopup && (
        <div className="popup">
          <p>Email Sent</p>
        </div>
      )}
      {showPopuperror && (
        <div className="popup">
          <p>Email Not Sent</p>
        </div>
      )}
      <div className="verifypagewrap">
        <div className="verificationpageaction">
          {isVerified === 1 ? (
            "Email is verifying"
          ) : isVerified === 2 ? (
            <>
              <h3>Verification successful</h3>
              <>
                <p>Congratulations!</p>
                <p style={{ textAlign: "center" }}>
                  Your account has been successfully verified.
                </p>
              </>
              <p>Click ok to continue your registration</p>
            </>
          ) : (
            "Verification Failed"
          )}
        </div>
        <div className="verificationcontinue">
          {isVerified === 2 ? (
            <button onClick={() => Nav("../login")}>Ok</button>
          ) : (
            <p>
              Email verification failed?
              <span style={{color: "#0455B4"}} onClick={Resend}>Resend verification Email</span>{" "}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDg2ZWYxNmY0ZjQ2MzJhNjk2NWU3MyIsIlVzZXJOYW1lIjoiU3RhcmsiLCJFbWFpbCI6Im9yaWFkZXl1c3VmMzRAZ21haWwuY29tIiwiaWF0IjoxNjkyNjcwNTMxLCJleHAiOjE2OTI3NTY5MzF9.sMdPyEOVyMdBQiO5xo37uYDf5eZrijc1EGQHPhCxCHk
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTI0MGMyNmVkMDY1YmI1ZDk3NjAxMyIsIlVzZXJOYW1lIjoiSG9ybGEiLCJFbWFpbCI6ImNyb3duaG9ybGEwN0BnbWFpbC5jb20iLCJpYXQiOjE2OTI2NzAzNjksImV4cCI6MTY5Mjc1Njc2OX0._Kz1DRjcPutgc8bl14O2tCSILyQbOubC5JQEoQ8Y3O0