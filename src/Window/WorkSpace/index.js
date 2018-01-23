import React, { Component } from "react";
import Artboard from "./Artboard";
import { connect } from "react-redux";
import Ionicon from "react-ionicons";

import Button from "../../StyledComponents/Button";
import Text from "../../StyledComponents/Text";
import { nextPage, prevPage } from "../../Actions/navigation";

class WorkSpace extends Component {
  render() {
    const totalPages = this.props.page.pageList.length;
    const currentPageNum = this.props.page.selected + 1;
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
          <span>
            {currentPageNum}/{totalPages}
          </span>
          <Ionicon
            icon="ios-arrow-forward"
            color="#FFF"
            fontSize="20px"
            style={{ opacity: 0.4 }}
          />
        </div>
        <div style={{ justifyContent: "center", display: "flex" }}>
          <Button width="100px">Design</Button>
          <Button width="100px">Code</Button>
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
              onClick={() => this.props.prevPage()}
            />
          </Button>
          <Artboard
            screen={this.props.page.selected}
            route={this.props.route}
          />
          <Button style={{ background: "transparent", marginLeft: 56 }}>
            <Ionicon
              icon="ios-arrow-forward"
              color="#FFF"
              fontSize="46px"
              style={{ opacity: 0.4 }}
              onClick={() => this.props.nextPage()}
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
    nextPage: () => dispatch(nextPage()),
    prevPage: () => dispatch(prevPage())
  };
}

const mapStateToProps = state => ({
  page: state.navigation,
  route: state.navigation.page,
  test: state
});

export default connect(mapStateToProps, bindAction)(WorkSpace);
