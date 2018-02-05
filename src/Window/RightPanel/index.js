import React, { Component } from "react";
import { connect } from "react-redux";
import FormGroup from "../../StyledComponents/FormGroup";
import FormRow from "../../StyledComponents/FormRow";
import FormCol from "../../StyledComponents/FormCol";
import WrapperDiv from "../../StyledComponents/WrapperDiv";
import Dropdown from "../../StyledComponents/Dropdown";
import Header from "./Header";
import Badge from "./Badge";
import Anatomy from "./Anatomy";
import ActionSheet from "./ActionSheet";
import Button from "./Button";
import Card from "./Card";
import Radio from "./RadioButton";
import CheckBox from "./CheckBox";
import Footer from "./Footer";
import Typography from "./Typography";
import Icon from "./Icon";
import Toast from "./Toast";
import Form from "./Form";
import Thumbnail from "./Thumbnail";
import DeckSwiper from "./DeckSwiper";
import InputGroup from "./InputGroup";
import List from "./List";
import RadioButton from "./RadioButton";
import SearchBar from "./SearchBar";
import Segment from "./Segment";
import Spinner from "./Spinner";
import ListSwipe from "./ListSwipe";
import Tabs from "./Tabs";
import Title from "./Title";
import Fab from "./Fab";
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
                {/* <option value="Platform">Platform</option> */}
                <option value="Material">Material</option>
                {/* <option value="Common">Common</option> */}
              </Dropdown>
            </FormCol>
          </FormRow>
        </FormGroup>
        {this.props.page.navigation.page === "Anatomy" && <Anatomy />}
        {this.props.page.navigation.page === "Actionsheet" && <ActionSheet />}
        {this.props.page.navigation.page === "Toast" && <Toast />}
        {this.props.page.navigation.page === "Badge" && <Badge />}
        {this.props.page.navigation.page === "Button" && <Button />}
        {this.props.page.navigation.page === "Radio" && <Radio />}
        {this.props.page.navigation.page === "Card" && <Card />}
        {this.props.page.navigation.page === "Checkbox" && <CheckBox />}
        {this.props.page.navigation.page === "DeckSwiper" && <DeckSwiper />}
        {this.props.page.navigation.page === "Thumbnail" && <Thumbnail />}
        {this.props.page.navigation.page === "DefaultText" && <DefaultText />}
        {/* {(this.props.page.navigation.page === "Anatomy" ||
          this.props.page.navigation.page === "Header") && <Header />} */}
        {this.props.page.navigation.page === "Header" && <Header />}
        {this.props.page.navigation.page === "Typography" && <Typography />}
        {/* {this.props.page.navigation.page != "Anatomy" && <Title />} */}
        {this.props.page.navigation.page === "Footer" && <Footer />}
        {this.props.page.navigation.page === "Form" && <Form />}
        {this.props.page.navigation.page === "Searchbar" && <SearchBar />}
        {this.props.page.navigation.page === "Icon" && <Icon />}
        {this.props.page.navigation.page === "InputGroup" && <InputGroup />}
        {this.props.page.navigation.page === "List" && <List />}
        {this.props.page.navigation.page === "RadioButton" && <RadioButton />}
        {this.props.page.navigation.page === "Segment" && <Segment />}
        {this.props.page.navigation.page === "Spinner" && <Spinner />}
        {this.props.page.navigation.page === "Tabs" && <Tabs />}
        {this.props.page.navigation.page === "Fab" && <Fab />}
        {this.props.page.navigation.page === "ListSwipe" && <ListSwipe />}
        {/* {this.props.page.navigation.page != "Anatomy" && <Colors />} */}
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
