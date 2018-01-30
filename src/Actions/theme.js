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
export function change(property, value) {
  return {
    type: "CHANGE",
    property,
    value
  };
}
export function changeValue(property, value) {
  return dispatch => {
    dispatch(change(property, value));
  };
}
