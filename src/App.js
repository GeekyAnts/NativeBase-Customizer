import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";

import configureStore from "./configureStore";
import NativeApp from "./ReactNativeApp/boot/setup";
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
          <div />
          <SplitPane
            split="vertical"
            minSize={120}
            maxSize={150}
            defaultSize={150}
            className="primary"
          >
            <div />
            <SplitPane
              split="vertical"
              minSize={500}
              maxSize={1000}
              defaultSize={900}
              className="primary"
              paneStyle={{ overflow: "scroll" }}
            >
              <div
                style={{
                  paddingTop: 30,
                  paddingBottom: 30,
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <div id="mobile-frame">
                  <div
                    class="screen"
                    style={{ display: "flex", flex: 1, zIndex: 999 }}
                  >
                    <NativeApp />
                  </div>
                </div>
              </div>
              <div />
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
