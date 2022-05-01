import styled, { createGlobalStyle } from "styled-components";

export const darkpurple = "#453257";
export const darkpurple2 = "#513a67";
export const purple = "#8560A9";
export const lightgray = "#67616D";
export const green = "#d5ef7f";
export const darkgreen = "#779155";
export const darkgreen2 = "#AECB4F";
export const salmonred = "#FF5C5C";
export const snow = "#fafafa";
export const ghostwhite = "#faf9fc";

export const purplefilter = `invert(45%) sepia(11%) saturate(1932%) hue-rotate(228deg) brightness(91%) contrast(94%);`;
export const greenfilter = `invert(86%) sepia(53%) saturate(361%) hue-rotate(17deg) brightness(98%) contrast(94%);`;
export const grayfilter = `invert(76%) sepia(0%) saturate(3095%) hue-rotate(136deg) brightness(100%) contrast(88%);`;

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap');
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        ::-webkit-scrollbar {
        display: none;
      }
    }

    #root {
        margin: 0 auto;
    }

    html {
        background: #ffffff;
        background-size: cover;
    }

    body {
      font-family: 'Source Sans Pro', sans-serif;
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
`;

export const FlexWrapper = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
`;

export const Wrapper = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  position: absolute;
  height: 100vh;
  width: 100vw;
  left: 0;
  transition: all 0.5s ease-in-out;
  &.active {
    overflow-x: hidden;
    left: 360px;
  }

  @media only screen and (max-width: 420px) {
    &.active {
      left: 310px;
      overflow-x: hidden;
    }
  }
`;
