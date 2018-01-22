export function theme(variable) {
  return {
    type: "THEME",
    variable
  };
}
export function appliedTheme(variable) {
  return dispatch => {
    dispatch(theme(variable));
  };
}
