import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "../styles/styles.js";
import WebView from "react-native-webview";

const BooksAndMovies = () => {
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.subsection}>
      <Text style={[styles.subheading, { marginBottom: 10 }]}>
        REFERENCES & RESOURCES
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          margin: 60,
        }}
      >
        <TouchableOpacity
          onPress={() =>
            handleLinkPress("https://www.patrickbetdavid.com/top-100-movies/")
          }
          style={{
            alignItems: "center",
          }}
        >
          <FontAwesome name="film" size={50} color="#ffffff" />
          <Text style={[styles.subheading, { color: "#F0E68C" }]}>Movies</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            handleLinkPress("https://www.patrickbetdavid.com/top-100-books/")
          }
          style={{
            alignItems: "center",
          }}
        >
          <FontAwesome name="book" size={50} color="#ffffff" />
          <Text style={[styles.subheading, { color: "#F0E68C" }]}>Books</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BooksAndMovies;
