// Dependencies
import styled from "styled-components";

export const Edikan = styled.div`
  padding-top: 4rem;

  @media screen and (max-width: 576px) {
    padding-top: 8rem;
  }

  @media screen and (max-width: 768px) {
    padding-top: 7rem;
  }
`;

export const Content = styled.div`
  @media screen and (max-width: 576px) {
  }

  @media screen and (max-width: 768px) {
  }
`;

// some random stuff so i can commit
// yet again

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
</ListItem>;
