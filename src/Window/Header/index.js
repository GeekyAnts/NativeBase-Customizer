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
import ButtonGroup from "../../StyledComponents/ButtonGroup";
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
import { choose, choosePlatform } from "../../Actions/choice";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newFile: null,
      modalOpen: false,
      modal2Open: false,
      downloadFile: ""
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
    return (
      <Pane uiBackground="300">
        <Row>
          <Col>
            <img src={logo} alt="Smiley face" height="57" width="49" />
            <Text uiSize="l" style={{ paddingLeft: 15, marginTop: 3 }}>
              NativeBase Customizer
            </Text>
          </Col>
          <Col contentRight>
            {/* <ButtonGroup> */}
            <Button
              leftRadius
              active={this.props.choice.option === "design"}
              height="35px"
              width="100px"
              onClick={() => this.props.choose("design")}
            >
              Design
            </Button>
            <Button
              rightRadius
              active={this.props.choice.option === "code"}
              height="35px"
              width="100px"
              onClick={() => this.props.choose("code")}
            >
              Code
            </Button>
            <Button
              width="53px"
              onClick={() => this.props.choosePlatform("ios")}
              leftRadius
              active={this.props.choice.platform === "ios"}
              style={{ marginLeft: 15 }}
            >
              <Icon name="logo-apple" fontSize="27px" />
            </Button>
            <Button
              width="53px"
              onClick={() => this.props.choosePlatform("android")}
              active={this.props.choice.platform === "android"}
              rightRadius
              style={{ marginRight: 40 }}
            >
              <Icon name="logo-android" fontSize="27px" />
            </Button>
            <Button
              leftRadius
              active={true}
              height="35px"
              width="130px"
              style={{ marginRight: 10 }}
              onClick={() =>
                this.setState({ modal2Open: !this.state.modal2Open })
              }
            >
              Known Issues
            </Button>
            {/* </ButtonGroup> */}
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
                      this.setState({
                        modalOpen: !this.state.modalOpen,
                        downloadFile: "app"
                      });
                    }}
                  >
                    <OptionMenu>
                      <OptionMenuTitle>Download App</OptionMenuTitle>
                    </OptionMenu>
                  </Option>
                  <Option
                    onClick={() => {
                      this.setState({
                        modalOpen: !this.state.modalOpen,
                        downloadFile: "variable"
                      });
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
                {this.state.downloadFile === "app" && (
                  <li>Unzip the downloaded App</li>
                )}
                <li>Download the variable file</li>
                {this.state.downloadFile === "variable" && (
                  <li>
                    Follow the customization instructions from the{" "}
                    <a
                      style={{ color: "#3F3B5A" }}
                      href="http://docs.nativebase.io/Customize.html#Customize"
                      target="_blank"
                    >
                      docs
                    </a>
                  </li>
                )}
                {this.state.downloadFile === "variable" && (
                  <li>
                    Replace the content of the ejected/used theme variable file
                    in your App with the downloaded variable file and run your
                    App
                  </li>
                )}
                {this.state.downloadFile === "app" && (
                  <li>
                    Replace the content of file commonColor.js in App/src/theme
                    with the downloaded variable file
                  </li>
                )}
                {this.state.downloadFile === "app" && (
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
                )}
                {this.state.downloadFile === "app" && (
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
                )}
              </ul>
            </div>
          </ModalWindow>
        </Modal>

        <Modal
          isOpen={this.state.modal2Open}
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
          <ModalWindow uiSize="l">
            <div style={{ marginLeft: "10%", marginRight: "10%" }}>
              <Icon
                name="md-close"
                uiSize="30"
                onClick={() =>
                  this.setState({ modal2Open: !this.state.modal2Open })
                }
                uiColor="rgba(117, 115, 134, 0.9)"
                style={{ position: "absolute", top: 10, right: 10 }}
              />
              <h2 style={{ textAlign: "center", color: "#201C3C" }}>
                Known Issues
              </h2>
              <ul style={{ fontSize: 18, color: "#3F3B5A" }}>
                <li>
                  Header height is same here for iPhone, iPhoneX and Android
                  i.e,{" "}
                  <code
                    style={{
                      background: "rgba(117, 115, 134, 0.2)",
                      paddingLeft: 5,
                      paddingRight: 5
                    }}
                  >
                    64px
                  </code>, which is for Android as per their guidelines. So you
                  will have to manually add the conditional heights for iPhone,
                  iPhoneX for now.
                </li>
                <li>
                  Scrollable Tabs preview has some issue, but will work
                  perfectly fine in a React Native app.
                </li>
                <li>
                  ActionSheet doesn't work, as React Native Web doesn't have
                  Modal support yet.
                </li>
                <li>
                  FAB animation has some issue in the preview, but will work
                  perfectly fine in a React Native app.
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
    appliedTheme: variable => dispatch(appliedTheme(variable)),
    choose: option => dispatch(choose(option)),
    choosePlatform: platform => dispatch(choosePlatform(platform))
  };
}

const mapStateToProps = state => ({
  variables: state.present.theme.variable,
  choice: state.present.choice
});

export default connect(mapStateToProps, bindAction)(Header);
