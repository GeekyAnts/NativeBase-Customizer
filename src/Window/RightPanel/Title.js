import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import Input from "../../StyledComponents/Input";
import Dropdown from "../../StyledComponents/Dropdown";
import ColorPicker from "../../StyledComponents/ColorPicker";
import { appliedTheme, changeValue } from "../../Actions/theme";

class Title extends Component {
  render() {
    return (
      <FormGroup noBorder>
        <FormRow>
          <FormCol>
            <Text>Title Font Family</Text>
          </FormCol>
          <FormCol>
            <Dropdown
              onChange={e =>
                this.props.changeValue("titleFontfamily", e.target.value)
              }
            >
              <option value={this.props.variables.titleFontfamily}>
                {this.props.variables.titleFontfamily}
              </option>
              <option value="Roboto">Roboto</option>
            </Dropdown>
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
  variables: state.present.theme.variable
});

export default connect(mapStateToProps, bindAction)(Title);
