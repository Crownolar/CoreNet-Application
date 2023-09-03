import React from "react";
import "./AdminDashHome.css";

const AdminDashHome = () => {
  return (
    <div className="HomeDashboard">
      <div className="DashboardHeader">
        <h1>"Here's Your Hub"</h1>
        <p>Explore, Manage, and Assign Tasks to Writers</p>
      </div>
      <div className="DashboardContent">
        <div className="TaskAssignment">
          <h2>Task Assignment</h2>
          <p>
            As an editor, you can easily assign tasks, set deadlines, and
            provide instructions to your team of writers through the "Task
            Assignment" section.
          </p>
          <div className="EditImage">
          <img src="/edit.jpg" alt="Task Assignment" />
          </div>
        </div>
        <div className="WriterManagement">
          <h2>Writer Management</h2>
          <p>
            Efficiently manage your writers, view profiles, assignments, and
            statuses, while creating new writer accounts and overseeing progress
            in the "Task Overview" section.
          </p>
          <img src="write.jpg" alt="Writer Management" />
        </div>
      </div>
    </div>
  );
};

export default AdminDashHome;
//  {User.UserName}
