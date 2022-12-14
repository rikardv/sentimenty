import React, { Component } from "react";
import { Share, View } from "react-native";
import { Button, themeColor } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
class ShareExample extends Component {
  onShare = async () => {
    try {
      const result = await Share.share({
        message: this.props.message,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <Button
        onPress={this.onShare}
        color={themeColor.info900}
        text="Share result"
        textStyle={{ fontSize: 12 }}
        leftContent={
          <Ionicons name="share" size={16} color={themeColor.white200} />
        }
      />
    );
  }
}

export default ShareExample;
