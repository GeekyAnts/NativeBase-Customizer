import React, { Component } from "react";
import NativeApp from "../../../ReactNativeApp/boot/setup";
import WrapperDiv from "../../../StyledComponents/WrapperDiv";

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
      <WrapperDiv id="mobile-frame">
          <NativeApp screen={this.props} />
      </WrapperDiv>
    );
  }
}

export default Artboard;
