export default `import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  Text,
  Left,
  Right,
  Body,
  Separator
} from "native-base";

class NHListSeparator extends Component {
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
            <Title>List Separator</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Separator bordered>
            <Text>MIDFIELD</Text>
          </Separator>
          <ListItem>
            <Text>Caroline Aaron</Text>
          </ListItem>
          <ListItem>
            <Text>Urbino Cendre</Text>
          </ListItem>
          <ListItem last>
            <Text>Lee Allen</Text>
          </ListItem>

          <Separator bordered>
            <Text>MIDFIELD</Text>
          </Separator>
          <ListItem>
            <Text>Caroline Aaron</Text>
          </ListItem>
          <ListItem>
            <Text>Urbino Cendre</Text>
          </ListItem>
          <ListItem last>
            <Text>Lee Allen</Text>
          </ListItem>
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

export default NHListSeparator;`;
