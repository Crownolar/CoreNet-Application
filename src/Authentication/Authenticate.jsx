import { useContext } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeContext } from "./ContextApi/Contextapi";

const Authenticate = () => {
  const location = useLocation();
const {User, Writer} = useContext(ThemeContext)
  console.log("Authenticate", User);
  console.log("Authenticate", Writer);

    if (User || Writer) {
    return <Outlet />;
  } else {
    return <Navigate to="./login" state={{ from: location }} replace />;
  }

  // if (!User && !Writer) {
  //   // If neither User nor Writer is logged in, navigate to login
  //   return <Navigate to="/login" state={{ from: location }} replace />;
  // } else {
  //   // If either User or Writer is logged in, render the outlet
  //   return <Outlet />;
  // }
}
      {/* { User? (
        <Outlet />
      ) : (
        <Navigate to="./login" state={{ from: location }} replace />
      )}
      { !Writer? (
        <Outlet />
      ) : (
        <Navigate to="./login" state={{ from: location }} replace />
      )} */}
export default Authenticate;
