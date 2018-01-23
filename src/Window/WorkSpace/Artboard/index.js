import React, { Component } from "react";
import NativeApp from "../../../ReactNativeApp/boot/setup";

import Header from "../../../ReactNativeApp/screens/Header/";
import Header1 from "../../../ReactNativeApp/screens/Header/1";
import Header2 from "../../../ReactNativeApp/screens/Header/2";
import Header3 from "../../../ReactNativeApp/screens/Header/3";
import Header4 from "../../../ReactNativeApp/screens/Header/4";
import Header5 from "../../../ReactNativeApp/screens/Header/5";
import Header6 from "../../../ReactNativeApp/screens/Header/6";
import Header7 from "../../../ReactNativeApp/screens/Header/7";
import Header8 from "../../../ReactNativeApp/screens/Header/8";
import BasicFooter from "../../../ReactNativeApp/screens/footer/basicFooter";
import IconFooter from "../../../ReactNativeApp/screens/footer/iconFooter";
import IconText from "../../../ReactNativeApp/screens/footer/iconText";
import BadgeFooter from "../../../ReactNativeApp/screens/footer/badgeFooter";
import Default from "../../../ReactNativeApp/screens/button/default";
import Outline from "../../../ReactNativeApp/screens/button/outline";
import Rounded from "../../../ReactNativeApp/screens/button/rounded";
import Block from "../../../ReactNativeApp/screens/button/block";
import Full from "../../../ReactNativeApp/screens/button/full";
import Custom from "../../../ReactNativeApp/screens/button/custom";
import Transparent from "../../../ReactNativeApp/screens/button/transparent";
import IconBtn from "../../../ReactNativeApp/screens/button/iconBtn";
import Disabled from "../../../ReactNativeApp/screens/button/disabled";
import BasicCard from "../../../ReactNativeApp/screens/card/basic";
import NHCardImage from "../../../ReactNativeApp/screens/card/card-image";
import NHCardShowcase from "../../../ReactNativeApp/screens/card/card-showcase";
import NHCardList from "../../../ReactNativeApp/screens/card/card-list";
import NHCardHeaderAndFooter from "../../../ReactNativeApp/screens/card/card-header-and-footer";
import BasicFab from "../../../ReactNativeApp/screens/fab/basic";
import MultipleFab from "../../../ReactNativeApp/screens/fab/multiple";
import FixedLabel from "../../../ReactNativeApp/screens/form/fixedLabel";
import InlineLabel from "../../../ReactNativeApp/screens/form/inlineLabel";
import FloatingLabel from "../../../ReactNativeApp/screens/form/floatingLabel";
import PlaceholderLabel from "../../../ReactNativeApp/screens/form/placeholder";
import StackedLabel from "../../../ReactNativeApp/screens/form/stacked";
import RegularInput from "../../../ReactNativeApp/screens/form/regular";
import UnderlineInput from "../../../ReactNativeApp/screens/form/underline";
import RoundedInput from "../../../ReactNativeApp/screens/form/rounded";
import IconInput from "../../../ReactNativeApp/screens/form/iconInput";
import SuccessInput from "../../../ReactNativeApp/screens/form/success";
import ErrorInput from "../../../ReactNativeApp/screens/form/error";
import DisabledInput from "../../../ReactNativeApp/screens/form/disabledInput";
import RowNB from "../../../ReactNativeApp/screens/layout/row";
import ColumnNB from "../../../ReactNativeApp/screens/layout/column";
import NestedGrid from "../../../ReactNativeApp/screens/layout/nested";
import CustomRow from "../../../ReactNativeApp/screens/layout/customRow";
import CustomCol from "../../../ReactNativeApp/screens/layout/customCol";
import BasicListSwipe from "../../../ReactNativeApp/screens/listSwipe/basic-list-swipe";
import MultiListSwipe from "../../../ReactNativeApp/screens/listSwipe/multi-list-swipe";
import NHBasicList from "../../../ReactNativeApp/screens/list/basic-list";
import NHListDivider from "../../../ReactNativeApp/screens/list/list-divider";
import NHListSeparator from "../../../ReactNativeApp/screens/list/list-separator";
import NHListHeader from "../../../ReactNativeApp/screens/list/list-headers";
import NHListIcon from "../../../ReactNativeApp/screens/list/list-icon";
import NHListAvatar from "../../../ReactNativeApp/screens/list/list-avatar";
import NHListThumbnail from "../../../ReactNativeApp/screens/list/list-thumbnail";
import RegularPicker from "../../../ReactNativeApp/screens/picker/regularPicker";
import PlaceholderPicker from "../../../ReactNativeApp/screens/picker/placeholderPicker";
import PlaceholderPickerNote from "../../../ReactNativeApp/screens/picker/placeholderPickernote";
import BackButtonPicker from "../../../ReactNativeApp/screens/picker/backButtonPicker";
import HeaderPicker from "../../../ReactNativeApp/screens/picker/headerPicker";
import HeaderStylePicker from "../../../ReactNativeApp/screens/picker/headerStylePicker";
import CustomHeaderPicker from "../../../ReactNativeApp/screens/picker/customHeaderPicker";
import BasicTab from "../../../ReactNativeApp/screens/tab/basicTab";
import ConfigTab from "../../../ReactNativeApp/screens/tab/configTab";
import ScrollableTab from "../../../ReactNativeApp/screens/tab/scrollableTab";
import BasicSegment from "../../../ReactNativeApp/screens/segment/SegmentHeader";
import RegularActionSheet from "../../../ReactNativeApp/screens/actionsheet/regular";
import IconActionSheet from "../../../ReactNativeApp/screens/actionsheet/icon";
import AdvSegment from "../../../ReactNativeApp/screens/segment/segmentTab";
import SimpleDeck from "../../../ReactNativeApp/screens/deckswiper/simple";
import AdvancedDeck from "../../../ReactNativeApp/screens/deckswiper/advanced";

