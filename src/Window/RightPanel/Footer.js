import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import WrapperDiv from "../../StyledComponents/WrapperDiv";
import Input from "../../StyledComponents/Input";
import Dropdown from "../../StyledComponents/Dropdown";
import InputGroup from "../../StyledComponents/InputGroup";
import ColorPicker from "../../StyledComponents/ColorPicker";
import Slider from "../../StyledComponents/Slider";
import AllHeader from "./AllHeader";

import { appliedTheme, changeValue } from "../../Actions/theme";

class Footer extends Component {
  render() {
    const heightVal = this.props.variables.toolbarHeight;
    return (
      <WrapperDiv>
        <FormGroup noBorder>
          <FormRow>
            <FormCol>
              <Text header uiSize="m">
                Footer
              </Text>
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol uiSize={3}>
              <Text>Height</Text>
            </FormCol>
            <FormCol>
              <Input
                type="number"
                value={this.props.variables.footerHeight}
                onChange={e =>
                  this.props.changeValue(
                    "footerHeight",
                    parseInt(e.target.value)
                  )
                }
              />
            </FormCol>

            <FormCol uiSize={2}>
              <InputGroup marginLeft>
                <Slider
                  min="0"
                  max="200"
                  style={{ width: "75%" }}
                  value={this.props.variables.footerHeight}
                  onChange={e =>
                    this.props.changeValue(
                      "footerHeight",
                      parseInt(e.target.value)
                    )
                  }
                />
              </InputGroup>
            </FormCol>
          </FormRow>

          <FormRow>
            <FormCol>
              <Text>Background Color</Text>
            </FormCol>
            <FormCol>
              <ColorPicker
                value={this.props.variables.footerDefaultBg}
                onChangeColor={color =>
                  this.props.changeValue("footerDefaultBg", color)
                }
              />
            </FormCol>
          </FormRow>

          {this.props.navigation.subPage != "Icon Buttons" && (
            <FormRow>
              <FormCol uiSize={2}>
                <Text>Text</Text>
              </FormCol>
              <FormCol>
                <ColorPicker
                  value={this.props.variables.tabBarTextColor}
                  onChangeColor={color =>
                    this.props.changeValue("tabBarTextColor", color)
                  }
                />
              </FormCol>
              <FormCol>
                <Input
                  type="number"
                  value={this.props.variables.tabBarTextSize}
                  onChange={e =>
                    this.props.changeValue(
                      "tabBarTextSize",
                      parseInt(e.target.value)
                    )
                  }
                />
              </FormCol>
            </FormRow>
          )}

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

          {/* <FormRow>
            <FormCol>
              <Text>Color</Text>
            </FormCol>
            <FormCol>
              <ColorPicker
                value={this.props.variables.tabBarTextColor}
                onChangeColor={color =>
                  this.props.changeValue("tabBarTextColor", color)
                }
              />
            </FormCol>
          </FormRow> */}

          <FormRow>
            <FormCol>
              <Text>Active Background Color</Text>
            </FormCol>
            <FormCol>
              <ColorPicker
                value={this.props.variables.tabActiveBgColor}
                onChangeColor={color =>
                  this.props.changeValue("tabActiveBgColor", color)
                }
              />
            </FormCol>
          </FormRow>

          {this.props.navigation.subPage != "Icon Buttons" && (
            <FormRow>
              <FormCol>
                <Text>Active Color</Text>
              </FormCol>
              <FormCol>
                <ColorPicker
                  value={this.props.variables.tabBarActiveTextColor}
                  onChangeColor={color =>
                    this.props.changeValue("tabBarActiveTextColor", color)
                  }
                />
              </FormCol>
            </FormRow>
          )}

          {/* <FormRow>
            <FormCol uiSize={3}>
              <Text>Icon Size</Text>
            </FormCol>
            <FormCol uiSize={1}>
              <Input
                type="number"
                value={this.props.variables.iconFontSize}
                onChange={e =>
                  this.props.changeValue(
                    "iconFontSize",
                    parseInt(e.target.value)
                  )
                }
              />
            </FormCol>
            <FormCol uiSize={2}>
              <InputGroup marginLeft>
                <Slider
                  min="0"
                  max="100"
                  style={{ width: "75%" }}
                  value={this.props.variables.iconFontSize}
                  onChange={e =>
                    this.props.changeValue(
                      "iconFontSize",
                      parseInt(e.target.value)
                    )
                  }
                />
              </InputGroup>
            </FormCol>
          </FormRow> */}
          {this.props.navigation.subPage === "Badge" && (
            <FormRow>
              <FormCol>
                <Text>Default Badge</Text>
              </FormCol>
              <FormCol>
                <ColorPicker
                  value={this.props.variables.badgeBg}
                  onChangeColor={color =>
                    this.props.changeValue("badgeBg", color)
                  }
                />
              </FormCol>
            </FormRow>
          )}
          {this.props.navigation.subPage === "Badge" && (
            <FormRow>
              <FormCol>
                <Text>Success Badge</Text>
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
          )}
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
  variables: state.present.theme.variable,
  navigation: state.present.navigation
});

export default connect(mapStateToProps, bindAction)(Footer);
