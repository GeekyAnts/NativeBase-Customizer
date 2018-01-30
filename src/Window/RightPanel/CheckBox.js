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

class CheckBox extends Component {
  render() {
    return (
      <FormGroup noBorder>
        <FormRow>
          <FormCol>
            <Text header uiSize="m">
              CheckBox
            </Text>
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <Text>Radius</Text>
          </FormCol>
          <FormCol>
            <Slider
              min="0"
              max="100"
              value={this.props.variables.CheckboxRadius}
              onChange={e =>
                this.props.changeValue("CheckboxRadius", e.target.value)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Border Width</Text>
          </FormCol>
          <FormCol>
            <Input
              type="number"
              value={this.props.variables.CheckboxBorderWidth}
              onChange={e =>
                this.props.changeValue("CheckboxBorderWidth", e.target.value)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Padding Left</Text>
          </FormCol>
          <FormCol>
            <Input
              type="number"
              value={this.props.variables.CheckboxPaddingLeft}
              onChange={e =>
                this.props.changeValue("CheckboxPaddingLeft", e.target.value)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Padding Bottom</Text>
          </FormCol>
          <FormCol>
            <Input
              type="number"
              value={this.props.variables.CheckboxPaddingBottom}
              onChange={e =>
                this.props.changeValue("CheckboxPaddingBottom", e.target.value)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Icon Size</Text>
          </FormCol>
          <FormCol>
            <Input
              type="number"
              value={this.props.variables.CheckboxFontSize}
              onChange={e =>
                this.props.changeValue("CheckboxFontSize", e.target.value)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Line Height</Text>
          </FormCol>
          <FormCol>
            <Input
              type="number"
              value={this.props.variables.CheckboxIconSize}
              onChange={e =>
                this.props.changeValue("CheckboxIconSize", e.target.value)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Margin Top</Text>
          </FormCol>
          <FormCol>
            <Input
              type="number"
              value={this.props.variables.CheckboxIconMarginTop}
              onChange={e =>
                this.props.changeValue("CheckboxIconMarginTop", e.target.value)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Size</Text>
          </FormCol>
          <FormCol>
            <Input
              type="number"
              value={this.props.variables.checkboxSize}
              onChange={e =>
                this.props.changeValue("checkboxSize", e.target.value)
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
              value={this.props.variables.checkboxBgColor}
              onChangeColor={color =>
                this.props.changeValue("checkboxBgColor", color)
              }
            />
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <Text>Icon Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.checkboxTickColor}
              onChangeColor={color =>
                this.props.changeValue("checkboxTickColor", color)
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

export default connect(mapStateToProps, bindAction)(CheckBox);
