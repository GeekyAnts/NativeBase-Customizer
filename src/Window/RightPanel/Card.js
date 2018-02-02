import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import WrapperDiv from "../../StyledComponents/WrapperDiv";
import Text from "../../StyledComponents/Text";
import Input from "../../StyledComponents/Input";
import ColorPicker from "../../StyledComponents/ColorPicker";
import AllHeader from "./AllHeader";
import { appliedTheme, changeValue } from "../../Actions/theme";

class Card extends Component {
  render() {
    return (
      <WrapperDiv>
        <FormGroup noBorder>
          <FormRow>
            <FormCol>
              <Text header uiSize="m">
                Card
              </Text>
            </FormCol>
          </FormRow>

          <FormRow>
            <FormCol>
              <Text>Background Color</Text>
            </FormCol>
            <FormCol>
              <ColorPicker
                value={this.props.variables.cardDefaultBg}
                onChangeColor={color =>
                  this.props.changeValue("cardDefaultBg", color)
                }
              />
            </FormCol>
          </FormRow>
          {this.props.navigation.subPage === "Card List" && (
            <FormRow>
              <FormCol>
                <Text>Border Color</Text>
              </FormCol>
              <FormCol>
                <ColorPicker
                  value={this.props.variables.cardBorderColor}
                  onChangeColor={color =>
                    this.props.changeValue("cardBorderColor", color)
                  }
                />
              </FormCol>
            </FormRow>
          )}
          <FormRow>
            <FormCol>
              <Text>Vertical Padding</Text>
            </FormCol>
            <FormCol>
              <Input
                type="number"
                value={this.props.variables.listItemPadding}
                onChange={e =>
                  this.props.changeValue(
                    "listItemPadding",
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
                value={this.props.variables.DefaultFontSize}
                onChange={e =>
                  this.props.changeValue(
                    "DefaultFontSize",
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
          {this.props.navigation.subPage === "Card Image" &&
            this.props.navigation.subPage === "Card Showcase" && (
              <FormRow>
                <FormCol>
                  <Text>Note Color</Text>
                </FormCol>
                <FormCol>
                  <Input
                    type="number"
                    value={this.props.variables.listNoteColor}
                    onChange={e =>
                      this.props.changeValue(
                        "listNoteColor",
                        parseInt(e.target.value)
                      )
                    }
                  />
                </FormCol>
              </FormRow>
            )}
          {this.props.navigation.subPage != "Basic" &&
            this.props.navigation.subPage != "Header & Footer" && (
              <FormRow>
                <FormCol>
                  <Text>Icon Size</Text>
                </FormCol>
                <FormCol>
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
              </FormRow>
            )}
          {this.props.navigation.subPage != "Basic" &&
            this.props.navigation.subPage != "Header & Footer" && (
              <FormRow>
                <FormCol>
                  <Text>Card Header Text</Text>
                </FormCol>
                <FormCol>
                  <ColorPicker
                    value={this.props.variables.sTabBarActiveTextColor}
                    onChangeColor={color =>
                      this.props.changeValue("sTabBarActiveTextColor", color)
                    }
                  />
                </FormCol>
              </FormRow>
            )}
          {/* <FormRow>
          <FormCol>
            <Text>Border Width</Text>
          </FormCol>
          <FormCol>
            <Input
              type="number"
              value={this.props.variables.borderWidth}
              onChange={e =>
                this.props.changeValue("borderWidth", parseInt(e.target.value))
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
  variables: state.theme.variable,
  navigation: state.navigation
});

export default connect(mapStateToProps, bindAction)(Card);
