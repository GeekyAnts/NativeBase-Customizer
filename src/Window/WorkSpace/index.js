import React, { Component } from "react";
import Artboard from "./Artboard";
import { connect } from "react-redux";
import { newPage } from "../../Actions/navigation";

class WorkSpace extends Component {
  componentWillMount() {
    this.props.newPage("Anatomy");
  }
  render() {
    console.log(this.props.page, "state");
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "#221f3d",
          flex: 1,
          justifyContent: "center",
          padding: 30
        }}
      >
        {/* <button style={{ height: 40 }}>Prev</button> */}
        <Artboard />
        {/* <button style={{ height: 40 }}>Next</button> */}
      </div>
    );
  }
}

function bindAction(dispatch) {
  return {
    newPage: page => dispatch(newPage(page))
  };
}

const mapStateToProps = state => ({
  page: state
});

export default connect(mapStateToProps, bindAction)(WorkSpace);
