import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import Input from "../../StyledComponents/Input";
import ColorPicker from "../../StyledComponents/ColorPicker";
import Slider from "../../StyledComponents/Slider";
import { appliedTheme } from "../../Actions/theme";

class RadioButton extends Component {
  render() {
    return (
      <FormGroup noBorder>
        <FormRow>
          <FormCol>
            <Text header uiSize="m">
              Radio Button
            </Text>
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <Text>Size</Text>
          </FormCol>
          <FormCol>
            <Input type="number" value={this.props.variables.radioBtnSize} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Line Height</Text>
          </FormCol>
          <FormCol>
            <Input
              type="number"
              value={this.props.variables.radioBtnLineHeight}
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Active Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.radioSelectedColorAndroid}
            />
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <Text>Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.radioColor} />
          </FormCol>
        </FormRow>
      </FormGroup>
    );
  }
}

function bindAction(dispatch) {
  return {
    appliedTheme: () => dispatch(appliedTheme())
  };
}

const mapStateToProps = state => ({
  variables: state.theme.variable
});

export default connect(mapStateToProps, bindAction)(RadioButton);
