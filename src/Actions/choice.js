export function choice(option) {
  return {
    type: "CHOICE",
    option
  };
}

export function choose(option) {
  return dispatch => {
    dispatch(choice(option));
  };
}
export function platformOption(platform) {
  return {
    type: "PLATFORM_OPTION",
    platform
  };
}

export function choosePlatform(platform) {
  return dispatch => {
    dispatch(platformOption(platform));
  };
}
