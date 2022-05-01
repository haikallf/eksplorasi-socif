import moment from "moment";
import React from "react";
import { AiFillInfoCircle, AiOutlineComment } from "react-icons/ai";
import { IoMdPeople } from "react-icons/io";
import Scrollspy from "react-scrollspy";
import { getInitial, getUsername } from "../global.config";
import { event } from "../interfaces";
import {
  DetailChannel,
  DetailName,
  DetailNav,
  DetailNavOption,
  DetailSection,
  DetailTime,
  DetailUser,
  DetailUserImage,
  DetailUsername,
  DetailUserText,
  NavText,
  StickyContainer,
  VerticalLine,
} from "../styles/details.styles";

const DetailTop: React.FC<event> = ({
  channel,
  name_event,
  email,
  created_date,
}) => {
  return (
    <>
      <DetailSection id="section1">
        <DetailChannel>
          <p>{channel}</p>
        </DetailChannel>

        <DetailName>{name_event}</DetailName>

        <DetailUser>
          <DetailUserImage>{getInitial(email)}</DetailUserImage>
          <DetailUserText>
            <DetailUsername>{getUsername(email)}</DetailUsername>
            <DetailTime>
              Published {moment(created_date, "YYYY/MM/DD").fromNow()}
            </DetailTime>
          </DetailUserText>
        </DetailUser>
      </DetailSection>

      <StickyContainer>
        <DetailNav>
          <Scrollspy
            items={["section1", "section2", "section3", "section4"]}
            currentClassName="nav__item active"
            componentTag="div"
            offset={-200}
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100vw",
            }}
          >
            <DetailNavOption
              onClick={(e) => {
                window.location.href = "#section1";
              }}
              className="nav__item"
            >
              <AiFillInfoCircle />
              <NavText>Details</NavText>
            </DetailNavOption>

            <VerticalLine />

            <DetailNavOption
              onClick={(e) => {
                window.location.href = "#section2";
              }}
              className="nav__item"
            >
              <IoMdPeople />
              <NavText>Participants</NavText>
            </DetailNavOption>

            <VerticalLine />

            <DetailNavOption
              onClick={(e) => {
                window.location.href = "#section3";
              }}
              className="nav__item"
            >
              <AiOutlineComment />
              <NavText>Comments</NavText>
            </DetailNavOption>

            {/* <DetailNavOption
              onClick={(e) => {
                window.location.href = "#section3";
              }}
              className="nav__item"
            >
              <AiOutlineComment />
              <NavText>Comments</NavText>
            </DetailNavOption> */}
          </Scrollspy>
        </DetailNav>
      </StickyContainer>
    </>
  );
};

export default DetailTop;
