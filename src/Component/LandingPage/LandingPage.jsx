import React, { useEffect, useState } from 'react'
import './LandingPage.css'
import Header from '../Header/Header'
import { useSelector } from 'react-redux';
import 'animate.css'


const LandingPage = () => {

  const [showWelcome, setShowWelcome] = useState(true);
  const User = useSelector((state) => state.signup.user);



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
        </main>
    </div>
  )
}

export default LandingPage