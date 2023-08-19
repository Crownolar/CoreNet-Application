import React, { useEffect, useState } from "react";
import "./VerifyPage.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const VerifyPage = () => {
  const { token } = useParams();
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
    })
    .catch((error) => {
      console.error("Error:", error);
      setLoading(false)
      if (error.response) {
        console.error("Response Data:", error.response.data);
      }
    });
  }

  return (
    <div className="veifypage">
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
              <p>Click ok to continue</p>
            </>
          ) : (
            "Verification Failed"
          )}
        </div>
        <div className="verificationcontinue">
          {isVerified === 2 ? (
            <button onClick={() => Nav("../login")}>Sign in</button>
          ) : (
            <p>
              Didn't receive an Email?{" "}
              <span style={{color: "#0455B4"}} onClick={Resend}>Resend verification Email</span>{" "}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;
