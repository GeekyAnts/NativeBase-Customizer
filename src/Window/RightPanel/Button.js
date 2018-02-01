import React, { Component } from "react";
import { PixelRatio } from "react-native";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import Input from "../../StyledComponents/Input";
import WrapperDiv from "../../StyledComponents/WrapperDiv";
import ColorPicker from "../../StyledComponents/ColorPicker";
import Slider from "../../StyledComponents/Slider";
import { appliedTheme, changeValue } from "../../Actions/theme";

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
            <Input
              type="text"
              value={this.props.variables.btnFontFamily}
              onChange={e =>
                this.props.changeValue(
                  "btnFontFamily",
                  parseInt(e.target.value)
                )
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>FontSize</Text>
          </FormCol>
          <FormCol>
            <Input
              type="number"
              value={this.props.variables.btnTextSize}
              onChange={e =>
                this.props.changeValue("btnTextSize", parseInt(e.target.value))
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
            <Text>Icon & Text Color</Text>
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
            <Text>Base Border Radius</Text>
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
        </FormRow>
        {this.props.navigation.subPage === "Outline" && (
          <FormRow>
            <FormCol>
              <Text>Border Width</Text>
            </FormCol>
            <FormCol>
              <Input
                type="number"
                step="any"
                value={this.props.variables.borderWidth}
                onChange={e =>
                  this.props.changeValue(
                    "borderWidth",
                    parseInt(e.target.value)
                  )
                }
              />
            </FormCol>
          </FormRow>
        )}

        {this.props.navigation.subPage != "Outline" &&
          this.props.navigation.subPage != "Transparent" && (
            <WrapperDiv>
              <FormRow>
                <FormCol>
                  <Text>Primary Background</Text>
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
              <FormRow>
                <FormCol>
                  <Text>Primary Text Color</Text>
                </FormCol>
                <FormCol>
                  <ColorPicker
                    value={this.props.variables.btnPrimaryColor}
                    onChangeColor={color =>
                      this.props.changeValue("btnPrimaryColor", color)
                    }
                  />
                </FormCol>
              </FormRow>

              <FormRow>
                <FormCol>
                  <Text>Info Background</Text>
                </FormCol>
                <FormCol>
                  <ColorPicker
                    value={this.props.variables.btnInfoBg}
                    onChangeColor={color =>
                      this.props.changeValue("btnInfoBg", color)
                    }
                  />
                </FormCol>
              </FormRow>

              <FormRow>
                <FormCol>
                  <Text>Info Text Color</Text>
                </FormCol>
                <FormCol>
                  <ColorPicker
                    value={this.props.variables.btnInfoColor}
                    onChangeColor={color =>
                      this.props.changeValue("btnInfoColor", color)
                    }
                  />
                </FormCol>
              </FormRow>

              <FormRow>
                <FormCol>
                  <Text>Success Background</Text>
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

              <FormRow>
                <FormCol>
                  <Text>Success Text Color</Text>
                </FormCol>
                <FormCol>
                  <ColorPicker
                    value={this.props.variables.btnSuccessColor}
                    onChangeColor={color =>
                      this.props.changeValue("btnSuccessColor", color)
                    }
                  />
                </FormCol>
              </FormRow>

              <FormRow>
                <FormCol>
                  <Text>Danger Background</Text>
                </FormCol>
                <FormCol>
                  <ColorPicker
                    value={this.props.variables.btnDangerBg}
                    onChangeColor={color =>
                      this.props.changeValue("btnDangerBg", color)
                    }
                  />
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
                  <ColorPicker
                    value={this.props.variables.btnWarningBg}
                    onChangeColor={color =>
                      this.props.changeValue("btnWarningBg", color)
                    }
                  />
                </FormCol>
              </FormRow>

              <FormRow>
                <FormCol>
                  <Text>Warning Text Color</Text>
                </FormCol>
                <FormCol>
                  <ColorPicker
                    value={this.props.variables.btnWarningColor}
                    onChangeColor={color =>
                      this.props.changeValue("btnWarningColor", color)
                    }
                  />
                </FormCol>
              </FormRow>
              {this.props.navigation.subPage === "Disabled" && (
                <FormRow>
                  <FormCol>
                    <Text>Disabled Button Background</Text>
                  </FormCol>
                  <FormCol>
                    <ColorPicker
                      value={this.props.variables.btnDisabledBg}
                      onChangeColor={color =>
                        this.props.changeValue("btnDisabledBg", color)
                      }
                    />
                  </FormCol>
                </FormRow>
              )}
              {this.props.navigation.subPage === "Custom Size" && (
                <FormRow>
                  <FormCol>
                    <Text>Small FontSize</Text>
                  </FormCol>
                  <FormCol>
                    <Input
                      type="number"
                      value={this.props.variables.btnTextSizeSmall}
                      onChange={e =>
                        this.props.changeValue(
                          "btnTextSizeSmall",
                          parseInt(e.target.value)
                        )
                      }
                    />
                  </FormCol>
                </FormRow>
              )}
              {this.props.navigation.subPage === "Custom Size" && (
                <FormRow>
                  <FormCol>
                    <Text>Large FontSize</Text>
                  </FormCol>
                  <FormCol>
                    <Input
                      type="number"
                      value={this.props.variables.btnTextSizeLarge}
                      onChange={e =>
                        this.props.changeValue(
                          "btnTextSizeLarge",
                          parseInt(e.target.value)
                        )
                      }
                    />
                  </FormCol>
                </FormRow>
              )}
              {this.props.navigation.subPage === "Rounded" && (
                <FormRow>
                  <FormCol>
                    <Text>Border Radius</Text>
                  </FormCol>
                  <FormCol>
                    <Slider
                      min="0"
                      max="50"
                      value={this.props.variables.borderRadiusLarge}
                      onChange={e =>
                        this.props.changeValue(
                          "borderRadiusLarge",
                          parseInt(e.target.value)
                        )
                      }
                    />
                  </FormCol>
                </FormRow>
              )}
              {this.props.navigation.subPage === "Custom Size" && (
                <FormRow>
                  <FormCol>
                    <Text>Small Icon Size</Text>
                  </FormCol>
                  <FormCol>
                    <Input
                      type="number"
                      value={this.props.variables.iconSizeSmall}
                      onChange={e =>
                        this.props.changeValue(
                          "iconSizeSmall",
                          parseInt(e.target.value)
                        )
                      }
                    />
                  </FormCol>
                </FormRow>
              )}
              {this.props.navigation.subPage === "Custom Size" && (
                <FormRow>
                  <FormCol>
                    <Text>Large Icon Size</Text>
                  </FormCol>
                  <FormCol>
                    <Input
                      type="number"
                      value={this.props.variables.iconSizeLarge}
                      onChange={e =>
                        this.props.changeValue(
                          "iconSizeLarge",
                          parseInt(e.target.value)
                        )
                      }
                    />
                  </FormCol>
                </FormRow>
              )}
            </WrapperDiv>
          )}
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
  variables: state.theme.variable,
  navigation: state.navigation
});

export default connect(mapStateToProps, bindAction)(Button);
