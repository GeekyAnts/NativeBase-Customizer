const initialState = {
  variable: "",
  var: ""
};

export default function(state: any = initialState, action: Function) {
  if (action.type === "THEME") {
    return {
      ...state,
      variable: action.variable
    };
  } else if (action.type === "CHANGE") {
    return {
      ...state,
      variable: {
        ...state.variable,
        [action.property]: action.value
      }
    };
  }
  return state;
}
