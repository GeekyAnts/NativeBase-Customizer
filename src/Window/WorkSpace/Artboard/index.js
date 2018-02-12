import React, { Component } from "react";
import { Platform } from "react-native";
import { connect } from "react-redux";
import NativeApp from "../../../ReactNativeApp/boot/setup";
import IOSStatusBar from "../../../StyledComponents/StatusBars/IOSStatusBar";
import AndroidStatusBar from "../../../StyledComponents/StatusBars/AndroidStatusBar";

class Artboard extends Component {
  render() {
    Platform.OS = this.props.choice.platform;
    return (
      <div
        style={{
          width: this.props.choice.platform === "ios" ? 414 : 412,
          height: this.props.choice.platform === "ios" ? 736 : 732,
          overflow: "hidden",
          zoom: this.props.choice.platform === "ios" ? 0.8 : 0.8
        }}
      >
        <div>
          {this.props.choice.platform === "ios" ? (
            <IOSStatusBar width={414} color="#FFF" />
          ) : (
            <AndroidStatusBar
              width={412}
              backgroundColor={this.props.variables.statusBarColor}
              color={this.props.variables.iosStatusbar}
            />
          )}
          <div
            style={{
              paddingTop: this.props.choice.platform === "android" ? 16 : 0,
              width: this.props.choice.platform === "ios" ? 414 : 412,
              height: this.props.choice.platform === "ios" ? 736 : 732
            }}
          >
            <NativeApp screen={this.props} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  choice: state.present.choice,
  variables: state.present.theme.variable
});

export default connect(mapStateToProps, null)(Artboard);
