import { useContext } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeContext } from "./ContextApi/Contextapi";

const AdminAuth = () => {
  const location = useLocation();
const {verifiedUser} = useContext(ThemeContext)
  console.log("AdminAuth", verifiedUser);

    if (verifiedUser) {
    return <Outlet />;
  } else {
    return <Navigate to="../login" state={{ from: location }} replace />;
  }
}
export default AdminAuth;
