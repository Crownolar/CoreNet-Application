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
    const user = useSelector((state) => state.stores.user);
    const writer = useSelector((state) => state.stores.writer);
    console.log(user);
  const handleNavItem = (navItem) => {
    setActiveNavItem(navItem);
    setSidebarOpen(false);
  };

  const handleUserClick = () => {
    if (user) {
        Nav('/signout');
    } else if (writer) {
        Nav('/usersignout');
    } else {
        Nav('/login');
    }
    setSidebarOpen(false);
};

  const Navigate = (path) => {
    Nav(path);
    // handlecloseMobile();
    setSidebarOpen(false);
  }

  const handleNavItemClick = () => {
    if (Object.keys(user).length !== 0) {
        Nav('/adminpage/admindashhome');
    } else {
        Nav('/login');
    }
    setSidebarOpen(false);
};

// const handleNavItemClick = () => {
//   if (Object.keys(user).length !== 0) {
//       Nav('/adminpage/admindashhome');
//   } else if (Object.keys(writer).length !== 0) {
//       // Replace this with the writer dashboard route
//       Nav('/userpage/userdashhome');
//   } else {
//       Nav('/login');
//   }
//   setSidebarOpen(false);
// };

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
                        <li onClick={() => Nav("./")} className={activeNavItem === "/" ? "active" : ""}>Home</li>
                        <li onClick={() => Nav('/contactus')} className={activeNavItem === '/contactus' ? "active" : ""}>Contact us</li>
                        <li onClick={() => Nav('/about')} className={activeNavItem === '/about' ? "active" : ""}>About</li>
                        <li onClick={handleNavItemClick}>Dashboard</li>
                        <li onClick={() => Nav('./Login')} className='usericons'> <FaRegCircleUser  className='users'/> User</li>
                    </ul>
                </div>

                <div className="CTA1">
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
                        <div onClick={handleNavItemClick}>Home</div>
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