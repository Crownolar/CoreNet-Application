import './Header.css'
import {FaRegCircleUser} from "react-icons/fa6"
import {GiHamburgerMenu} from "react-icons/gi"
import {IoCloseCircleOutline} from "react-icons/io5"
import './Head.css'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'


const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [activeNavItem, setActiveNavItem] = useState("/");
    const Nav = useNavigate()
    const user = useSelector((state) => state.persistedReducer.user);
    console.log(user);
  // const handleNavItemClick = (navItem) => {
  //   setActiveNavItem(navItem);
  //   setSidebarOpen(false);
  // };

  const Navigate = (path) => {
    Nav(path);
    // handlecloseMobile();
    setSidebarOpen(false);
  }

  const handleNavItemClick = (path) => {
    if (user) {
      Nav(path)
    } else {
      // setActiveNavItem(navItem);
      Nav('/login');
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    Nav()
  },[Nav])
  



  return (
    <div>
        <header className='head'>
            <div className="headerwrap" >
                <div className="Logo">
                <img src="./realbluelogo.png" alt="LOGO" />
                </div>

                <div className="centerNav">
                    <ul>
                        <li onClick={() => handleNavItemClick("/adminpage/admindashhome")}>Home</li>
                        <li onClick={() => Nav('/contactus')}>Contact us</li>
                        <li onClick={() => Nav('/about')}>About</li>
                        <li onClick={() => Nav('./Login')} className='usericons'> <FaRegCircleUser  className='user'/> User</li>
                    </ul>
                </div>

                <div className="CTA1" onClick={() => Nav("./")}>
                    <button onClick={() => Nav('./Login')}>Get Started</button>
                    {/* <img src="./realbluelogo.png" alt=""  /> */}
                </div>
                <div className="CTA" onClick={() => Nav("./")}>
                    {/* <button onClick={() => Nav('./Login')}>Get Started</button> */}
                    <img src="./realbluelogo.png" alt=""  />
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
                        <div onClick={() => handleNavItemClick("/adminpage/admindashhome")}>Home</div>
                        <div onClick={() => Navigate('/contactus')}>Contact Us</div>
                        <div onClick={() => Navigate('/about')}>About</div>
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


// import './Header.css'
// import {FaRegCircleUser} from "react-icons/fa6"
// import {PiUserCircleLight} from "react-icons/pi"
// import {GiHamburgerMenu} from "react-icons/gi"
// import {IoCloseCircleOutline} from "react-icons/io5"
// import {CiMenuBurger} from "react-icons/ci"
// import './Head.css'
// // import './HeaderTab.css'
// import { useState } from 'react'


// const Header = () => {
//     const [sidebarOpen, setSidebarOpen] = useState(false)


//   return (
//     <div>
//         <header className='head'>
//             <div className="headerwrap" >
//                 <div className="Logo">
//                     <img src="./realbluelogo.png" alt="LOGO" />
//                 </div>

//                 <div className="centerNav">
//                     <ul>
//                         <li>Home</li>
//                         <li>Contact us</li>
//                         <li>About</li>
//                         <li className='usericons'> 
//                         <PiUserCircleLight  className='user'/> User</li>
//                     </ul>
//                 </div>

//                 <div className="CTA">
//                     <button>Get Started</button>
//                 </div>
//                 <span>
//                   < CiMenuBurger className='burger'/>
//                   </span>

//                 <div className="ham">
//                     <GiHamburgerMenu onClick={()=> setSidebarOpen(true)} className='hamb'/>
//                 </div>
                
//             </div>
//             {sidebarOpen && (
//           <div className="sidebarDiv">
//             <div className="close">
//               <IoCloseCircleOutline className='closeicon' onClick={() => setSidebarOpen(false)} />
//             </div>
//             <div className="contents">
//               <div className="useR">
//                 <FaRegCircleUser className='aUser'/>
//                 <p>Sign In</p>
//               </div>

//               <div className="centerNav1">
//                     <ul>
//                         <div>Home</div>
//                         <div>Contact Us</div>
//                         <div>About</div>
//                         <div>Price</div>
//                     </ul>
//                 </div>

//             </div>
//           </div>
//         )}
//         </header>
//     </div>
//   )
// }

// export default Header