import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import Dropdown from "../../StyledComponents/Dropdown";
import Input from "../../StyledComponents/Input";
import ColorPicker from "../../StyledComponents/ColorPicker";
import WrapperDiv from "../../StyledComponents/WrapperDiv";
import AllHeader from "./AllHeader";
import { appliedTheme, changeValue } from "../../Actions/theme";

class SearchBar extends Component {
  render() {
    return (
      <WrapperDiv>
        <FormGroup noBorder>
          <FormRow>
            <FormCol>
              <Text header uiSize="m">
                SearchBar
              </Text>
            </FormCol>
          </FormRow>

          <FormRow>
            <FormCol>
              <Text>Input Background</Text>
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
            <FormCol uiSize={2}>
              <Text>Icon Size</Text>
            </FormCol>
            <FormCol>
              <ColorPicker
                value={this.props.variables.dropdownLinkColor}
                onChangeColor={colorValue => {
                  this.props.changeValue("dropdownLinkColor", colorValue);
                }}
              />
            </FormCol>
            <FormCol>
              <Input
                type="number"
                value={this.props.variables.toolbarSearchIconSize}
                onChange={e =>
                  this.props.changeValue(
                    "toolbarSearchIconSize",
                    parseInt(e.target.value)
                  )
                }
              />
            </FormCol>
          </FormRow>
          {/* <FormRow>
            <FormCol>
              <Text>Icon Color</Text>
            </FormCol>
            <FormCol>
              <ColorPicker
                value={this.props.variables.dropdownLinkColor}
                onChangeColor={colorValue => {
                  this.props.changeValue("dropdownLinkColor", colorValue);
                }}
              />
            </FormCol>
          </FormRow> */}
          <FormRow>
            <FormCol uiSize={2}>
              <Text>Input</Text>
            </FormCol>
            <FormCol>
              <ColorPicker
                value={this.props.variables.inputColor}
                onChangeColor={color =>
                  this.props.changeValue("inputColor", color)
                }
              />
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
            <FormCol uiSize={2}>
              <Text>Button Text</Text>
            </FormCol>
            <FormCol>
              <ColorPicker
                value={this.props.variables.toolbarBtnTextColor}
                onChangeColor={colorValue => {
                  this.props.changeValue("toolbarBtnTextColor", colorValue);
                }}
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
              <Text>Text Color</Text>
            </FormCol>
            <FormCol>
              <ColorPicker
                value={this.props.variables.toolbarBtnTextColor}
                onChangeColor={colorValue => {
                  this.props.changeValue("toolbarBtnTextColor", colorValue);
                }}
              />
            </FormCol>
          </FormRow> */}
          {/* <FormRow>
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
        </FormRow> */}
        </FormGroup>
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
              <Dropdown
                onChange={e =>
                  this.props.changeValue("btnFontFamily", e.target.value)
                }
              >
                <option value="System">System</option>
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
              <Text>Background</Text>
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

export default connect(mapStateToProps, bindAction)(SearchBar);
