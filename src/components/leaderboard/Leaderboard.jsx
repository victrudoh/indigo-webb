import React, { useEffect, useState } from "react";
import axios from "axios";

// Styles
import {
  Wrapper,
  Content,
  Top,
  TopLeft,
  TopLeftImg,
  TopLeftText,
  TopRight,
  List,
  ListItem,
  Bottom,
} from "./Leaderboard.Styles";

// Images
import bg from "../../assets/images/leaderboard/bg.webp";
import DP from "../../assets/images/leaderboard/itachi.jpg";

const Leaderboard = () => {
  const [user, setUser] = useState({});
  const [Board, setBoard] = useState([]);

  // get user profile to populate top of leaderboard
  const getProfile = async () => {
    try {
      const response = await axios.get(
        "https://ixnote-game-dev-backend.herokuapp.com/api/v1/users/profile",
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const user = response.data.user;

      setUser(user);
      return user;
    } catch (error) {
      console.log(error);
    }
  };

  console.log("user: ", user);

  const getLeaderBoard = async () => {
    const response = await axios.get(
      "https://ixnote-game-dev-backend.herokuapp.com/api/v1/users/leaderboard",
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const board = response.data.leaderboard;
    setBoard(board);
  };

  useEffect(() => {
    getLeaderBoard();
    getProfile();
  }, []);

  return (
    <>
      <Wrapper bg={bg}>
        <Content>
          <Top>
            <TopLeft>
              {/* <TopLeftImg /> */}
              <img src={user.user_img ? user.user.img : DP} alt="media" />
              <TopLeftText>
                <h4>{user.username}</h4>
                <h5>{user.gameId}</h5>
              </TopLeftText>
            </TopLeft>
            <TopRight>
              <h4>Rank</h4>
              <h5>{user.position}</h5>
            </TopRight>
          </Top>
          <List>
            {Board.map((item) => (
              <ListItem>
                <div className="numImgPair">
                  <h6>{item.position}</h6>
                  <img src={item.user_img ? item.user.img : DP} alt="media" />
                </div>

                <div className="nameIdPair">
                  <h6>{item.username}</h6>
                  <h6>{item.gameId}</h6>
                </div>

                <div className="country">
                  <h6>{item.country}</h6>
                </div>

                <div className="cityStatePair">
                  {/* <h6>Plateau State</h6> */}
                  <h6>{item.city}</h6>
                </div>

                <div className="rating">
                  <h6>{item.experience}</h6>
                </div>
              </ListItem>
            ))}
          </List>
          <Bottom>
            <a href="/">
              <span className="bx bx-left-arrow"></span>
              <h6>Back</h6>
            </a>
          </Bottom>
        </Content>
      </Wrapper>
    </>
  );
};

export default Leaderboard;
