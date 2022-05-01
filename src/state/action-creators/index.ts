import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions/index";
import moment from "moment";

export const setCurrentUser = (email: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CURRENT_USER,
      payload: {
        current_user: email,
      },
    });
  };
};

export const setToggleSidebar = (condition: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.TOGGLE_SIDEBAR,
      payload: {
        toggle_sidebar: condition,
      },
    });
  };
};

export const setSearch = (
  date_filter: string = "ANYTIME",
  from_date: string = moment().format(),
  to_date: string = moment().format(),
  channel: string[] = ["Channel 1", "Channel 2", "Channel 3", "Channel 4"]
) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH,
      payload: {
        search: {
          date_filter: date_filter,
          from_date: from_date,
          to_date: to_date,
          channel: channel,
        },
      },
    });
  };
};

// export const setFromDate = (condition: string) => {
//   return (dispatch: Dispatch<Action>) => {
//     dispatch({
//       type: ActionType.FROM_DATE,
//       payload: {
//         from_date: condition,
//       },
//     });
//   };
// };

// export const setToDate = (condition: string) => {
//   return (dispatch: Dispatch<Action>) => {
//     dispatch({
//       type: ActionType.TO_DATE,
//       payload: {
//         to_date: condition,
//       },
//     });
//   };
// };

// export const setChannel = (condition: string) => {
//   return (dispatch: Dispatch<Action>) => {
//     dispatch({
//       type: ActionType.CHANNEL,
//       payload: {
//         channel: condition,
//       },
//     });
//   };
// };
