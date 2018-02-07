import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import WrapperDiv from "../../StyledComponents/WrapperDiv";
import Input from "../../StyledComponents/Input";
import ColorPicker from "../../StyledComponents/ColorPicker";
import Slider from "../../StyledComponents/Slider";
import { appliedTheme, changeValue } from "../../Actions/theme";

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
            <FormCol>
              <Text>Title FontSize</Text>
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
          </FormRow>
          {this.props.page.subPage === "SubTitle" && (
            <FormRow>
              <FormCol>
                <Text>SubTitle FontSize</Text>
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
          {this.props.page.subPage === "SubTitle" && (
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
          )}

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
          )}

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
          {this.props.page.subPage != "Title" && (
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

            <FormRow>
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
            </FormRow>

            <FormRow>
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
                <Input
                  type="text"
                  value={this.props.variables.fontFamily}
                  onChange={e =>
                    this.props.changeValue(
                      "fontFamily",
                      parseInt(e.target.value)
                    )
                  }
                />
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
  variables: state.theme.variable,
  page: state.navigation
});

export default connect(mapStateToProps, bindAction)(Header);
