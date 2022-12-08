import React, { Component } from "react";
import {
  Section,
  SectionContent,
  Text,
  themeColor,
} from "react-native-rapi-ui";
import SentimentBar from "./SentimentBar";
import { KeyboardAvoidingView, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class SentimentContent extends Component {
  render() {
    return (
      <View style={{ marginHorizontal: "5%", marginVertical: "5%" }}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "5%",
          }}
        >
          <Text>
            What does <Text fontWeight="bold">{this.props.total}</Text> tweets
            say about <Text fontWeight="bold">{this.props.tag}</Text>?
          </Text>
        </View>
        <SentimentBar
          prating={Math.trunc((this.props.prating / this.props.total) * 100)}
          nrating={Math.trunc((this.props.nrating / this.props.total) * 100)}
        />
        <View style={{ marginVertical: "5%" }}>
          <View
            style={{
              marginVertical: "1%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          ></View>
          <Text>{this.props.summary}</Text>
        </View>
      </View>
    );
  }
}
