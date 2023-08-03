import React from 'react'
import "./SignOut.css"
import { useParams } from 'react-router-dom'

const SignOut = () => {
const id= useParams
    const SignOut = () => {
        axios
          .post(`https://corenet-api.onrender.com/api/signout/${id}`)
          .then((response) => {
            if (response.status === 200) {
              Nav("/");
            } else {
              console.error("Failed to sign out");
            }
          })
          .catch((error) => {
            console.error("Error occurred during sign out", error);
          });
      }

  return (
    <div className="signout">
        <div className="signoutWrap">
            <div className='signupdecision'>
                <h3>Are you sure you want to logout?</h3>
            </div>
            <div className='signupOption'>
                <button className='signOptionCancel'>Cancel</button>
                <button className='signOptionCancel1' onClick={SignOut}>Signout</button>
            </div>
        </div>
    </div>
  )
}

export default SignOut