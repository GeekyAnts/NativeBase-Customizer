import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import WrapperDiv from "../../StyledComponents/WrapperDiv";
import Text from "../../StyledComponents/Text";
import Input from "../../StyledComponents/Input";
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
          <FormRow>
            <FormCol>
              <Text>Note Color</Text>
            </FormCol>
            <FormCol>
              <ColorPicker
                value={this.props.variables.listNoteColor}
                onChangeColor={color =>
                  this.props.changeValue("listNoteColor", color)
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
  variables: state.theme.variable,
  navigation: state.navigation
});

export default connect(mapStateToProps, bindAction)(DeckSwiper);
