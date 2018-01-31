import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import Input from "../../StyledComponents/Input";
import ColorPicker from "../../StyledComponents/ColorPicker";
import { appliedTheme, changeValue } from "../../Actions/theme";

class Tabs extends Component {
  render() {
    return (
      <FormGroup noBorder>
        <FormRow>
          <FormCol>
            <Text header uiSize="m">
              Tabs
            </Text>
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Background Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.tabDefaultBg}
              onChangeColor={color =>
                this.props.changeValue("tabDefaultBg", color)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Font Size</Text>
          </FormCol>
          <FormCol>
            <Input
              type="number"
              value={this.props.variables.fontSizeBase}
              onChange={e =>
                this.props.changeValue("fontSizeBase", parseInt(e.target.value))
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Text Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.tabFontSize}
              onChangeColor={color =>
                this.props.changeValue("tabFontSize", color)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Active Text Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.topTabBarActiveTextColor}
              onChangeColor={color =>
                this.props.changeValue("topTabBarActiveTextColor", color)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Border Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.topTabBarBorderColor}
              onChangeColor={color =>
                this.props.changeValue("topTabBarBorderColor", color)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Active Border Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.topTabBarActiveBorderColor}
              onChangeColor={color =>
                this.props.changeValue("topTabBarActiveBorderColor", color)
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

export default connect(mapStateToProps, bindAction)(Tabs);
