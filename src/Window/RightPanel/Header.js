import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import WrapperDiv from "../../StyledComponents/WrapperDiv";
import Input from "../../StyledComponents/Input";
import Dropdown from "../../StyledComponents/Dropdown";
import ColorPicker from "../../StyledComponents/ColorPicker";
import Slider from "../../StyledComponents/Slider";
import { appliedTheme, changeValue } from "../../Actions/theme";
import InputGroup from "../../StyledComponents/InputGroup";

class Header extends Component {
  render() {
    return (
      <WrapperDiv>
        <FormGroup noBorder>
          <FormRow>
            <FormCol>
              <Text header uiSize="m">
                Header
              </Text>
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
          {this.props.page.subPage === "SubTitle" && (
            <FormRow>
              <FormCol uiSize={2}>
                <Text>SubTitle</Text>
              </FormCol>
              <FormCol>
                <ColorPicker
                  value={this.props.variables.subtitleColor}
                  onChangeColor={color =>
                    this.props.changeValue("subtitleColor", color)
                  }
                />
              </FormCol>
              <FormCol>
                <Input
                  type="number"
                  value={this.props.variables.subTitleFontSize}
                  onChange={e =>
                    this.props.changeValue(
                      "subTitleFontSize",
                      parseInt(e.target.value)
                    )
                  }
                />
              </FormCol>
            </FormRow>
          )}
          {/* {this.props.page.subPage === "SubTitle" && (
            <FormRow>
              <FormCol>
                <Text>SubTitle Color</Text>
              </FormCol>
              <FormCol>
                <ColorPicker
                  value={this.props.variables.subtitleColor}
                  onChangeColor={color =>
                    this.props.changeValue("subtitleColor", color)
                  }
                />
              </FormCol>
            </FormRow>
          )} */}

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
          {this.props.page.subPage === "Text Button" && (
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
          )}
          {this.props.page.subPage != "Title" && (
            <FormRow>
              <FormCol uiSize={3}>
                <Text>Button Padding</Text>
              </FormCol>
              <FormCol uiSize={1}>
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
          )}

          <FormRow>
            <FormCol>
              <Text>Border Color</Text>
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
          {this.props.page.subPage != "Title" && (
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
          )}
        </FormGroup>
        {this.props.page.subPage === "Title" && (
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
              <FormCol uiSize={1}>
                <ColorPicker
                  value={this.props.variables.inverseTextColor}
                  onChangeColor={color =>
                    this.props.changeValue("inverseTextColor", color)
                  }
                />
              </FormCol>

              <FormCol uiSize={1}>
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
        )}
        {this.props.page.subPage != "Title" && (
          <FormGroup noBorder>
            <FormRow>
              <FormCol>
                <Text header uiSize="m">
                  Content
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
                    this.props.changeValue("fontFamily", e.target.value)
                  }
                >
                  <option value="System">System</option>
                  <option value="Roboto">Roboto</option>
                </Dropdown>
              </FormCol>
            </FormRow>

            <FormRow>
              <FormCol>
                <Text>Text Color</Text>
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
          </FormGroup>
        )}
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
  page: state.present.navigation
});

export default connect(mapStateToProps, bindAction)(Header);
