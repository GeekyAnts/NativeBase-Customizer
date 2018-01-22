import React, { Component } from "react";
import Ionicon from "react-ionicons";
import Pane from "../../StyledComponents/Pane";
import Button from "../../StyledComponents/Button";
import logo from "../../assets/logo.png";

class Header extends Component {
  render() {
    return (
      <Pane style={{ background: "#252143", flex: 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            paddingLeft: 35,
            paddingRight: 35
          }}
        >
          <div style={{ alignItems: "center", display: "flex" }}>
            <img src={logo} alt="Smiley face" height="57" width="49" />
            <h2 style={{ fontWeight: "100", paddingLeft: 15 }}>NativeBase</h2>
          </div>
          <div>
            <Button style={{ width: 47 }}>
              <Ionicon
                icon="ios-download-outline"
                color="#FFF"
                fontSize="22px"
              />
            </Button>
            <Button style={{ marginLeft: 8, width: 47 }}>
              <Ionicon icon="ios-share-outline" color="#FFF" fontSize="22px" />
            </Button>
          </div>
        </div>
      </Pane>
    );
  }
}

export default Header;
