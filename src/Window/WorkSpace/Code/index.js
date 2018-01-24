import * as React from "react";

import Anatomy from "../../../ReactNativeApp/screens/anatomy/index";
import * as CodeMirror from "react-codemirror";
require("codemirror/mode/javascript/javascript");

export default class extends React.Component {
  render() {
    var options = {
      lineNumbers: true
    };
    const test = Anatomy;
    console.log(test, "test");
    return <CodeMirror {...this.props} value="Test" options={options} />;
  }
}
