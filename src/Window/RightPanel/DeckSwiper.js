import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import WrapperDiv from "../../StyledComponents/WrapperDiv";
import Text from "../../StyledComponents/Text";
import Input from "../../StyledComponents/Input";
import Dropdown from "../../StyledComponents/Dropdown";
import InputGroup from "../../StyledComponents/InputGroup";
import Slider from "../../StyledComponents/Slider";
import ColorPicker from "../../StyledComponents/ColorPicker";
import AllHeader from "./AllHeader";
import { appliedTheme, changeValue } from "../../Actions/theme";

class DeckSwiper extends Component {
  render() {
    return (
      <WrapperDiv>
        <FormGroup noBorder>
          <FormRow>
            <FormCol>
              <Text header uiSize="m">
                DeckSwiper
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
          <FormRow>
            <FormCol uiSize={3}>
              <Text>Vertical Padding</Text>
            </FormCol>
            <FormCol uiSize={1}>
              <Input
                min="0"
                max="100"
                type="number"
                onChange={e =>
                  this.props.changeValue(
                    "listItemPadding",
                    parseInt(e.target.value)
                  )
                }
                value={this.props.variables.listItemPadding}
              />
            </FormCol>

            <FormCol uiSize={2}>
              <InputGroup marginLeft>
                <Slider
                  min="0"
                  max="100"
                  style={{ width: "75%" }}
                  value={this.props.variables.listItemPadding}
                  onChange={e =>
                    this.props.changeValue(
                      "listItemPadding",
                      parseInt(e.target.value)
                    )
                  }
                />
              </InputGroup>
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol uiSize={2}>
              <Text>FontSize</Text>
            </FormCol>
            <FormCol>
              <ColorPicker
                value={this.props.variables.textColor}
                onChangeColor={color =>
                  this.props.changeValue("textColor", color)
                }
              />
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
          {/* <FormRow>
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
          </FormRow> */}
          <FormRow>
            <FormCol uiSize={2}>
              <Text>Note</Text>
            </FormCol>
            <FormCol>
              <ColorPicker
                value={this.props.variables.listNoteColor}
                onChangeColor={color =>
                  this.props.changeValue("listNoteColor", color)
                }
              />
            </FormCol>
            <FormCol>
              <Input
                type="number"
                value={this.props.variables.noteFontSize}
                onChange={e =>
                  this.props.changeValue(
                    "noteFontSize",
                    parseInt(e.target.value)
                  )
                }
              />
            </FormCol>
          </FormRow>
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
        </FormGroup>

        {this.props.navigation.subPage === "Advanced" && (
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

export default connect(mapStateToProps, bindAction)(DeckSwiper);
