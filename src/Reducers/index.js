import { combineReducers } from "redux";
import undoable from "redux-undo";

import navigation from "./navigation";
import theme from "./theme";

const combine = combineReducers({
  navigation,
  theme
});

export default undoable(combine);
