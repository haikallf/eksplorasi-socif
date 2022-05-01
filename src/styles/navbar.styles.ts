import styled from "styled-components";
import { greenfilter, purple } from "./global.styles";
import CatIconSVG from "../assets/svg/logo-cat.svg";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  background: ${purple};
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const NavbarIcons = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: #453257;
`;

export const CatIcon = styled.div`
  display: inline-block;
  background-image: url(${CatIconSVG});
  height: 30px;
  width: 30px;
  filter: ${greenfilter};
`;

export const UserIcon = styled.div`
  display: inline-block;
  background: gray;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  cursor: pointer;
`;
