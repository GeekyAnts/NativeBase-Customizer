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

class Button extends Component {
  render() {
    return (
      <FormGroup noBorder>
        <FormRow>
          <FormCol>
            <Text header uiSize="m">
              Button
            </Text>
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <Text>FontFamily</Text>
          </FormCol>
          <FormCol>
            <Input
              type="text"
              value={this.props.variables.btnFontFamily}
              onChange={e =>
                this.props.changeValue("btnFontFamily", e.target.value)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Disabled Button Background</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.btnDisabledBg}
              onChangeColor={color =>
                this.props.changeValue("btnDisabledBg", color)
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
              value={this.props.variables.buttonPadding}
              onChange={e =>
                this.props.changeValue("buttonPadding", e.target.value)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Primary Background</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.btnPrimaryBg}
              onChangeColor={color =>
                this.props.changeValue("btnPrimaryBg", color)
              }
            />
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <Text>Primary Text Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.btnPrimaryColor}
              onChangeColor={color =>
                this.props.changeValue("btnPrimaryColor", color)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Info Background</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.btnInfoBg}
              onChangeColor={color =>
                this.props.changeValue("btnInfoBg", color)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Info Text Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.btnInfoColor}
              onChangeColor={color =>
                this.props.changeValue("btnInfoColor", color)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Success Background</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.btnSuccessBg}
              onChangeColor={color =>
                this.props.changeValue("btnSuccessBg", color)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Success Text Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.btnSuccessColor}
              onChangeColor={color =>
                this.props.changeValue("btnSuccessColor", color)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Danger Background</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.btnDangerBg}
              onChangeColor={color =>
                this.props.changeValue("btnDangerBg", color)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Danger Text Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.btnDangerColor} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Warning Background</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.btnWarningBg}
              onChangeColor={color =>
                this.props.changeValue("btnWarningBg", color)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Warning Text Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.btnWarningColor}
              onChangeColor={color =>
                this.props.changeValue("btnWarningColor", color)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>FontSize</Text>
          </FormCol>
          <FormCol>
            <Input
              type="number"
              value={this.props.variables.btnTextSize}
              onChange={e =>
                this.props.changeValue("btnTextSize", e.target.value)
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
              value={this.props.variables.btnLineHeight}
              onChange={e =>
                this.props.changeValue("btnLineHeight", e.target.value)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Small FontSize</Text>
          </FormCol>
          <FormCol>
            <Input
              type="number"
              value={this.props.variables.btnTextSizeSmall}
              onChange={e =>
                this.props.changeValue("btnTextSizeSmall", e.target.value)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Large FontSize</Text>
          </FormCol>
          <FormCol>
            <Input
              type="number"
              value={this.props.variables.btnTextSizeLarge}
              onChange={e =>
                this.props.changeValue("btnTextSizeLarge", e.target.value)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Border Radius</Text>
          </FormCol>
          <FormCol>
            <Slider
              min="0"
              max="100"
              value={this.props.variables.borderRadiusLarge}
              onChange={e =>
                this.props.changeValue("borderRadiusLarge", e.target.value)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Small Icon Size</Text>
          </FormCol>
          <FormCol>
            <Input
              type="number"
              value={this.props.variables.iconSizeSmall}
              onChange={e =>
                this.props.changeValue("iconSizeSmall", e.target.value)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Large Icon Size</Text>
          </FormCol>
          <FormCol>
            <Input
              type="number"
              value={this.props.variables.iconSizeLarge}
              onChange={e =>
                this.props.changeValue("iconSizeLarge", e.target.value)
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

export default connect(mapStateToProps, bindAction)(Button);
