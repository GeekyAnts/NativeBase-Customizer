const initialState = {
  option: "design",
  platform: "ios"
};

export default function(state: any = initialState, action: Function) {
  if (action.type === "CHOICE") {
    return {
      ...state,
      option: action.option
    };
  } else if (action.type === "PLATFORM_OPTION") {
    return {
      ...state,
      platform: action.platform
    };
  }
  return state;
}
