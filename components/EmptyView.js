import React, { Component } from "react";
import { View } from "react-native";
import { Text } from "react-native-rapi-ui";

export default class EmptyView extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Search for something..</Text>
      </View>
    );
  }
}
