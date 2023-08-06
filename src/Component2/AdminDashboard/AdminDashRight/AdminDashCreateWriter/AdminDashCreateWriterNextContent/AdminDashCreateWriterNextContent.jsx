import React, { useState } from 'react'
import './AdminDashCreateWriterNextContent.css'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateformDataWriter } from '../../../../../Redux/ActionState/ActionState';
import { updateWriter } from '../../../../../Redux/ActionState/ActionState';

const AdminDashCreateWriterNextContent = () => {
    // const [FullName, setFullName] = useState('');
    // const [UserName, setUserName] = useState('');
    // const [Email, setEmail] = useState('');
    // const [Password, setPassword] = useState('');
    const formDataWriter = useSelector((state) => state.signup.formDataWriter);
    const dispatch = useDispatch()
    const Nav = useNavigate();



      const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateformDataWriter({[name]: value }))
      };



    const SignUp = (e) => {
      e.preventDefault();
      const url = "https://corenet-api.onrender.com/api/signup";
    console.log(url);
  
      axios
        .post(url, formDataWriter)
        .then((res) => {
          console.log(res);
          dispatch(updateWriter(res.data.data))
          Nav("/login");
          login_alert()
          
        })
        .catch((error) => {
          console.error('Error:', error);
          if (error.response) {
            console.error('Response Data:', error.response.data);
          }
        });
      // console.log(SignUp);
  
    };
  
  ;
  
    return (
      <div className="signup-form-container">
        <h2>Create New Writer</h2>
        <form>
          {/* <label>Full Name:</label> */}
          <input
          placeholder='Full Name'
            type="text"
            name="FirstName"
            value={formDataWriter.FirstName}
            onChange={handleChange}
          />
          <input
          placeholder='Username'
            type="text"
            name="UserName"
            value={formDataWriter.UserName}
            onChange={handleChange}
          />
          <input
          placeholder='Email'
            type="email"
            name="Email"
            value={formDataWriter.Email}
            onChange={handleChange}
          />
          <input
          placeholder='Password'
            type="password"
            name="Password"
            value={formDataWriter.Password}
            onChange={handleChange}
          />
          <button type="submit" onClick={SignUp}>Sign Up</button>
        </form>
      </div>
    );
  };

export default AdminDashCreateWriterNextContent