const initialState = {
  page: "Home",
  pageList: ["Anatomy", "Header", "Footer"]
};

export default function(state: any = initialState, action: Function) {
  if (action.type === "SELECTED_PAGE") {
    return {
      ...state,
      page: action.page
    };
  }
  return state;
}
