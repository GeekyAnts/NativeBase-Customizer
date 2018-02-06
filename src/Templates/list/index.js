export default `import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Left,
  Right,
  Body,
  List,
  ListItem
} from "native-base";

const datas = [
  {
    route: "NHBasicList",
    text: "Basic List"
  },
  {
    route: "NHListDivider",
    text: "List Divider"
  },
  {
    route: "NHListHeader",
    text: "List Header"
  },
  {
    route: "NHListIcon",
    text: "List Icon"
  },
  {
    route: "NHListAvatar",
    text: "List Avatar"
  },
  {
    route: "NHListThumbnail",
    text: "List Thumbnail"
  },
  {
    route: "NHListSeparator",
    text: "List Separator"
  }
];

class NHList extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>List</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Text>
                    {data.text}
                  </Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
});

export default NHList;`;
