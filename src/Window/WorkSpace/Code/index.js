import * as React from "react";
import { connect } from "react-redux";
import { appliedTheme } from "../../../Actions/theme";
import Anatomy from "../../../Templates/anatomy/index";
// // import Footer from "../screens/footer/";
// import Badge from "../../../Templates/badge/";
// import Button from "../../../Templates/button/default";
// import Block from "../../../Templates/button/block";
// import Custom from "../../../Templates/button/custom";
// import Disabled from "../../../Templates/button/disabled";
// import Full from "../../../Templates/button/full";
// import IconBtn from "../../../Templates/button/iconBtn";
// import Outline from "../../../Templates/button/outline";
// import Rounded from "../../../Templates/button/rounded";
// import Transparent from "../../../Templates/button/transparent";
// import BasicFooter from "../../../Templates/footer/basicFooter";
// import IconFooter from "../../../Templates/footer/iconFooter";
// import IconText from "../../../Templates/footer/iconText";
// import BadgeFooter from "../../../Templates/footer/badgeFooter";
// import BasicCard from "../../../Templates/card/basic";
// import NHCardImage from "../../../Templates/card/card-image";
// import NHCardShowcase from "../../../Templates/card/card-showcase";
// import NHCardList from "../../../Templates/card/card-list";
// import NHCardHeaderAndFooter from "../../../Templates/card/card-header-and-footer";
// import Card from "../../../Templates/card/";
// import Checkbox from "../../../Templates/checkbox/";
// import SimpleDeck from "../../../Templates/deckswiper/simple";
// import AdvancedDeck from "../../../Templates/deckswiper/advanced";
// import BasicFab from "../../../Templates/fab/basic";
// import MultipleFab from "../../../Templates/fab/multiple";
// import FixedLabel from "../../../Templates/form/fixedLabel";
// import InlineLabel from "../../../Templates/form/inlineLabel";
// import FloatingLabel from "../../../Templates/form/floatingLabel";
// import PlaceholderLabel from "../../../Templates/form/placeholder";
// import StackedLabel from "../../../Templates/form/stacked";
// import RegularInput from "../../../Templates/form/regular";
// import UnderlineInput from "../../../Templates/form/underline";
// import RoundedInput from "../../../Templates/form/rounded";
// import IconInput from "../../../Templates/form/iconInput";
// import SuccessInput from "../../../Templates/form/success";
// import ErrorInput from "../../../Templates/form/error";
// import DisabledInput from "../../../Templates/form/disabledInput";

// import BasicSegment from "../../../Templates/segment/SegmentHeader";
// import AdvSegment from "../../../Templates/segment/segmentTab";

// import RegularPicker from "../../../Templates/picker/regularPicker";
// import PlaceholderPicker from "../../../Templates/picker/placeholderPicker";
// import PlaceholderPickerNote from "../../../Templates/picker/placeholderPickernote";
// import BackButtonPicker from "../../../Templates/picker/backButtonPicker";
// import HeaderPicker from "../../../Templates/picker/headerPicker";
// import HeaderStylePicker from "../../../Templates/picker/headerStylePicker";
// import CustomHeaderPicker from "../../../Templates/picker/customHeaderPicker";

// import BasicTab from "../../../Templates/tab/basicTab";
// import ConfigTab from "../../../Templates/tab/configTab";
// import ScrollableTab from "../../../Templates/tab/scrollableTab";

// import BasicListSwipe from "../../../Templates/listSwipe/basic-list-swipe";
// import MultiListSwipe from "../../../Templates/listSwipe/multi-list-swipe";

// import NHBasicList from "../../../Templates/list/basic-list";
// import NHListDivider from "../../../Templates/list/list-divider";
// import NHListSeparator from "../../../Templates/list/list-separator";
// import NHListHeader from "../../../Templates/list/list-headers";
// import NHListIcon from "../../../Templates/list/list-icon";
// import NHListAvatar from "../../../Templates/list/list-avatar";
// import NHListThumbnail from "../../../Templates/list/list-thumbnail";

