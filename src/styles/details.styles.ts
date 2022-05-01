import styled from "styled-components";
import {
  darkgreen,
  darkpurple,
  green,
  lightgray,
  purple,
  snow,
} from "./global.styles";

export const DetailSection = styled.section`
  padding: 0 30px;
  border-bottom: 1px solid #e8e8e8;
  @media only screen and (max-width: 420px) {
    padding: 0 16px;
  }
`;

export const DetailChannel = styled.div`
  margin: 20px 0;
  height: 30px;
  width: max-content;
  padding: 0 10px;
  border-radius: 30px;
  border: 1px solid ${purple};
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${purple};
  @media only screen and (max-width: 420px) {
    font-size: 14px;
  }
`;

export const DetailName = styled.h2`
  color: ${darkpurple};
  @media only screen and (max-width: 420px) {
    font-size: 21px;
  }
`;

export const DetailUser = styled.div`
  margin: 30px 0;
  display: flex;
  align-items: center;
`;

export const DetailUserText = styled.div`
  margin-left: 15px;
`;

export const DetailUserImage = styled.div`
  height: 40px;
  width: 40px;
  background: gray;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;

export const DetailUsername = styled.p`
  color: ${lightgray};
  font-size: 18px;
`;

export const DetailTime = styled.p`
  color: #bababa;
  font-size: 15px;
`;

export const StickyContainer = styled.div`
  position: sticky;
  top: 60px;
  z-index: 100;
`;

export const DetailNav = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid #e8e8e8;
  padding: 10px 0;
  background: #fff;
`;

export const DetailNavList = styled.li`
  list-style: none;
`;

export const DetailNavOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // text-decoration: none;
  color: #bababa;
  font-size: 28px;
  cursor: pointer;
  &.active {
    color: ${green};
  }
  &.clicked {
    color: ${green};
  }
  @media only screen and (max-width: 345px) {
    font-size: 18px;
  }
`;

export const Content = styled.div`
  background: ${snow};
`;

// export const InfoIcon = styled.div`
//   background: url(${InfoIconSVG}) no-repeat;
//   height: 32px;
//   width: 32px;
//   filter: ${grayfilter};
// `;

// export const PeopleIcon = styled.div`
//   background: url(${PeopleOutlineIconSVG}) no-repeat;
//   height: 32px;
//   width: 32px;
//   filter: ${grayfilter};
// `;

// export const CommentIcon = styled.div`
//   background: url(${CommentOutlineIconSVG}) no-repeat;
//   height: 32px;
//   width: 32px;
//   filter: invert(57%) sepia(63%) saturate(0%) hue-rotate(148deg)
//     brightness(112%) contrast(104%);
// `;

export const DetailInfo = styled.div`
  padding: 30px;
  border-bottom: 1px solid #e8e8e8;
  color: ${lightgray};
  @media only screen and (max-width: 420px) {
    padding: 16px;
  }
`;

export const ScrollableComment = styled.div`
  padding: 30px;
  border-bottom: 1px solid #e8e8e8;
  max-height: 300px;
  overflow-y: scroll;
  @media only screen and (max-width: 420px) {
    padding: 16px;
  }
`;

export const NavText = styled.p`
  font-size: 18px;
  margin-left: 10px;

  @media only screen and (max-width: 420px) {
    font-size: 14px;
    margin-left: 5px;
  }
`;

export const VerticalLine = styled.div`
  border-left: 1px solid #e8e8e8;
`;

export const ImageLists = styled.div`
  display: flex;
  overflow-x: scroll;
`;

export const EventImage = styled.img`
  width: 200px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 10px;
  @media only screen and (max-width: 420px) {
    width: 180px;
    height: 100px;
  }
`;

export const EventDescription = styled.div`
  position: relative;
  margin: 10px 0;
  }
`;

export const OverlayDiv = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(0deg, ${snow} 0%, transparent 100%);
  position: absolute;
  top: 0;
`;

export const ReadMoreButton = styled.button`
  position: absolute;
  bottom: -20px;
  right: 0;
  padding: 10px;
  color: ${purple};
  background: ${green};
  border: 1px solid ${green};
  border-radius: 20px;
  outline: none;
  &.active {
    opacity: 0.2;
  }
`;

export const EventWhen = styled.div`
  display: flex;
`;

export const EventSubtitle = styled.h3`
  padding: 10px;
  color: ${purple};
  font-weight: 600;
  font-size: 24px;
  @media only screen and (max-width: 420px) {
    font-size: 20px;
  }
`;

export const SubtitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Rectangle = styled.div`
  display: inline-block;
  background: ${purple};
  height: 35px;
  width: 8px;
  border-radius: 8px;
  @media only screen and (max-width: 420px) {
    height: 28px;
    width: 6px;
  }
