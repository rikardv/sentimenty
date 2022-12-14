import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
import {
  Section,
  SectionContent,
  Text,
  themeColor,
  Button,
} from "react-native-rapi-ui";
import Woeid from "../woeids.json";

const selectedPlaces = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Philadelphia",
  "Stockholm",
  "Gothenburg",
  "Oslo",
];

export default class CitySuggestions extends Component {
  state = {
    places: Woeid.filter((item) => selectedPlaces.includes(item.name)),
  };
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {this.state.places.map((place) => (
          <Button
            key={place.woeid}
            text={place.name}
            color={
              place.name !== this.props.selectedCity
                ? themeColor.gray
                : themeColor.info800
            }
            style={{ margin: "1%" }}
            textStyle={{ fontSize: 10, color: themeColor.info100 }}
            onPress={() => this.props.getTrendingTopics(place)}
          />
        ))}
      </View>
    );
  }
}
