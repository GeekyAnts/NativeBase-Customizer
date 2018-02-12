import { combineReducers } from "redux";
import undoable from "redux-undo";

import navigation from "./navigation";
import theme from "./theme";
import choice from "./choice";

const combine = combineReducers({
  navigation,
  theme,
  choice
});

export default undoable(combine);
