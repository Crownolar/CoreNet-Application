// import React, { useEffect, useState } from "react";
// import "./LandingPage.css";
// import Header from "../Header/Header";
// import { useSelector } from "react-redux";
// import "animate.css";
// // import "./LandingPageMobile.css"
// // import "./LandingPageTab.css"
// // import "./LandingPageWeb.css"
// import { TiArrowRepeatOutline } from "react-icons/ti";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Footer from "../Footer/Footer";

// const LandingPage = () => {
//   const [showWelcome, setShowWelcome] = useState(true);
//   const User = useSelector((state) => state.stores.user);
//   const Duser = User;
//   const url = `https://corenet-api.onrender.com/api/resend-verification-email`;
//   const Nav = useNavigate()

//   const Resend = () => {
//     axios.post(url).then(function (res) {
//       console.log(res);
//     });
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowWelcome(false);
//     }, 10000);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, []);

//   return (
//     <main className="main">
//       {/* <Header /> */}
//       {/* {showWelcome && User && (
//           <div className="welcome-message1">
//             <h3>Welcome to CoreNet!</h3>
//             <p>Explore, manage, and conquer your network like never before.</p>
//           </div>
//         )} */}
//       {/* <p>Didn't receive an Email <span onClick={Resend} style={{color: "blue", cursor: "pointer"}}>Resend verification Email</span> </p> */}
//       <div className="mainWrap">
//         <div className="topPictureHolder">
//           <div className="layerColor">
//             <div className="aboutUs">
//               <h1>Welcome</h1>
//             </div>

//             <p className="aboutText">
//               Welcome to CoreNet, Explore, Manage, and Conquer your network like
//               never before
//             </p>
//           </div>
//         </div>

//         <div className="spacing"></div>

//         <div className="ourMainFocus">
//           <div className="mainFocusAlign">
//             <div className="insideAlign">
//               <div className="contactUsHolder2">
//                 <div className="leftContent">
//                   <div className="paragraphText">
//                     <h1 className="MultipleTaskHead">
//                       Multiple Task Assignment
//                     </h1>

//                     <h3 className="multipleTaskSubHead">
//                       Unlock Productivity, Seamlessly
//                     </h3>

//                     <p className="multipleTaskText">
//                       Multiple task assignment streamlines work distribution,
//                       ensuring efficient task delegation among team members. It
//                       promotes balanced workloads and enhances productivity by
//                       leveraging individual strengths and expertise.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="rightContent">
//                   <img
//                     src="./undraw_secure_login_pdn4 (1).svg"
//                     alt="ILLUSTRATION"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="uniqueFactors">
//           <div className="uniqueFactorsWrap">
//             <div className="uniqueFactorsAlign">
//               <div>
//                 <h1 className="uniqueCompany">Company Unique Factor</h1>
//               </div>
//               <div className="uniquebox">
//                 <div className="uniqueContent">
//                   <div className="circle">
//                     <TiArrowRepeatOutline className="circleIcon" />
//                   </div>
//                   <h2 className="uniqueContentText">Task Update</h2>
//                 </div>
//                 <div className="uniqueContent">
//                   <div className="circle">
//                     <TiArrowRepeatOutline className="circleIcon" />
//                   </div>
//                   <h2 className="uniqueContentText">Collaboration</h2>
//                 </div>
//                 <div className="uniqueContent">
//                   <div className="circle">
//                     <TiArrowRepeatOutline className="circleIcon" />
//                   </div>
//                   <h2 className="uniqueContentText">Time Allocation</h2>
//                 </div>
//                 <div className="uniqueContentSeprate">
//                   <div className="circle">
//                     <TiArrowRepeatOutline className="circleIcon" />
//                   </div>
//                   <h2 className="uniqueContentText">Intra-personal</h2>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <div className="spacing"></div> */}

//         <div className='mainFocus'>
//                 <div className='topBox'>
//                     <h1 className='topBoxText'>See Your team Assignment Progress In One Place</h1>
//                     <button className='downBttn' onClick={() => Nav('./Login')} >Sign In</button>
//                 </div>

//                 <div className='downBox'>

