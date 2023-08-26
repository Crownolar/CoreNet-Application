import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Component/LandingPage/LandingPage";
import "./App.css";
import Login from "./Authentication/LoginPage/Login";
import Layout from "./Layout/Layout";
import Adminpage from "./Component2/AdminDashboard/Adminpage";
import SignUp from "./Authentication/SignUpPage/SignUp";
import VerifyPage from "./Authentication/VerifyPage/VerifyPage";
import UserLogin from "./Authentication/LoginPage/UserLogin";
import SignOut from "./Authentication/SignOut/SignOut";
import ContactUs from "./Component2/Pages/ConatctUs/ContactUs";
import About from "./Component2/Pages/About/About"
import Profile from "./Component2/Pages/Profile/Profile";
import AdminAllWriterDesc from "./Component2/AdminDashboard/AdminDashRight/AdminAllWriter/AdminAllWriterDesc/AdminAllWriterDesc";
import AdminDashHome from "./Component2/AdminDashboard/AdminDashRight/AdminDashHome/AdminDashHome";
import UserPage from "./Component2/UserDashboard/UserPage";
import UserSignOut from "./Authentication/SignOut/UserSignOut"
import UserProfile from "./Component2/Pages/Profile/UserProfile"
// import AdminForgotPassword from "./Authentication/LoginPage/AdminForgotPassword/AdminForgotPassword";
import AdminResetPassword from "./Authentication/LoginPage/AdminReset/AdminResetPassword";
// import AdminResetPassword from "./Authentication/LoginPage/AdminResetPAssword/AdminResetPassword";
// import AdminResetPassword from "./Authentication/LoginPage/AdminResetPAssword/AdminResetPassword"
import AdminForgotPassword from "./Authentication/LoginPage/AdminForgotPassword/AdminForgotPassword"
import UserResetPassword from "./Authentication/LoginPage/UserResetPassword/UserResetPassword";
import UserVerifyPage from "./Authentication/VerifyPage/UserVerifyPage/UserVerifyPage";
import UserForgotPassword from "./Authentication/LoginPage/UserForgotPassword/UserForgotPassword";
import AdminResendEmailVerification from "./Authentication/LoginPage/AdminResendEmailVerification/AdminResendEmailVerification"
import Authenticate from "./Authentication/Authenticate";
import Authenticate2 from "./Authentication/Authenticate2";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/adminforgotpassword" element={<AdminForgotPassword />} />
        <Route path="/adminresendemailverification" element={<AdminResendEmailVerification />} />
        <Route path="/adminresetpassword/:token" element={<AdminResetPassword />} />
        <Route element={<Authenticate />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/admindashhome" element={<AdminDashHome />} />
        <Route path="/adminpage/*" element={<Adminpage />} />
        </Route>
        <Route element={<Authenticate2 />}>
        <Route path="/userpage/*" element={<UserPage />} />
        </Route>
        <Route path="/signout" element={<SignOut />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/userforgotpassword" element={<UserForgotPassword />} />
        <Route path="/userresetpassword/:token" element={<UserResetPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/usersignout" element={<UserSignOut />} />
        <Route path="/verifypage/:token" element={<VerifyPage />} />
        <Route path="/userverifypage/:token" element={<UserVerifyPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
