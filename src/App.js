import React from "react";
import { render } from "react-dom";
import { AppRegistry } from "react-native";
import Setup from "./js/boot/setup";
// render(<App />, document.getElementById('root'))
AppRegistry.registerComponent("NativebaseKitchenSink", () => Setup);
AppRegistry.runApplication("NativebaseKitchenSink", {
  rootTag: document.getElementById("root")
});
