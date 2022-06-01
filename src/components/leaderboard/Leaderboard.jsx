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

// Components
import SearchBar from "../searchBar/SearchBar";

const Leaderboard = () => {
  const [user, setUser] = useState({});
  const [Board, setBoard] = useState([]);
  const [filtered, setFiltered] = useState([]);

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
    setFiltered(board);
  };

  // SearchBar Handler
  const onSearchCangeHandler = async (e) => {
    try {
      e.preventDefault();
      const filteredBoard = Board.filter((item) =>
        item.username.toLowerCase().includes(e.target.value.toLocaleLowerCase())
      );
      setFiltered(filteredBoard);
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    getLeaderBoard();
    getProfile();
  }, []);

  return (
    <>
      <Wrapper bg={bg}>
        <div className="searchBar">
          <SearchBar label={"username"} search={onSearchCangeHandler} />
        </div>
        <Content>
          <Top>
            {localStorage.getItem("token") ? (
              <>
                <TopLeft>
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
              </>
            ) : (
              <h4 className="mx-5">Leaderboard</h4>
            )}
          </Top>
          <List>
            {filtered.map((item) => (
              <table class="table ">
                <tbody>
                  <tr>
                    {/* <th scope="row">{item.position}</th> */}
                    {/* <td><img src={item.user_img ? item.user.img : DP} alt="media" /></td> */}
                    <td>{item.position}</td>
                    <td>{item.username}</td>
                    <td>{item.gameId}</td>
                    <td className="disappear">{item.country}</td>
                    <td className="disappear">{item.city}</td>
                    <td>{item.experience}</td>
                  </tr>
                </tbody>
              </table>
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
