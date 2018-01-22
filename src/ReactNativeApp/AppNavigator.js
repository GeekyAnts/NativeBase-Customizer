import React from "react";
import { connect } from "react-redux";
import App from "./App";
import { addNavigationHelpers } from "react-navigation";

const AppWithNavigationState = ({ dispatch, nav }) => (
  <App navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
