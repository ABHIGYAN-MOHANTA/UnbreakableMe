import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/styles.js";
import WebView from "react-native-webview";

const Words = () => {
  return (
    <View style={styles.subsection}>
      <View style={{ flex: 1, backgroundColor: "#000000" }}>
        <WebView
          style={{ marginTop: Platform.OS == "ios" ? 20 : 0 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{
            uri: "https://www.youtube.com/embed/7UGUSKXb2i4",
          }}
        />
      </View>
    </View>
  );
};

export default Words;
