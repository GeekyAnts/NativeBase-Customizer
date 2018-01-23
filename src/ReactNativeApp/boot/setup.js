import React, { Component } from "react";
import { StyleProvider } from "native-base";
import { connect } from "react-redux";
import { appliedTheme } from "../../Actions/theme";

import Anatomy from "../screens/anatomy/";
import Footer from "../screens/footer/";
import Badge from "../screens/badge/";
import Button from "../screens/button/";
import Card from "../screens/card/";
import Checkbox from "../screens/checkbox/";
import DeckSwiper from "../screens/deckswiper/";
import Fab from "../screens/fab/";
import Form from "../screens/form/";
import Header from "../screens/Header";
import Icon from "../screens/icon/";
import ListSwipe from "../screens/listSwipe/";
import BasicIcon from "../screens/icon/basic";
import Layout from "../screens/layout/";
import List from "../screens/list/";
import Radio from "../screens/radio/";
import Searchbar from "../screens/searchbar/";
import Spinner from "../screens/spinner/";
import Picker from "../screens/picker/";
import Tabs from "../screens/tab/";
import Thumbnail from "../screens/thumbnail/";
import Typography from "../screens/typography/";
import SideBar from "../screens/sidebar";
import Segment from "../screens/segment";
import Toast from "../screens/toast";
import Actionsheet from "../screens/actionsheet";

import AppNavigator from "../AppNavigator";
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";

class Setup extends Component {
  componentWillMount() {
    this.props.appliedTheme(variables);
  }
  appScreen() {
    switch (this.props.screen.screen) {
      case 0:
        return <Anatomy />;
      case 1:
        return <Actionsheet />;
      case 2:
        return <Header />;
      case 3:
        return <Footer />;
      case 4:
        return <Badge />;
      case 5:
        return <Button />;
      case 6:
        return <Card />;
      case 7:
        return <Checkbox />;
      case 8:
        return <DeckSwiper />;
      case 9:
        return <Fab />;
      case 10:
        return <Form />;
      case 11:
        return <Icon />;
      case 12:
        return <Layout />;
      case 13:
        return <List />;
      case 14:
        return <ListSwipe />;
      case 15:
        return <Picker />;
      case 16:
        return <Radio />;
      case 17:
        return <Searchbar />;
      case 18:
        return <Segment />;
      case 19:
        return <Spinner />;
      case 20:
        return <Tabs />;
      case 21:
        return <Thumbnail />;
      case 22:
        return <Toast />;
      case 23:
        return <Typography />;
      default:
        return <Anatomy />;
    }
  }
  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        {this.appScreen()}
      </StyleProvider>
    );
  }
}

function bindAction(dispatch) {
  return {
    appliedTheme: variables => dispatch(appliedTheme(variables))
  };
}

const mapStateToProps = state => ({
  variables: state.theme.variables
});

export default connect(mapStateToProps, bindAction)(Setup);
