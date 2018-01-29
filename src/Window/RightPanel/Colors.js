import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import ColorPicker from "../../StyledComponents/ColorPicker";
import { appliedTheme } from "../../Actions/theme";

class Colors extends Component {
  render() {
    return (
      <FormGroup noBorder>
        <FormRow>
          <FormCol>
            <Text header uiSize="m">
              Theme Colors
            </Text>
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Primary</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.brandPrimary} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Info</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.brandInfo} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Success</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.brandSuccess} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Danger</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.brandDanger} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Warning</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.brandWarning} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Dark</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.brandDark} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Light</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.brandLight} />
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

export default connect(mapStateToProps, bindAction)(Colors);
