import { combineReducers } from "redux";

import navigation from "./navigation";
import theme from "./theme";
import selectPage from "./selectPage";

export default combineReducers({
  navigation,
  theme,
  selectPage
});
