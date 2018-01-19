import { AsyncStorage } from "react-native";
import { createStore } from "redux";
import { persistStore } from "redux-persist";
// import reducer from "./reducers";

function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

export default function configureStore(onCompletion: () => void): any {
  const store = createStore(counter);
  // persistStore(store, { storage: AsyncStorage }, onCompletion);

  return store;
}
