import styled from "styled-components";
import { green, lightgray, purple } from "./global.styles";

export const ProfileContainer = styled.div`
  padding: 40px 30px 30px 30px;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 345px) {
    padding: 30px 20px 20px 20px;
  }
`;

export const ProfileImage = styled.div`
  height: 80px;
  width: 80px;
  background: gray;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 24px;
  @media only screen and (max-width: 420px) {
    height: 70px;
    width: 70px;
  }
  @media only screen and (max-width: 345px) {
    height: 60px;
    width: 60px;
  }
`;

export const ProfileUsername = styled.h3`
  margin: 20px 0 10px 0;
  color: ${lightgray};
  font-size: 28px;
  font-weight: 400;
  @media only screen and (max-width: 420px) {
    font-size: 20px;
  }
`;

export const ProfileEmailContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${purple};
`;

export const EmailText = styled.p`
  margin-left: 5px;
  @media only screen and (max-width: 420px) {
    font-size: 14px;
  }
`;

export const LogoutButton = styled.button`
  padding: 10px;
  background: ${green};
  color: ${purple};
  font-weight: 600;
  font-size: 10px;
  outline: none;
  border: 1px solid ${green};
  border-radius: 20px;
  cursor: pointer;
  margin-top: 20px;
`;
