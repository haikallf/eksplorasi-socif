import moment from "moment";
import { event } from "./interfaces";
import { SearchType } from "./state/actions";

export const url = "http://127.0.0.1:3123";

export const truncateString = (str?: string, num?: number) => {
  if ((str || "").length > (num || 0)) {
    return str?.slice(0, num) + "...";
  } else {
    return str;
  }
};

export const getUsername = (email: string | undefined) => {
  return email?.split("@")[0];
};

export const getInitial = (email: string | undefined) => {
  return email?.charAt(0).toUpperCase();
};

export const getAvaliableEvents = (events: event[], search: SearchType) => {
  let avaliableEvents: event[] = [];
  for (let i: number = 0; i < events.length; i++) {
    let endDateEvent: string = moment(
      `${events[i].end_date} ${events[i].end_time}`
    ).format();
    let startDateEvent: string = moment(
      `${events[i].start_date} ${events[i].start_time}`
    ).format();
    let nowDateTime: string = moment().format();

    if (search["date_filter"] !== "ANYTIME") {
      if (
        (moment(search.from_date).isBetween(startDateEvent, endDateEvent) ||
          moment(search.to_date).isBetween(startDateEvent, endDateEvent)) &&
        search.channel?.indexOf(events[i].channel!) !== -1
      ) {
        avaliableEvents.push(events[i]);
      }
    } else {
      if (
        moment(nowDateTime).isBefore(endDateEvent) &&
        search.channel?.indexOf(events[i].channel!) !== -1
      ) {
        avaliableEvents.push(events[i]);
      }
    }
  }
  return avaliableEvents;
};

export const getPastGoingEvents = (events: event[], email: string) => {
  let pastGoingEvents: event[] = [];
  for (let i: number = 0; i < events.length; i++) {
    let endDateTime: string = moment(
      `${events[i].end_date} ${events[i].end_time}`
    ).format();
    let nowDateTime: string = moment().format();
    if (
      moment(nowDateTime).isAfter(endDateTime) &&
      events[i].going?.indexOf(email) != -1
    ) {
      pastGoingEvents.push(events[i]);
    }
  }
  return pastGoingEvents;
};

export const getGoingEvents = (events: event[], email: string) => {
  let goingEvents: event[] = [];
  for (let i: number = 0; i < events.length; i++) {
    if (events[i].going?.indexOf(email) != -1) {
      goingEvents.push(events[i]);
    }
  }
  return goingEvents;
};

export const getLikedEvents = (events: event[], email: string) => {
  let likedEvents: event[] = [];
  for (let i: number = 0; i < events.length; i++) {
    if (events[i].likes?.indexOf(email) != -1) {
      likedEvents.push(events[i]);
    }
  }
  return likedEvents;
};

export const getChannels = (events: event[]) => {
  let channels: string[] | undefined = [];
  for (let i: number = 0; i < events.length; i++) {
    if (channels.indexOf(events[i].channel!) === -1) {
      channels.push(events[i].channel!);
    }
  }
  return channels;
};

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
