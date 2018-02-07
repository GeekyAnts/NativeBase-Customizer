export default `import React, { Component } from "react";
import { connect } from "react-redux";
import Bar from "../../StyledComponents/Bar";
import WrapperDiv from "../../StyledComponents/WrapperDiv";
import Pane from "../../StyledComponents/Pane";
import Icon from "../../StyledComponents/Icon";
import { newPage } from "../../Actions/selectPage";

class LeftPanel extends Component {
  render() {
    const that = this;
    const renObjData = datas.map(function(data, idx) {
      const icon = "ios-" + data.icon;
      return (
        <Bar
          key={idx}
          active={data.route === that.props.page.navigation.page}
          onClick={() => that.props.newPage(data.route)}
        >
          <Icon
            name={icon}
            uiSize="26px"
            style={{ marginRight: 10, opacity: 0.4 }}
          />
          {data.name}
        </Bar>
      );
    });
    return (
      <Pane uiBackground="300" style={{ padding: 0, display: "flex" }}>
        <WrapperDiv style={{ overflowY: "scroll" }}>
          {renObjData}
        </WrapperDiv>
      </Pane>
    );
  }
}

function bindAction(dispatch) {
  return {
    newPage: page => dispatch(newPage(page))
  };
}

const mapStateToProps = state => ({
  page: state
});

export default connect(mapStateToProps, bindAction)(LeftPanel);`;
