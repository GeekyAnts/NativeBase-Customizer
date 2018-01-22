import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import reducer from "./Reducers/index";

// function counter(state = 0, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// }

// export default function configureStore(onCompletion: () => void): any {
//   const store = createStore(reducer);
//   // persistStore(store, { storage: AsyncStorage }, onCompletion);

//   return store;
// }

export default function configureStore(onCompletion: () => void): any {
  const enhancer = compose(applyMiddleware(thunk));

  const store = createStore(reducer, enhancer);
  persistStore(store, onCompletion);

  return store;
}
