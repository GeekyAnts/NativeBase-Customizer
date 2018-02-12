import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import ColorPicker from "../../StyledComponents/ColorPicker";
import WrapperDiv from "../../StyledComponents/WrapperDiv";
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
          <FormRow>
            <FormCol>
              <Text>Inverse Color</Text>
            </FormCol>
            <FormCol>
              <ColorPicker
                value={this.props.variables.inverseStatusBarColor}
                onChangeColor={color =>
                  this.props.changeValue("inverseStatusBarColor", color)
                }
              />
            </FormCol>
          </FormRow>
        </FormGroup>
        <AllHeader />
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
  variables: state.present.theme.variable
});

export default connect(mapStateToProps, bindAction)(StatusBar);
