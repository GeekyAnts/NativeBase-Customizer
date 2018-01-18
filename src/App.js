import React from "react";
import { AppRegistry } from "react-native";
import App from "./js/App";
// import SplitPane from "react-split-pane";

class Init extends React.Component {
  render() {
    return (
      <div style={{ flexDirection: "row", flex: 1, display: "flex" }}>
        <div id="mobile-frame">
          <div class="top-bar" />
          <div class="sleep" />
          <div class="volume" />
          <div class="camera" />
          <div class="sensor" />
          <div class="speaker" />
          <div class="screen" style={{ display: "flex", flex: 1, zIndex: 999 }}>
            <App />
          </div>
          <div class="home" />
          <div class="bottom-bar" />
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
