import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { getInitial } from "../global.config";
import { event } from "../interfaces";

import {
  LikesContainer,
  LikesImages,
  LikesInfo,
  LikesText,
  LikesUser,
  ToggleShow,
} from "../styles/details.styles";

const Likes: React.FC<event> = ({ likes }) => {
  const [show, setShow] = useState<boolean>(false);
  const [visible, setVisible] = useState<number>(6);

  const toggleLikes = () => {
    if (!show) {
      setVisible(likes?.length!);
      setShow(true);
    } else {
      setVisible(6);
      setShow(false);
    }
  };
  return (
    <LikesContainer>
      <LikesInfo>
        <AiOutlineHeart />
        <LikesText>{likes?.length} Likes</LikesText>
      </LikesInfo>

      <LikesImages>
        {likes?.slice(0, visible).map((elmt: string, index: number) => (
          <LikesUser key={index}>{getInitial(elmt)}</LikesUser>
        ))}
        {likes?.length! >= 6 && (
          <ToggleShow onClick={toggleLikes}>
            {show ? (
              <MdOutlineKeyboardArrowUp />
            ) : (
              <MdOutlineKeyboardArrowDown />
            )}
          </ToggleShow>
        )}
      </LikesImages>
    </LikesContainer>
  );
};

export default Likes;
