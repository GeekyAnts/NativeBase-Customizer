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

class Header extends Component {
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
            <Text>FontSize</Text>
          </FormCol>
          <FormCol>
            <Input
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
          <FormCol>
            <Text>Height</Text>
          </FormCol>
          <FormCol>
            <Input
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
        </FormRow>
        <FormRow>
          <FormCol>
            <Text>Button Text Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.toolbarBtnTextColor}
              onChangeColor={colorValue => {
                this.props.changeValue("toolbarBtnTextColor", colorValue);
              }}
            />
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <Text>Button Padding</Text>
          </FormCol>
          <FormCol>
            <Input
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
          <FormCol>
            <Text>Button Icon Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.toolbarBtnColor}
              onChangeColor={colorValue => {
                this.props.changeValue("toolbarBtnColor", colorValue);
              }}
            />
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <Text>Search Icon</Text>
          </FormCol>
          <FormCol>
            <Input
              type="number"
              onChange={e =>
                this.props.changeValue(
                  "toolbarSearchIconSize",
                  parseInt(e.target.value)
                )
              }
              value={this.props.variables.toolbarSearchIconSize}
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Input Bg</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.toolbarInputColor}
              onChangeColor={colorValue => {
                this.props.changeValue("toolbarInputColor", colorValue);
              }}
            />
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <Text>SearchBar Height</Text>
          </FormCol>
          <FormCol>
            <Input
              type="number"
              value={this.props.variables.searchBarHeight}
              onChange={e =>
                this.props.changeValue(
                  "searchBarHeight",
                  parseInt(e.target.value)
                )
              }
            />
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <Text>SearchBar Input Height</Text>
          </FormCol>
          <FormCol>
            <Input
              type="number"
              onChange={e =>
                this.props.changeValue(
                  "searchBarInputHeight",
                  parseInt(e.target.value)
                )
              }
              value={this.props.variables.searchBarInputHeight}
            />
          </FormCol>
        </FormRow>
        {/* <FormRow>
          <FormCol>
            <Text>Slider</Text>
          </FormCol>
          <FormCol>
            <Slider min="0" max="100" />
          </FormCol>
        </FormRow> */}
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

export default connect(mapStateToProps, bindAction)(Header);
