import { createContext, useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const User = useSelector((state) => state.stores.user);
  console.log(User);
  const Writer = useSelector((state) => state.stores.writer);
  console.log(Writer);
  const [verifyAlert, setverifyAlert] = useState(false);

  const login_alert = () => {
    setverifyAlert(true);
    setTimeout(() => {
      setverifyAlert(false);
    }, 10000);
  };

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  });

  const [timerActive, setTimerActive] = useState(false);
  const [timerRemaining, setTimerRemaining] = useState(0);

  const updateTimer = () => {
    if (timerActive && timerRemaining > 0) {
      setTimerRemaining((prevRemaining) => prevRemaining - 1);
    }
  };

  useEffect(() => {
    let interval;

    if (timerActive && timerRemaining > 0) {
      interval = setInterval(updateTimer, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timerActive, timerRemaining]);

  const startTimer = (initialTime) => {
    setTimerActive(true);
    setTimerRemaining(initialTime);
  };

  const stopTimer = () => {
    setTimerActive(false);
    setTimerRemaining(0);
  };

  return (
    <ThemeContext.Provider
      value={{
        Writer,
        User,
        user,
        setUser,
        verifyAlert,
        login_alert,
        timerActive,
        timerRemaining,
        startTimer,
        stopTimer,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
