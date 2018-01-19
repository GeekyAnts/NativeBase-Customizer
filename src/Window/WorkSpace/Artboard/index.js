import React, { Component } from "react";
import NativeApp from "../../../ReactNativeApp/boot/setup";

class Artboard extends Component {
  render() {
    return (
      <div id="mobile-frame">
        <div class="screen" style={{ display: "flex", flex: 1, zIndex: 999 }}>
          <NativeApp />
        </div>
      </div>
    );
  }
}

export default Artboard;
