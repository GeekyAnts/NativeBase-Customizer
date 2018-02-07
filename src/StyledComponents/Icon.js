import React, { Component } from "react";
import Ionicon from "react-ionicons";

class RightPanel extends Component {
  render() {
    return <Ionicon icon={this.props.name} color={this.props.uiColor ? this.props.uiColor : "#FFF"} fontSize={this.props.uiSize ? this.props.uiSize : "22px"} {...this.props} />;
  }
}

export default RightPanel;
