import React from 'react'
import "./UserPage.css"
import UserDashLeft from './UserDashLeft/UserDashLeft'
import UserDashRight from './UserDahRight/UserDashRight'

const UserPage = () => {
  return (
    <div>
        <div className='UserDashBoardLeftRight'>
        <div className='leftHolder'>
            <UserDashLeft />
        </div>
        <div className='RightHolder'>
            <UserDashRight />
        </div>
     </div>
    </div>
  )
}

export default UserPage