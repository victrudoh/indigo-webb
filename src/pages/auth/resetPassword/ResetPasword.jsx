import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Styles
import { Wrapper, Content } from "./ResetPassword.Styles";

// Images
import bg from "../../../assets/images/auth/signupverify/bg.webp";
import leftImage from "../../../assets/images/auth/signup/1/pubg1.jpg";

// components
import { Spinner } from "../../../components/spinner/Spinner.Styles";

const ResetPasword = () => {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    setLoading(true);
    console.log("userDetails", userDetails);
    e.preventDefault();
    const response = await axios.post(
      "https://ixnote-game-dev-backend.herokuapp.com/api/v1/reset-password/dcb040dfe7e6b9383452d985f820c5ed9e1370dd",
      userDetails,
      {
        headers: { "content-type": "application/json" },
      }
    );
    console.log("response", response);
    setLoading(false);
    if (response.status === 200) {
      navigate("/signin");
    }
  };

  const onchangeHandler = async (e) => {
    e.persist();
    setUserDetails((userDetails) => ({
      ...userDetails,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Wrapper bg={bg}>
        <Content>
          <form onSubmit={submit}>
            <h4>Reset Password</h4>
            <p>Please enter your new password below to access your account</p>

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={onchangeHandler}
              defaultValue={userDetails.password}
            />

            {loading ? (
              <Spinner />
            ) : (
              <>
                <button type="submit">Reset password</button>
              </>
            )}
          </form>
        </Content>
      </Wrapper>
    </>
  );
};

export default ResetPasword;
