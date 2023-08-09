import React, { useEffect, useState } from "react";
import "./VerifyPage.css";

const VerifyPage = () => {
  return (
    <div className="veifypage">
      <div className="verifypagewrap">
        <div className="verificationpageaction">
          <h3>Verification successful</h3>

          <>
            <p>Congratulations!</p>
            <p style={{textAlign: "center"}}>
              Your account has been successfully verified. You can now enjoy
              full access to our services and features.
            </p>
          </>

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
