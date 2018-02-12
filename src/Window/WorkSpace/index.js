import React, { Component } from "react";
import Artboard from "./Artboard";
import { connect } from "react-redux";
import Ionicon from "react-ionicons";
import Code from "./Code";
import Mousetrap from "mousetrap";

import Screen from "../../StyledComponents/Screen";
import Col from "../../StyledComponents/Col";
import Button from "../../StyledComponents/Button";
import ButtonGroup from "../../StyledComponents/ButtonGroup";
import Text from "../../StyledComponents/Text";
import Icon from "../../StyledComponents/Icon";
import WrapperDiv from "../../StyledComponents/WrapperDiv";
import { nextPage, prevPage } from "../../Actions/navigation";
import { appliedTheme } from "../../Actions/theme";
import { historyUndo, historyRedo } from "../../Actions/undo";
import variables from "../../ReactNativeApp/theme/variables/material";

class WorkSpace extends Component {
  componentWillMount() {
    this.props.appliedTheme(variables);
  }
  componentDidMount() {
    Mousetrap.bind(["command+z"], this.props.historyUndo);
    Mousetrap.bind(["command+shift+x"], this.props.historyRedo);
  }
  componentWillUnmount() {
    Mousetrap.bind(["command+z"], this.props.historyUndo);
    Mousetrap.bind(["command+shift+x"], this.props.historyRedo);
  }
  render() {
    const totalPages = this.props.page.pageList.length;
    const currentPageNum = this.props.page.selected + 1;
    return (
      <Screen uiBackground="400" style={{ height: "100%" }}>
        <ButtonGroup contentLeft style={{ opacity: 0.6, alignItems: "center" }}>
          <Icon
            name="ios-arrow-back"
            fontSize="20px"
            style={{ opacity: currentPageNum <= 1 ? 0.2 : 0.7 }}
            onClick={() => this.props.prevPage()}
          />
          <Text uiSize="s">
            {currentPageNum}/{totalPages}
          </Text>
          <Icon
            name="ios-arrow-forward"
            fontSize="20px"
            style={{ opacity: currentPageNum === totalPages ? 0.2 : 0.7 }}
            onClick={() => this.props.nextPage()}
          />
        </ButtonGroup>
        {this.props.choice === "design" ? (
          <WrapperDiv style={{ paddingBottom: 25, height: "100%" }}>
            <Col
              contentCenter
              style={{
                marginTop: -25,
                marginBottom: 40,
                height: "100%"
              }}
            >
              <Button
                transparent
                disabled={currentPageNum <= 1}
                style={{ marginRight: 56 }}
                onClick={() => this.props.prevPage()}
              >
                <Icon
                  name="ios-arrow-back"
                  fontSize="46px"
                  style={{ opacity: 0.4 }}
                />
              </Button>
              <Artboard
                screen={this.props.page.selected}
                route={this.props.route}
                subRoute={this.props.page.subPage}
              />
              <Button
                transparent
                disabled={currentPageNum === totalPages}
                style={{ marginLeft: 56 }}
                onClick={() => this.props.nextPage()}
              >
                <Icon
                  name="ios-arrow-forward"
                  fontSize="46px"
                  style={{ opacity: 0.4 }}
                />
              </Button>
            </Col>
            {/* <ButtonGroup>
              <Button width="53px" active>
                <Icon name="logo-apple" fontSize="27px" />
              </Button>
              <Button width="53px" style={{ marginLeft: 8 }}>
                <Icon name="logo-android" fontSize="27px" />
              </Button>
            </ButtonGroup> */}
          </WrapperDiv>
        ) : (
          <WrapperDiv>
            <Code />
          </WrapperDiv>
        )}
      </Screen>
    );
  }
}

function bindAction(dispatch) {
  return {
    nextPage: () => dispatch(nextPage()),
    prevPage: () => dispatch(prevPage()),
    historyRedo: () => dispatch(historyRedo()),
    historyUndo: () => dispatch(historyUndo()),
    appliedTheme: variables => dispatch(appliedTheme(variables))
  };
}

const mapStateToProps = state => ({
  page: state.present.navigation,
  route: state.present.navigation.page,
  choice: state.present.choice.option,
  variables: state.present.theme
});

export default connect(mapStateToProps, bindAction)(WorkSpace);
