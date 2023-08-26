import { useContext } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeContext } from "./ContextApi/Contextapi";

const Authenticate2 = () => {
  const location = useLocation();
const {Writer} = useContext(ThemeContext)
  console.log("Authenticate", Writer);

    if (Writer) {
    return <Outlet />;
  } else {
    return <Navigate to="../login" state={{ from: location }} replace />;
  }
}
export default Authenticate2;
