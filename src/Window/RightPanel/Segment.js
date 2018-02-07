import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import WrapperDiv from "../../StyledComponents/WrapperDiv";
import ColorPicker from "../../StyledComponents/ColorPicker";
import AllHeader from "./AllHeader";
import { appliedTheme, changeValue } from "../../Actions/theme";

class Segment extends Component {
  render() {
    return (
      <WrapperDiv>
        <FormGroup noBorder>
          <FormRow>
            <FormCol>
              <Text header uiSize="m">
                Segment
              </Text>
            </FormCol>
          </FormRow>

          <FormRow>
            <FormCol>
              <Text>Background Color</Text>
            </FormCol>
            <FormCol>
              <ColorPicker
                value={this.props.variables.segmentBackgroundColor}
                onChangeColor={color =>
                  this.props.changeValue("segmentBackgroundColor", color)
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
                value={this.props.variables.segmentActiveBackgroundColor}
                onChangeColor={color =>
                  this.props.changeValue("segmentActiveBackgroundColor", color)
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
                value={this.props.variables.segmentTextColor}
                onChangeColor={color =>
                  this.props.changeValue("segmentTextColor", color)
                }
              />
            </FormCol>
          </FormRow>

          <FormRow>
            <FormCol>
              <Text>Active Text Color</Text>
            </FormCol>
            <FormCol>
              <ColorPicker
                value={this.props.variables.segmentActiveTextColor}
                onChangeColor={color =>
                  this.props.changeValue("segmentActiveTextColor", color)
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
                value={this.props.variables.segmentBorderColor}
                onChangeColor={color =>
                  this.props.changeValue("segmentBorderColor", color)
                }
              />
            </FormCol>
          </FormRow>

          {/* <FormRow>
          <FormCol>
            <Text>Active Border Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker value={this.props.variables.segmentBorderColorMain} />
          </FormCol>
        </FormRow> */}
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

export default connect(mapStateToProps, bindAction)(Segment);
