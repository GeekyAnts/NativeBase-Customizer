import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import Text from "../../StyledComponents/Text";
import Input from "../../StyledComponents/Input";
import ColorPicker from "../../StyledComponents/ColorPicker";
import Slider from "../../StyledComponents/Slider";
import { appliedTheme, changeHeight } from "../../Actions/theme";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newColor: "",
      heightVal: null
    };
  }
  changeHeight(val) {
    this.props.changeHeight(val);
  }
  render() {
    console.log(this.props.variables.toolbarHeight, "check");
    const heightVal = this.props.variables.toolbarHeight;
    return (
      <FormGroup noBorder>
        <FormRow>
          <FormCol>
            <Text header uiSize="m">
              Header
            </Text>
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <Text>FontSize</Text>
          </FormCol>
          <FormCol>
            <Input type="number" value={this.props.variables.titleFontSize} />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Background Color</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.toolbarDefaultBg}
              onChangeColor={colorValue => {
                console.log(colorValue, "changed color");
                this.setState({ newColor: colorValue });
              }}
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Height</Text>
          </FormCol>
          <FormCol>
            <Input
              type="number"
              onChange={e => this.changeHeight(e.target.value)}
              value={heightVal}
            />
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <Text>Button Text</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.toolbarBtnTextColor}
              onChangeColor={colorValue => {
                console.log(colorValue, "changed color");
                this.setState({ newColor: colorValue });
              }}
            />
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <Text>Button Padding</Text>
          </FormCol>
          <FormCol>
            <Input
              type="number"
              onChange={e => this.changeHeight(e.target.value)}
              value={this.props.variables.buttonPadding}
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Border</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.toolbarDefaultBorder}
              onChangeColor={colorValue => {
                console.log(colorValue, "changed color");
                this.setState({ newColor: colorValue });
              }}
            />
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <Text>Button Bg</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.toolbarBtnColor}
              onChangeColor={colorValue => {
                console.log(colorValue, "changed color");
                this.setState({ newColor: colorValue });
              }}
            />
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <Text>Search Icon</Text>
          </FormCol>
          <FormCol>
            <Input
              type="number"
              value={this.props.variables.toolbarSearchIconSize}
            />
          </FormCol>
        </FormRow>

        <FormRow>
          <FormCol>
            <Text>Input Bg</Text>
          </FormCol>
          <FormCol>
            <ColorPicker
              value={this.props.variables.toolbarInputColor}
              onChangeColor={colorValue => {
                console.log(colorValue, "changed color");
                this.setState({ newColor: colorValue });
              }}
            />
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <Text>SearchBar Height</Text>
          </FormCol>
          <FormCol>
            <Input type="number" value={this.props.variables.searchBarHeight} />
          </FormCol>
        </FormRow>
        <FormRow>
          <FormCol>
            <Text>SearchBar Input Height</Text>
          </FormCol>
          <FormCol>
            <Input
              type="number"
              value={this.props.variables.searchBarInputHeight}
            />
          </FormCol>
        </FormRow>
        {/* <FormRow>
          <FormCol>
            <Text>Slider</Text>
          </FormCol>
          <FormCol>
            <Slider min="0" max="100" />
          </FormCol>
        </FormRow> */}
      </FormGroup>
    );
  }
}

function bindAction(dispatch) {
  return {
    appliedTheme: () => dispatch(appliedTheme()),
    changeHeight: val => dispatch(changeHeight(val))
  };
}

const mapStateToProps = state => ({
  variables: state.theme.variable
});

export default connect(mapStateToProps, bindAction)(Header);
