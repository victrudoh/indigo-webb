import React from "react";

// Styles
import {
  Wrapper,
  Content,
  Left,
  Right,
  Title,
  RightBody,
} from "./SignUp.Styles";

// Images
import bg from "../../../assets/images/auth/signup/1/bg2.jpg";
import leftImage from "../../../assets/images/auth/signup/1/pubg1.jpg";

const SignUp = () => {
  return (
    <>
      <Wrapper bg={bg}>
        <Content>
          <Left bg={leftImage} />
          <Right>
            <Title>Sign up (1/2)</Title>
            <RightBody>
              <h4>Start your experience</h4>
              <form method="get" action="/signup2">
                <input
                  type="text"
                  name="nickname"
                  id="nickname"
                  placeholder="Nickname"
                />
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

                <input
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Country"
                />
                <input type="text" name="city" id="city" placeholder="City" />
                <p>
                  By creating the account you agree to the Terms of Service and
                  Privacy Policy
                </p>
                <button type="submit">Next step</button>
              </form>
            </RightBody>
          </Right>
        </Content>
      </Wrapper>
    </>
  );
};

export default SignUp;
