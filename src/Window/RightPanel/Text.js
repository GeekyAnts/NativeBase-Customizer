import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import Input from "../../StyledComponents/Input";
import ColorPicker from "../../StyledComponents/ColorPicker";
import { appliedTheme, changeValue } from "../../Actions/theme";

class DefaultText extends Component {
  render() {
    return (
      <FormGroup noBorder>
        <FormRow>
          <FormCol>
            <Text header uiSize="m">
              Text
            </Text>
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
            <Text>FontFamily</Text>
          </FormCol>
          <FormCol>
            <Input
              type="text"
              value={this.props.variables.fontFamily}
              onChange={e =>
                this.props.changeValue("fontFamily", parseInt(e.target.value))
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.textColor}
              onChangeColor={color =>
                this.props.changeValue("textColor", color)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Inverse Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.inverseTextColor}
              onChangeColor={color =>
                this.props.changeValue("inverseTextColor", color)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Note Font Size</Text>
          </FormCol>
          <FormCol>
            <Input
              type="number"
              value={this.props.variables.noteFontSize}
              onChange={e =>
                this.props.changeValue("noteFontSize", parseInt(e.target.value))
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
  variables: state.present.theme.variable
});

export default connect(mapStateToProps, bindAction)(DefaultText);
