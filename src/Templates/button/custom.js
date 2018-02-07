export default `import React, { Component } from "react";
import {StyleSheet} from 'react-native';
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

class Custom extends Component {
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
            <Title>Custom Size</Title>
          </Body>
          <Right />
        </Header>

        <Content padder style={{ padding: 20 }}>
          <Button small style={styles.mb15}>
            <Text>Default Small</Text>
          </Button>
          <Button success style={styles.mb15}>
            <Text>Success Default</Text>
          </Button>
          <Button large dark style={styles.mb15}>
            <Text>Dark Large</Text>
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

export default Custom;`;
