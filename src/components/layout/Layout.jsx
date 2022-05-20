// Dependencies
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Components
import Routes from "../Routes";
import Navbar from "../navbar/Navbar";
import Navbar2 from "../navbar/Navbar2";

// Styles
import { LayoutStyle } from "./Layout.Styles";

const Layout = () => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <>
            <LayoutStyle>
              {/* <Navbar /> */}
              <Navbar2 />
              <Routes />
            </LayoutStyle>
          </>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
