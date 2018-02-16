import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import reducer from "./Reducers/index";

export default function configureStore(onCompletion: () => void): any {
  const enhancer = compose(applyMiddleware(thunk));

  const store = createStore(reducer, enhancer);
  persistStore(store, onCompletion);

  return store;
}
