import React, { useState } from "react";
import { ImCheckmark2 } from "react-icons/im";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { getInitial } from "../global.config";
import { event } from "../interfaces";
import {
  GoingContainer,
  GoingImages,
  GoingInfo,
  GoingText,
  GoingUser,
  ToggleShow,
} from "../styles/details.styles";

const Going: React.FC<event> = ({ going }) => {
  const [show, setShow] = useState<boolean>(false);
  const [visible, setVisible] = useState<number>(6);

  const toggleComments = () => {
    if (!show) {
      setVisible(going?.length!);
      setShow(true);
    } else {
      setVisible(6);
      setShow(false);
    }
  };
  return (
    <GoingContainer>
      <GoingInfo>
        <ImCheckmark2 />
        <GoingText>{going?.length} going</GoingText>
      </GoingInfo>

      <GoingImages>
        {going?.slice(0, visible).map((elmt: string, index: number) => (
          <GoingUser key={index}>{getInitial(elmt)}</GoingUser>
        ))}
        {going?.length! >= 6 && (
          <ToggleShow onClick={toggleComments}>
            {show ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </ToggleShow>
        )}
      </GoingImages>
    </GoingContainer>
  );
};

export default Going;
