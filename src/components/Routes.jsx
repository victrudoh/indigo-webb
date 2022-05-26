// Dependencies
import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import Home from "../pages/home/Home";

// Auth
import SignUp from "../pages/auth/signUp/SignUp";
import SignUpVerify from "../pages/auth/signUp/signUpVerify/signUpVerify";
import SignUpCheckMail from "../pages/auth/signUp/signUpCheckMail/SignUpCheckMail";
import SignUp2 from "../pages/auth/signUp/page2/SignUp2";
import SignIn from "../pages/auth/signin/Signin";

import Profile from "../pages/profile/Profile";
import Leaderboard from "./leaderboard/Leaderboard";
import Stream from "./gameShowcase/GameShowcase";
import Layed from "./Layed";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layed />}>
        <Route index element={<Home />} />
        {/* auth */}
        <Route path="signup" element={<SignUp />} />
        <Route path="signupgotomail" element={<SignUpCheckMail />} />
        <Route path="signupverify" element={<SignUpVerify />} />
        <Route path="signup2" element={<SignUp2 />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="profile" element={<Profile />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="stream" element={<Stream />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
