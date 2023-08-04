import React from 'react'
import "./SignOut.css"
// import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { SignoutAdmin } from '../../Redux/ActionState/ActionState'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignOut = () => {
  const Nav = useNavigate()
  const formDatasignin = useSelector((state) => state.signup.formDatasignin);

  const dispatch = useDispatch()
    const SignOut = () => {
      const EditorId = formDatasignin.editorId;
      const url = `https://corenet-api.onrender.com/api/signout/:${EditorId}`
      console.log(url)
        axios
          .post(url)
          .then((res) => {
            console.log("Api res",res.data);
            dispatch(SignoutAdmin())
            Nav("/")
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