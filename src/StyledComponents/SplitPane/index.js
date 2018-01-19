import * as React from "react";
import * as SplitPane from "react-split-pane";
import "./index.css";

export default class extends React.Component {
  render() {
    return (
      <SplitPane
        {...this.props}
        resizerStyle={{
          backgroundColor: "none"
        }}
      />
    );
  }
}
