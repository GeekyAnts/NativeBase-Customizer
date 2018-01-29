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
export function change(value) {
  return {
    type: "CHANGE",
    value
  };
}
export function changeHeight(value) {
  return dispatch => {
    dispatch(change(value));
  };
}
