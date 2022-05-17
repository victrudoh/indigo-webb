import React from "react";

// Styles
import {
  Wrapper,
  Content,
  Left,
  Right,
  Title,
  RightBody,
} from "./Signin.Styles";

// Images
import bg from "../../../assets/images/auth/signin/bg2.jpg";
import leftImage from "../../../assets/images/auth/signin/anthem.jpg";

const Signin = () => {
  return (
    <>
      <Wrapper bg={bg}>
        <Content>
          <Left bg={leftImage} />
          <Right>
            <Title>Sign in</Title>
            <RightBody>
              <h4>It's game time...</h4>
              <form method="get" action="/profile">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
                <p>
                  <a href="/signin">forgot password?</a>
                </p>
                <button type="submit">Sign in</button>
              </form>
            </RightBody>
          </Right>
        </Content>
      </Wrapper>
    </>
  );
};

export default Signin;
