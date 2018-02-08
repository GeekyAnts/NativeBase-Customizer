import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import Input from "../../StyledComponents/Input";
import ColorPicker from "../../StyledComponents/ColorPicker";
import { appliedTheme, changeValue } from "../../Actions/theme";

class InputGroup extends Component {
  render() {
    return (
      <FormGroup noBorder>
        <FormRow>
          <FormCol>
            <Text header uiSize="m">
              InputGroup
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
              value={this.props.variables.inputFontSize}
              onChange={e =>
                this.props.changeValue(
                  "inputFontSize",
                  parseInt(e.target.value)
                )
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Input Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.inputColor}
              onChangeColor={color =>
                this.props.changeValue("inputColor", color)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Placeholder Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.inputColorPlaceholder}
              onChangeColor={color =>
                this.props.changeValue("inputColorPlaceholder", color)
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
              value={this.props.variables.inputBorderColor}
              onChangeColor={color =>
                this.props.changeValue("inputBorderColor", color)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Success Border Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.inputSuccessBorderColor}
              onChangeColor={color =>
                this.props.changeValue("inputSuccessBorderColor", color)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Error Border Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.inputErrorBorderColor}
              onChangeColor={color =>
                this.props.changeValue("inputErrorBorderColor", color)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Height</Text>
          </FormCol>
          <FormCol>
            <Input
              type="number"
              value={this.props.variables.inputHeightBase}
              onChange={e =>
                this.props.changeValue(
                  "inputHeightBase",
                  parseInt(e.target.value)
                )
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

export default connect(mapStateToProps, bindAction)(InputGroup);
