const initialState = {
  variable: ""
};

export default function(state: any = initialState, action: Function) {
  if (action.type === "THEME") {
    return {
      ...state,
      variable: action.variable
    };
  } else if (action.type === "CHANGE") {
    console.log(action, "act");
    return {
      ...state,
      variable: {
        fontSizeBase: action.value
      }
    };
  }
  return state;
}
