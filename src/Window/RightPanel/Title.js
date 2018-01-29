import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import Input from "../../StyledComponents/Input";
import ColorPicker from "../../StyledComponents/ColorPicker";
import { appliedTheme } from "../../Actions/theme";

class Title extends Component {
  render() {
    return (
      <FormGroup noBorder>
        <FormRow>
          <FormCol>
            <Text header uiSize="m">
              Title
            </Text>
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <Text>Font Family</Text>
          </FormCol>
          <FormCol>
            <Input type="text" value={this.props.variables.titleFontfamily} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>FontSize</Text>
          </FormCol>
          <FormCol>
            <Input type="number" value={this.props.variables.titleFontSize} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>SubTitle FontSize</Text>
          </FormCol>
          <FormCol>
            <Input
              type="number"
              value={this.props.variables.subTitleFontSize}
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Title Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.titleFontColor} />
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <Text>SubTitle Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.subtitleColor} />
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

export default connect(mapStateToProps, bindAction)(Title);
