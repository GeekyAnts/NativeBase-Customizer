import React, { Component } from "react";
import Ionicon from "react-ionicons";
import Pane from "../../StyledComponents/Pane";
import Icon from "../../StyledComponents/Icon";
import Col from "../../StyledComponents/Col";
import Row from "../../StyledComponents/Row";
import Button from "../../StyledComponents/Button";
import Text from "../../StyledComponents/Text";
import logo from "../../assets/logo.png";

class Header extends Component {
  render() {
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
            <Button active>
              <Icon name="ios-download-outline" />
            </Button>
            <Button active style={{ marginLeft: 8 }}>
              <Icon name="ios-share-outline" />
            </Button>
            {/* <input type="file" onChange={e => console.log(e, "val")} /> */}
          </Col>
        </Row>
      </Pane>
    );
  }
}

export default Header;
