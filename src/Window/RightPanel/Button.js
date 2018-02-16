import React, { Component } from "react";
import { PixelRatio } from "react-native";
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

class Button extends Component {
  render() {
    return (
      <WrapperDiv>
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

          {this.props.navigation.subPage != "Transparent" &&
            this.props.navigation.subPage != "Outline" &&
            this.props.navigation.subPage != "Disabled" && (
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
            )}
          {this.props.navigation.subPage != "Transparent" &&
            this.props.navigation.subPage != "Outline" && (
              <FormRow>
                <FormCol>
                  <Text>Inverse Text Color</Text>
                </FormCol>
                <FormCol>
                  <ColorPicker
                    value={this.props.variables.brandDark}
                    onChangeColor={color =>
                      this.props.changeValue("brandDark", color)
                    }
                  />
                </FormCol>
              </FormRow>
            )}
          {this.props.navigation.subPage != "Rounded" &&
            this.props.navigation.subPage != "Transparent" &&
            this.props.navigation.subPage != "Full" && (
              <FormRow>
                <FormCol uiSize={3}>
                  <Text>Base Border Radius</Text>
                </FormCol>
                <FormCol uiSize={1}>
                  <Input
                    type="number"
                    step="any"
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
                      style={{ Width: "75%" }}
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
            )}
          {this.props.navigation.subPage === "Outline" &&
            this.props.navigation.subPage === "Icon Button" && (
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
          {this.props.navigation.subPage === "Rounded" &&
            this.props.navigation.subPage === "Icon Button" && (
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

          {this.props.navigation.subPage != "Outline" &&
            this.props.navigation.subPage != "Transparent" && (
              <WrapperDiv>
                {/* {this.props.navigation.subPage === "Custom Size" && (
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
                )} */}

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
              </WrapperDiv>
            )}
          {this.props.navigation.subPage != "Transparent" &&
            this.props.navigation.subPage != "Disabled" && (
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
                    <Text>Light Background</Text>
                  </FormCol>
                  <FormCol>
                    <ColorPicker
                      value={this.props.variables.brandLight}
                      onChangeColor={color =>
                        this.props.changeValue("brandLight", color)
                      }
                    />
                  </FormCol>
                </FormRow>
                <FormRow>
                  <FormCol>
                    <Text>Dark Background</Text>
                  </FormCol>
                  <FormCol>
                    <ColorPicker
                      value={this.props.variables.brandDark}
                      onChangeColor={color =>
                        this.props.changeValue("brandDark", color)
                      }
                    />
                  </FormCol>
                </FormRow>
              </WrapperDiv>
            )}
          {this.props.navigation.subPage === "Transparent" && (
            <WrapperDiv>
              <FormRow>
                <FormCol>
                  <Text>Primary Color</Text>
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
                  <Text>Info Color</Text>
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
                  <Text>Success Color</Text>
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
                  <Text>Danger Color</Text>
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
                  <Text>Warning Color</Text>
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
                  <Text>Light Color</Text>
                </FormCol>
                <FormCol>
                  <ColorPicker
                    value={this.props.variables.brandLight}
                    onChangeColor={color =>
                      this.props.changeValue("brandLight", color)
                    }
                  />
                </FormCol>
              </FormRow>

              <FormRow>
                <FormCol>
                  <Text>Dark Color</Text>
                </FormCol>
                <FormCol>
                  <ColorPicker
                    value={this.props.variables.brandDark}
                    onChangeColor={color =>
                      this.props.changeValue("brandDark", color)
                    }
                  />
                </FormCol>
              </FormRow>
            </WrapperDiv>
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

export default connect(mapStateToProps, bindAction)(Button);
