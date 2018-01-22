import React, { Component } from "react";
import { StyleProvider } from "native-base";
import { connect } from "react-redux";
import { appliedTheme } from "../../Actions/theme";

import AppNavigator from "../AppNavigator";
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";

class Setup extends Component {
  componentWillMount() {
    this.props.appliedTheme(variables);
  }
  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <AppNavigator />
      </StyleProvider>
    );
  }
}

function bindAction(dispatch) {
  return {
    appliedTheme: variables => dispatch(appliedTheme(variables))
  };
}

const mapStateToProps = state => ({
  variables: state.theme.variables
});

export default connect(mapStateToProps, bindAction)(Setup);
