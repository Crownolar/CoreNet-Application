import React, { useState } from 'react'
import './AdminDashCreateWriterNextContent.css'
import axios from 'axios';

const AdminDashCreateWriterNextContent = () => {
    const [FullName, setFullName] = useState('');
    const [UserName, setUserName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      console.log('Form submitted');
      console.log({ FullName, UserName, Email, Password });
  
    };

    const SignUp = (e) => {
      e.preventDefault();
      const url = "https://corenet-api.onrender.com/api/createwriter";
    console.log(url);

    const formData = {
      FirstName: FullName,
      UserName: UserName,
      Email: Email,
      Password: Password,
    };
  
      axios
        .post(url, formData)
        .then((res) => {
          console.log(res);
          Nav("/login");
          login_alert()
          
        })
        .catch((error) => {
          console.error('Error:', error);
          if (error.response) {
            console.error('Response Data:', error.response.data);
          }
        });
    };
  
    return (
      <div className="signup-form-container">
        <h2>Create New Writer</h2>
        <form onSubmit={handleSubmit}>
          <label>Full Name:</label>
          <input
            type="text"
            value={FullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <label>Username:</label>
          <input
            type="text"
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label>Email:</label>
          <input
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={SignUp}>Sign Up</button>
        </form>
      </div>
    );
  };

export default AdminDashCreateWriterNextContent