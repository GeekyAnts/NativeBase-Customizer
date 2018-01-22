import React, { Component } from "react";
import Artboard from "./Artboard";
import { connect } from "react-redux";
import Ionicon from "react-ionicons";

import Button from "../../StyledComponents/Button";
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
          alignItems: "center",
          background: "#221f3d",
          flex: 1,
          paddingTop: 20,
          paddingBottom: 20,
          paddingLeft: 40,
          paddingRight: 40
        }}
      >
        <div style={{ display: "flex", alignItems: "center", opacity: 0.6 }}>
          <Ionicon
            icon="ios-arrow-back"
            color="#FFF"
            fontSize="20px"
            style={{ opacity: 0.4 }}
          />
          <span>1/10</span>
          <Ionicon
            icon="ios-arrow-forward"
            color="#FFF"
            fontSize="20px"
            style={{ opacity: 0.4 }}
          />
        </div>
        <div style={{ justifyContent: "center", display: "flex" }}>
          <Button style={{ paddingLeft: 30, paddingRight: 30 }}>Design</Button>
          <Button style={{ paddingLeft: 30, paddingRight: 30 }}>Code</Button>
        </div>
        {/* <button style={{ height: 40 }}>Prev</button> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40,
            marginBottom: 40
          }}
        >
          <Button style={{ background: "transparent", marginRight: 56 }}>
            <Ionicon
              icon="ios-arrow-back"
              color="#FFF"
              fontSize="46px"
              style={{ opacity: 0.4 }}
            />
          </Button>
          <Artboard />
          <Button style={{ background: "transparent", marginLeft: 56 }}>
            <Ionicon
              icon="ios-arrow-forward"
              color="#FFF"
              fontSize="46px"
              style={{ opacity: 0.4 }}
            />
          </Button>
        </div>
        <div style={{ justifyContent: "center", display: "flex" }}>
          <Button style={{ width: 53 }}>
            <Ionicon
              icon="logo-apple"
              color="#FFF"
              fontSize="27px"
              style={{ opacity: 0.4 }}
            />
          </Button>
          <Button style={{ marginLeft: 8, width: 53 }}>
            <Ionicon
              icon="logo-android"
              color="#FFF"
              fontSize="27px"
              style={{ opacity: 0.4 }}
            />
          </Button>
        </div>
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
