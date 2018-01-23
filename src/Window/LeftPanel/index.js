import React, { Component } from "react";
import Ionicon from "react-ionicons";
import { connect } from "react-redux";
import Bar from "../../StyledComponents/Bar";
import { newPage } from "../../Actions/selectPage";

const datas = [
  {
    name: "Anatomy",
    route: "Anatomy",
    icon: "phone-landscape",
    bg: "#C5F442"
  },
  {
    name: "Actionsheet",
    route: "Actionsheet",
    icon: "easel",
    bg: "#C5F442"
  },
  {
    name: "Header",
    route: "Header",
    icon: "phone-landscape",
    bg: "#477EEA",
    types: "8"
  },
  {
    name: "Footer",
    route: "Footer",
    icon: "phone-landscape",
    bg: "#DA4437",
    types: "4"
  },
  {
    name: "Badge",
    route: "NHBadge",
    icon: "notifications",
    bg: "#4DCAE0"
  },
  {
    name: "Button",
    route: "NHButton",
    icon: "radio-button-off",
    bg: "#1EBC7C",
    types: "9"
  },
  {
    name: "Card",
    route: "NHCard",
    icon: "keypad",
    bg: "#B89EF5",
    types: "5"
  },
  {
    name: "Check Box",
    route: "NHCheckbox",
    icon: "checkmark-circle",
    bg: "#EB6B23"
  },
  {
    name: "Deck Swiper",
    route: "NHDeckSwiper",
    icon: "swap",
    bg: "#3591FA",
    types: "2"
  },
  {
    name: "Fab",
    route: "NHFab",
    icon: "help-buoy",
    bg: "#EF6092",
    types: "2"
  },
  {
    name: "Form & Inputs",
    route: "NHForm",
    icon: "call",
    bg: "#EFB406",
    types: "12"
  },
  {
    name: "Icon",
    route: "NHIcon",
    icon: "information-circle",
    bg: "#EF6092"
  },
  {
    name: "Layout",
    route: "NHLayout",
    icon: "grid",
    bg: "#9F897C",
    types: "5"
  },
  {
    name: "List",
    route: "NHList",
    icon: "lock",
    bg: "#5DCEE2",
    types: "7"
  },
  {
    name: "ListSwipe",
    route: "ListSwipe",
    icon: "swap",
    bg: "#C5F442",
    types: "2"
  },
  {
    name: "Picker",
    route: "NHPicker",
    icon: "arrow-dropdown",
    bg: "#F50C75"
  },
  {
    name: "Radio",
    route: "NHRadio",
    icon: "radio-button-on",
    bg: "#6FEA90"
  },
  {
    name: "SearchBar",
    route: "NHSearchbar",
    icon: "search",
    bg: "#29783B"
  },
  {
    name: "Segment",
    route: "Segment",
    icon: "menu",
    bg: "#0A2C6B",
    types: "2"
  },
  {
    name: "Spinner",
    route: "NHSpinner",
    icon: "navigate",
    bg: "#BE6F50"
  },
  {
    name: "Tabs",
    route: "NHTab",
    icon: "home",
    bg: "#AB6AED",
    types: "3"
  },
  {
    name: "Thumbnail",
    route: "NHThumbnail",
    icon: "image",
    bg: "#cc0000",
    types: "2"
  },
  {
    name: "Toast",
    route: "Toast",
    icon: "albums",
    bg: "#C5F442"
  },
  {
    name: "Typography",
    route: "NHTypography",
    icon: "paper",
    bg: "#48525D"
  }
];
class LeftPanel extends Component {
  render() {
    const that = this;
    const renObjData = datas.map(function(data, idx) {
      const icon = "ios-" + data.icon;
      return (
        <Bar key={idx} onClick={() => that.props.newPage(data.route)}>
          <Ionicon
            icon={icon}
            color="#FFF"
            fontSize="26px"
            style={{ marginRight: 10, opacity: 0.4 }}
          />
          {data.name}
        </Bar>
      );
    });
    return (
      <div style={{ background: "#252143", flex: 1, display: "flex" }}>
        <div style={{ flex: 1, overflowY: "scroll" }}>{renObjData}</div>
      </div>
    );
  }
}

function bindAction(dispatch) {
  return {
    newPage: page => dispatch(newPage(page))
  };
}

const mapStateToProps = state => ({
  page: state
});

export default connect(mapStateToProps, bindAction)(LeftPanel);
