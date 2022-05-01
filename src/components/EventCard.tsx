import React from "react";
import { eventProps } from "../interfaces";
import {
  Card,
  CardTop,
  EventOwner,
  OwnerPicture,
  OwnerName,
  EventChannel,
  EventContent,
  EventName,
  EventTime,
  TimeDetail,
  EventDescription,
  EventActions,
  GoingButton,
  ActionText,
  LikeButton,
  FlexContent,
  EventThumbnail,
  EventTitle,
} from "../styles/events.styles";
import moment from "moment";
import { useNavigate } from "react-router";
import { ImCheckmark, ImCheckmark2 } from "react-icons/im";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { darkgreen2, purple, salmonred } from "../styles/global.styles";
import { handleGoing, handleLike } from "../services/api";
import { getInitial, getUsername } from "../global.config";
import Photo1 from "../assets/images/photo1.jpg";

const EventCard: React.FC<eventProps> = (props) => {
  const navigate = useNavigate();
  const goToDetailPage = (id?: string) => {
    navigate(`/details/${id}`);
  };

  return (
    <Card>
      <CardTop>
        <EventOwner>
          <OwnerPicture>{getInitial(props.obj.email)}</OwnerPicture>
          <OwnerName>{getUsername(props.obj.email)}</OwnerName>
        </EventOwner>
        <EventChannel>{props.obj.channel}</EventChannel>
      </CardTop>

      <EventContent>
        <FlexContent>
          <EventTitle>
            <EventName onClick={() => goToDetailPage(props.obj.id)}>
              {props.obj.name_event}
            </EventName>

            <EventTime>
              <AiOutlineClockCircle />
              <TimeDetail>
                {moment(props.obj.start_date).format("DD MMMM YYYY")} -{" "}
                {moment(props.obj.end_date).format("DD MMMM YYYY")}
              </TimeDetail>
            </EventTime>
          </EventTitle>
          {props.obj?.images! >= 1 && <EventThumbnail src={Photo1} />}
        </FlexContent>

        <EventDescription>
          {(props.obj.description || "")?.length > 300
            ? props.obj.description?.slice(0, 300) + "..."
            : props.obj.description}
        </EventDescription>

        <EventActions>
          <GoingButton
            onClick={() =>
              handleGoing(props.obj, localStorage.getItem("current_user")!)
            }
          >
            {props.obj.going?.indexOf(localStorage.getItem("current_user")!) ===
            -1 ? (
              <>
                <ImCheckmark2 size={20} color={purple} />
                <ActionText>{props.obj.going?.length} Going</ActionText>
              </>
            ) : (
              <>
                <ImCheckmark size={20} color={darkgreen2} />
                <ActionText>I'm going</ActionText>
              </>
            )}
          </GoingButton>

          <LikeButton
            onClick={() =>
              handleLike(props.obj, localStorage.getItem("current_user")!)
            }
          >
            {props.obj.likes?.indexOf(localStorage.getItem("current_user")!) ===
            -1 ? (
              <>
                <AiOutlineHeart size={20} color={purple} />
                <ActionText>{props.obj.likes?.length} Likes</ActionText>
              </>
            ) : (
              <>
                <AiFillHeart size={20} color={salmonred} />
                <ActionText>I like it!</ActionText>
              </>
            )}
          </LikeButton>
        </EventActions>
      </EventContent>
    </Card>
  );
};

export default EventCard;
