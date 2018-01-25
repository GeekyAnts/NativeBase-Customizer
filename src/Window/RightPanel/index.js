import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import WrapperDiv from "../../StyledComponents/WrapperDiv";
import Dropdown from "../../StyledComponents/Dropdown";
import Pane from "../../StyledComponents/Pane";
import Text from "../../StyledComponents/Text";
import { appliedTheme } from "../../Actions/theme";

class RightPanel extends Component {
  render() {
    console.log(this.props.variables, "var");
    return (
      <WrapperDiv uiBackground="500">
        <FormGroup>
          <FormRow>
            <FormCol uiSize={2} />
            <FormCol uiSize={3}>
              <Dropdown>
                <option value="Platform">Platform</option>
                <option value="Material">Material</option>
                <option value="Common">Common</option>
              </Dropdown>
            </FormCol>
          </FormRow>
        </FormGroup>
        <FormGroup noBorder>
          <FormRow>
            <FormCol>
              <Text header uiSize="m">
                Header
              </Text>
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol>
              <Text>FontSize</Text>
            </FormCol>
            <FormCol>
              <input type="number" value={this.props.variables.titleFontSize} />
            </FormCol>
          </FormRow>
        </FormGroup>
      </WrapperDiv>
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

export default connect(mapStateToProps, bindAction)(RightPanel);
