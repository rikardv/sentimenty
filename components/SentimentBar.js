import React, { Component } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { View } from "react-native";
import { themeColor } from "react-native-rapi-ui";
import { Text } from "react-native-rapi-ui";

export default class SentimentBar extends Component {
  render() {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Icon
          name="sentiment-very-dissatisfied"
          color={
            this.props.prating <= 15 ? themeColor.danger400 : themeColor.gray100
          }
          size={40}
        />
        <Icon
          name="sentiment-dissatisfied"
          color={
            this.props.prating > 15 && this.props.prating < 50
              ? themeColor.danger200
              : themeColor.gray100
          }
          size={40}
        />
        <Icon
          name="sentiment-neutral"
          color={
            this.props.prating == 50
              ? themeColor.warning400
              : themeColor.gray100
          }
          size={40}
        />
        <Icon
          name="sentiment-satisfied"
          color={
            this.props.prating > 50 && this.props.prating < 85
              ? themeColor.success300
              : themeColor.gray100
          }
          size={40}
        />
        <Icon
          name="sentiment-very-satisfied"
          color={
            this.props.prating >= 85
              ? themeColor.success400
              : themeColor.gray100
          }
          size={40}
        />
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {this.props.prating > 50 && (
            <Text style={{ color: themeColor.success300 }} size={8}>
              {this.props.prating}% Positive
            </Text>
          )}
          {this.props.nrating > 50 && (
            <Text style={{ color: themeColor.danger300 }} size={8}>
              {this.props.nrating}% Negative
            </Text>
          )}
          {this.props.prating == this.props.nrating && (
            <Text style={{ color: themeColor.warning400 }} size={8}>
              Neutral
            </Text>
          )}
        </View>
      </View>
    );
  }
}
