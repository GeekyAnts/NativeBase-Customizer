export default `import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Body,
  Left,
  Right,
  Item,
  Input,
  Form
} from "native-base";

class IconInput extends Component {
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
            <Title>Icon Input</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Form>
            <Item>
              <Icon active name="home" />
              <Input placeholder="Icon Textbox" />
            </Item>
            <Item>
              <Input placeholder="Icon Alignment in Textbox" />
              <Icon active name="swap" />
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

export default IconInput;`;