//                     <div className='downBoxAlign'>
//                         <div className='footerImage'>
//                             <div className='imageAlign'> <img src="./realbluelogo.png" alt="" /></div>
//                             <div></div>
//                         </div>

//                         <div className='footerAlign'>
//                         <ul className='footerText'>
//                         <h3>Features</h3>
//                         <li>Track Progress</li>
//                         <li> Status </li>
//                         <li> Task Assignment</li>
//                         <li> Instant Email Alert</li>
//                         </ul>
//                         </div>

//                         <div className='footerAlign'>
//                         <ul className='footerText'>
//                         <h3>Collaboration</h3>
//                         <li>Start Time</li>
//                         <li> Submit </li>
//                         <li> Pending</li>
//                         <li> Scheduling</li>
//                         </ul>
//                         </div>

//                         <div className='footerAlign'>
//                         <ul className='footerText'>
//                         <h3>Navigation</h3>
//                         <li>Home Page</li>
//                         <li onClick={() => Nav('./signup')} > Sign Up </li>
//                         <li onClick={() => Nav('./Login')} > Sign IN</li>
//                         <li onClick={() => Nav('./about')} > About</li>
//                         </ul>
//                         </div>
//                     </div>

//                 </div>

//                 {/* <div className='footer'><p>corenet@gmail.com</p></div> */}
//                 <Footer />

//             </div>
//     </main>
//   );
// };

// export default LandingPage;

import Footer from "../Footer/Footer";
import "./LandingPage.css";
import { TiArrowRepeatOutline } from "react-icons/ti";

