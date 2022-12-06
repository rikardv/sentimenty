import React, { Component } from "react";
import { Section, SectionContent, Text } from "react-native-rapi-ui";

export default class SentimentContent extends Component {
  render() {
    return (
      <Section>
        <SectionContent>
          <Text>This is a Section</Text>
          <Text>This is a Section</Text>
          <Text>This is a Section</Text>
        </SectionContent>
      </Section>
    );
  }
}
