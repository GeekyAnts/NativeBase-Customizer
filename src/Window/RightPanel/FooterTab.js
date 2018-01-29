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

class FooterTab extends Component {
  render() {
    console.log(this.props.variables.toolbarHeight, "check");
    const heightVal = this.props.variables.toolbarHeight;
    return (
      <FormGroup noBorder>
        <FormRow>
          <FormCol>
            <Text header uiSize="m">
              FooterTab
            </Text>
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <Text>FontSize</Text>
          </FormCol>
          <FormCol>
            <Input type="number" value={this.props.variables.tabBarTextSize} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.tabBarTextColor} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Active Background Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.tabActiveBgColor} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Active Text Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.tabBarActiveTextColor} />
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

export default connect(mapStateToProps, bindAction)(FooterTab);
