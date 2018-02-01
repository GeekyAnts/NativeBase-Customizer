import React, { Component } from "react";
import { StyleProvider, getTheme } from "native-base";
import { connect } from "react-redux";
import { appliedTheme } from "../../Actions/theme";

import Anatomy from "../screens/anatomy/";
// import Footer from "../screens/footer/";
import Badge from "../screens/badge/";
import Button from "../screens/button/default";
import Block from "../screens/button/block";
import Custom from "../screens/button/custom";
import Disabled from "../screens/button/disabled";
import Full from "../screens/button/full";
import IconBtn from "../screens/button/iconBtn";
import Outline from "../screens/button/outline";
import Rounded from "../screens/button/rounded";
import Transparent from "../screens/button/transparent";
import BasicFooter from "../screens/footer/basicFooter";
import IconFooter from "../screens/footer/iconFooter";
import IconText from "../screens/footer/iconText";
import BadgeFooter from "../screens/footer/badgeFooter";
import BasicCard from "../screens/card/basic";
import NHCardImage from "../screens/card/card-image";
import NHCardShowcase from "../screens/card/card-showcase";
import NHCardList from "../screens/card/card-list";
import NHCardHeaderAndFooter from "../screens/card/card-header-and-footer";
import Card from "../screens/card/";
import Checkbox from "../screens/checkbox/";
import SimpleDeck from "../screens/deckswiper/simple";
import AdvancedDeck from "../screens/deckswiper/advanced";
import BasicFab from "../screens/fab/basic";
import MultipleFab from "../screens/fab/multiple";
import FixedLabel from "../screens/form/fixedLabel";
import InlineLabel from "../screens/form/inlineLabel";
import FloatingLabel from "../screens/form/floatingLabel";
import PlaceholderLabel from "../screens/form/placeholder";
import StackedLabel from "../screens/form/stacked";
import RegularInput from "../screens/form/regular";
import UnderlineInput from "../screens/form/underline";
import RoundedInput from "../screens/form/rounded";
import IconInput from "../screens/form/iconInput";
import SuccessInput from "../screens/form/success";
import ErrorInput from "../screens/form/error";
import DisabledInput from "../screens/form/disabledInput";

import BasicSegment from "../screens/segment/SegmentHeader";
import AdvSegment from "../screens/segment/segmentTab";

import RegularPicker from "../screens/picker/regularPicker";
import PlaceholderPicker from "../screens/picker/placeholderPicker";
import PlaceholderPickerNote from "../screens/picker/placeholderPickernote";
import BackButtonPicker from "../screens/picker/backButtonPicker";
import HeaderPicker from "../screens/picker/headerPicker";
import HeaderStylePicker from "../screens/picker/headerStylePicker";
import CustomHeaderPicker from "../screens/picker/customHeaderPicker";

import BasicTab from "../screens/tab/basicTab";
import ConfigTab from "../screens/tab/configTab";
import ScrollableTab from "../screens/tab/scrollableTab";

import BasicListSwipe from "../screens/listSwipe/basic-list-swipe";
import MultiListSwipe from "../screens/listSwipe/multi-list-swipe";

import NHBasicList from "../screens/list/basic-list";
import NHListDivider from "../screens/list/list-divider";
import NHListSeparator from "../screens/list/list-separator";
import NHListHeader from "../screens/list/list-headers";
import NHListIcon from "../screens/list/list-icon";
import NHListAvatar from "../screens/list/list-avatar";
import NHListThumbnail from "../screens/list/list-thumbnail";

import Header from "../screens/Header/1";
import Header2 from "../screens/Header/2";
import Header3 from "../screens/Header/3";
// import Header4 from "../screens/Header/4";
// import Header5 from "../screens/Header/5";
import Header6 from "../screens/Header/6";
import Header7 from "../screens/Header/7";
import Header8 from "../screens/Header/8";
import Icon from "../screens/icon/";
import ListSwipe from "../screens/listSwipe/";
// import BasicIcon from "../screens/icon/basic";
import Layout from "../screens/layout/";
import List from "../screens/list/";
import Radio from "../screens/radio/";
import Searchbar from "../screens/searchbar/";
import Spinner from "../screens/spinner/";
import Picker from "../screens/picker/";
import Tabs from "../screens/tab/";
import Thumbnail from "../screens/thumbnail/";
import Typography from "../screens/typography/";
// import SideBar from "../screens/sidebar";
import Segment from "../screens/segment";
import Toast from "../screens/toast";
import Actionsheet from "../screens/actionsheet";

import AppNavigator from "../AppNavigator";
// import getTheme from "../theme/components";
import variables from "../theme/variables/material";

