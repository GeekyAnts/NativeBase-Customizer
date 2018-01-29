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
    console.log(this.props.page.navigation.page, "ss");
    return (
      <WrapperDiv uiBackground="500">
        <FormGroup>
          <FormRow>
            <FormCol uiSize={2} />
            <FormCol uiSize={3}>
              <Dropdown>
                <option value="Platform">Platform</option>
                <option value="Material">Material</option>
                <option value="Common">Common</option>
              </Dropdown>
            </FormCol>
          </FormRow>
        </FormGroup>
        <Badge />
        <Button />
        <Card />
        <CheckBox />
        <DefaultText />
        <Footer />
        <FooterTab />
        <Header />
        <Icon />
        <InputGroup />
        <List />
        <RadioButton />
        <Segment />
        <Spinner />
        <Tabs />
        <Title />
        <Colors />
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
