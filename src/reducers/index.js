import { combineReducers } from "redux";
import gameReducer from "./gamereducer";

const rootReducer = combineReducers({
  gameReducer,
});

export default rootReducer;
