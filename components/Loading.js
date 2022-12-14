import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { themeColor } from "react-native-rapi-ui";

class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="small" color={themeColor.info400} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
});

export default Loading;
