import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { KeyboardAvoidingView, StyleSheet, View, Keyboard } from "react-native";
import { ThemeProvider, Layout, TopNav, Text } from "react-native-rapi-ui";
import Loading from "./components/Loading";
import SearchBar from "./components/SearchBar";
import SentimentContent from "./components/SentimentContent";
import EmptyView from "./components/EmptyView";

export default class App extends Component {
  state = {
    fetching: false,
    sentimentData: undefined,
  };
  render() {
    return (
      <ThemeProvider theme="dark">
        <Layout style={{ marginHorizontal: "5%" }}>
          <TopNav
            middleContent="Twitter sentiment analysis"
            backgroundColor="none"
          />
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
          >
            <View style={{ flex: 1 }}>
              {this.state.fetching && <Loading />}
              {this.state.sentimentData && (
                <SentimentContent
                  nrating={this.state.sentimentData.negative_tweets}
                  prating={this.state.sentimentData.positive_tweets}
                  total={this.state.sentimentData.tweets_analysed}
                  tag={this.state.sentimentData.entered_hashtag}
                  summary={this.state.sentimentData.summary}
                />
              )}
            </View>

            <View style={{ marginTop: "5%", alignSelf: "" }}>
              <SearchBar getSentimentAnalysis={this.getSentimentAnalysis} />
            </View>
          </KeyboardAvoidingView>
        </Layout>
      </ThemeProvider>
    );
  }

  getSentimentAnalysis = async (token) => {
    Keyboard.dismiss();
    this.setState({ fetching: true, sentimentData: undefined });
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tag: token }),
    };
    await fetch(
      "https://54fc-94-255-243-71.eu.ngrok.io/sentiment",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ sentimentData: data });
      });
    this.setState({ fetching: false });
  };
}
