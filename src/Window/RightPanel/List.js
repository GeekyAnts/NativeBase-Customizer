import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import Input from "../../StyledComponents/Input";
import ColorPicker from "../../StyledComponents/ColorPicker";
import { appliedTheme, changeValue } from "../../Actions/theme";

class List extends Component {
  render() {
    return (
      <FormGroup noBorder>
        <FormRow>
          <FormCol>
            <Text header uiSize="m">
              List
            </Text>
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <Text>Note FontSize</Text>
          </FormCol>
          <FormCol>
            <Input
              type="number"
              value={this.props.variables.listNoteSize}
              onChange={e =>
                this.props.changeValue("listNoteSize", parseInt(e.target.value))
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
            <Text>Background Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.listBg}
              onChangeColor={color => this.props.changeValue("listBg", color)}
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Underlay Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.listBtnUnderlayColor} />
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

        <FormRow>
          <FormCol>
            <Text>Divider Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.listDividerBg}
              onChangeColor={color =>
                this.props.changeValue("listDividerBg", color)
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

export default connect(mapStateToProps, bindAction)(List);
