import React, { useEffect, useState } from 'react'
import './LandingPage.css'
import Header from '../Header/Header'
import { useSelector } from 'react-redux';
import 'animate.css'
// import "./LandingPageMobile.css"
// import "./LandingPageTab.css"
// import "./LandingPageWeb.css"
import { TiArrowRepeatOutline } from "react-icons/ti"
import axios from 'axios';


const LandingPage = () => {

  const [showWelcome, setShowWelcome] = useState(true);
  const User = useSelector((state) => state.persistedReducer.user);
  const Duser = User;
  const url = `https://corenet-api.onrender.com/api/resend-verification-email`

  const Resend = () => {
    axios
    .post (url)
    .then(function(res) {
      console.log(res)
    })
  }



  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, []);


  return (
    <div>
        <main className='main'>
            {/* <Header /> */}
            {showWelcome && User && (
          <div className="welcome-message1">
            <h3>Welcome to CoreNet!</h3>
            <p>Explore, manage, and conquer your network like never before.</p>
          </div>
        )}
        <p>Didn't receive an Email <span onClick={Resend} style={{color: "blue", cursor: "pointer"}}>Resend verification Email</span> </p>
        {/* <div className='topPictureHolder'>
                <Header />
                <div className='layerColor'>

                    <div className='aboutUs'>
                        <h1>Welcome !</h1>
                    </div>

                    <p className='aboutText'> Welcome to CoreNet, Explore, Manage, and Conquer your network like never before </p>
                </div>

            </div>

            <div className='spacing'></div>

            <div className='ourMainFocus'>
                <div className='mainFocusAlign'>
                 


                    <div className='insideAlign'>
                        <div className='contactUsHolder2'>
                            <div className='leftContent'>


                                <div className='paragraphText'>


                                    <h1 className='MultipleTaskHead'>Multiple Task <br />Assignment</h1>

                                    <h3 className='multipleTaskSubHead'>Unlock Productivity, Seamlessly</h3>

                                    <p className='multipleTaskText'>Multiple task assignment streamlines work distribution, ensuring efficient task delegation among team members.
                                        It promotes balanced workloads and enhances productivity
                                        by leveraging individual strengths and expertise.</p>

                                </ div>
                            </div>

                            <div className='rightContent'>
                                <img src="./undraw_secure_login_pdn4 (1).svg" alt="ILLUSTRATION" />
                            </div>
                        </div>




                    </div>
                </div>
            </div>

            <div className='spacing'></div>

            <div className='uniqueFactors'>
                <div className='uniqueFactorsAlign'>
                    <div><h1 className='uniqueCompany'>Company Unique Factor</h1></div>
                    <div className='uniquebox'>
                        <div className='uniqueContent'>
                            <div className='circle'><TiArrowRepeatOutline className='circleIcon' /></div>
                            <h2 className='uniqueContentText' >Task Update</h2>
                        </div>
                        <div className='uniqueContent'>
                            <div className='circle'><TiArrowRepeatOutline className='circleIcon' /></div>
                            <h2 className='uniqueContentText'>Collaboration</h2>
                        </div>
                        <div className='uniqueContent'>
                            <div className='circle'><TiArrowRepeatOutline className='circleIcon' /></div>
                            <h2 className='uniqueContentText'>Time Allocation</h2>
                        </div>
                        <div className='uniqueContentSeprate'>
                            <div className='circle'><TiArrowRepeatOutline className='circleIcon' /></div>
                            <h2 className='uniqueContentText'>Intra-personal</h2>
                        </div>
                    </div>
                </div>
            </div>


            <div className='mainFocus'>
                <div className='topBox'>
                    <h1 className='topBoxText'>See Your team Assignment Progress In One Place</h1>
                    <button className='downBttn'>Sign In</button>
                </div>

                <div className='downBox'>

                    <div className='downBoxAlign'>
                        <div className='footerImage'>
                            <div className='imageAlign'> <img src="./realbluelogo.png" alt="" /></div>
                            <div></div>
                        </div>

                        <div className='footerAlign'>
                        <ul className='footerText'>
                        <h3>Features</h3>
                        <li>Track Progress</li>
                        <li> Status </li>
                        <li> Task Assignment</li>
                        <li> Instant Email Alert</li>
                        </ul>
                        </div>

                        <div className='footerAlign'>
                        <ul className='footerText'>
                        <h3>Collaboration</h3>
                        <li>Start Time</li>
                        <li> Submite </li>
                        <li> Pending</li>
                        <li> Scheduling</li>
                        </ul>
                        </div>

                        <div className='footerAlign'>
                        <ul className='footerText'>
                        <h3>Navigation</h3>
                        <li>Home Page</li>
                        <li> Sign Up </li>
                        <li> Sign IN</li>
                        <li> About</li>
                        </ul>
                        </div>
                    </div>
                        
                    
                </div>

                <div className='footer'><p>corenet@gmail.com</p></div>

            </div> */}

        </main>
    </div>
  )
}

export default LandingPage