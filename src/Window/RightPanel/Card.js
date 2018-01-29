import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import ColorPicker from "../../StyledComponents/ColorPicker";
import { appliedTheme } from "../../Actions/theme";

class Card extends Component {
  render() {
    return (
      <FormGroup noBorder>
        <FormRow>
          <FormCol>
            <Text header uiSize="m">
              Card
            </Text>
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Background Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.cardDefaultBg} />
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <Text>Border Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.cardBorderColor} />
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

export default connect(mapStateToProps, bindAction)(Card);
