import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import Input from "../../StyledComponents/Input";
import ColorPicker from "../../StyledComponents/ColorPicker";
import { appliedTheme } from "../../Actions/theme";

class InputGroup extends Component {
  render() {
    return (
      <FormGroup noBorder>
        <FormRow>
          <FormCol>
            <Text header uiSize="m">
              InputGroup
            </Text>
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <Text>Font Size</Text>
          </FormCol>
          <FormCol>
            <Input type="number" value={this.props.variables.inputFontSize} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Input Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.inputColor} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Placeholder Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.inputColorPlaceholder} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Border Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.inputBorderColor} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Success Border Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.inputSuccessBorderColor} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Error Border Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.inputErrorBorderColor} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Height</Text>
          </FormCol>
          <FormCol>
            <Input type="number" value={this.props.variables.inputHeightBase} />
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

export default connect(mapStateToProps, bindAction)(InputGroup);
