import { NavigationActions } from "react-navigation";
export function goToComponent1(params) {
  return (dispatch, getState) => {
    dispatch(NavigationActions.navigate({ routeName: "Home", params: params }));
  };
}
