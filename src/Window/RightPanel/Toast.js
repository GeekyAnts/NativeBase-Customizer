import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import Input from "../../StyledComponents/Input";
import Dropdown from "../../StyledComponents/Dropdown";
import InputGroup from "../../StyledComponents/InputGroup";
import WrapperDiv from "../../StyledComponents/WrapperDiv";
import ColorPicker from "../../StyledComponents/ColorPicker";
import Slider from "../../StyledComponents/Slider";
import AllHeader from "./AllHeader";
import { appliedTheme, changeValue } from "../../Actions/theme";

class Toast extends Component {
  render() {
    return (
      <WrapperDiv>
        <FormGroup noBorder>
          <FormRow>
            <FormCol>
              <Text header uiSize="m">
                Toast Button
              </Text>
            </FormCol>
          </FormRow>

          <FormRow>
            <FormCol>
              <Text>FontFamily</Text>
            </FormCol>
            <FormCol>
              <Dropdown
                onChange={e =>
                  this.props.changeValue("btnFontFamily", e.target.value)
                }
              >
                <option value={this.props.variables.btnFontFamily}>
                  {this.props.variables.btnFontFamily}
                </option>
                <option value="Roboto">Roboto</option>
              </Dropdown>
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol uiSize={2}>
              <Text>Text</Text>
            </FormCol>
            <FormCol>
              <ColorPicker
                value={this.props.variables.inverseTextColor}
                onChangeColor={color =>
                  this.props.changeValue("inverseTextColor", color)
                }
              />
            </FormCol>
            <FormCol>
              <Input
                type="number"
                value={Math.round(this.props.variables.btnTextSize)}
                onChange={e =>
                  this.props.changeValue(
                    "btnTextSize",
                    parseInt(e.target.value)
                  )
                }
              />
            </FormCol>
          </FormRow>
          {/* <FormRow>
            <FormCol>
              <Text>FontSize</Text>
            </FormCol>
            <FormCol>
              <Input
                type="number"
                value={Math.round(this.props.variables.btnTextSize)}
                onChange={e =>
                  this.props.changeValue(
                    "btnTextSize",
                    parseInt(e.target.value)
                  )
                }
              />
            </FormCol>
          </FormRow> */}

          <FormRow>
            <FormCol>
              <Text>Line Height</Text>
            </FormCol>
            <FormCol>
              <Input
                type="number"
                value={this.props.variables.btnLineHeight}
                onChange={e =>
                  this.props.changeValue(
                    "btnLineHeight",
                    parseInt(e.target.value)
                  )
                }
              />
            </FormCol>
          </FormRow>

          <FormRow>
            <FormCol>
              <Text>Button Background</Text>
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

          {/* <FormRow>
            <FormCol>
              <Text>Text Color</Text>
            </FormCol>
            <FormCol>
              <ColorPicker
                value={this.props.variables.inverseTextColor}
                onChangeColor={color =>
                  this.props.changeValue("inverseTextColor", color)
                }
              />
            </FormCol>
          </FormRow> */}

          {/* <FormRow>
            <FormCol>
              <Text>Border Radius</Text>
            </FormCol>
            <FormCol>
              <Slider
                min="0"
                max="50"
                value={this.props.variables.borderRadiusBase}
                onChange={e =>
                  this.props.changeValue(
                    "borderRadiusBase",
                    parseInt(e.target.value)
                  )
                }
              />
            </FormCol>
          </FormRow> */}
          <FormRow>
            <FormCol uiSize={3}>
              <Text>Border Radius</Text>
            </FormCol>
            <FormCol uiSize={1}>
              <Input
                min="0"
                max="50"
                type="number"
                value={this.props.variables.borderRadiusBase}
                onChange={e =>
                  this.props.changeValue(
                    "borderRadiusBase",
                    parseInt(e.target.value)
                  )
                }
              />
            </FormCol>
            <FormCol uiSize={2}>
              <InputGroup marginLeft>
                <Slider
                  min="0"
                  max="50"
                  style={{ width: "75%" }}
                  value={this.props.variables.borderRadiusBase}
                  onChange={e =>
                    this.props.changeValue(
                      "borderRadiusBase",
                      parseInt(e.target.value)
                    )
                  }
                />
              </InputGroup>
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

export default connect(mapStateToProps, bindAction)(Toast);
