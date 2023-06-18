import { combineReducers } from "redux";

import counter from "./couter.js";

const allReducers = combineReducers({
  counter,
  // add more reducers here
});

export default allReducers;
