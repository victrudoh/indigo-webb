import React from "react";

// Styles
import { Wrapper } from "./Home.Styles";

// Components
import LandingPage from "../../components/landingPage/LandingPage";
import GameShowcase from "../../components/gameShowcase/GameShowcase";
import Leaderboard from "../../components/leaderboard/Leaderboard";
import Jumbotron from "../../components/jumbotron/Jumbotron";

const Home = () => {
  return (
    <>
      <Wrapper>
        <LandingPage />
        <Jumbotron />
        <GameShowcase />
        <Leaderboard />
      </Wrapper>
    </>
  );
};

export default Home;
