import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import Input from "../../StyledComponents/Input";
import ColorPicker from "../../StyledComponents/ColorPicker";
import Slider from "../../StyledComponents/Slider";
import Badge from "./Badge";
import { appliedTheme, changeValue } from "../../Actions/theme";

class Footer extends Component {
  render() {
    const heightVal = this.props.variables.toolbarHeight;
    return (
      <FormGroup noBorder>
        <FormRow>
          <FormCol>
            <Text header uiSize="m">
              Footer
            </Text>
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <Text>Height</Text>
          </FormCol>
          <FormCol>
            <Input
              type="number"
              value={this.props.variables.footerHeight}
              onChange={e =>
                this.props.changeValue("footerHeight", parseInt(e.target.value))
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
              value={this.props.variables.footerDefaultBg}
              onChangeColor={color =>
                this.props.changeValue("footerDefaultBg", color)
              }
            />
          </FormCol>
        </FormRow>

        {this.props.navigation.subPage !== "Icon Buttons" && (
          <FormRow>
            <FormCol>
              <Text>FontSize</Text>
            </FormCol>
            <FormCol>
              <Input
                type="number"
                value={this.props.variables.tabBarTextSize}
                onChange={e =>
                  this.props.changeValue(
                    "tabBarTextSize",
                    parseInt(e.target.value)
                  )
                }
              />
            </FormCol>
          </FormRow>
        )}

        <FormRow>
          <FormCol>
            <Text>Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.tabBarTextColor}
              onChangeColor={color =>
                this.props.changeValue("tabBarTextColor", color)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Active Background Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.tabActiveBgColor}
              onChangeColor={color =>
                this.props.changeValue("tabActiveBgColor", color)
              }
            />
          </FormCol>
        </FormRow>

        {this.props.navigation.subPage !== "Icon Buttons" && (
          <FormRow>
            <FormCol>
              <Text>Active Text Color</Text>
            </FormCol>
            <FormCol>
              <ColorPicker
                value={this.props.variables.tabBarActiveTextColor}
                onChangeColor={color =>
                  this.props.changeValue("tabBarActiveTextColor", color)
                }
              />
            </FormCol>
          </FormRow>
        )}

        {(this.props.navigation.subPage === "Icon Buttons" ||
          this.props.navigation.subPage === "Icon & Text" ||
          this.props.navigation.subPage === "Badge") && (
          <FormRow>
            <FormCol>
              <Text>Icon Color</Text>
            </FormCol>
            <FormCol>
              <ColorPicker
                value={this.props.variables.tabBarActiveTextColor}
                onChangeColor={color =>
                  this.props.changeValue("tabBarActiveTextColor", color)
                }
              />
            </FormCol>
          </FormRow>
        )}
      </FormGroup>
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

export default connect(mapStateToProps, bindAction)(Footer);
