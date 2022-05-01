import { ActionType } from "../action-types";

export type SearchType = {
  date_filter?: string;
  from_date?: string;
  to_date?: string;
  channel?: string[];
};

export type State = {
  toggle_sidebar?: boolean;
  current_user?: string;
  search?: SearchType;
};

interface ToggleSidebar {
  type: ActionType.TOGGLE_SIDEBAR;
  payload: State;
}

interface CurrentUser {
  type: ActionType.CURRENT_USER;
  payload: State;
}

interface Search {
  type: ActionType.SEARCH;
  payload: State;
}

// interface ToDate {
//   type: ActionType.TO_DATE;
//   payload: State;
// }

// interface Channel {
//   type: ActionType.CHANNEL;
//   payload: State;
// }

export type Action = ToggleSidebar | CurrentUser | Search;
