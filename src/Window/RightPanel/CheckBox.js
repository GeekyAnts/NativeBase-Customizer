import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import Input from "../../StyledComponents/Input";
import WrapperDiv from "../../StyledComponents/WrapperDiv";
import ColorPicker from "../../StyledComponents/ColorPicker";
import Slider from "../../StyledComponents/Slider";
import AllHeader from "./AllHeader";
import { appliedTheme, changeValue } from "../../Actions/theme";

class CheckBox extends Component {
  render() {
    return (
      <WrapperDiv>
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
                  this.props.changeValue(
                    "CheckboxRadius",
                    parseInt(e.target.value)
                  )
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
                  this.props.changeValue(
                    "CheckboxBorderWidth",
                    parseInt(e.target.value)
                  )
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
                  this.props.changeValue(
                    "CheckboxPaddingLeft",
                    parseInt(e.target.value)
                  )
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
                  this.props.changeValue(
                    "CheckboxPaddingBottom",
                    parseInt(e.target.value)
                  )
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
                  this.props.changeValue(
                    "CheckboxFontSize",
                    parseInt(e.target.value)
                  )
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
                  this.props.changeValue(
                    "CheckboxIconSize",
                    parseInt(e.target.value)
                  )
                }
              />
            </FormCol>
          </FormRow>

          {/* <FormRow>
            <FormCol>
              <Text>Margin Top</Text>
            </FormCol>
            <FormCol>
              <Input
                type="number"
                value={this.props.variables.CheckboxIconMarginTop}
                onChange={e =>
                  this.props.changeValue(
                    "CheckboxIconMarginTop",
                    parseInt(e.target.value)
                  )
                }
              />
            </FormCol>
          </FormRow> */}

          <FormRow>
            <FormCol>
              <Text>Size</Text>
            </FormCol>
            <FormCol>
              <Input
                type="number"
                value={this.props.variables.checkboxSize}
                onChange={e =>
                  this.props.changeValue(
                    "checkboxSize",
                    parseInt(e.target.value)
                  )
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
        <AllHeader />
      </WrapperDiv>
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

export default connect(mapStateToProps, bindAction)(CheckBox);
