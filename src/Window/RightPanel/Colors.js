import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import ColorPicker from "../../StyledComponents/ColorPicker";
import { appliedTheme, changeValue } from "../../Actions/theme";

class Colors extends Component {
  render() {
    return (
      <FormGroup noBorder>
        <FormRow>
          <FormCol>
            <Text header uiSize="m">
              Theme Colors
            </Text>
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Primary</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.brandPrimary}
              onChangeColor={color =>
                this.props.changeValue("brandPrimary", color)
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
              value={this.props.variables.brandInfo}
              onChangeColor={color =>
                this.props.changeValue("brandInfo", color)
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
              value={this.props.variables.brandSuccess}
              onChangeColor={color =>
                this.props.changeValue("brandSuccess", color)
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
              value={this.props.variables.brandDanger}
              onChangeColor={color =>
                this.props.changeValue("brandDanger", color)
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
              value={this.props.variables.brandWarning}
              onChangeColor={color =>
                this.props.changeValue("brandWarning", color)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Dark</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.brandDark}
              onChangeColor={color =>
                this.props.changeValue("brandDark", color)
              }
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Light</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.brandLight}
              onChangeColor={color =>
                this.props.changeValue("brandLight", color)
              }
            />
          </FormCol>
        </FormRow>
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
  variables: state.theme.variable
});

export default connect(mapStateToProps, bindAction)(Colors);
