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

class Outline extends Component {
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
            <Title>Outline</Title>
          </Body>
          <Right />
        </Header>

        <Content padder style={{ backgroundColor: "#fff", padding: 20 }}>
          <Button bordered light style={styles.mb15}>
            <Text>Light</Text>
          </Button>
          <Button bordered info style={styles.mb15}>
            <Text>Info</Text>
          </Button>
          <Button bordered primary style={styles.mb15}>
            <Text>Primary</Text>
          </Button>
          <Button bordered success style={styles.mb15}>
            <Text>Success</Text>
          </Button>
          <Button bordered warning style={styles.mb15}>
            <Text>Warning</Text>
          </Button>
          <Button bordered danger style={styles.mb15}>
            <Text>Danger</Text>
          </Button>
          <Button bordered dark style={styles.mb15}>
            <Text>Dark</Text>
          </Button>

          <Button bordered success block rounded style={styles.mb15}>
            <Text>Test</Text>
          </Button>

          <Button bordered block rounded style={styles.mb15}>
            <Text>Test</Text>
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

export default Outline;`;
