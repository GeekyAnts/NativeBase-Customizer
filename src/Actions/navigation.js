import { NavigationActions } from "react-navigation";
export function selectPage(page) {
  return {
    type: "SELECT_PAGE",
    page
  };
}
export function newPage(page) {
  return dispatch => {
    dispatch(selectPage(page));
    dispatch(NavigationActions.navigate({ routeName: page }));
  };
}
