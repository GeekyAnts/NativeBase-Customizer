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

class Typography extends Component {
  render() {
    return (
      <WrapperDiv>
        <FormGroup noBorder>
          <FormRow>
            <FormCol>
              <Text header uiSize="m">
                Typography
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
                  this.props.changeValue("fontFamily", parseInt(e.target.value))
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
              <Text>H1 FontSize</Text>
            </FormCol>
            <FormCol>
              <Input
                type="number"
                value={this.props.variables.fontSizeH1}
                onChange={e =>
                  this.props.changeValue("fontSizeH1", parseInt(e.target.value))
                }
              />
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol>
              <Text>H1 LineHeight</Text>
            </FormCol>
            <FormCol>
              <Input
                type="number"
                value={this.props.variables.lineHeightH1}
                onChange={e =>
                  this.props.changeValue(
                    "lineHeightH1",
                    parseInt(e.target.value)
                  )
                }
              />
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol>
              <Text>H2 FontSize</Text>
            </FormCol>
            <FormCol>
              <Input
                type="number"
                value={this.props.variables.fontSizeH2}
                onChange={e =>
                  this.props.changeValue("fontSizeH2", parseInt(e.target.value))
                }
              />
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol>
              <Text>H2 LineHeight</Text>
            </FormCol>
            <FormCol>
              <Input
                type="number"
                value={this.props.variables.lineHeightH2}
                onChange={e =>
                  this.props.changeValue(
                    "lineHeightH2",
                    parseInt(e.target.value)
                  )
                }
              />
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol>
              <Text>H3 FontSize</Text>
            </FormCol>
            <FormCol>
              <Input
                type="number"
                value={this.props.variables.fontSizeH3}
                onChange={e =>
                  this.props.changeValue("fontSizeH3", parseInt(e.target.value))
                }
              />
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol>
              <Text>H3 LineHeight</Text>
            </FormCol>
            <FormCol>
              <Input
                type="number"
                value={this.props.variables.lineHeightH3}
                onChange={e =>
                  this.props.changeValue(
                    "lineHeightH3",
                    parseInt(e.target.value)
                  )
                }
              />
            </FormCol>
          </FormRow>
          <FormRow>
            <FormCol>
              <Text>Default FontSize</Text>
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

export default connect(mapStateToProps, bindAction)(Typography);
