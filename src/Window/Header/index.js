import React, { Component } from "react";
import Ionicon from "react-ionicons";
import Modal from "react-modal";
import ejs from "ejs";
import { connect } from "react-redux";
import Pane from "../../StyledComponents/Pane";
import Icon from "../../StyledComponents/Icon";
import Col from "../../StyledComponents/Col";
import Row from "../../StyledComponents/Row";
import Button from "../../StyledComponents/Button";
import ModalWindow from "../../StyledComponents/ModalWindow";
import Text from "../../StyledComponents/Text";
import {
  MenuDropdown,
  Option,
  OptionMenu,
  OptionMenuTitle
} from "../../StyledComponents/MenuDropdown";
import logo from "../../assets/logo.png";
// import template from "../../ReactNativeApp/theme/variables/template";
import { appliedTheme } from "../../Actions/theme";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newFile: null,
      modalOpen: false
    };
  }

  download(filename, text) {
    const data = {
      obj: text
    };
    const template = `import color from "color";

    import { Platform, Dimensions, PixelRatio } from "react-native";
    
    const deviceHeight = Dimensions.get("window").height;
    const deviceWidth = Dimensions.get("window").width;
    const platform = Platform.OS;
    const platformStyle = "material";
    const isIphoneX =
      platform === "ios" && deviceHeight === 812 && deviceWidth === 375;
    
    export default <%- obj -%>`;

    const test = ejs.render(template, data);
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(test)
    );
    element.setAttribute("download", filename);

    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  render() {
    const menuOptions = {
      isOpen: this.state.isMenuOpen,
      close: this.close,
      toggle: (
        <button type="button" onClick={this.toggle}>
          Click me!
        </button>
      ),
      align: "right"
    };
    return (
      <Pane uiBackground="300">
        <Row>
          <Col>
            <img src={logo} alt="Smiley face" height="57" width="49" />
            <Text uiSize="xl" style={{ paddingLeft: 15 }}>
              NativeBase Customizer
            </Text>
          </Col>
          <Col contentRight>
            {/* <Button
              active
              onClick={() =>
                this.download(
                  "variables.js",
                  JSON.stringify(this.props.variables)
                )
              }
            >
              <Icon name="ios-download-outline" />
            </Button> */}
            {/* <Button active style={{ marginLeft: 8 }}>
              <Icon name="ios-share-outline" />
            </Button> */}
            <MenuDropdown>
              <Option>
                <OptionMenu menuButton>
                  <div
                    style={{
                      width: 47,
                      height: 35,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 3,
                      borderColor: "#000",
                      borderWidth: 0.5,
                      background: "#3F3B5A"
                    }}
                  >
                    <Icon name="ios-download-outline" />
                  </div>
                </OptionMenu>
                <MenuDropdown child>
                  <Option
                    onClick={() => {
                      window.location.href =
                        "https://github.com/GeekyAnts/NativeBase-KitchenSink/archive/CRNA.zip";
                      this.setState({ modalOpen: !this.state.modalOpen });
                    }}
                  >
                    <OptionMenu>
                      <OptionMenuTitle>Download App</OptionMenuTitle>
                    </OptionMenu>
                  </Option>
                  <Option
                    onClick={() => {
                      this.download(
                        "variables.js",
                        JSON.stringify(this.props.variables)
                      );
                    }}
                  >
                    <OptionMenu>
                      <OptionMenuTitle>Download Variable File</OptionMenuTitle>
                    </OptionMenu>
                  </Option>
                </MenuDropdown>
              </Option>
            </MenuDropdown>
          </Col>
        </Row>
        <Modal
          isOpen={this.state.modalOpen}
          // onAfterOpen={afterOpenFn}
          // onRequestClose={requestCloseFn}
          // closeTimeoutMS={n}
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              justifyContent: "center"
            },
            content: {
              display: "flex",
              background: "transparent",
              border: "none",
              justifyContent: "center"
            }
          }}
          contentLabel="Modal"
        >
          <ModalWindow>
            <div style={{ marginLeft: "10%", marginRight: "10%" }}>
              <Icon
                name="md-close"
                uiSize="30"
                onClick={() =>
                  this.setState({ modalOpen: !this.state.modalOpen })
                }
                uiColor="rgba(117, 115, 134, 0.9)"
                style={{ position: "absolute", top: 10, right: 10 }}
              />
              <h2 style={{ textAlign: "center", color: "#201C3C" }}>
                Steps to run the App
              </h2>
              <ul style={{ fontSize: 18, color: "#3F3B5A" }}>
                <li>Unzip the downloaded App</li>
                <li>Download the variable file</li>
                <li>
                  Replace the content of file commonColor.js in App/src/theme
                  with the downloaded variable file
                </li>
                <li>
                  Run{" "}
                  <code
                    style={{
                      background: "rgba(117, 115, 134, 0.2)",
                      paddingLeft: 5,
                      paddingRight: 5
                    }}
                  >
                    npm install
                  </code>{" "}
                  in the App directory
                </li>
                <li>
                  Run{" "}
                  <code
                    style={{
                      background: "rgba(117, 115, 134, 0.2)",
                      paddingLeft: 5,
                      paddingRight: 5
                    }}
                  >
                    npm start
                  </code>{" "}
                </li>
              </ul>
            </div>
          </ModalWindow>
        </Modal>
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
  variables: state.present.theme.variable,
  test: state
});

export default connect(mapStateToProps, bindAction)(Header);