const landingPage = () => {
  return (
    <>
      <div className="topPictureHolder">
        <div className="layerColor">
          <div className="aboutUs">
            <h1>Welcome</h1>
          </div>

          <p className="aboutText">
          Embark on a Journey of Exploration, Management, and Network Mastery!
          </p>
        </div>
      </div>

      <div className="spacing"></div>

      <div className="ourMainFocus">
        <div className="mainFocusAlign">
          <div className="insideAlign">
            <div className="contactUsHolder2">
              <div className="leftContent">
                <div className="paragraphText">
                  <h1 className="MultipleTaskHead">
                    Multiple Task <br />
                    Assignment
                  </h1>

                  <h3 className="multipleTaskSubHead">
                    Unlock Productivity, Seamlessly
                  </h3>

                  <p className="multipleTaskText">
                    Multiple task assignment streamlines work distribution,
                    ensuring efficient task delegation among team members. It
                    promotes balanced workloads and enhances productivity by
                    leveraging individual strengths and expertise.
                  </p>
                </div>
              </div>

              <div className="rightContent">
                <img
                  src="./undraw_secure_login_pdn4 (1).svg"
                  alt="ILLUSTRATION"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="spacing"></div>

      <div className="uniqueFactors">
        <div className="uniqueFactorsAlign">
          <div>
            <h1 className="uniqueCompany">Company Unique Factor</h1>
          </div>
          <div className="uniquebox">
            <div className="uniqueContent">
              <div className="circle">
                <TiArrowRepeatOutline className="circleIcon" />
              </div>
              <h2 className="uniqueContentText">Task Update</h2>
            </div>
            <div className="uniqueContent">
              <div className="circle">
                <TiArrowRepeatOutline className="circleIcon" />
              </div>
              <h2 className="uniqueContentText">Collaboration</h2>
            </div>
            <div className="uniqueContent">
              <div className="circle">
                <TiArrowRepeatOutline className="circleIcon" />
              </div>
              <h2 className="uniqueContentText">Time Allocation</h2>
            </div>
            <div className="uniqueContentSeprate">
              <div className="circle">
                <TiArrowRepeatOutline className="circleIcon" />
              </div>
              <h2 className="uniqueContentText">Intra-personal</h2>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='spacing'></div> */}
      <div className="testimonial-section-top-text">
        <h2>Testimonials</h2>
      </div>
      <section className="testimonial-section">
        <div className="testimonial-section-wrap">
          <div className="testimonial">
            <div className="testimonial-content">
              <p>
                "CoreNet has been a game-changer for my business. It's easy to
                use, and the support is excellent. I can't imagine running my
                network without it."
              </p>
              <cite>- Chaeity Ajah</cite>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial-content">
              <p>
                "I've tried other network solutions, but CoreNet stands out.
                It's fast, reliable, and the user interface is intuitive. I
                highly recommend it."
              </p>
              <cite>- Tijani Emmanuel</cite>
            </div>
          </div>
        </div>

        <div className="testimonial-section-wrap">
          <div className="testimonial">
            <div className="testimonial-content">
              <p>
                "I'm thoroughly impressed with CoreNet. It's transformed the way
                we handle networking in our organization. The intuitive
                interface and exceptional support have made a world of
                difference."
              </p>
              <cite>- Colin Thomos</cite>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial-content">
              <p>
                "Using CoreNet has been a revelation. It's simplified our
                network operations and improved productivity. The outstanding
                support team is always there when we need them."
              </p>
              <cite>- David Ogunleye</cite>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="testimonial-section-top-text">
          <h2>Available plans</h2>
        </div>
        <div className="Price-Card">
          <div className="pricing-card">
            <h3>Basic</h3>
            <p>One Admin, and two workers</p>
            <p>Free</p>
            <button>Select Plan</button>
          </div>
          <div className="pricing-card">
            <h3>Pro</h3>
            <p>Three Admins, and Thirty workers</p>
            <p>$49/month</p>
            <button>Select Plan</button>
          </div>
          <div className="pricing-card">
            <h3>Premium</h3>
            <p>Unlimited Admins, and workers</p>
            <p>$99/month</p>
            <button>Select Plan</button>
          </div>
        </div>
      </section>

      <section className="developers-section">
        <div className="Secttext">
          <h1 className="developers-section-text">Meet Our Developers</h1>
        </div>
        <div className="developer">
          <img src="Tijani.jpg" alt="Developer 1" />
          <h3>Tijani Ezekiel A.</h3>
          <p>Front-end Developer</p>
        </div>
        <div className="developer">
          <img src="Yusuf.jpg" alt="Developer 2" />
          <h3>Oriade Yusuf</h3>
          <p>Front-end Developer</p>
        </div>
        <div className="developer">
          <img src="Amaka.jpg" alt="Developer 3" />
          <h3>Amaka</h3>
          <p>Back-end Developer</p>
        </div>

        <div className="developer">
          <img
            src="Michael.jpg"
            alt="Developer 1"
          />
          <h3>Micheal</h3>
          <p>Backend Developer</p>
        </div>
        <div className="developer">
          <img src="Ray.jpg" alt="Developer 1" />
          <h3>Raymond</h3>
          <p>Backend Developer</p>
        </div>
        <div className="developer">
          <img src="Sammy.jpg" alt="Developer 2" />
          <h3>Sammy Dek</h3>
          <p>Front-end Developer</p>
        </div>
        <div className="developer">
          <img src="Dan.jpg" alt="Developer 3" />
          <h3>Daniel</h3>
          <p>Front-end Developer</p>
        </div>
      </section>

      <br />

      <div className="mainFocus">
        <div className="topBox">
          <h1 className="topBoxText">
            See Your team Assignment Progress In One Place
          </h1>
          <button className="downBttn">Log In</button>
        </div>

        <div className="downBox">
          <div className="downBoxAlign">
            <div className="footerImage">
              <div className="imageAlign">
                <img src="./realbluelogo.png" alt="" />
              </div>
            </div>

            <div className="footerAlign">
              <ul className="footerText">
                <h3>Features</h3>
                <li>Track Progress</li>
                <li> Status </li>
                <li> Task Assignment</li>
                <li> Instant Email Alert</li>
              </ul>
            </div>

            <div className="footerAlign">
              <ul className="footerText">
                <h3>Collaboration</h3>
                <li>Start Time</li>
                <li> Submite </li>
                <li> Pending</li>
                <li> Scheduling</li>
              </ul>
            </div>

            <div className="footerAlign">
              <ul className="footerText">
                <h3>Navigation</h3>
                <li>Home Page</li>
                <li> Sign Up </li>
                <li> Sign IN</li>
                <li> About</li>
              </ul>
            </div>
          </div>
          <div className="footerEnd">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default landingPage;
