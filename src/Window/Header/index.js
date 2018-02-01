import React, { Component } from "react";
import Ionicon from "react-ionicons";

import { connect } from "react-redux";
import Pane from "../../StyledComponents/Pane";
import Icon from "../../StyledComponents/Icon";
import Col from "../../StyledComponents/Col";
import Row from "../../StyledComponents/Row";
import Button from "../../StyledComponents/Button";
import Text from "../../StyledComponents/Text";
import logo from "../../assets/logo.png";
import someFile from "../../ReactNativeApp/theme/variables/material";
import { appliedTheme } from "../../Actions/theme";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newFile: null
    };
  }
  download(filename, text) {
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }
  // readBlob(newFile) {
  //   var files = newFile;

  //   var file = files[0];
  //   var start = 0;
  //   var stop = file.size - 1;

  //   var reader = new FileReader();
  //   var newVariables = null;

  //   // If we use onloadend, we need to check the readyState.
  //   const that = this;
  //   reader.onloadend = function(evt) {
  //     if (evt.target.readyState == FileReader.DONE) {
  //       newVariables = evt.target.result;
  //       var n = newVariables.search("export default {");
  //       var str = "export default {";
  //       var len = str.length;
  //       var res = newVariables.slice(n + (len - 1), newVariables.length);
  //       // var some = JSON.parse(res);
  //       console.log(res, "upload");

  //       // that.props.appliedTheme(newVariables);
  //     }
  //   };

  //   var blob = file.slice(start, stop + 1);
  //   reader.readAsBinaryString(blob);
  // }
  render() {
    console.log(this.props.variables, "var");
    return (
      <Pane uiBackground="300">
        <Row>
          <Col>
            <img src={logo} alt="Smiley face" height="57" width="49" />
            <Text uiSize="xl" style={{ paddingLeft: 15 }}>
              NativeBase
            </Text>
          </Col>
          <Col contentRight>
            <Button
              active
              onClick={() =>
                this.download(
                  "variables.js",
                  JSON.stringify(this.props.variables)
                )
              }
            >
              <Icon name="ios-download-outline" />
            </Button>
            {/* <Button active style={{ marginLeft: 8 }}>
              <Icon name="ios-share-outline" />
            </Button> */}
          </Col>
        </Row>
      </Pane>
    );
  }
}

function bindAction(dispatch) {
  return {
    appliedTheme: variable => dispatch(appliedTheme(variable))
  };
}

const mapStateToProps = state => ({
  variables: state.theme.variable
});

export default connect(mapStateToProps, bindAction)(Header);