// import Header from "../../../Templates/Header/1";
// import Header2 from "../../../Templates/Header/2";
// import Header3 from "../../../Templates/Header/3";
// // import Header4 from "../../../Templates/Header/4";
// // import Header5 from "../../../Templates/Header/5";
// import Header6 from "../../../Templates/Header/6";
// import Header7 from "../../../Templates/Header/7";
// import Header8 from "../../../Templates/Header/8";
// import Icon from "../../../Templates/icon/";
// import ListSwipe from "../../../Templates/listSwipe/";
// // import BasicIcon from "../../../Templates/icon/basic";
// import Layout from "../../../Templates/layout/";
// import List from "../../../Templates/list/";
// import Radio from "../../../Templates/radio/";
// import Searchbar from "../../../Templates/searchbar/";
// import Spinner from "../../../Templates/spinner/";
// import Picker from "../../../Templates/picker/";
// import Tabs from "../../../Templates/tab/";
// import Thumbnail from "../../../Templates/thumbnail/";
// import Typography from "../../../Templates/typography/";
// // import SideBar from "../../../Templates/sidebar";
// import Segment from "../../../Templates/segment";
// import Toast from "../../../Templates/toast";
import Actionsheet from "../../../Templates/actionsheet";
import { Controlled as CodeMirror } from "react-codemirror2";
// import "../../../../node_modules/codemirror/lib/codemirror.css";
import "./theme.css";
require("../../../../node_modules/codemirror/mode/javascript/javascript");
require("../../../../node_modules/codemirror/addon/wrap/hardwrap");

