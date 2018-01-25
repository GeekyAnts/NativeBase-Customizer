import React, { Component } from "react";
import NativeApp from "../../../ReactNativeApp/boot/setup";

class Artboard extends Component {
  render() {
    return (
      <div id="mobile-frame" style={{ width: 375 }}>
        <NativeApp screen={this.props} />
      </div>
    );
  }
}

export default Artboard;