class Setup extends Component {
  appScreen() {
    switch (this.props.screen.screen) {
      case 0:
        return <Anatomy />;
      case 1:
        return <Actionsheet />;
      case 2:
        switch (this.props.screen.subRoute) {
          case "Title":
            return <Header />;
          case "Icon Button":
            return <Header2 />;
          case "Text Button":
            return <Header3 />;
          case "Multiple Buttons":
            return <Header6 />;
          case "SubTitle":
            return <Header7 />;
          case "Custom Background":
            return <Header8 />;
          default:
            return <Header />;
        }
      case 3:
        switch (this.props.screen.subRoute) {
          case "Basic":
            return <BasicFooter />;
          case "Icon Buttons":
            return <IconFooter />;
          case "Icon &Text":
            return <IconText />;
          case "Badge":
            return <BadgeFooter />;
          default:
            return <BasicFooter />;
        }
      case 4:
        return <Badge />;
      case 5:
        switch (this.props.screen.subRoute) {
          case "Default":
            return <Button />;
          case "Outline":
            return <Outline />;
          case "Rounded":
            return <Rounded />;
          case "Block":
            return <Block />;
          case "Full":
            return <Full />;
          case "Custom":
            return <Custom />;
          case "Transparent":
            return <Transparent />;
          case "IconBtn":
            return <IconBtn />;
          case "Disabled":
            return <Disabled />;
          default:
            return <Button />;
        }
      case 6:
        switch (this.props.screen.subRoute) {
          case "Basic":
            return <BasicCard />;
          case "Card List":
            return <NHCardList />;
          case "Card Image":
            return <NHCardImage />;
          case "Card Showcase":
            return <NHCardShowcase />;
          case "Header & Footer":
            return <NHCardHeaderAndFooter />;
          default:
            return <BasicCard />;
        }
      case 7:
        return <Checkbox />;
      case 8:
        switch (this.props.screen.subRoute) {
          case "Basic":
            return <SimpleDeck />;
          case "Advanced":
            return <AdvancedDeck />;
          default:
            return <SimpleDeck />;
        }
      case 9:
        switch (this.props.screen.subRoute) {
          case "Basic":
            return <BasicFab />;
          case "Multiple":
            return <MultipleFab />;
          default:
            return <BasicFab />;
        }
      case 10:
        switch (this.props.screen.subRoute) {
          case "Fixed":
            return <FixedLabel />;
          case "Regular":
            return <RegularInput />;
          case "Inline":
            return <InlineLabel />;
          case "Floating":
            return <FloatingLabel />;
          case "Placeholder":
            return <PlaceholderLabel />;
          case "Stacked":
            return <StackedLabel />;
          case "Underlined":
            return <UnderlineInput />;
          case "Rounded":
            return <RoundedInput />;
          case "Success":
            return <SuccessInput />;
          case "Error":
            return <ErrorInput />;
          case "With Icon":
            return <IconInput />;
          case "Disabled":
            return <DisabledInput />;
          default:
            return <RegularInput />;
        }
      case 11:
        return <Icon />;
      case 12:
        return <Layout />;
      case 13:
        switch (this.props.screen.subRoute) {
          case "Basic List":
            return <NHBasicList />;
          case "List Divider":
            return <NHListDivider />;
          case "List Separator":
            return <NHListSeparator />;
          case "List Header":
            return <NHListHeader />;
          case "List Icon":
            return <NHListIcon />;
          case "List Avatar":
            return <NHListAvatar />;
          case "List Thumbnail":
            return <NHListThumbnail />;
          default:
            return <NHBasicList />;
        }
      case 14:
        switch (this.props.screen.subRoute) {
          case "Basic":
            return <BasicListSwipe />;
          case "Advanced":
            return <MultiListSwipe />;
          default:
            return <BasicListSwipe />;
        }
      case 15:
        switch (this.props.screen.subRoute) {
          case "Regular":
            return <RegularPicker />;
          case "Placeholder":
            return <PlaceholderPicker />;
          case "Placeholder Note":
            return <PlaceholderPickerNote />;
          case "Back Button":
            return <BackButtonPicker />;
          case "Header":
            return <HeaderPicker />;
          case "Header Style":
            return <HeaderStylePicker />;
          case "Custom Header":
            return <CustomHeaderPicker />;
          default:
            return <RegularPicker />;
        }
      case 16:
        return <Radio />;
      case 17:
        return <Searchbar />;
      case 18:
        switch (this.props.screen.subRoute) {
          case "Basic":
            return <BasicSegment />;
          case "Advanced":
            return <AdvSegment />;
          default:
            return <BasicSegment />;
        }
      case 19:
        return <Spinner />;
      case 20:
        switch (this.props.screen.subRoute) {
          case "Basic":
            return <BasicTab />;
          case "Configurable":
            return <ConfigTab />;
          case "Scrollable":
            return <ScrollableTab />;
          default:
            return <BasicTab />;
        }
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
      <StyleProvider style={getTheme(this.props.variables)}>
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
  variables: state.theme.variable
});

export default connect(mapStateToProps, bindAction)(Setup);
