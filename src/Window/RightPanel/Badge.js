import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import Input from "../../StyledComponents/Input";
import ColorPicker from "../../StyledComponents/ColorPicker";
import Slider from "../../StyledComponents/Slider";
import { appliedTheme, changeHeight } from "../../Actions/theme";

class Badge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newSize: this.props.variables.fontSizeBase
    };
  }
  changeHeight(val) {
    this.props.changeHeight(val);
    this.setState({ newSize: val });
  }
  render() {
    console.log(this.props.variables.fontSizeBase, "size");
    return (
      <FormGroup noBorder>
        <FormRow>
          <FormCol>
            <Text header uiSize="m">
              Badge
            </Text>
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <Text>FontSize</Text>
          </FormCol>
          <FormCol>
            <Input
              type="number"
              value={this.state.newSize}
              onChange={e => this.changeHeight(e.target.value)}
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Background Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.badgeBg} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Text Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.badgeColor} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Padding</Text>
          </FormCol>
          <FormCol>
            <Input type="number" value={this.props.variables.badgePadding} />
          </FormCol>
        </FormRow>
      </FormGroup>
    );
  }
}

function bindAction(dispatch) {
  return {
    appliedTheme: () => dispatch(appliedTheme()),
    changeHeight: val => dispatch(changeHeight(val))
  };
}

const mapStateToProps = state => ({
  variables: state.theme.variable
});

export default connect(mapStateToProps, bindAction)(Badge);
