import React, { Component } from "react";
import { KeyboardAvoidingView, TouchableOpacity, View } from "react-native";
import {
  Section,
  SectionContent,
  Text,
  themeColor,
  Button,
} from "react-native-rapi-ui";

export default class Suggestions extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.getSentimentAnalysis(this.props.trend.name)}
      >
        <View>
          <Section
            style={{ marginBottom: "2%" }}
            backgroundColor={themeColor.info900}
          >
            <SectionContent
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text size="sm">{this.props.trend.name}</Text>
              <Text fontWeight="bold" size="sm">
                {this.props.trend.tweet_volume ?? "?"} tweets
              </Text>
            </SectionContent>
          </Section>
        </View>
      </TouchableOpacity>
    );
  }
}
