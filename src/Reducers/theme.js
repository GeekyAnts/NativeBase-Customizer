const initialState = {
  variable: ""
};

export default function(state: any = initialState, action: Function) {
  if (action.type === "THEME") {
    return {
      ...state,
      variable: action.variable
    };
  }
  return state;
}
