import React, { useEffect, useState } from "react";
import "./VerifyPage.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const VerifyPage = () => {
  const { token } = useParams();
    const [isVerified, setIsVerified] = useState(1)
    console.log(token)
    const Nav = useNavigate()

    useEffect(() => {
      const verifyUser = () => {
          axios
              .get(`https://corenet-api.onrender.com/api/verify-email/${token}`)
              .then((res) => {
                  console.log(res);
                  setIsVerified(2)
              })
              .catch((error) => {
                console.error("Error:", error);
                if (error.response) {
                  console.error("Response Data:", error.response.data);
                }
              });
      };
      verifyUser()
  }, []);



  
  return (
    <div className="veifypage">
      <div className="verifypagewrap">
        <div className="verificationpageaction">
          o
         {isVerified === 1 ?<>  <h3>Verification successful</h3>

<>
  <p>Congratulations!</p>
  <p style={{textAlign: "center"}}>
    Your account has been successfully verified. 
  </p>
</>

<p>Click ok to continue</p></> : "Verification Failed"}
        </div>
        <div className="verificationcontinue">
          <button onClick={() => Nav("../login")}>{isVerified === 1 ? "Sign in" : "Resend Email"}</button>
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;
