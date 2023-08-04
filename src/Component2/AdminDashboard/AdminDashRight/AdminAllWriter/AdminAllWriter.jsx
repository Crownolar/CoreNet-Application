import React from 'react'
import {HiOutlineUserCircle} from "react-icons/hi"
import "./AdminAllWriter.css"

const AdminAllWriter = () => {
  return (
    <div className="AdminAllWriter">
      <div className="AdminAllWriterWrap">
        <div className="AdminAllWriterH1">
          <h1>All Writers</h1>
        </div>
        <div className="AdminAllWriterList">
          <div className="AdminAllWriterStatus">
            <HiOutlineUserCircle  className='AdminAllWriterIcon'/>
          </div>
          <div className="AdminAllWriterInfo">
            <h4>John Doe</h4>
            <p>johndoe@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminAllWriter