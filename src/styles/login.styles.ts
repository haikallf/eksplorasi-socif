import styled from "styled-components";
import LoginBackground from "../assets/images/Street-Dance-01.jpg";
import CatLogoSVG from "../assets/svg/logo-cat.svg";
import UserLogoSVG from "../assets/svg/user.svg";
import PasswordLogoSVG from "../assets/svg/password.svg";
import { green, greenfilter, purple } from "./global.styles";

export const LoginContainer = styled.div`
  diplay: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LoginFormContainer = styled.div`
  background: linear-gradient(
      0deg,
      rgba(122, 85, 159, 0.9),
      rgba(122, 85, 159, 0.5)
    ),
    url(${LoginBackground}) no-repeat;
  background-size: cover;
  height: 90vh;
  width: 100vw;
`;

export const LoginHeading = styled.h2`
  text-align: center;
  padding-top: 100px;
  font-weight: 500;
  color: ${green};
  @media only screen and (max-height: 800px) {
    padding-top: 70px;
  }

  @media only screen and (max-height: 700px) {
    padding-top: 50px;
  }
`;

export const LoginSubHeading = styled.h1`
  text-align: center;
  padding-top: 30px;
  margin-bottom: 70px;
  color: ${green};
`;

export const LogoContainer = styled.div`
  display: table;
  margin: 0 auto;
  margin-bottom: 150px;
  padding: 15px;
  border: 2px solid ${green};
  border-radius: 50%;
  box-shadow: 0px 0px 8px 0px ${green};
  @media only screen and (max-height: 800px) {
    margin-bottom: 130px;
  }

  @media only screen and (max-height: 750px) {
    margin-bottom: 100px;
  }

  @media only screen and (max-height: 700px) {
    margin-bottom: 80px;
  }
`;

export const CatLogo = styled.div`
  display: inline-block;
  background-image: url(${CatLogoSVG});
  height: 50px;
  width: 50px;
  filter: ${greenfilter};
`;

export const LoginForm = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const EmailLabel = styled.label`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 20px;
    background: url(${UserLogoSVG}) center / contain no-repeat;
    filter: invert(100%) sepia(0%) saturate(7455%) hue-rotate(96deg)
      brightness(109%) contrast(109%);
    opacity: 0.5;
  }
`;

export const EmailField = styled.input.attrs({
  type: "email",
  autoComplete: "nofill",
})`
  padding-left: 55px;
  width: 70vw;
  height: 60px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 50px;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.7);
  ::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.3);
  }
`;

export const PasswordLabel = styled.label`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 20px;
    background: url(${PasswordLogoSVG}) center / contain no-repeat;
    filter: invert(100%) sepia(0%) saturate(7455%) hue-rotate(96deg)
      brightness(109%) contrast(109%);
    opacity: 0.5;
  }
`;

export const PasswordField = styled.input.attrs({
  type: "password",
  autoComplete: "nofill",
})`
  padding-left: 55px;
  width: 70vw;
  height: 60px;
  background: rgba(255, 255, 255, 0);
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 50px;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.7);
  ::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.3);
  }
`;

export const SignInButton = styled.button`
  background: ${green};
  height: 10vh;
  width: 100vw;
  font-size: 18px;
  font-weight: bold;
  color: ${purple};
  border: none;
  outline: none;
  &:focus {
    border: none;
    outline: none;
  }
`;
