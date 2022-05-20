import React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";

// Styles
// import { Wrapper, Content, Inner, Logo } from "./Navbar.Styles";
import "./Navbar2.css";

// Components
import logo from "../../assets/images/logo.png";

const Navbar2 = () => {
  return (
    <>
      <section class="top-nav">
        <div>
          <a href="/">
            <img src={logo} alt="Indigo" />
          </a>
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label class="menu-button-container" for="menu-toggle">
          <div class="menu-button"></div>
        </label>
        <ul class="menu">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/">FEATURES</a>
          </li>
          <li>
            <a href="/stream">STREAM</a>
          </li>
          <li>
            <a href="/leaderboard">LEADERBOARD</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
          <li className="hide">
            <a href="/profile" className="signin">
              PROFILE
            </a>
          </li>
          <li className="hide">
            <a href="/signin" className="signin">
              SIGN IN
            </a>
          </li>
          <li className="hide">
            <a href="/signup" className="signup">
              SIGN UP
            </a>
          </li>
          <li className="hide">
            <a href="/logout" className="logout">
              LOG OUT
            </a>
          </li>
        </ul>
        <ul class="menu2">
          <li>
            <a href="/profile" className="signin">
              PROFILE
            </a>
          </li>
          <li>
            <a href="/signin" className="signin">
              SIGN IN
            </a>
          </li>
          <li>
            <a href="/signup" className="signup">
              SIGN UP
            </a>
          </li>
          <li>
            <a href="/logout" className="logout">
              LOG OUT
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Navbar2;
