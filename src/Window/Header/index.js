import React, { Component } from "react";
import Ionicon from "react-ionicons";
import ejs from "ejs";
import { connect } from "react-redux";
import Pane from "../../StyledComponents/Pane";
import Icon from "../../StyledComponents/Icon";
import Col from "../../StyledComponents/Col";
import Row from "../../StyledComponents/Row";
import Button from "../../StyledComponents/Button";
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
      isMenuOpen: false
    };
    this.click = this.click.bind(this);
    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
  }

  toggle() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  close() {
    this.setState({ isMenuOpen: false });
  }

  click() {
    console.log("You clicked an item");
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

    console.log(test, "raw1");
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
              NativeBase
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
                      console.log("dropdown clicked");
                    }}
                  >
                    <OptionMenu>
                      <OptionMenuTitle>App & Variable File</OptionMenuTitle>
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
                      <OptionMenuTitle>Variable File</OptionMenuTitle>
                    </OptionMenu>
                  </Option>
                </MenuDropdown>
              </Option>
            </MenuDropdown>
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
