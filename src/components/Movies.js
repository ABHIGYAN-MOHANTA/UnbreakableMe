import React from "react";
import { View, ScrollView, Image, Text, StyleSheet } from "react-native";
import { MoviesJson, MoviesCaption } from "./MoviesJson";

const Movies = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {MoviesJson.map((imageUrl, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image
              source={{ uri: imageUrl }}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.indexContainer}>
              <Text style={styles.indexText}>{index + 1}</Text>
            </View>
            <View style={styles.captionContainer}>
              <Text style={styles.captionText}>{MoviesCaption[index]}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  scrollViewContent: {
    alignItems: "center",
  },
  imageContainer: {
    marginVertical: 10,
    borderWidth: 5,
    borderColor: "#fff",
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: 200,
    height: 300,
  },
  indexContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  indexText: {
    color: "#000000",
    fontWeight: "bold",
  },
  captionContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    paddingVertical: 5,
  },
  captionText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 12,
  },
});

export default Movies;
