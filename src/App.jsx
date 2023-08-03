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

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
        <Route path="/adminpage/*" element={<Adminpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/verifypage/:token" element={<VerifyPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
