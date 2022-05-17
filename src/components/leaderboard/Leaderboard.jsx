import React from "react";

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
  return (
    <>
      <Wrapper bg={bg}>
        <Content>
          <Top>
            <TopLeft>
              {/* <TopLeftImg /> */}
              <img src={DP} alt="media" />
              <TopLeftText>
                <h4>GreyHound</h4>
                <h5>#21345</h5>
              </TopLeftText>
            </TopLeft>
            <TopRight>
              <h4>Rank</h4>
              <h5>248</h5>
            </TopRight>
          </Top>
          <List>
            <ListItem>
              <div className="numImgPair">
                <h6>1</h6>
                <img src={DP} alt="media" />
              </div>

              <div className="nameIdPair">
                <h6>GreyHound</h6>
                <h6>#21345</h6>
              </div>

              <div className="country">
                <h6>Nigeria</h6>
              </div>

              <div className="cityStatePair">
                <h6>Plateau State</h6>
                <h6>Jos</h6>
              </div>

              <div className="rating">
                <h6>5482</h6>
              </div>
            </ListItem>
            <ListItem>
              <div className="numImgPair">
                <h6>1</h6>
                <img src={DP} alt="media" />
              </div>

              <div className="nameIdPair">
                <h6>GreyHound</h6>
                <h6>#21345</h6>
              </div>

              <div className="country">
                <h6>Nigeria</h6>
              </div>

              <div className="cityStatePair">
                <h6>Plateau State</h6>
                <h6>Jos</h6>
              </div>

              <div className="rating">
                <h6>5482</h6>
              </div>
            </ListItem>
            <ListItem>
              <div className="numImgPair">
                <h6>1</h6>
                <img src={DP} alt="media" />
              </div>

              <div className="nameIdPair">
                <h6>GreyHound</h6>
                <h6>#21345</h6>
              </div>

              <div className="country">
                <h6>Nigeria</h6>
              </div>

              <div className="cityStatePair">
                <h6>Plateau State</h6>
                <h6>Jos</h6>
              </div>

              <div className="rating">
                <h6>5482</h6>
              </div>
            </ListItem>
            <ListItem>
              <div className="numImgPair">
                <h6>1</h6>
                <img src={DP} alt="media" />
              </div>

              <div className="nameIdPair">
                <h6>GreyHound</h6>
                <h6>#21345</h6>
              </div>

              <div className="country">
                <h6>Nigeria</h6>
              </div>

              <div className="cityStatePair">
                <h6>Plateau State</h6>
                <h6>Jos</h6>
              </div>

              <div className="rating">
                <h6>5482</h6>
              </div>
            </ListItem>
            <ListItem>
              <div className="numImgPair">
                <h6>1</h6>
                <img src={DP} alt="media" />
              </div>

              <div className="nameIdPair">
                <h6>GreyHound</h6>
                <h6>#21345</h6>
              </div>

              <div className="country">
                <h6>Nigeria</h6>
              </div>

              <div className="cityStatePair">
                <h6>Plateau State</h6>
                <h6>Jos</h6>
              </div>

              <div className="rating">
                <h6>5482</h6>
              </div>
            </ListItem>
            <ListItem>
              <div className="numImgPair">
                <h6>1</h6>
                <img src={DP} alt="media" />
              </div>

              <div className="nameIdPair">
                <h6>GreyHound</h6>
                <h6>#21345</h6>
              </div>

              <div className="country">
                <h6>Nigeria</h6>
              </div>

              <div className="cityStatePair">
                <h6>Plateau State</h6>
                <h6>Jos</h6>
              </div>

              <div className="rating">
                <h6>5482</h6>
              </div>
            </ListItem>
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
