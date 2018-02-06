export default `import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Form,
  Body,
  Left,
  Right,
  IconNB,
  Item,
  Input
} from "native-base";

class Error extends Component {
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
            <Title>Error Input</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Form>
            <Item error>
              <Input placeholder="Textbox with Error Input" />
              <IconNB name="ios-close-circle" />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  }
});

export default Error;`;
