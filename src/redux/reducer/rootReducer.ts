import { combineReducers } from "redux";
import { bdayReducer } from "./bdayReducer";

export const rootReducer = combineReducers({
  bdayReducer,
});
