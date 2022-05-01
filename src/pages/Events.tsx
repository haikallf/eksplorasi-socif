import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { event } from "../interfaces";
import axios from "axios";
import { getAvaliableEvents, url } from "../global.config";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, EventState } from "../state";
import { useNavigate } from "react-router-dom";
import {
  ClearSearch,
  SearchDetail,
  SearchResult,
  SearchResultContainer,
  SearchResultTop,
} from "../styles/events.styles";
import moment from "moment";
import NoActivities from "../components/NoActivities";

const Events: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const { setSearch } = bindActionCreators(actionCreators, dispatch);
  const state = useSelector((state: EventState) => state.event);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("current_user")) {
      navigate("/login");
    }
  }, [localStorage]);

  const [eventData, setEventData] = useState<event[]>([]);

  const getEvents = async () => {
    const response = await axios.get(url + "/events");
    setEventData(getAvaliableEvents(response.data, state["search"]!)!);
  };

  useEffect(() => {
    getEvents();
  }, [eventData]);

  return (
    <>
      {((state["search"]?.channel?.length &&
        state["search"]?.channel?.length <= 1) ||
        state["search"]?.date_filter?.toString() !== "ANYTIME") && (
        <SearchResultContainer>
          <SearchResultTop>
            <SearchResult>{eventData.length} Results</SearchResult>
            <ClearSearch onClick={() => setSearch()}>CLEAR SEARCH</ClearSearch>
          </SearchResultTop>
          <SearchDetail>
            Searched for{" "}
            {state["search"]?.channel?.length &&
            state["search"]?.channel?.length > 1
              ? "All Channels"
              : state["search"]?.channel![0]}{" "}
            Activities on {moment(state["search"]?.from_date).format("DD/MM")}
            {state["search"]?.from_date !== state["search"]?.to_date &&
              ` until ${moment(state["search"]?.to_date).format("DD/MM")}`}
          </SearchDetail>
        </SearchResultContainer>
      )}

      {eventData.length === 0 ? (
        <NoActivities />
      ) : (
        eventData?.map((event: event, index: number) => (
          <EventCard obj={event} key={index} />
        ))
      )}
    </>
  );
};

export default Events;
