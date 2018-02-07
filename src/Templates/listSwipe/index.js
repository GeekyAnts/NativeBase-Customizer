export default `import React, { Component } from "react";
import { StyleSheet } from 'react-native';
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
    route: "BasicListSwipe",
    text: "Single SwipeRow"
  },
  {
    route: "MultiListSwipe",
    text: "Multiple List Swipe"
  }
];

class ListSwipe extends Component {
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
            <Title>List Swipe</Title>
          </Body>
          <Right />
        </Header>

        <Content scrollEnabled={false} contentContainerStyle={{ flex: 1 }}>
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

export default ListSwipe;`;
