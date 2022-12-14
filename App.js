import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Keyboard,
  ScrollView,
} from "react-native";
import { ThemeProvider, Layout, TopNav, Text } from "react-native-rapi-ui";
import Loading from "./components/Loading";
import SearchBar from "./components/SearchBar";
import SentimentContent from "./components/SentimentContent";
import EmptyView from "./components/EmptyView";
import Woeids from "./woeids.json";
import Suggestions from "./components/Suggestions";
import CitySuggestions from "./components/CitySuggestions";

export default class App extends Component {
  state = {
    fetching: false,
    fetchingT: false,
    sentimentData: undefined,
    trendingData: undefined,
    selectedCity: "Stockholm",
  };

  componentDidMount() {
    const place = Woeids.find((item) => item.name === this.state.selectedCity);
    this.getTrendingTopics(place);
  }
  render() {
    return (
      <ThemeProvider theme="dark">
        <Layout style={{ marginHorizontal: "5%", flex: 1 }}>
          <TopNav
            middleContent="Twitter sentiment analysis"
            backgroundColor="none"
          />
          {!this.state.fetching && !this.state.sentimentData && (
            <CitySuggestions
              getTrendingTopics={this.getTrendingTopics}
              selectedCity={this.state.selectedCity}
            />
          )}
          <View style={{ flex: 1 }}>
            {!this.state.fetchingT &&
              !this.state.fetching &&
              !this.state.sentimentData && (
                <View style={{ flex: 1 }}>
                  <View
                    style={{
                      marginTop: "5%",
                      marginBottom: "5%",
                      position: "sticky",
                    }}
                  >
                    <Text>
                      Trending topics in {this.state.selectedCity} right now
                    </Text>
                  </View>
                  <ScrollView keyboardDismissMode="on-drag">
                    {this.state.trendingData?.trends?.map((trend) => (
                      <Suggestions
                        trend={trend}
                        key={trend.name}
                        getSentimentAnalysis={this.getSentimentAnalysis}
                      />
                    ))}
                  </ScrollView>
                </View>
              )}
            {this.state.fetchingT && (
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Loading />
              </View>
            )}

            {/* <View>
              {this.state.trendingData && this.state.trendingData.trends.map((item) => <Text>{item.name}</Text>)}
            </View> */}

            {this.state.fetching && (
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Loading />
              </View>
            )}
            {this.state.sentimentData && (
              <ScrollView keyboardDismissMode="on-drag">
                <SentimentContent
                  nrating={this.state.sentimentData?.negative_tweets}
                  prating={this.state.sentimentData?.positive_tweets}
                  total={this.state.sentimentData?.tweets_analysed}
                  tag={this.state.sentimentData?.entered_hashtag}
                  summary={this.state.sentimentData?.summary}
                  reset={this.reset}
                />
              </ScrollView>
            )}
          </View>
          <KeyboardAvoidingView
            keyboarddi
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={{ marginTop: "5%" }}>
              <SearchBar getSentimentAnalysis={this.getSentimentAnalysis} />
            </View>
          </KeyboardAvoidingView>
        </Layout>
      </ThemeProvider>
    );
  }

  getTrendingTopics = async (city) => {
    this.setState({
      fetchingT: true,
      trendingData: undefined,
      selectedCity: city.name,
    });
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ woeid: city.woeid }),
    };
    await fetch("https://e53b-92-34-164-124.eu.ngrok.io/trends", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ trendingData: data });
      });
    this.setState({ fetchingT: false });
  };

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
      "https://e53b-92-34-164-124.eu.ngrok.io/sentiment",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ sentimentData: data });
      });
    this.setState({ fetching: false });
  };

  reset = () => {
    this.setState({ sentimentData: "" });
  };
}
