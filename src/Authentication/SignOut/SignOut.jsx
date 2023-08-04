 'react'
import "./SignOut.css"
// import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { SignoutAdmin, clearUser } from '../../Redux/ActionState/ActionState'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const SignOut = () => {
  const Nav = useNavigate()
  const user = useSelector((state) => state.signup.user)
// const {editorId} =  useParams()
  const dispatch = useDispatch()
    const SignOut = () => {
      // const EditorId = EditID.editorId;
      const url = `https://corenet-api.onrender.com/api/signout/${user?.editorId}`
      console.log(url)
        axios
          .post(url)
          .then((res) => {
            console.log("Api res",res.data);
            dispatch(clearUser())
            Nav("/")
            console.log(editorId)
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
                <button className='signOptionCancel' onClick={() => Nav("../signup")}>Cancel</button>
                <button className='signOptionCancel1' onClick={SignOut}>Signout</button>
            </div>
        </div>
    </div>
  )
}

export default SignOut