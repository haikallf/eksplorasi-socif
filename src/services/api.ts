import axios from "axios";
import moment from "moment";
import { url } from "../global.config";
import { event } from "../interfaces";

export const getEvents = async () => {
  return await axios.get(`${url}/events`);
};

export const handleGoing = (eventObject: event, email: string) => {
  if (eventObject.going?.indexOf(email) == -1) {
    axios
      .put(url + `/events/${eventObject.id}`, {
        ...eventObject,
        going: [...eventObject.going, email],
      })
      .catch((err) => console.log(err));
  } else {
    eventObject.going?.forEach((element, index) => {
      if (element == email) eventObject.going?.splice(index, 1);
    });
    axios
      .put(url + `/events/${eventObject.id}`, {
        ...eventObject,
        going: eventObject.going,
      })
      .catch((err) => console.log(err));
  }
};

export const handleLike = (eventObject: event, email: string) => {
  if (eventObject.likes?.indexOf(email) == -1) {
    axios
      .put(url + `/events/${eventObject.id}`, {
        ...eventObject,
        likes: [...eventObject.likes, email],
      })
      .catch((err) => console.log(err));
  } else {
    eventObject.likes?.forEach((element, index) => {
      if (element == email) eventObject.likes?.splice(index, 1);
    });
    axios
      .put(url + `/events/${eventObject.id}`, {
        ...eventObject,
        likes: eventObject.likes,
      })
      .catch((err) => console.log(err));
  }
};

export const sendComment = (
  event: event,
  commentValue: string,
  email: string | undefined
) => {
  if (commentValue !== "") {
    axios
      .put(url + `/events/${event.id}`, {
        ...event,
        comments: [
          {
            comment: commentValue,
            comment_date: moment().format("YYYY/MM/DD"),
            comment_time: moment().format("H:mm"),
            email: email,
          },
          ...event.comments!,
        ],
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
