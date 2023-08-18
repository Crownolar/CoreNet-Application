import React from 'react'
import "./AdminDashHome.css"

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
                As an editor, you have the power to assign tasks to your team of
                writers. Simply navigate to the "Task Assignment" section to
                create tasks, set deadlines, and provide instructions.
              </p>
              <img src="/edit.jpg" alt="Task Assignment" />
            </div>
            <div className="WriterManagement">
              <h2>Writer Management</h2>
              <p>
                Manage your team of writers in the "All Writers" section. View
                their profiles, assignments, and status. You can also create new
                writer accounts and oversee their progress.
              </p>
              <img src="write.jpg" alt="Writer Management" />
            </div>
          </div>
        </div>
  )
}

export default AdminDashHome
//  {User.UserName}