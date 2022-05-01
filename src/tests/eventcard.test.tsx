import EventCard from "../components/EventCard";
import * as ReactDOM from "react-dom";
import axios from "axios";
import { getAvaliableEvents, url } from "../global.config";
import moment from "moment";
import { event } from "../interfaces";
// import db

// const getEvents = async () => {
//   const response = await axios.get(url + "/events");
//   var events: event[] = getAvaliableEvents(response.data, {
//     date_filter: "ANYTIME",
//     from_date: `${moment().format()}`,
//     to_date: `${moment().format()}`,
//     channel: ["Channel 1", "Channel 2"],
//   });
//   return events;
// };

// describe("EventCard component tests", () => {
//   let container: HTMLDivElement;
//   let events: Promise<event[]> = getEvents();

//   beforeEach(() => {
//     container = document.createElement("div");
//     document.body.appendChild(container);
//     ReactDOM.render(<EventCard obj={events[0]} />, container);
//   });
// });
