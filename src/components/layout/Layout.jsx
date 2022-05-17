// Dependencies
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Components
import Routes from "../Routes";
import Navbar from "../navbar/Navbar";

// Styles
import { LayoutStyle } from "./Layout.Styles";

const Layout = () => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <>
            <LayoutStyle>
              <Navbar />
              <Routes />
            </LayoutStyle>
          </>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
