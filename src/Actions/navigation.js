export function increment(count) {
  return {
    type: "INCREMENT",
    count
  };
}
export function decrement(count) {
  return {
    type: "DECREMENT",
    count
  };
}

export function nextPage(count) {
  return dispatch => {
    dispatch(increment(count));
  };
}
export function prevPage(count) {
  return dispatch => {
    dispatch(decrement(count));
  };
}
