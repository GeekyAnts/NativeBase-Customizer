import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import ColorPicker from "../../StyledComponents/ColorPicker";
import { appliedTheme } from "../../Actions/theme";

class Segment extends Component {
  render() {
    return (
      <FormGroup noBorder>
        <FormRow>
          <FormCol>
            <Text header uiSize="m">
              Segment
            </Text>
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Background Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.segmentBackgroundColor} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Active Background Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.segmentActiveBackgroundColor}
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Text Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.segmentTextColor} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Active Text Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.segmentActiveTextColor} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Border Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.segmentBorderColor} />
          </FormCol>
        </FormRow>

        {/* <FormRow>
          <FormCol>
            <Text>Active Border Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.segmentBorderColorMain} />
          </FormCol>
        </FormRow> */}
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

export default connect(mapStateToProps, bindAction)(Segment);
