// TimerContext.js
import { createContext, useContext, useState } from "react";

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [timerRemaining, setTimerRemaining] = useState(0);

  const startTimer = (initialTime) => {
    setIsTimerActive(true);
    setTimerRemaining(initialTime);
  };

  const stopTimer = () => {
    setIsTimerActive(false);
    setTimerRemaining(0);
  };

  return (
    <TimerContext.Provider
      value={{ isTimerActive, timerRemaining, startTimer, stopTimer }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => useContext(TimerContext);
