import React, { useEffect, useState } from "react";
import "./VerifyPage.css";
import axios from "axios";
import {useLocation} from "react-router-dom"

const VerifyPage = (props) => {
  const [verificationStatus, setVerificationStatus] = useState("");


  useEffect(() => {
  const location = useLocation();
    const searchParams = new URLSearchParams(props.location.search);
    const token = searchParams.get("token");
    if (token) {
        verifyUser(token);
    } else {
        setVerificationStatus("Invalid token");
    }
}, [props.location.search]);

const verifyUser = (token) => {
    axios
    .put(`https://corenet-api.onrender.com/api/verify-email/${token}`)
        .then((res) => {
            console.log(res);
            setVerificationStatus("user verified");
        })
        .catch((err) => {
            console.log("Error response:", err);
            setVerificationStatus("error verifying user, try again");
        });

  };
  
  return (
    <div className="veifypage">
      <div className="verifypagewrap">
        <div className="verificationpageaction">
          {verificationStatus === "user verified" ? (
            <h3>Verification successful</h3>
          ) : (
            <>
              <p>A link was sent to you at the email address provided</p>
              <p>
                Please verify your email address to complete the registration
                process
              </p>
            </>
          )}

          <p>Click ok to continue</p>
        </div>
        <div className="verificationcontinue">
          <button>Ok</button>
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;
