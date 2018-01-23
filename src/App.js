import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";

import configureStore from "./configureStore";
import WorkSpace from "./Window/WorkSpace";
import Header from "./Window/Header";
import LeftPanel from "./Window/LeftPanel";
import RightPanel from "./Window/RightPanel";
// import NativeApp from "./ReactNativeApp/boot/setup";
import SplitPane from "./StyledComponents/SplitPane";

class App extends React.Component {
  state: {
    store: Object,
    isLoading: boolean
  };
  constructor() {
    super();
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false }))
    };
  }
  render() {
    return (
      <Provider store={this.state.store}>
        <SplitPane
          split="horizontal"
          minSize={50}
          maxSize={100}
          defaultSize={80}
          className="primary"
        >
          <Header />
          <SplitPane
            split="vertical"
            minSize={150}
            maxSize={200}
            defaultSize={200}
            className="primary"
            paneStyle={{ display: "flex" }}
          >
            <LeftPanel />
            <SplitPane
              split="vertical"
              minSize={300}
              maxSize={380}
              defaultSize={350}
              className="primary"
              primary="second"
              pane2Style={{ display: "flex" }}
              paneStyle={{ overflow: "scroll" }}
            >
              <WorkSpace />
              <RightPanel />
            </SplitPane>
          </SplitPane>
        </SplitPane>
      </Provider>
    );
  }
}

AppRegistry.registerComponent("App", () => App);
AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});
