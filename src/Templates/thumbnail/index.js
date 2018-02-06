export default `import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Thumbnail,
  Text,
  Body,
  Left,
  Right,
  View
} from "native-base";

const logo = require("../../../assets/splashscreen.png");
const cover = require("../../../assets/web-cover1.jpg");

class NHThumbnail extends Component {
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
            <Title>Thumbnail</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={styles.mb10}>Square Thumbnail</Text>
            <Thumbnail square small source={logo} style={styles.mb10} />
            <Thumbnail square source={logo} style={styles.mb10} />
            <Thumbnail square large source={logo} style={styles.mb35} />

            <Text style={styles.mb10}>Circular Thumbnail</Text>
            <Thumbnail small source={cover} style={styles.mb10} />
            <Thumbnail source={cover} style={styles.mb10} />
            <Thumbnail large source={cover} />
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
  mb10: {
    marginBottom: 10
  },
  mb35: {
    marginBottom: 35
  }
});

export default NHThumbnail;`;
