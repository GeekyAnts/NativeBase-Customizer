import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body } from "native-base";
import styles from "./styles";

export default class TabFour extends Component {
  render() {
    return (
      <Content padder style={{ marginTop: 0 }}>
        <Card style={[styles.mb, { flex: 0 }]}>
          <CardItem>
            <Body>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequuntur sunt itaque adipisci quisquam pariatur qui,
                reiciendis architecto quod sint incidunt labore nisi totam illum
                numquam non magnam praesentium, maxime quaerat!
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Card style={[styles.mb, { flex: 0 }]}>
          <CardItem>
            <Body>
              <Text>
                NativeBase gives you the potential of building applications that
                run on iOS and Android using a single codebase.
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
