import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import Input from "../../StyledComponents/Input";
import ColorPicker from "../../StyledComponents/ColorPicker";
import { appliedTheme } from "../../Actions/theme";

class DefaultText extends Component {
  render() {
    return (
      <FormGroup noBorder>
        <FormRow>
          <FormCol>
            <Text header uiSize="m">
              Text
            </Text>
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <Text>Font Size</Text>
          </FormCol>
          <FormCol>
            <Input type="number" value={this.props.variables.fontSizeBase} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>FontFamily</Text>
          </FormCol>
          <FormCol>
            <Input type="text" value={this.props.variables.fontFamily} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.textColor} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Inverse Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.inverseTextColor} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Note Font Size</Text>
          </FormCol>
          <FormCol>
            <Input type="number" value={this.props.variables.noteFontSize} />
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

export default connect(mapStateToProps, bindAction)(DefaultText);
