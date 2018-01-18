import React from "react";
import { AppRegistry } from "react-native";
import App from "./js/App";
// import SplitPane from "react-split-pane";

class Init extends React.Component {
  render() {
    return (
      <div style={{ flexDirection: "row", flex: 1, display: "flex" }}>
        <div id="mobile-frame">
          <div class="screen" style={{ display: "flex", flex: 1, zIndex: 999 }}>
            <App />
          </div>
        </div>
        <div style={{ height: 200, width: 200 }}>Tests</div>
      </div>
    );
  }
}

AppRegistry.registerComponent("Init", () => Init);
AppRegistry.runApplication("Init", {
  rootTag: document.getElementById("root")
});
