import React, { Component } from "react";
import Scrollbars from "react-custom-scrollbars";

class ScrollBar extends Component {
  render() {
    return (
      <Scrollbars
        renderThumbVertical={({ style, ...props }) => (
          <div
            {...props}
            style={{
              position: "relative",
              display: "block",
              borderWidth: 1,
              borderColor: "rgba(255,255,255,0.2)",
              borderStyle: "solid",
              borderRadius: 4,
              width: "100%",
              cursor: "pointer",
              background: "rgba(0,0,0,0.4)"
            }}
          />
        )}
        {...this.props}
      >
        {this.props.children}
      </Scrollbars>
    );
  }
}

export default ScrollBar;