import Home from "../../../ReactNativeApp/screens/home/";
import Anatomy from "../../../ReactNativeApp/screens/anatomy/";
import Footer from "../../../ReactNativeApp/screens/footer/";
import NHBadge from "../../../ReactNativeApp/screens/badge/";
import NHButton from "../../../ReactNativeApp/screens/button/";
import NHCard from "../../../ReactNativeApp/screens/card/";
import NHCheckbox from "../../../ReactNativeApp/screens/checkbox/";
import NHDeckSwiper from "../../../ReactNativeApp/screens/deckswiper/";
import NHFab from "../../../ReactNativeApp/screens/fab/";
import NHForm from "../../../ReactNativeApp/screens/form/";
import TextArea from "../../../ReactNativeApp/screens/form/textArea";
import NHIcon from "../../../ReactNativeApp/screens/icon/";
import ListSwipe from "../../../ReactNativeApp/screens/listSwipe/";
import BasicIcon from "../../../ReactNativeApp/screens/icon/basic";
import IconState from "../../../ReactNativeApp/screens/icon/state";
import SpecificIcon from "../../../ReactNativeApp/screens/icon/specific";
import NHLayout from "../../../ReactNativeApp/screens/layout/";
import NHList from "../../../ReactNativeApp/screens/list/";
import NHRadio from "../../../ReactNativeApp/screens/radio/";
import NHSearchbar from "../../../ReactNativeApp/screens/searchbar/";
import NHSpinner from "../../../ReactNativeApp/screens/spinner/";
import NHPicker from "../../../ReactNativeApp/screens/picker/";
import NHTab from "../../../ReactNativeApp/screens/tab/";
import NHThumbnail from "../../../ReactNativeApp/screens/thumbnail/";
import NHTypography from "../../../ReactNativeApp/screens/typography/";
import SideBar from "../../../ReactNativeApp/screens/sidebar";
import Segment from "../../../ReactNativeApp/screens/segment";
import Toast from "../../../ReactNativeApp/screens/toast";
import Actionsheet from "../../../ReactNativeApp/screens/actionsheet";

class Artboard extends Component {
  appScreen() {
    switch (this.props.screen) {
      case 1:
        return <Anatomy />;
      case 2:
        return <Header />;
      default:
        return <NativeApp />;
    }
  }
  render() {
    console.log(this.props, "screen");
    return (
      <div id="mobile-frame">
        <div class="screen" style={{ display: "flex", flex: 1, zIndex: 999 }}>
          {this.appScreen()}
        </div>
      </div>
    );
  }
}

export default Artboard;
