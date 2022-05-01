import moment from "moment";
import { ActionType } from "../action-types";
import { Action, State } from "../actions/index";

const initialState: object = {
  toggle_sidebar: false,
  current_user: "",
  search: {
    date_filter: "ANYTIME",
    from_date: `${moment().format()}`,
    to_date: `${moment().format()}`,
    channel: ["Channel 1", "Channel 2", "Channel 3", "Channel 4"],
  },
};

const eventReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.TOGGLE_SIDEBAR:
      return { ...state, toggle_sidebar: action.payload.toggle_sidebar };

    case ActionType.CURRENT_USER:
      return { ...state, current_user: action.payload.current_user };

    case ActionType.SEARCH:
      return { ...state, search: action.payload.search };

    default:
      return { ...state };
  }
};

export default eventReducer;
