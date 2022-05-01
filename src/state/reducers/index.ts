import { combineReducers } from "redux";
import eventReducer from "./reducer";

const reducers = combineReducers({
  event: eventReducer,
});

export default reducers;

export type EventState = ReturnType<typeof reducers>;
