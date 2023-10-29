import React from "react";
import { View, Text, TouchableOpacity, Linking, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "../styles/styles.js";

const BooksAndMovies = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#000000" }}>
      <View style={styles.subsection}>
        <Image
          source={require("../../assets/inventory.jpg")}
          style={styles.backgroundImage}
        />
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
            <FontAwesome name="film" size={50} color="#CED4DA" />
            <Text
              style={[
                styles.subheading,
                { color: "#B0D9B1", marginTop: 10, paddingTop: 10 },
              ]}
            >
              Movies
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              handleLinkPress("https://www.patrickbetdavid.com/top-100-books/")
            }
            style={{
              alignItems: "center",
            }}
          >
            <FontAwesome name="book" size={50} color="#CED4DA" />
            <Text
              style={[
                styles.subheading,
                { color: "#B0D9B1", marginTop: 10, paddingTop: 10 },
              ]}
            >
              Books
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BooksAndMovies;
