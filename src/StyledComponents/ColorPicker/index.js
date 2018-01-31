import * as React from "react";
import { Component } from "react";
import { SketchPicker } from "react-color";
import autobind from "autobind-decorator";
import "./index.css";
import onClickOutside from "react-onclickoutside";
import { ColorPickerBox, ColorPickerContainer } from "./ColorPickerBox";
// import CustomColorPicker from "../../Layout/ColorPicker";
class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPicker: false,
      a: 10,
      display: null
    };
  }

  handleClickOutside = evt => {
    this.setState({ showPicker: false });
  };
  @autobind
  handleChange(color) {
    if (color !== undefined) {
      this.props.onChangeColor(
        `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`
      );
    }
    // `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`
    // hsla(360, 100%, 100%, 1.)
  }

  handleColorClick(e) {
    e.stopPropagation();
    if (window.innerWidth - e.clientX > 160) {
      this.setState({ display: "left" });
    } else {
      this.setState({ display: "right" });
    }
    this.setState({
      showPicker: true
    });
  }

  render() {
    let colorRGBA = { r: 0, g: 0, b: 0, a: 0 };
    let value = this.props.value;
    // console.log(fill.color.includes("rgba"), "fill");
    if (value && typeof value === "string" && value.includes("rgba")) {
      var colorString = value.slice(5, -1);
      var colorArray = colorString.split(",");
      colorRGBA.r = parseInt(colorArray[0], 10);
      colorRGBA.g = parseInt(colorArray[1], 10);
      colorRGBA.b = parseInt(colorArray[2], 10);
      colorRGBA.a = parseFloat(colorArray[3]);
      // console.log(colorRGBA, "rgba");
    }
    return (
      <ColorPickerBox alignRight={this.props.alignRight}>
        <div
          style={{
            padding: 1,
            height: "100%",
            cursor: this.props.disabled ? "not-allowed" : "default"
          }}
        >
          <div
            onClick={e => this.handleColorClick(e)}
            style={{
              height: "93%",
              backgroundColor: this.props.value
                ? this.props.value
                : this.props.defaultColor ? this.props.defaultColor : "#6db098",
              pointerEvents: this.props.disabled ? "none" : "auto"
            }}
          />
        </div>
        {!this.state.showPicker ? null : (
          // <div
          //   className={
          //     this.state.display === "right" ? "align-right" : "align-left"
          //   }
          // >
          <ColorPickerContainer position={this.state.display}>
            <SketchPicker
              width="170"
              onChangeComplete={color => this.handleChange(color)}
              color={
                this.props.value
                  ? this.props.value.includes("rgba")
                    ? colorRGBA
                    : this.props.value
                  : "#ffffff"
              }
              disableAlpha={!this.props.enableAlpha}
            />
            <div className="closePicker" />
          </ColorPickerContainer>
        )}
      </ColorPickerBox>
    );
  }
}

export default onClickOutside(ColorPicker);
