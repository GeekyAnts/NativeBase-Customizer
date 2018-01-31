import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import WrapperDiv from "../../StyledComponents/WrapperDiv";
import Dropdown from "../../StyledComponents/Dropdown";
import Header from "./Header";
import Badge from "./Badge";
import Button from "./Button";
import Card from "./Card";
import CheckBox from "./CheckBox";
import Footer from "./Footer";
import FooterTab from "./FooterTab";
import Icon from "./Icon";
import InputGroup from "./InputGroup";
import List from "./List";
import RadioButton from "./RadioButton";
import Segment from "./Segment";
import Spinner from "./Spinner";
import Tabs from "./Tabs";
import Title from "./Title";
import Colors from "./Colors";
import DefaultText from "./Text";
import { appliedTheme } from "../../Actions/theme";

class RightPanel extends Component {
  render() {
    return (
      <WrapperDiv uiBackground="500">
        <FormGroup>
          <FormRow>
            <FormCol uiSize={2} />
            <FormCol uiSize={3}>
              <Dropdown>
                <option value="Platform">Platform</option>
                {/* <option value="Material">Material</option> */}
                {/* <option value="Common">Common</option> */}
              </Dropdown>
            </FormCol>
          </FormRow>
        </FormGroup>
        {this.props.page.navigation.page === "Badge" && <Badge />}
        {this.props.page.navigation.page === "Button" && <Button />}
        {this.props.page.navigation.page === "Card" && <Card />}
        {this.props.page.navigation.page === "CheckBox" && <CheckBox />}
        {this.props.page.navigation.page === "DefaultText" && <DefaultText />}
        {(this.props.page.navigation.page === "Anatomy" ||
          this.props.page.navigation.page === "Header") && <Header />}
        {(this.props.page.navigation.page === "Anatomy" ||
          this.props.page.navigation.page === "Footer") && <Footer />}
        {this.props.page.navigation.page === "FooterTab" && <FooterTab />}
        {this.props.page.navigation.page === "Icon" && <Icon />}
        {this.props.page.navigation.page === "InputGroup" && <InputGroup />}
        {this.props.page.navigation.page === "List" && <List />}
        {this.props.page.navigation.page === "RadioButton" && <RadioButton />}
        {this.props.page.navigation.page === "Segment" && <Segment />}
        {this.props.page.navigation.page === "Spinner" && <Spinner />}
        {this.props.page.navigation.page === "Tabs" && <Tabs />}
        {/* <Title /> */}
        {/* <Colors /> */}
      </WrapperDiv>
    );
  }
}

function bindAction(dispatch) {
  return {
    appliedTheme: () => dispatch(appliedTheme())
  };
}

const mapStateToProps = state => ({
  variables: state.theme.variable,
  page: state
});

export default connect(mapStateToProps, bindAction)(RightPanel);
