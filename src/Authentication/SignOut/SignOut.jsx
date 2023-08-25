import "./SignOut.css"
// import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {  clearUser } from '../../Redux/ActionState/ActionState'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loader from "../../Loader/Loader"
import { useState } from "react"

const SignOut = () => {
  const [loading, setLoading] = useState(false)
  const Nav = useNavigate()
  const user = useSelector((state) => state.stores.user)
  const dispatch = useDispatch()
    const SignOut = () => {
      setLoading(true)
      if (!user || !user.editorId) {
        console.error("User or user's editorId is missing!");
        setLoading(false);
        return;
      }
      const url = `https://corenet-api.onrender.com/api/signout/${user?.editorId}`
      console.log(url)
        axios
          .post(url)
          .then((res) => {
            console.log("Api res",res.data);
            setLoading(false)
            dispatch(clearUser())
            Nav("/")
            // console.log(editorId)
          })
          .catch((error) => {
            console.error("Error occurred during sign out", error);
          });
      }

  return (
    <div className="signout">
        <div className="signoutWrap">
            <div className='signupdecision'>
                <h3>Are you sure you want to Signout?</h3>
            </div>
            <div className='signupOption'>
                <button className='signOptionCancel' onClick={() => Nav("../adminpage/admindashhome")}>Cancel</button>
                <button className='signOptionCancel1' onClick={SignOut}>{loading ? <Loader /> : "Signout"}</button>
            </div>
        </div>
    </div>
  )
}

export default SignOut