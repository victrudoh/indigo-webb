import React from "react";

// Styles
import {
  Wrapper,
  Content,
  Left,
  LeftTop,
  LeftTopLogo,
  LeftBottom,
  Right,
  RightTitle,
  RightBody,
} from "./Profile.Styles";

// Components
import BottomLinks from "../../components/landingPage/bottomLinks/BottomLinks";

// images and icons
import logo from "../../assets/images/profile/logo.png";
import DP from "../../assets/images/profile/itachi.jpg";
import instagram from "../../assets/images/profile/Instagram.png";
import linkedIn from "../../assets/images/profile/LinkedIn.png";
import twitter from "../../assets/images/profile/Twitter.png";
import dev from "../../assets/images/profile/DEV.to.png";
import rightBg from "../../assets/images/profile/rightBg.png";

const Profile = () => {
  return (
    <Wrapper>
      <Content>
        <Left>
          <LeftTop>
            <LeftTopLogo logo={logo} />
            {/* <div className="imgHolder"> */}
            <img src={DP} alt="media" />
            {/* </div> */}
            <div className="name">GreyHound</div>
            <div className="team">Team</div>
            <div className="rank">Rank: Legendary</div>
            <div className="id">#21345</div>
            <a href="/profile">Start for success!</a>
          </LeftTop>
          <LeftBottom>
            <div className="bottomDesign">
              <a href="/">
                <img src={instagram} alt="" />
              </a>
              <a href="/">
                <img src={linkedIn} alt="" />
              </a>
              <a href="/">
                <img src={twitter} alt="" />
              </a>
              <a href="/">
                <img src={dev} alt="" />
              </a>
            </div>
          </LeftBottom>
        </Left>
        <Right>
          <RightTitle>
            <div className="smallTitle">Competition</div>
            <div className="bigTitle">Profile</div>
          </RightTitle>
          <RightBody bg={rightBg}>
            <div class="outer">
              <div class="inner">
                <i class="top left up"></i>
                <div class="content">
                  <div className="flexRow">
                    <div className="item">
                      <h4>Matches:</h4>
                      <h5>23</h5>
                    </div>
                    <div className="item">
                      <h4>Date:</h4>
                      <h5>2021/12/22</h5>
                    </div>
                  </div>
                  <div className="flexRow">
                    <div className="item">
                      <h4>Wins:</h4>
                      <h5>15</h5>
                    </div>
                    <div className="item">
                      <h4>Loses:</h4>
                      <h5>8</h5>
                    </div>
                  </div>
                  <div className="flexRow">
                    <div className="doubleDeck">
                      <h4>Competition</h4>
                      <h5>COD Mobile</h5>
                    </div>
                    <div className="doubleDeck">
                      <h4>Type</h4>
                      <h5>Team</h5>
                    </div>
                    <div className="doubleDeck">
                      <h4>Level</h4>
                      <h5>12</h5>
                    </div>
                  </div>
                </div>
                <i class="bottom left down"></i>
              </div>
            </div>
          </RightBody>
        </Right>
      </Content>
      <BottomLinks />
    </Wrapper>
  );
};

export default Profile;
