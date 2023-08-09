import './Header.css'
import {FaRegCircleUser} from "react-icons/fa6"
import {GiHamburgerMenu} from "react-icons/gi"
import {IoCloseCircleOutline} from "react-icons/io5"
import './Head.css'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";


const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const Nav = useNavigate()


  return (
    <div>
        <header className='head'>
            <div className="headerwrap" >
                <div className="Logo">
                    <button>Logo</button>
                </div>

                <div className="centerNav">
                    <ul>
                        <li onClick={() => Nav('/Adminpage')}>Home</li>
                        <li onClick={() => Nav('/contactus')}>Contact us</li>
                        <li onClick={() => Nav('/about')}>About</li>
                        <li onClick={() => Nav('./Login')} className='usericons'> <FaRegCircleUser  className='user'/> User</li>
                    </ul>
                </div>

                <div className="CTA">
                    <button onClick={() => Nav('./Login')}>Get Started</button>
                </div>

                <div className="ham">
                    <GiHamburgerMenu onClick={()=> setSidebarOpen(true)} className='hamb'/>
                </div>
                
            </div>
            {sidebarOpen && (
          <div className="sidebarDiv">
            <div className="close">
              <IoCloseCircleOutline className='closeicon' onClick={() => setSidebarOpen(false)} />
            </div>
            <div className="contents">
              <div onClick={() => Nav('./Login')} className="useR">
                <FaRegCircleUser className='aUser'/>
                <p>Sign In</p>
              </div>

              <div className="centerNav1">
                    <ul>
                        <div onClick={() => Nav('/Adminpage')}>Home</div>
                        <div>Contact Us</div>
                        <div>About</div>
                        <div>Price</div>
                    </ul>
                </div>

            </div>
          </div>
        )}
        </header>
    </div>
  )
}

export default Header