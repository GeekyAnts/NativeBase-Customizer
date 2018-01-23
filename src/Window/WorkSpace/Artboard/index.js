import React, { Component } from "react";
import NativeApp from "../../../ReactNativeApp/boot/setup";

// import Header from "../../../ReactNativeApp/screens/Header/";
// import Anatomy from "../../../ReactNativeApp/screens/anatomy/";
// import Toast from "../../../ReactNativeApp/screens/toast";

class Artboard extends Component {
  // appScreen() {
  //   switch (this.props.screen) {
  //     case 0:
  //       return <Anatomy />;
  //     case 1:
  //       return <Header />;
  //     default:
  //       return <Toast />;
  //   }
  // }
  render() {
    return (
      <div id="mobile-frame">
        <div class="screen" style={{ display: "flex", flex: 1, zIndex: 999 }}>
          <NativeApp screen={this.props} />
        </div>
      </div>
    );
  }
}

export default Artboard;
