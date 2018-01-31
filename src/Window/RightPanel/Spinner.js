import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import ColorPicker from "../../StyledComponents/ColorPicker";
import { appliedTheme, changeValue } from "../../Actions/theme";

class Spinner extends Component {
  render() {
    return (
      <FormGroup noBorder>
        <FormRow>
          <FormCol>
            <Text header uiSize="m">
              Spinner
            </Text>
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Default Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.defaultSpinnerColor}
              onChangeColor={color =>
                this.props.changeValue("defaultSpinnerColor", color)
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
              value={this.props.variables.inverseSpinnerColor}
              onChangeColor={color =>
                this.props.changeValue("inverseSpinnerColor", color)
              }
            />
          </FormCol>
        </FormRow>
      </FormGroup>
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
  variables: state.theme.variable
});

export default connect(mapStateToProps, bindAction)(Spinner);
