export default `import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  H1,
  H2,
  H3,
  Text,
  Left,
  Right,
  Body
} from "native-base";

class NHTypography extends Component {
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
            <Title>Typography</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <H1 style={styles.mb10}>Header One</H1>
          <H2 style={styles.mb10}>Header Two</H2>
          <H3 style={styles.mb10}>Header Three</H3>
          <Text>Default</Text>
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

export default NHTypography;`;
