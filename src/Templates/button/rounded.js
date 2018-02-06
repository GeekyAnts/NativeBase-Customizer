export default `import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text
} from "native-base";

class Rounded extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Rounded</Title>
          </Body>
          <Right />
        </Header>

        <Content padder style={{ backgroundColor: "#FFF", padding: 20 }}>
          <Button rounded light style={styles.mb15}>
            <Text>Light</Text>
          </Button>
          <Button rounded info style={styles.mb15}>
            <Text>Info</Text>
          </Button>
          <Button rounded primary style={styles.mb15}>
            <Text>Primary</Text>
          </Button>
          <Button rounded success style={styles.mb15}>
            <Text>Success</Text>
          </Button>
          <Button rounded warning style={styles.mb15}>
            <Text>Warning</Text>
          </Button>
          <Button rounded danger style={styles.mb15}>
            <Text>Danger</Text>
          </Button>
          <Button rounded dark style={styles.mb15}>
            <Text>Dark</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
  mb15: {
    marginBottom: 20
  },
});

export default Rounded;`;
