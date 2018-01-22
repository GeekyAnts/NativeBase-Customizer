import {
  StackNavigator,
  DrawerNavigator
} from "react-navigation/lib/react-navigation.js";

import Header from "../ReactNativeApp/screens/Header/";
import Header1 from "../ReactNativeApp/screens/Header/1";
const App = StackNavigator({
  Header: { screen: Header },

  Header1: { screen: Header1 }
});

const initialState = App.router.getStateForAction(
  App.router.getActionForPathAndParams("Header")
);

export default function(state = initialState, action) {
  const nextState = App.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
