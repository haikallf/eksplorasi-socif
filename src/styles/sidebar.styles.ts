import styled, { createGlobalStyle } from "styled-components";
import { darkpurple, green, purple } from "./global.styles";

export const SidebarWrapper = styled.div`
  position: absolute;
  top: 0;
  left: -360px;
  overflow: hidden;
  z-index: 150;
  transition: all 0.5s ease-in-out;
  &.active {
    left: 0;
  }
  @media only screen and (max-width: 420px) {
    left: -310px;
  }
`;

export const SidebarContainer = styled.div`
  height: 100vh;
  width: 360px;
  background: ${darkpurple};
  position: relative;
  @media only screen and (max-width: 420px) {
    width: 310px;
  }
`;

export const CloseSidebar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index = -1;
`;

export const SidebarTop = styled.div`
  padding: 0 20px;
  position: absolute;
  z-index: 100;
  @media only screen and (max-width: 420px) {
    padding: 0 10px;
  }
`;

export const FilterTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  @media only screen and (max-width: 420px) {
    font-size: 14px;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-weight: 600;
  margin-top: 20px;
`;

export const FilterText = styled.div`
  font-weight: 600;
  color: ${purple};
  border-bottom: 1px solid ${purple};
`;

export const DateButton = styled.button`
  width: fit-content;
  padding: 10px;
  color: #ffffff;
  background: transparent;
  outline: none;
  border: none;
  margin: 0 10px;
  margin-bottom: 10px;
  font-size: 14px;
  cursor: pointer;
  &.active {
    background: ${green};
    color: ${purple};
    border-radius: 20px;
    font-weight: 600;
  }
  &.later {
    position: relative;
    text-align: center;
  }
  &.later:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid transparent;
    border-bottom: 10px solid #ffffff;
    bottom: -10px;
    left: 23px;
  }
  @media only screen and (max-width: 420px) {
    margin: 0 5px;
    font-size: 14px;

    &.later:before {
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid transparent;
      border-bottom: 10px solid #ffffff;
      bottom: -10px;
      left: 23px;
    }
  }
`;

export const LaterButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DateInputContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${green};
`;

export const DateFlexContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: white;
  color: ${green};
  @media only screen and (max-width: 420px) {
    margin-top: 9px;
  }
`;

export const ChannelButton = styled.button`
  padding: 10px;
  color: #ffffff;
  background: transparent;
  outline: none;
  border: 1px solid #ffffff;
  border-radius: 20px;
  margin: 0 10px;
  margin-bottom: 10px;
  font-size: 14px;
  cursor: pointer;
  &.active {
    background: ${green};
    color: ${purple};
    border: 1px solid ${green}
    font-weight: 600;
  }
`;

export const SearchButton = styled.button`
  width: 100%;
  height: 10vh;
  position: absolute;
  bottom: 0;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid ${green};
  background: ${green};
  cursor: pointer;
`;

export const ButtonTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${darkpurple};
  cursor: pointer;
`;

export const ButtonTextSpan = styled.span`
  margin-left: 5px;
`;

export const ButtonFilterText = styled.p`
  font-size: 12px;
  color: ${purple};
  font-weight: 400;
`;

export const DatePickerWrapperStyles = createGlobalStyle`
  .react-date-picker__wrapper,
  .react-date-picker__inputGroup__input {
    background: transparent;
    color: ${purple};
    border: none;
    outline: none;
    @media only screen and (max-width: 420px) {
      font-size: 14px;
    }

  .react-date-picker__wrapper:focus-within {
    background: ${green};
  }
`;
