import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { AiOutlineMail, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { ImCheckmark, ImCheckmark2 } from "react-icons/im";
import { IoPaw, IoPawOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import EventCard from "../components/EventCard";
import NoActivities from "../components/NoActivities";
import {
  getGoingEvents,
  getInitial,
  getLikedEvents,
  getPastGoingEvents,
  getUsername,
  url,
} from "../global.config";
import { event } from "../interfaces";
import {
  Content,
  DetailNav,
  DetailNavOption,
  NavText,
  StickyContainer,
  VerticalLine,
} from "../styles/details.styles";
import {
  EmailText,
  LogoutButton,
  ProfileContainer,
  ProfileEmailContainer,
  ProfileImage,
  ProfileUsername,
} from "../styles/profile.styles";

const Profile: React.FC<{}> = () => {
  const [clicked, setClicked] = useState<string>("likes");
  const [goingEvents, setGoingEvents] = useState<event[]>([]);
  const [likedEvents, setLikedEvents] = useState<event[]>([]);
  const [pastGoingEvents, setPastGoingEvents] = useState<event[]>([]);
  const navigate = useNavigate();

  const getEvents = async () => {
    const response = await axios.get(url + "/events");
    setGoingEvents(
      getGoingEvents(response.data, localStorage.getItem("current_user")!)
    );
    setLikedEvents(
      getLikedEvents(response.data, localStorage.getItem("current_user")!)
    );
    setPastGoingEvents(
      getPastGoingEvents(response.data, localStorage.getItem("current_user")!)
    );
  };

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("current_user")) {
      navigate("/login");
    }
  }, [localStorage]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <ProfileContainer>
        <ProfileImage>
          {getInitial(localStorage.getItem("current_user")!)}
        </ProfileImage>
        <ProfileUsername>
          {getUsername(localStorage.getItem("current_user")!)}
        </ProfileUsername>
        <ProfileEmailContainer>
          <AiOutlineMail size={20} />
          <EmailText>{localStorage.getItem("current_user")}</EmailText>
        </ProfileEmailContainer>
        <LogoutButton onClick={handleLogout}>LOGOUT</LogoutButton>
      </ProfileContainer>

      <StickyContainer>
        <DetailNav>
          <DetailNavOption
            onClick={() => setClicked("likes")}
            className={clicked === "likes" ? "clicked" : ""}
          >
            {clicked === "likes" ? <AiFillHeart /> : <AiOutlineHeart />}
            <NavText>{likedEvents.length} Likes</NavText>
          </DetailNavOption>

          <VerticalLine />

          <DetailNavOption
            onClick={() => setClicked("going")}
            className={clicked === "going" ? "clicked" : ""}
          >
            {clicked === "going" ? <ImCheckmark /> : <ImCheckmark2 />}
            <NavText>{goingEvents.length} Going</NavText>
          </DetailNavOption>

          <VerticalLine />

          <DetailNavOption
            onClick={() => setClicked("past")}
            className={clicked === "past" ? "clicked" : ""}
          >
            {clicked === "past" ? <IoPaw /> : <IoPawOutline />}
            <NavText>{pastGoingEvents.length} Past</NavText>
          </DetailNavOption>
        </DetailNav>
      </StickyContainer>

      <Content>
        {clicked === "likes" &&
          (likedEvents.length === 0 ? (
            <NoActivities />
          ) : (
            likedEvents?.map((event: event, index: number) => (
              <EventCard obj={event} key={index} />
            ))
          ))}

        {clicked === "going" &&
          (goingEvents.length === 0 ? (
            <NoActivities />
          ) : (
            goingEvents?.map((event: event, index: number) => (
              <EventCard obj={event} key={index} />
            ))
          ))}

        {clicked === "past" &&
          (pastGoingEvents.length === 0 ? (
            <NoActivities />
          ) : (
            pastGoingEvents?.map((event: event, index: number) => (
              <EventCard obj={event} key={index} />
            ))
          ))}
      </Content>
    </>
  );
};

export default Profile;
