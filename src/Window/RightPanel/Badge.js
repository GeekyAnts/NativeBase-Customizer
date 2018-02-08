import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import WrapperDiv from "../../StyledComponents/WrapperDiv";
import Text from "../../StyledComponents/Text";
import Input from "../../StyledComponents/Input";
import ColorPicker from "../../StyledComponents/ColorPicker";
import Slider from "../../StyledComponents/Slider";
import AllHeader from "./AllHeader";
import { appliedTheme, changeValue } from "../../Actions/theme";

class Badge extends Component {
  render() {
    return (
      <WrapperDiv>
        <FormGroup noBorder>
          <FormRow>
            <FormCol>
              <Text header uiSize="m">
                Badge
              </Text>
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol>
              <Text>FontSize</Text>
            </FormCol>
            <FormCol>
              <Input
                type="number"
                value={this.props.variables.fontSizeBase}
                onChange={e =>
                  this.props.changeValue(
                    "fontSizeBase",
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
                value={this.props.variables.lineHeight}
                onChange={e =>
                  this.props.changeValue("lineHeight", parseInt(e.target.value))
                }
              />
            </FormCol>
          </FormRow>

          <FormRow>
            <FormCol>
              <Text>Background Color</Text>
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

          <FormRow>
            <FormCol>
              <Text>Text Color</Text>
            </FormCol>
            <FormCol>
              <ColorPicker
                value={this.props.variables.badgeColor}
                onChangeColor={color =>
                  this.props.changeValue("badgeColor", color)
                }
              />
            </FormCol>
          </FormRow>

          <FormRow>
            <FormCol>
              <Text>Padding</Text>
            </FormCol>
            <FormCol>
              <Input
                type="number"
                value={this.props.variables.badgePadding}
                onChange={e =>
                  this.props.changeValue(
                    "badgePadding",
                    parseInt(e.target.value)
                  )
                }
              />
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol>
              <Text>Primary</Text>
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
              <Text>Warning</Text>
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
              <Text>Info</Text>
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
              <Text>Success</Text>
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
              <Text>Danger</Text>
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

export default connect(mapStateToProps, bindAction)(Badge);
