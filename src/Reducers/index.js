import { combineReducers } from "redux";
// import { App } from "../ReactNativeApp/App"; // Object has access to router

import navigation from "./navigation";
import theme from "./theme";

// const navigation = (state, action) => {
//   const newState = App.router.getStateForAction(action, state);
//   return newState || state;
// };

export default combineReducers({
  // navigation,
  navigation,
  theme
});
