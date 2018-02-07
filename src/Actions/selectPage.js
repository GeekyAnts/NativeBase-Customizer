export function selectPage(page, subpage) {
  return {
    type: "SELECT_PAGE",
    page,
    subpage
  };
}

export function newPage(page, subpage) {
  return dispatch => {
    dispatch(selectPage(page, subpage));
  };
}
