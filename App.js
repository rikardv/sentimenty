import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider, Layout, TopNav } from "react-native-rapi-ui";
import SearchBar from "./components/SearchBar";
import SentimentContent from "./components/SentimentContent";

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme="dark">
        <Layout>
          <TopNav
            middleContent="Twitter sentiment analysis"
            backgroundColor="none"
          />
          <SearchBar />
          <SentimentContent />
        </Layout>
      </ThemeProvider>
    );
  }
}
