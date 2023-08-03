import React, { useState } from 'react'
import './AdminDashCreateWriterNextContent.css'

const AdminDashCreateWriterNextContent = () => {
    const [FullName, setFullName] = useState('');
    const [UserName, setUserName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Here, you can handle the form submission and any further logic
      console.log('Form submitted');
      console.log({ FullName, UserName, Email, Password });
  
      // Add your logic to submit the data to the server if needed
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
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  };

export default AdminDashCreateWriterNextContent