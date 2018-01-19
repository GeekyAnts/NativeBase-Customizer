import React, { Component } from "react";
import Artboard from "./Artboard";
import { connect } from "react-redux";

class WorkSpace extends Component {
  render() {
    console.log(this, "state");
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* <button style={{ height: 40 }}>Prev</button> */}
        <Artboard />
        {/* <button style={{ height: 40 }}>Next</button> */}
      </div>
    );
  }
}

export default WorkSpace;
