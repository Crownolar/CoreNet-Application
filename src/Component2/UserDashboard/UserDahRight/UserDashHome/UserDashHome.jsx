import React from 'react';
import './UserDashHome.css';

const WriterDashHome = () => {
  return (
    <div className="home-dashboard">
      <div className="dashboard-header">
        <h2>"Here's Your Hub"</h2>
        <p>Manage Your Tasks and Update Progress</p>
      </div>
      <div className="dashboard-content">
        <div className="task-management">
          <h2>Task Management</h2>
          <p>
            As a writer, you can access your assigned tasks in the "Task
            Management" section. Review task details, deadlines, and
            instructions. Mark tasks as in progress, completed, or pending
            review.
          </p>
          <img src="/Complete.jpg" alt="Task Management" />
        </div>
        <div className="profile-update">
          <h2>Profile Update</h2>
          <p>
            Keep your profile information up to date in the "Profile Update"
            section. Update your skills, preferences, and contact information.
            This will help editors assign you tasks that match your expertise.
          </p>
          <img src="Profile.jpg" alt="Profile Update" />
        </div>
      </div>
    </div>
  );
};

export default WriterDashHome;
