// Dependencies
import React from "react";
import { Route, Switch } from "react-router-dom";

// Pages
import Home from "../pages/home/Home";

// Auth
import SignUp from "../pages/auth/signUp/SignUp";
import signUpVerify from "../pages/auth/signUp/signUpVerify/signUpVerify";
import SignUpCheckMail from "../pages/auth/signUp/signUpCheckMail/SignUpCheckMail";
import SignUp2 from "../pages/auth/signUp/page2/SignUp2";
import SignIn from "../pages/auth/signin/Signin";

import Profile from "../pages/profile/Profile";
import Leaderboard from "./leaderboard/Leaderboard";
import Stream from "./gameShowcase/GameShowcase";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      {/* auth */}
      <Route path="/signup" component={SignUp} />
      <Route path="/signupgotomail" component={SignUpCheckMail} />
      <Route path="/signupverify" component={signUpVerify} />
      <Route path="/signup2" component={SignUp2} />
      <Route path="/signin" component={SignIn} />
      <Route path="/profile" component={Profile} />
      <Route path="/leaderboard" component={Leaderboard} />
      <Route path="/stream" component={Stream} />
    </Switch>
  );
};

export default Routes;
