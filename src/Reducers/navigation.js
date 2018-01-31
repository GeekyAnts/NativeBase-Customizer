const initialState = {
  page: "Anatomy",
  selected: 0,
  subPage: null,
  pageList: [
    {
      id: 0,
      route: "Anatomy"
    },
    {
      id: 1,
      route: "Actionsheet"
    },
    {
      id: 2,
      route: "Header"
    },
    {
      id: 3,
      route: "Footer"
    },
    {
      id: 4,
      route: "Badge"
    },
    {
      id: 5,
      route: "Button"
    },
    {
      id: 6,
      route: "Card"
    },
    {
      id: 7,
      route: "Checkbox"
    },
    {
      id: 8,
      route: "DeckSwiper"
    },
    {
      id: 9,
      route: "Fab"
    },
    {
      id: 10,
      route: "Form"
    },
    {
      id: 11,
      route: "Icon"
    },
    {
      id: 12,
      route: "Layout"
    },
    {
      id: 13,
      route: "List"
    },
    {
      id: 14,
      route: "ListSwipe"
    },
    {
      id: 15,
      route: "Picker"
    },
    {
      id: 16,
      route: "Radio"
    },
    {
      id: 17,
      route: "Searchbar"
    },
    {
      id: 18,
      route: "Segment"
    },
    {
      id: 19,
      route: "Spinner"
    },
    {
      id: 20,
      route: "Tabs"
    },
    {
      id: 21,
      route: "Thumbnail"
    },
    {
      id: 22,
      route: "Toast"
    },
    {
      id: 23,
      route: "Typography"
    }
  ]
};
export default function(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      var abc = null;
      state.pageList.forEach(function(element) {
        if (state.selected + 1 === element.id) {
          abc = element.route;
        }
      });
      if (!(state.selected >= 23))
        return {
          ...state,
          selected: state.selected + 1,
          page: abc,
          subPage: null
        };
      else
        return {
          ...state
        };
    case "DECREMENT":
      var abc = null;
      state.pageList.forEach(function(element) {
        if (state.selected - 1 === element.id) abc = element.route;
      });
      if (!(state.selected <= 0))
        return {
          ...state,
          selected: state.selected - 1,
          page: abc,
          subPage: null
        };
      else
        return {
          ...state
        };
    case "SELECT_PAGE":
      var abc = null;
      var sub = null;
      state.pageList.forEach(function(element) {
        if (action.page === element.route) {
          abc = element.id;
        }
      });
      return {
        ...state,
        page: action.page,
        subPage: action.subpage,
        selected: abc
      };
    default:
      return state;
  }
}
