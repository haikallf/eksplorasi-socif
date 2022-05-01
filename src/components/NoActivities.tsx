import React from "react";
import { BiBasketball } from "react-icons/bi";
import {
  NoActivityCard,
  NoActivityContainer,
  NoActivityText,
} from "../styles/events.styles";

const NoActivities: React.FC<{}> = () => {
  return (
    <NoActivityContainer>
      <NoActivityCard>
        <BiBasketball />
        <NoActivityText>No Activity Found</NoActivityText>
      </NoActivityCard>
    </NoActivityContainer>
  );
};

export default NoActivities;
