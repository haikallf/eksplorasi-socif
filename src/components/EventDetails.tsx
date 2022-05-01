import React, { useState } from "react";
import {
  EventDescription,
  ImageLists,
  EventSubtitle,
  DetailInfo,
  Rectangle,
  SubtitleContainer,
  EventLocation,
  EventLocationDetail,
  EventMap,
  EventDateContainer,
  EventDate,
  EventTime,
  EventTimeDetail,
  EventDateText,
  EventTimeText,
  EventDateSuper,
  VerticalLine,
  DetailsAction,
  DetailPurpleButton,
  DetailGreenButton,
  JoinText,
  CommentFieldContainer,
  CommentField,
  SendCommentButton,
  CloseCommentButton,
  CommentContainer,
  CommentMiddle,
  CommentShare,
  CommentText,
  CommentTime,
  CommentTop,
  CommentUserImage,
  CommentUsername,
  ScrollableComment,
  ReadMoreButton,
  OverlayDiv,
} from "../styles/details.styles";
import Gmap from "../assets/images/gmap.png";
import { BiArrowFromLeft, BiArrowFromRight, BiShare } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart, AiOutlineClose } from "react-icons/ai";
import { ImCheckmark, ImCheckmark2 } from "react-icons/im";
import { RiSendPlane2Fill } from "react-icons/ri";
import Going from "./Going";
import Likes from "./Likes";
import { comment, eventProps } from "../interfaces";
import moment from "moment";
import { green, purple } from "../styles/global.styles";
import { handleGoing, handleLike, sendComment } from "../services/api";
import { getInitial, getUsername } from "../global.config";
import Photos from "./Photos";

const EventDetails: React.FC<eventProps> = (props) => {
  const [commentClicked, setCommentClicked] = useState<boolean>(false);
  const [commentValue, setCommentValue] = useState<string>("");
  const [isTruncated, setIsTruncated] = useState<boolean>(true);

  const truncatedDescription = isTruncated
    ? props.obj.description?.slice(0, 300)
    : props.obj.description;

  const handleReply = (user_email?: string) => {
    if (!commentClicked) {
      setCommentClicked(true);
    }
    if (
      !commentValue.includes(user_email!) &&
      user_email !== localStorage.getItem("current_user")
    ) {
      setCommentValue(`${user_email} ${commentValue}`);
    }
  };

  return (
    <>
      <DetailInfo>
        <ImageLists>
          <Photos count={props.obj.images!} />
        </ImageLists>

        <EventDescription id="section2">
          <p>{truncatedDescription}</p>
          {isTruncated && <OverlayDiv />}
          {(props.obj.description || "")?.length >= 300 && (
            <ReadMoreButton
              onClick={() => setIsTruncated(!isTruncated)}
              className={!isTruncated ? "active" : ""}
            >
              {isTruncated ? "View All" : "View Less"}
            </ReadMoreButton>
          )}
        </EventDescription>
      </DetailInfo>

      <DetailInfo>
        <SubtitleContainer>
          <Rectangle />
          <EventSubtitle>When</EventSubtitle>
        </SubtitleContainer>

        <EventDateSuper id="section3">
          <EventDateContainer>
            <EventDate>
              <BiArrowFromLeft />
              <EventDateText>
                {moment(
                  `${props.obj.start_date} ${props.obj.start_time}`
                ).format("DD MMMM YYYY")}
              </EventDateText>
            </EventDate>

            <EventTime>
              <EventTimeText>
                {moment(`${props.obj.start_time}`, `h:mm`).format("hh:mm")}{" "}
                <EventTimeDetail>
                  {moment(`${props.obj.start_time}`, `h:mm`).format("a")}
                </EventTimeDetail>
              </EventTimeText>
            </EventTime>
          </EventDateContainer>

          <VerticalLine />

          <EventDateContainer>
            <EventDate>
              <BiArrowFromRight />
              <EventDateText>
                {moment(`${props.obj.end_date} ${props.obj.start_time}`).format(
                  "DD MMMM YYYY"
                )}
              </EventDateText>
            </EventDate>

            <EventTime>
              <EventTimeText>
                {moment(`${props.obj.end_time}`, `h:mm`).format("hh:mm")}{" "}
                <EventTimeDetail>
                  {moment(`${props.obj.end_time}`, `h:mm`).format("a")}
                </EventTimeDetail>
              </EventTimeText>
            </EventTime>
          </EventDateContainer>
        </EventDateSuper>
      </DetailInfo>

      <DetailInfo>
        <SubtitleContainer>
          <Rectangle />
          <EventSubtitle>Where</EventSubtitle>
        </SubtitleContainer>

        <EventLocation>{props.obj.location}</EventLocation>
        <EventLocationDetail>{props.obj.address}</EventLocationDetail>
        <EventMap src={Gmap} />
      </DetailInfo>

      <DetailInfo>
        <Going going={props.obj.going} />
      </DetailInfo>

      <DetailInfo>
        <Likes likes={props.obj.likes} />
      </DetailInfo>

      <ScrollableComment>
        {props.obj.comments?.map((comment: comment, index: number) => (
          <CommentContainer key={index}>
            <CommentUserImage>{getInitial(comment?.email)}</CommentUserImage>

            <CommentMiddle>
              <CommentTop>
                <CommentUsername>{getUsername(comment?.email)}</CommentUsername>
                <CommentTime>
                  {moment(
                    `${comment?.comment_date} ${comment?.comment_time}`,
                    "YYYY/MM/DD h:mm"
                  ).fromNow()}
                </CommentTime>
              </CommentTop>

              <CommentText>{comment.comment}</CommentText>
            </CommentMiddle>

            <CommentShare>
              <BiShare
                size={32}
                color={green}
                onClick={() => handleReply(comment.email)}
              />
            </CommentShare>
          </CommentContainer>
        ))}
      </ScrollableComment>

      <DetailsAction>
        {!commentClicked ? (
          <>
            <DetailPurpleButton onClick={() => setCommentClicked(true)}>
              <FaRegCommentDots />
            </DetailPurpleButton>

            <DetailPurpleButton
              onClick={() =>
                handleLike(props.obj, localStorage.getItem("current_user")!)
              }
            >
              {props.obj.likes?.indexOf(
                localStorage.getItem("current_user")!
              ) === -1 ? (
                <>
                  <AiOutlineHeart />
                </>
              ) : (
                <>
                  <AiFillHeart color={green} />
                </>
              )}
            </DetailPurpleButton>

            <DetailGreenButton
              onClick={() =>
                handleGoing(props.obj, localStorage.getItem("current_user")!)
              }
            >
              {props.obj.going?.indexOf(
                localStorage.getItem("current_user")!
              ) === -1 ? (
                <>
                  <ImCheckmark2 /> <JoinText>Join</JoinText>
                </>
              ) : (
                <>
                  <ImCheckmark color={purple} />{" "}
                  <JoinText className="active">I am going</JoinText>
                </>
              )}
            </DetailGreenButton>
          </>
        ) : (
          <>
            <CommentFieldContainer>
              <CloseCommentButton onClick={() => setCommentClicked(false)}>
                <AiOutlineClose size={24} />
              </CloseCommentButton>
              <CommentField
                value={commentValue}
                onChange={(e) => setCommentValue(e.target.value)}
              />
            </CommentFieldContainer>
            <SendCommentButton
              onClick={() =>
                sendComment(
                  props.obj,
                  commentValue,
                  localStorage.getItem("current_user")!
                )
              }
            >
              <RiSendPlane2Fill size={24} />
            </SendCommentButton>
          </>
        )}
      </DetailsAction>
    </>
  );
};

export default EventDetails;
