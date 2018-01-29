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
            <Input type="text" value={this.props.variables.btnFontFamily} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Disabled Button Background</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.btnDisabledBg} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Padding</Text>
          </FormCol>
          <FormCol>
            <Input type="number" value={this.props.variables.buttonPadding} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Primary Background</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.btnPrimaryBg} />
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <Text>Primary Text Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.btnPrimaryColor} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Info Background</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.btnInfoBg} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Info Text Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.btnInfoColor} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Success Background</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.btnSuccessBg} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Success Text Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.btnSuccessColor} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Danger Background</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.btnDangerBg} />
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
            <ColorPicker value={this.props.variables.btnWarningBg} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Warning Text Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.btnWarningColor} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>FontSize</Text>
          </FormCol>
          <FormCol>
            <Input type="number" value={this.props.variables.btnTextSize} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Line Height</Text>
          </FormCol>
          <FormCol>
            <Input type="number" value={this.props.variables.btnLineHeight} />
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
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Small Icon Size</Text>
          </FormCol>
          <FormCol>
            <Input type="number" value={this.props.variables.iconSizeSmall} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Large Icon Size</Text>
          </FormCol>
          <FormCol>
            <Input type="number" value={this.props.variables.iconSizeLarge} />
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

export default connect(mapStateToProps, bindAction)(Button);