`;

export const EventDateSuper = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const EventDateContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const EventDate = styled.h3`
  display: flex;
  align-items: center;
  color: ${green};
  font-size: 48px;
  @media only screen and (max-width: 420px) {
    font-size: 30px;
  }
`;
export const EventDateText = styled.div`
  color: ${lightgray};
  font-weight: 500;
  font-size: 24px;
  @media only screen and (max-width: 530px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 420px) {
    font-size: 16px;
  }
`;

export const EventTime = styled.div`
  display: flex;
  align-items: flex-end;
  color: ${green};
`;
export const EventTimeText = styled.h3`
  font-size: 48px;
  font-weight: 400;
  @media only screen and (max-width: 420px) {
    font-size: 32px;
  }
`;

export const EventTimeDetail = styled.span`
  font-size: 18px;
`;

export const EventLocation = styled.h3`
  color: ${lightgray};
  margin-top: 10px;
  @media only screen and (max-width: 420px) {
    font-size: 16px;
  }
`;

export const EventLocationDetail = styled.h3`
  color: ${lightgray};
  font-weight: 400;
  margin-bottom: 20px;
  @media only screen and (max-width: 420px) {
    font-size: 16px;
  }
`;

export const EventMap = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 15px;
`;

export const ToggleShow = styled.button`
  height: 30px;
  width: 30px;
  background: transparent;
  border-radius: 50%;
  border: 1px solid ${purple};
  color: ${purple};
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  @media only screen and (max-width: 420px) {
    height: 25px;
    width: 25px;
  }
`;

export const GoingContainer = styled.div`
  display: flex;
`;

export const GoingInfo = styled.div`
  display: flex;
  align-items: center;
  color: ${purple};
`;

export const GoingText = styled.p`
  margin-left: 10px;
  color: ${lightgray};
  margin-right: 20px;
  @media only screen and (max-width: 420px) {
    font-size: 14px;
  }
`;

export const GoingImages = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const GoingUser = styled.div`
  height: 30px;
  width: 30px;
  margin: 5px 0;
  background: gray;
  border-radius: 50%;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  @media only screen and (max-width: 420px) {
    height: 25px;
    width: 25px;
    font-size: 14px;
  }
`;

export const LikesContainer = styled.div`
  display: flex;
`;

export const LikesInfo = styled.div`
  display: flex;
  align-items: center;
  color: ${purple};
`;

export const LikesText = styled.p`
  margin-left: 10px;
  color: ${lightgray};
  margin-right: 20px;
  @media only screen and (max-width: 420px) {
    font-size: 14px;
  }
`;

export const LikesImages = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const LikesUser = styled.div`
  height: 30px;
  width: 30px;
  margin: 5px 0;
  background: gray;
  border-radius: 50%;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  @media only screen and (max-width: 420px) {
    height: 25px;
    width: 25px;
    font-size: 14px;
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`;

export const CommentUserImage = styled.div`
  diplay: inline-block;
  height: 30px;
  width: 30px;
  background: gray;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;

export const CommentMiddle = styled.div`
  flex: 0.9;
`;

export const CommentTop = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentUsername = styled.p`
  color: ${purple};
`;

export const CommentTime = styled.p`
  color: ${lightgray};
  margin-left: 10px;
  font-size: 12px;
`;

export const CommentText = styled.p`
  color: ${lightgray};
`;

export const CommentShare = styled.div``;

export const DetailsAction = styled.div`
  display: flex;
  height: 60px;
`;

export const DetailPurpleButton = styled.button`
  flex: 0.25;
  background: ${purple};
  font-size: 24px;
  color: ${darkpurple};
  outline: none;
  border: none;
  cursor: pointer;
`;

export const DetailGreenButton = styled.button`
  flex: 0.5;
  background: ${green};
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${darkgreen};
  outline: none;
  border: none;
  cursor: pointer;
`;

export const JoinText = styled.p`
  margin-left: 10px;
  font-size: 16px;
  font-weight: 600;
  &.active {
    color: ${purple};
  }

  @media only screen and (max-width: 420px) {
    font-size: 14px;
  }
`;

export const CommentFieldContainer = styled.div`
  display: flex;
  width: 80vw;
  align-items: center;
  justify-content: space-evenly;
  background: ${purple};
`;
export const CommentField = styled.input`
  flex: 0.8;
  height: 50%;
  border: 1px solid transparent;
  border-radius: 20px;
  outline: none;
  padding-left: 10px;
  color: ${lightgray};
`;

export const CloseCommentButton = styled.button`
  color: #d5ef7f;
  background: transparent;
  border: none;
  outline: none;
`;

export const SendCommentButton = styled.button`
  width: 20vw;
  color: ${purple};
  background-color: ${green};
  border: none;
  outline: none;
`;
