import React, { Component } from "react";
import { View } from "react-native";
import { TextInput, Text, themeColor, Button } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = (props) => {
  const [pass, setPass] = React.useState("");
  const [token, setToken] = React.useState("");
  return (
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "2%",
      }}
    >
      <View style={{ width: "75%" }}>
        <TextInput
          placeholder="Enter a hashtag or a word"
          value={token}
          onChangeText={(val) => setToken(val)}
          leftContent={
            <Ionicons
              name="logo-twitter"
              size={20}
              color={themeColor.gray400}
            />
          }
        />
      </View>
      <Button
        text="Analyse"
        onPress={() => props.getSentimentAnalysis(token)}
        style={{ height: 40 }}
        textStyle={{ fontSize: 12 }}
      />
    </View>
  );
};

export default SearchBar;
