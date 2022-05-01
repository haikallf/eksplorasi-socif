import React, { useEffect, useState } from "react";
import { Content } from "../styles/details.styles";
import EventDetails from "../components/EventDetails";
import { useNavigate, useParams } from "react-router-dom";
import { event } from "../interfaces";
import axios from "axios";
import DetailTop from "../components/DetailTop";
import { url } from "../global.config";

const Details: React.FC<{}> = () => {
  const { id } = useParams();
  const [event, setEvent] = useState<event>({});
  const navigate = useNavigate();

  const getEventById = async (id?: string) => {
    const response = await axios.get(url + `/events/${id}`);
    setEvent(response.data);
  };

  useEffect(() => {
    if (!localStorage.getItem("current_user")) {
      navigate("/login");
    }
  }, [localStorage]);

  useEffect(() => {
    getEventById(id);
  }, [event]);

  return (
    <>
      <DetailTop
        channel={event.channel}
        name_event={event.name_event}
        email={event.email}
        created_date={event.created_date}
      />

      <Content>
        <EventDetails obj={event} />
      </Content>
    </>
  );
};

export default Details;