class Code extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: Anatomy
    };
  }
  appScreen() {
    switch (this.props.navigation.selected) {
      case 0:
        return Anatomy;
      case 1:
        return Actionsheet;
      // case 2:
      //   switch (this.props.screen.subRoute) {
      //     case "Title":
      //       return <Header />;
      //     case "Icon Button":
      //       return <Header2 />;
      //     case "Text Button":
      //       return <Header3 />;
      //     case "Multiple Buttons":
      //       return <Header6 />;
      //     case "SubTitle":
      //       return <Header7 />;
      //     default:
      //       return <Header />;
      //   }
      // case 3:
      //   switch (this.props.screen.subRoute) {
      //     case "Basic":
      //       return <BasicFooter />;
      //     case "Icon Buttons":
      //       return <IconFooter />;
      //     case "Icon & Text":
      //       return <IconText />;
      //     case "Badge":
      //       return <BadgeFooter />;
      //     default:
      //       return <BasicFooter />;
      //   }
      // case 4:
      //   return <Badge />;
      // case 5:
      //   switch (this.props.screen.subRoute) {
      //     case "Default":
      //       return <Button />;
      //     case "Outline":
      //       return <Outline />;
      //     case "Rounded":
      //       return <Rounded />;
      //     case "Block":
      //       return <Block />;
      //     case "Full":
      //       return <Full />;
      //     case "Custom Size":
      //       return <Custom />;
      //     case "Transparent":
      //       return <Transparent />;
      //     case "Icon Button":
      //       return <IconBtn />;
      //     case "Disabled":
      //       return <Disabled />;
      //     default:
      //       return <Button />;
      //   }
      // case 6:
      //   switch (this.props.screen.subRoute) {
      //     case "Basic":
      //       return <BasicCard />;
      //     case "Card List":
      //       return <NHCardList />;
      //     case "Card Image":
      //       return <NHCardImage />;
      //     case "Card Showcase":
      //       return <NHCardShowcase />;
      //     case "Header & Footer":
      //       return <NHCardHeaderAndFooter />;
      //     default:
      //       return <BasicCard />;
      //   }
      // case 7:
      //   return <Checkbox />;
      // case 8:
      //   switch (this.props.screen.subRoute) {
      //     case "Basic":
      //       return <SimpleDeck />;
      //     case "Advanced":
      //       return <AdvancedDeck />;
      //     default:
      //       return <SimpleDeck />;
      //   }
      // case 9:
      //   switch (this.props.screen.subRoute) {
      //     case "Basic":
      //       return <BasicFab />;
      //     case "Multiple":
      //       return <MultipleFab />;
      //     default:
      //       return <BasicFab />;
      //   }
      // case 10:
      //   switch (this.props.screen.subRoute) {
      //     case "Fixed":
      //       return <FixedLabel />;
      //     case "Regular":
      //       return <RegularInput />;
      //     case "Inline":
      //       return <InlineLabel />;
      //     case "Floating":
      //       return <FloatingLabel />;
      //     case "Placeholder":
      //       return <PlaceholderLabel />;
      //     case "Stacked":
      //       return <StackedLabel />;
      //     case "Underlined":
      //       return <UnderlineInput />;
      //     case "Rounded":
      //       return <RoundedInput />;
      //     case "Success":
      //       return <SuccessInput />;
      //     case "Error":
      //       return <ErrorInput />;
      //     case "With Icon":
      //       return <IconInput />;
      //     case "Disabled":
      //       return <DisabledInput />;
      //     default:
      //       return <RegularInput />;
      //   }
      // case 11:
      //   return <Icon />;
      // case 12:
      //   switch (this.props.screen.subRoute) {
      //     case "Basic List":
      //       return <NHBasicList />;
      //     case "List Divider":
      //       return <NHListDivider />;
      //     case "List Separator":
      //       return <NHListSeparator />;
      //     case "List Header":
      //       return <NHListHeader />;
      //     case "List Icon":
      //       return <NHListIcon />;
      //     case "List Avatar":
      //       return <NHListAvatar />;
      //     case "List Thumbnail":
      //       return <NHListThumbnail />;
      //     default:
      //       return <NHBasicList />;
      //   }
      // case 13:
      //   switch (this.props.screen.subRoute) {
      //     case "Basic":
      //       return <BasicListSwipe />;
      //     case "Advanced":
      //       return <MultiListSwipe />;
      //     default:
      //       return <BasicListSwipe />;
      //   }
      // // case 14:
      // //   switch (this.props.screen.subRoute) {
      // //     case "Regular":
      // //       return <RegularPicker />;
      // //     case "Placeholder":
      // //       return <PlaceholderPicker />;
      // //     case "Placeholder Note":
      // //       return <PlaceholderPickerNote />;
      // //     case "Back Button":
      // //       return <BackButtonPicker />;
      // //     case "Header":
      // //       return <HeaderPicker />;
      // //     case "Header Style":
      // //       return <HeaderStylePicker />;
      // //     case "Custom Header":
      // //       return <CustomHeaderPicker />;
      // //     default:
      // //       return <RegularPicker />;
      // //   }
      // case 14:
      //   return <Radio />;
      // case 15:
      //   return <Searchbar />;
      // case 16:
      //   switch (this.props.screen.subRoute) {
      //     case "Basic":
      //       return <BasicSegment />;
      //     case "Advanced":
      //       return <AdvSegment />;
      //     default:
      //       return <BasicSegment />;
      //   }
      // case 17:
      //   return <Spinner />;
      // case 18:
      //   switch (this.props.screen.subRoute) {
      //     case "Basic":
      //       return <BasicTab />;
      //     case "Configurable":
      //       return <ConfigTab />;
      //     case "Scrollable":
      //       return <ScrollableTab />;
      //     default:
      //       return <BasicTab />;
      //   }
      // case 19:
      //   return <Thumbnail />;
      // case 20:
      //   return <Toast />;
      // case 21:
      //   return <Typography />;
      default:
        return Anatomy;
    }
  }
  updateCode(newCode) {
    this.setState({
      code: newCode
    });
  }
  render() {
    var options = {
      lineNumbers: true,
      mode: "javascript",
      readOnly: true
    };
    console.log(this.appScreen(), "nav");
    return (
      <CodeMirror {...this.props} value={this.appScreen()} options={options} />
    );
  }
}

const mapStateToProps = state => ({
  variables: state.theme.variable,
  navigation: state.navigation
});

export default connect(mapStateToProps, null)(Code);
