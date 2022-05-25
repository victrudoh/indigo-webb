import React from "react";
import { useHistory, Link } from "react-router-dom";

// Styles
import "./Navbar2.css";

// Components
import logo from "../../assets/images/logo.png";

const Navbar2 = () => {
  const history = useHistory();

  const token = localStorage.getItem("token");
  console.log("token", token);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <>
      <section className="top-nav">
        <div>
          <a href="/">
            <img src={logo} alt="Indigo" />
          </a>
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
            {/* <a href="/">HOME</a> */}
          </li>
          <li>
            <a href="/">FEATURES</a>
          </li>
          <li>
            <Link to="/stream">Stream</Link>
            {/* <a href="/stream">STREAM</a> */}
          </li>
          <li>
            <a href="/leaderboard">LEADERBOARD</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>

          {token ? (
            <>
              <li className="hide">
                <a href="/profile" className="signin">
                  PROFILE
                </a>
              </li>
              <li className="hide">
                <a className="logout" onClick={logoutHandler}>
                  LOG OUT
                </a>
              </li>
            </>
          ) : (
            ""
          )}

          {!token ? (
            <>
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
            </>
          ) : (
            ""
          )}
        </ul>

        <ul className="menu2">
          {token ? (
            <>
              <li>
                <a href="/profile" className="signin">
                  PROFILE
                </a>
              </li>
              <li>
                <a className="logout" onClick={logoutHandler}>
                  LOG OUT
                </a>
              </li>
            </>
          ) : (
            ""
          )}

          {!token ? (
            <>
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
            </>
          ) : (
            ""
          )}
        </ul>
      </section>
    </>
  );
};

export default Navbar2;
