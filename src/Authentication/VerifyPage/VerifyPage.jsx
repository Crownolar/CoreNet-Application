import React, { useEffect, useState } from "react";
import "./VerifyPage.css";


const VerifyPage = () => {
  
  
  return (
    <div className="veifypage">
      <div className="verifypagewrap">
        <div className="verificationpageaction">
          
            <h3>Verification successful</h3>
         
            <>
              <p>A link was sent to you at the email address provided</p>
              <p>
                Please verify your email address to complete the registration
                process
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
