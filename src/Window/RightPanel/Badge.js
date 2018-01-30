import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import Input from "../../StyledComponents/Input";
import ColorPicker from "../../StyledComponents/ColorPicker";
import Slider from "../../StyledComponents/Slider";
import { appliedTheme, changeValue } from "../../Actions/theme";

class Badge extends Component {
  render() {
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
              value={this.props.variables.fontSizeBase}
              onChange={e =>
                this.props.changeValue("fontSizeBase", e.target.value)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Background Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.badgeBg}
              onChangeColor={color => this.props.changeValue("badgeBg", color)}
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Text Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.badgeColor}
              onChangeColor={color =>
                this.props.changeValue("badgeColor", color)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Padding</Text>
          </FormCol>
          <FormCol>
            <Input
              type="number"
              value={this.props.variables.badgePadding}
              onChange={e =>
                this.props.changeValue("badgePadding", e.target.value)
              }
            />
          </FormCol>
        </FormRow>
      </FormGroup>
    );
  }
}

function bindAction(dispatch) {
  return {
    appliedTheme: () => dispatch(appliedTheme()),
    changeValue: (property, val) => dispatch(changeValue(property, val))
  };
}

const mapStateToProps = state => ({
  variables: state.theme.variable
});

export default connect(mapStateToProps, bindAction)(Badge);
