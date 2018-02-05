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

class Form extends Component {
  render() {
    return (
      <WrapperDiv>
        <FormGroup noBorder>
          <FormRow>
            <FormCol>
              <Text header uiSize="m">
                Form Inputs
              </Text>
            </FormCol>
          </FormRow>

          <FormRow>
            <FormCol>
              <Text>Border Color</Text>
            </FormCol>
            <FormCol>
              <ColorPicker
                value={this.props.variables.inputBorderColor}
                onChangeColor={color =>
                  this.props.changeValue("inputBorderColor", color)
                }
              />
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol>
              <Text>Input FontSize</Text>
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
          {(this.props.page.subPage === "Fixed" ||
            this.props.page.subPage === "Inline" ||
            this.props.page.subPage === "Stacked") && (
            <FormRow>
              <FormCol>
                <Text>Lebel Text Color</Text>
              </FormCol>
              <FormCol>
                <ColorPicker
                  value={this.props.variables.inputColorPlaceholder}
                  onChangeColor={color =>
                    this.props.changeValue("inputColorPlaceholder", color)
                  }
                />
              </FormCol>
            </FormRow>
          )}
          <FormRow>
            <FormCol>
              <Text>Input Text Color</Text>
            </FormCol>
            <FormCol>
              <ColorPicker
                value={this.props.variables.inputColor}
                onChangeColor={color =>
                  this.props.changeValue("inputColor", color)
                }
              />
            </FormCol>
          </FormRow>

          {/* <FormRow>
            <FormCol>
              <Text>Line Height</Text>
            </FormCol>
            <FormCol>
              <Input
                type="number"
                value={this.props.variables.inputLineHeight}
                onChange={e =>
                  this.props.changeValue(
                    "inputLineHeight",
                    parseInt(e.target.value)
                  )
                }
              />
            </FormCol>
          </FormRow> */}
          <FormRow>
            <FormCol>
              <Text>Height</Text>
            </FormCol>
            <FormCol>
              <Input
                type="number"
                value={this.props.variables.inputHeightBase}
                onChange={e =>
                  this.props.changeValue(
                    "inputHeightBase",
                    parseInt(e.target.value)
                  )
                }
              />
            </FormCol>
          </FormRow>
        </FormGroup>
        {(this.props.page.subPage === "Fixed" ||
          this.props.page.subPage === "Inline" ||
          this.props.page.subPage === "Floating" ||
          this.props.page.subPage === "Placeholder" ||
          this.props.page.subPage === "Stacked") && (
          <FormGroup noBorder>
            <FormRow>
              <FormCol>
                <Text header uiSize="m">
                  Button
                </Text>
              </FormCol>
            </FormRow>
            {/* <FormRow>
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
            </FormRow> */}
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
  page: state.navigation
});

export default connect(mapStateToProps, bindAction)(Form);
