import React, { Component } from "react";
import NativeApp from "../../../ReactNativeApp/boot/setup";
import frame from "./iphone.png";

class Artboard extends Component {
  render() {
    return (
      <div style={{ width: "43vh", height: "70vh" }}>
        <NativeApp screen={this.props} />
      </div>
    );
  }
}

export default Artboard;
{
  /* <div style={{ width: "50vh" }}>
        <div style={{ width: "37vh", height: "66vh", position: "absolute" }}>
          <NativeApp screen={this.props} />
        </div>
        <img
          src={frame}
          style={{
            position: "absolute",
            width: "41vh",
            height: "70vh"
          }}
        />
      </div> */
}
