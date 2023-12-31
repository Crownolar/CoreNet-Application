import "./Header.css";
import { FaRegCircleUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5";
import "./Head.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { FcAbout } from "react-icons/fc";
import { RiPriceTag3Line } from "react-icons/ri";
import { AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import "animate.css";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("");
  const [activenav, setActiveNav] = useState("./");
  const [show, setShow] = useState(false);
  const Nav = useNavigate();
  const user = useSelector((state) => state.stores.user);
  const User = user.UserName;
  console.log(user);
  console.log(User);
  const writer = useSelector((state) => state.stores.formDataWriter);
  const WriterId = writer.id
  console.log(WriterId)
  console.log(writer);
  const handleNavItem = (navItem) => {
    setActiveNavItem(navItem);
    setSidebarOpen(false);
  };
  const handleClick = (path) => {
    setActiveNavItem(path);
    setSidebarOpen(false);
  };

  const handleUserClick = () => {
    if (user) {
      Nav("/signout");
    } else if (writer) {
      Nav("/usersignout");
    } else if (!user) {
      Nav("/login");
    } else if (!writer) {
      Nav("/userlogin");
    }
    setSidebarOpen(false);
  };

  const Navigate = (path) => {
    Nav(path);
    // handlecloseMobile();
    setSidebarOpen(false);
  };

  const handleNavItemClick = () => {
    if (Object.keys(user).length !== 0) {
      Nav("/adminpage/admindashhome");
    } else {
      Nav("/login");
    }
    setSidebarOpen(false);
  };

  // const payment =()=>{
  //   const refVal = "colin"+ Math.random() * 1000;
  //   window.Korapay.initialize({
  //     key: "pk_test_uDyCxZ9PRtSKFn4a5CrA1EQ4gAbybQBmU7vaubzT",
  //     reference: `${refVal}`,
  //     amount: totals,
  //     currency: "NGN",
  //     customer: {
  //       name: user.name,
  //       email: user.email
  //     },
  //     notification_url: "https://example.com/webhook"
  //   });
  // }

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
    Nav();
  }, [Nav]);

  //onClick={() => {
  //   setActiveTab("admintaskoverview");
  //   Nav("/adminpage/admintaskoverview");
  //   console.log("activeTab");
  // }}
  // className={`Admintask ${
  //   activeTab === "admintaskoverview" ? "active" : ""
  // }`}

  return (
    <div>
      <header className="head">
        <div className="headerwrap">
          <div className="Logo">
            <img src="./realbluelogo.png" alt="LOGO" />
          </div>

          <div className="centerNav">
            <ul>
              <li
                onClick={() => {
                  setActiveNav("./");
                  Nav("./");
                  console.log("activenav");
                }}
                className={`activeNavItem ${
                  activenav === "./" ? "active" : ""
                }`}
              >
                Home
              </li>
              <li
                onClick={() => {
                  setActiveNav("./contactus");
                  Nav("./contactus");
                  console.log("activenav");
                }}
                className={`activeNavItem ${
                  activenav === "./contactus" ? "active" : ""
                }`}
              >
                Contact us
              </li>
              <li
                onClick={() => {
                  setActiveNav("./about");
                  Nav("./about");
                  console.log("activenav");
                }}
                className={`activeNavItem ${
                  activenav === "./about" ? "active" : ""
                }`}
              >
                About
              </li>
              {/* <li className={`activeNavItem ${
                  activenav === "" ? "active" : ""
                }`}>
                    Price
              </li> */}
              <li className="usericons">
                {User ? (
                  <div className="optUser" onMouseOver={() => setShow(!show)}>
                    {User?.charAt(0)}
                  </div>
                ) : (
                  <FaRegCircleUser
                    className="users"
                    onMouseOver={() => setShow(!show)}
                  />
                )}
              </li>
            </ul>
            {show ? (
              <div className="LogSign">
                <ul className="UnBox">
                  {User ? (
                    <li
                      onClick={() => Nav("../signout")}
                      style={{
                        fontSize: "18px",
                        marginTop: "35%",
                        fontWeight: "500",
                      }}
                    >
                      Sign Out
                    </li>
                  ) : (
                    <li>
                      <div
                        style={{
                          fontSize: "18px",
                          marginTop: "15%",
                          fontWeight: "500",
                          color: "black",
                        }}
                      >
                        <span onClick={() => Nav("../signup")}>Sign up</span>
                      </div>
                      <div
                        style={{
                          fontSize: "18px",
                          marginTop: "15%",
                          fontWeight: "500",
                          color: "black",
                        }}
                      >
                        <span onClick={() => Nav("../login")}>Login</span>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            ) : null}
          </div>

          <div className="CTA1">
            {User ? (
              <div
                className="Dash"
                onClick={() => Nav("../adminpage/admindashhome")}
              >
                <MdOutlineSpaceDashboard className="Dashboard" />
                Dashboard
              </div>
            ) : (
              <button onClick={() => Nav("./Login")}>Get Started</button>
            )}
          </div>
          <div className="CTA" onClick={() => Nav("./")}>
            <img src="./realbluelogo.png" alt="" />
          </div>

          <div className="ham">
            <GiHamburgerMenu
              onClick={() => setSidebarOpen(true)}
              className="hamb"
            />
          </div>
        </div>
        {sidebarOpen && (
          <div className="sidebarDiv">
            <div className="close">
              <AiOutlineClose
                className="closeicon"
                onClick={() => setSidebarOpen(false)}
              />
            </div>
            <div className="contents">
              {User ? (
                <div className="div">
                  <div className="optUsers" onMouseOver={() => setShow(!show)}>
                  {User?.charAt(0)}
                </div>
                <p onClick={() => Nav("./signout")}>Sign Out</p>
                </div>
              ) : (
                <div onClick={() => Nav("./Login")} className="useR">
                  <FaRegCircleUser className="aUser" />
                  <p>Sign In</p>
                </div>
              )}

              <div className="centerNav1">
                <ul className="sidebarsss">
                  {User ? (
                    <div
                      className="Dash1"
                      onClick={() => Nav("../adminpage/admindashhome")}
                    >
                      <MdOutlineSpaceDashboard className="Dashboard1" />
                      Dashboard
                    </div>
                  ) : (
                    <div className="Dash1" onClick={() => Navigate("/")}>
                      <AiOutlineHome />
                      Home
                      </div>
                  )}

                  <div className="Dash1" onClick={() => Navigate("/contactus")}>
                    <IoIosContact />
                    Contact Us</div>
                  <div className="Dash1" onClick={() => Navigate("/about")}>
                    <FcAbout />
                    About
                    </div>
                  {/* <div className="Dash1">
                    <RiPriceTag3Line />
                    Price
                    </div> */}
                </ul>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;

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
