// TimerContext.js
import { createContext, useContext, useEffect, useState } from "react";

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [isTimerActive, setIsTimerActive] = useState(false);
  // const [timerRemaining, setTimerRemaining] = useState(0);
  const [timerRemaining, setTimerRemaining] = useState(
    JSON.parse(localStorage.getItem("timerRemaining")) || 0
  );

  const startTimer = (initialTime) => {
    setIsTimerActive(true);
    setTimerRemaining(initialTime);
  };

  // const startTimer = (initialTime) => {
  //   setIsTimerActive(true);
  //   const clock = setInterval(()=>{}, )
  //   setTimeout(()=>{
  //     clearInterval(clock)
  //   }, initialTime)
  // };

  // const startTimer = (initialTime) => {
  //   setIsTimerActive(true);
  //   setTimerRemaining(initialTime);
  
  //   const interval = setInterval(() => {
  //     setTimerRemaining((prevTime) => {
  //       if (prevTime > 0) {
  //         return prevTime - 1;
  //       } else {
  //         clearInterval(interval);
  //         setIsTimerActive(false);
  //         return 0;
  //       }
  //     });
  //   }, 1000); // Update every second
  // };

  const stopTimer = () => {
    setIsTimerActive(false);
    setTimerRemaining(0);
    localStorage.removeItem("timerRemaining");
  };

  useEffect(() => {
    if (isTimerActive) {
      const interval = setInterval(() => {
        setTimerRemaining((prevRemaining) => {
          const newRemaining = Math.max(0, prevRemaining - 1);
          localStorage.setItem("timerRemaining", JSON.stringify(newRemaining));
          if (newRemaining === 0) {
            stopTimer();
          }
          return newRemaining;
        });
      }, 1000); // Update every 1 second

      return () => clearInterval(interval);
    }
  }, [isTimerActive]);
  

  // const startTimer = (initialTime) => {
  //   setIsTimerActive(true);
  //   setTimerRemaining(initialTime);

  //   const interval = setInterval(() => {
  //     if (timerRemaining > 0) {
  //       setTimerRemaining((prevTime) => prevTime - 1);
  //     } else {
  //       clearInterval(interval);
  //       setIsTimerActive(false);
  //     }
  //   }, 1000); // Update every second
  // };

  // const stopTimer = () => {
  //   setIsTimerActive(false);
  //   setTimerRemaining(0);
  // };

  return (
    <TimerContext.Provider
      value={{ isTimerActive, timerRemaining, startTimer, stopTimer }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => useContext(TimerContext);



// import { createContext, useContext, useState, useEffect } from "react";

// const TimerContext = createContext();

// export const TimerProvider = ({ children }) => {
//   const [isTimerActive, setIsTimerActive] = useState(false);
//   const [timerRemaining, setTimerRemaining] = useState(
//     JSON.parse(localStorage.getItem("timerRemaining")) || 0
//   );
//   const [startTime, setStartTime] = useState(
//     JSON.parse(localStorage.getItem("startTime")) || 0
//   );

//   const startTimer = (initialTime) => {
//     setIsTimerActive(true);
//     setTimerRemaining(initialTime);
//     setStartTime(Date.now()); // Store the start time in state
//     localStorage.setItem("timerRemaining", JSON.stringify(initialTime));
//     localStorage.setItem("startTime", JSON.stringify(Date.now()));
//   };

//   // const startTimer = (initialTime) => {
//   //   setIsTimerActive(true);
//   //   setTimerRemaining(initialTime);
//   //   setStartTime(Date.now()); // Store the start time
//   // };

//   const stopTimer = () => {
//     setIsTimerActive(false);
//     setTimerRemaining(0);
//     setStartTime(0);
//     localStorage.removeItem("timerRemaining");
//     localStorage.removeItem("startTime");
//   };

//   useEffect(() => {
//     console.log('useEffect is called');

//     if (isTimerActive) {
//       console.log('Starting interval');
//       const interval = setInterval(() => {
//         const currentTime = Date.now();
//         const elapsedTime = currentTime - startTime;
//         console.log('Elapsed Time:', elapsedTime);
//         const remainingTime = Math.max(timerRemaining - elapsedTime / 1000, 0);
//         console.log('Remaining Time:', remainingTime);
//         setTimerRemaining(remainingTime);
//         localStorage.setItem("timerRemaining", JSON.stringify(remainingTime));

//         if (remainingTime === 0) {
//           stopTimer();
//         }
//       }, 1000); // Update every 1 second

//       return () => {
//         clearInterval(interval);
//         setStartTime(0); // Reset start time on unmount
//         console.log('Interval cleared');
//       };
//     }
//   }, [isTimerActive]);

//   return (
//     <TimerContext.Provider
//       value={{ isTimerActive, timerRemaining, startTimer, stopTimer }}
//     >
//       {children}
//     </TimerContext.Provider>
//   );
// };

// export const useTimer = () => useContext(TimerContext);
