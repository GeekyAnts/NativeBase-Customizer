import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import Input from "../../StyledComponents/Input";
import ColorPicker from "../../StyledComponents/ColorPicker";
import WrapperDiv from "../../StyledComponents/WrapperDiv";
import AllHeader from "./AllHeader";
import { appliedTheme, changeValue } from "../../Actions/theme";

class ListSwipe extends Component {
  render() {
    return (
      <WrapperDiv>
        <FormGroup noBorder>
          <FormRow>
            <FormCol>
              <Text header uiSize="m">
                List Swiper
              </Text>
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol>
              <Text>Font Size</Text>
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
              <Text>FontFamily</Text>
            </FormCol>
            <FormCol>
              <Input
                type="text"
                value={this.props.variables.fontFamily}
                onChange={e =>
                  this.props.changeValue("fontFamily", parseInt(e.target.value))
                }
              />
            </FormCol>
          </FormRow>

          <FormRow>
            <FormCol>
              <Text>Color</Text>
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
              <Text>Icon Color</Text>
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
              <Text>Padding</Text>
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
              <Text>Border Color</Text>
            </FormCol>
            <FormCol>
              <ColorPicker
                value={this.props.variables.listBorderColor}
                onChangeColor={color =>
                  this.props.changeValue("listBorderColor", color)
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
  variables: state.theme.variable
});

export default connect(mapStateToProps, bindAction)(ListSwipe);
