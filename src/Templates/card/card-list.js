export default `import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Left,
  Right,
  Body
} from "native-base";

class NHCardList extends Component {
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
            <Title>Card List</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Card style={styles.mb}>
            <CardItem header bordered>
              <Text>Social Applications</Text>
            </CardItem>
            <CardItem>
              <Left>
                <Icon
                  active
                  name="logo-googleplus"
                  style={{ color: "#DD5044" }}
                />
                <Text>Google Plus</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Icon
                  active
                  name="logo-facebook"
                  style={{ color: "#3B579D" }}
                />
                <Text>facebook</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Icon active name="logo-twitter" style={{ color: "#55ACEE" }} />
                <Text>Twitter</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Icon active name="logo-reddit" style={{ color: "#FF4500" }} />
                <Text>Reddit</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Icon
                  active
                  name="logo-linkedin"
                  style={{ color: "#007BB6" }}
                />
                <Text>LinkedIn</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Icon active name="logo-youtube" style={{ color: "#D62727" }} />
                <Text>YouTube</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
  mb: {
    marginBottom: 15
  }
});

export default NHCardList;`;
