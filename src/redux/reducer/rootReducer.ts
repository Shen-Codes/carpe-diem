import { combineReducers } from "redux";
import { bdayState } from "./bdayReducer";

export const rootReducer = combineReducers({
  bdayState,
});
