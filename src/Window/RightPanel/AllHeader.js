import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import Input from "../../StyledComponents/Input";
import Dropdown from "../../StyledComponents/Dropdown";
import InputGroup from "../../StyledComponents/InputGroup";
import ColorPicker from "../../StyledComponents/ColorPicker";
import Slider from "../../StyledComponents/Slider";
import { appliedTheme, changeValue } from "../../Actions/theme";

class AllHeader extends Component {
  render() {
    return (
      <FormGroup noBorder>
        <FormRow>
          <FormCol>
            <Text header uiSize="m">
              Header
            </Text>
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Background Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.toolbarDefaultBg}
              onChangeColor={colorValue => {
                this.props.changeValue("toolbarDefaultBg", colorValue);
              }}
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol uiSize={3}>
            <Text>Height</Text>
          </FormCol>
          <FormCol>
            <Input
              min="0"
              max="200"
              type="number"
              onChange={e =>
                this.props.changeValue(
                  "toolbarHeight",
                  parseInt(e.target.value)
                )
              }
              value={this.props.variables.toolbarHeight}
            />
          </FormCol>
          <FormCol uiSize={2}>
            <InputGroup marginLeft>
              <Slider
                min="0"
                max="200"
                style={{ width: "75%" }}
                value={this.props.variables.toolbarHeight}
                onChange={e =>
                  this.props.changeValue(
                    "toolbarHeight",
                    parseInt(e.target.value)
                  )
                }
              />
            </InputGroup>
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Title Font Family</Text>
          </FormCol>
          <FormCol>
            <Dropdown
              onChange={e =>
                this.props.changeValue("titleFontfamily", e.target.value)
              }
            >
              <option value={this.props.variables.titleFontfamily}>
                {this.props.variables.titleFontfamily}
              </option>
              <option value="Roboto">Roboto</option>
            </Dropdown>
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol uiSize={2}>
            <Text>Title</Text>
          </FormCol>
          <FormCol uiSize={1}>
            <ColorPicker
              value={this.props.variables.titleFontColor}
              onChangeColor={color =>
                this.props.changeValue("titleFontColor", color)
              }
            />
          </FormCol>
          <FormCol uiSize={1}>
            <Input
              min="0"
              max="50"
              type="number"
              value={this.props.variables.titleFontSize}
              onChange={e =>
                this.props.changeValue(
                  "titleFontSize",
                  parseInt(e.target.value)
                )
              }
            />
          </FormCol>
        </FormRow>

        {/* <FormRow>
          <FormCol>
            <Text>Title Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.titleFontColor}
              onChangeColor={color =>
                this.props.changeValue("titleFontColor", color)
              }
            />
          </FormCol>
        </FormRow> */}

        <FormRow>
          <FormCol uiSize={3}>
            <Text>Button Padding</Text>
          </FormCol>
          <FormCol uiSize={1}>
            <Input
              min="0"
              max="100"
              type="number"
              onChange={e =>
                this.props.changeValue(
                  "buttonPadding",
                  parseInt(e.target.value)
                )
              }
              value={this.props.variables.buttonPadding}
            />
          </FormCol>

          <FormCol uiSize={2}>
            <InputGroup marginLeft>
              <Slider
                min="0"
                max="100"
                style={{ width: "75%" }}
                value={this.props.variables.buttonPadding}
                onChange={e =>
                  this.props.changeValue(
                    "buttonPadding",
                    parseInt(e.target.value)
                  )
                }
              />
            </InputGroup>
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Border</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.toolbarDefaultBorder}
              onChangeColor={colorValue => {
                this.props.changeValue("toolbarDefaultBorder", colorValue);
              }}
            />
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol uiSize={2}>
            <Text>Button Icon</Text>
          </FormCol>
          <FormCol uiSize={1}>
            <ColorPicker
              value={this.props.variables.toolbarBtnColor}
              onChangeColor={colorValue => {
                this.props.changeValue("toolbarBtnColor", colorValue);
              }}
            />
          </FormCol>
          <FormCol uiSize={1}>
            <Input
              type="number"
              value={this.props.variables.iconHeaderSize}
              onChange={e =>
                this.props.changeValue(
                  "iconHeaderSize",
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

export default connect(mapStateToProps, bindAction)(AllHeader);
