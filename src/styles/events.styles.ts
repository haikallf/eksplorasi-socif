import styled from "styled-components";
import {
  darkpurple,
  ghostwhite,
  green,
  lightgray,
  purple,
} from "./global.styles";

export const SearchResultContainer = styled.div`
  padding: 20px 30px;
  background: ${ghostwhite};
  @media only screen and (max-width: 420px) {
    padding: 10px 16px;
  }
`;

export const SearchResultTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchResult = styled.p`
  color: ${purple};
  font-weight: 500;
`;

export const ClearSearch = styled.button`
  padding: 10px;
  background: ${green};
  color: ${purple};
  font-weight: 600;
  font-size: 10px;
  outline: none;
  border: 1px solid ${green};
  border-radius: 20px;
  cursor: pointer;
`;

export const SearchDetail = styled.p`
  padding-top: 10px;
  font-size: 12px;
  color: ${lightgray};
  text-align: center;
`;

export const Card = styled.div`
  padding: 20px;
  border-bottom: 1px solid #e8e8e8;
  @media only screen and (max-width: 420px) {
    padding: 16px;
  }
`;

export const CardTop = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const EventOwner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const OwnerPicture = styled.div`
  height: 24px;
  width: 24px;
  background: gray;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;

export const OwnerName = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #67616d;
  margin-left: 10px;
`;

export const EventChannel = styled.div`
  height: 70%;
  padding: 0 10px;
  border-radius: 30px;
  border: 1px solid ${purple};
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${purple};
  font-size: 14px;
`;

export const EventContent = styled.div`
  width: 100%;
`;

export const EventTitle = styled.div``;

export const FlexContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const EventName = styled.h2`
  color: ${darkpurple};
  margin-top: 10px;
  font-size: 20px;
  cursor: pointer;
  @media only screen and (max-width: 420px) {
    font-size: 18px;
  }
`;

export const EventTime = styled.div`
  display: flex;
  align-items: center;
  color: ${purple};
  margin: 15px 0;
  font-size: 20px;
  @media only screen and (max-width: 345px) {
    font-size: 18px;
  }
`;

export const TimeDetail = styled.p`
  margin-left: 5px;
  font-weight: 500;
  font-size: 18px;
  @media only screen and (max-width: 420px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 345px) {
    font-size: 12px;
  }
`;

export const EventThumbnail = styled.img`
  height: 60px;
  width: 60px;
`;

export const EventDescription = styled.p`
  font-size: 18px;
  color: ${lightgray};
  @media only screen and (max-width: 420px) {
    font-size: 14px;
  }
`;

export const EventActions = styled.div`
  display: flex;
  margin: 15px 0;
  @media only screen and (max-width: 420px) {
    margin: 0;
    margin-top: 10px;
  }
`;

export const GoingButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
`;

export const ActionText = styled.p`
  margin-left: 10px;
  color: ${purple};
`;

export const LikeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
  border: none;
  background: transparent;
`;

export const NoActivityContainer = styled.div`
  height: 300px;
  width: 100vw;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NoActivityCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 80px;
  color: ${purple};
  opacity: 0.5;
  font-weight: 400;
`;

export const NoActivityText = styled.p`
  margin-top: 20px;
  font-size: 16px;
  color: ${lightgray};
  font-weight: 400;
`;
