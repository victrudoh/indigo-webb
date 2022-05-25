import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

// Styles
import { Wrapper, Content } from "./signUpVerify.Styles";

// components
import { Spinner } from "../../../../components/spinner/Spinner.Styles";

// Images
import bg from "../../../../assets/images/auth/signupverify/bg.webp";
import verifyIcon from "../../../../assets/images/auth/signupverify/icon.png";

const SignUpVerify = () => {
  const history = useHistory();
  const { id } = useParams();
  console.log("id", id);

  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const response = await axios.get(
      `https://ixnote-game-dev-backend.herokuapp.com/api/v1/auth/activateAccount/${id}`
    );
    console.log("response", response);
    setLoading(false);
    if (response.status === 201) {
      history.push("/signin");
    }
  };

  return (
    <>
      <Wrapper bg={bg}>
        <Content>
          <form onSubmit={submit}>
            <img src={verifyIcon} alt="media" />
            <p>
              Congratulations! you have succefully completed your account
              verification, proceed to sign in.
            </p>

            {loading ? (
              <Spinner />
            ) : (
              <>
                <button type="submit">Sign in</button>
              </>
            )}
          </form>
        </Content>
      </Wrapper>
    </>
  );
};

export default SignUpVerify;
