import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import ColorPicker from "../../StyledComponents/ColorPicker";
import WrapperDiv from "../../StyledComponents/WrapperDiv";
import Dropdown from "../../StyledComponents/Dropdown";
import AllHeader from "./AllHeader";
import { appliedTheme, changeValue } from "../../Actions/theme";

class StatusBar extends Component {
  render() {
    return (
      <WrapperDiv>
        <FormGroup noBorder>
          <FormRow>
            <FormCol>
              <Text header uiSize="m">
                StatusBar
              </Text>
            </FormCol>
          </FormRow>
          {this.props.choice.platform === "android" && (
            <FormRow>
              <FormCol>
                <Text>Background</Text>
              </FormCol>
              <FormCol>
                <ColorPicker
                  value={this.props.variables.statusBarColor}
                  onChangeColor={color =>
                    this.props.changeValue("statusBarColor", color)
                  }
                />
              </FormCol>
            </FormRow>
          )}
          <FormRow>
            <FormCol>
              <Text>BarStyle</Text>
            </FormCol>
            <FormCol>
              <Dropdown
                onChange={e =>
                  this.props.changeValue("iosStatusbar", e.target.value)
                }
              >
                <option
                  value="dark-content"
                  selected={
                    this.props.variables.iosStatusbar === "dark-content"
                  }
                >
                  dark-content
                </option>
                <option
                  value="light-content"
                  selected={
                    this.props.variables.iosStatusbar === "light-content"
                  }
                >
                  light-content
                </option>
              </Dropdown>
            </FormCol>
          </FormRow>
        </FormGroup>
      </WrapperDiv>
    );
  }
}

function bindAction(dispatch) {
  return {
    appliedTheme: () => dispatch(appliedTheme()),
    changeValue: (property, val) => dispatch(changeValue(property, val))
  };
}

const mapStateToProps = state => ({
  variables: state.present.theme.variable,
  choice: state.present.choice
});

export default connect(mapStateToProps, bindAction)(StatusBar);
