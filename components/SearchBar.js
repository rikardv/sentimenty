import React, { Component } from "react";
import { View } from "react-native";
import { TextInput, Text, themeColor, Button } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = () => {
  const [pass, setPass] = React.useState("");
  const [email, setEmail] = React.useState("");
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <TextInput
        placeholder="Enter a hashtag or a word"
        value={email}
        onChangeText={(val) => setEmail(val)}
        rightContent={
          <Ionicons name="logo-twitter" size={20} color={themeColor.gray400} />
        }
      />
      <Button
        text="Search"
        onPress={() => console.log("Button tapped")}
        width={100}
      />
    </View>
  );
};

export default SearchBar;
