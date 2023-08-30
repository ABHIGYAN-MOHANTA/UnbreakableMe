import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import { BooksJson, BooksCaption } from "./BooksJson";

const Books = () => {
  const [tickMarks, setTickMarks] = useState([]);

  // Load tick mark state from AsyncStorage on component mount
  useEffect(() => {
    const loadTickMarks = async () => {
      try {
        const storedTickMarks = await AsyncStorage.getItem("tickMarks");
        if (storedTickMarks) {
          setTickMarks(JSON.parse(storedTickMarks));
        }
      } catch (error) {
        console.error("Error loading tick marks:", error);
      }
    };

    loadTickMarks();
  }, []);

  // Save tick mark state to AsyncStorage
  useEffect(() => {
    const saveTickMarks = async () => {
      try {
        await AsyncStorage.setItem("tickMarks", JSON.stringify(tickMarks));
      } catch (error) {
        console.error("Error saving tick marks:", error);
      }
    };

    saveTickMarks();
  }, [tickMarks]);

  const toggleTickMark = (index) => {
    setTickMarks((prevTickMarks) => {
      const newTickMarks = [...prevTickMarks];
      newTickMarks[index] = !newTickMarks[index];
      return newTickMarks;
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {BooksJson.map((imageUrl, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image
              source={{ uri: imageUrl }}
              style={styles.image}
              resizeMode="cover"
            />
            <TouchableOpacity
              style={[
                styles.tickMark,
                tickMarks[index] && styles.tickMarkActive,
              ]}
              onPress={() => toggleTickMark(index)}
            >
              {tickMarks[index] && <Text style={styles.tickText}>✓</Text>}
            </TouchableOpacity>
            <View style={styles.indexContainer}>
              <Text style={styles.indexText}>{index + 1}</Text>
            </View>
            <View style={styles.captionContainer}>
              <Text style={styles.captionText}>{BooksCaption[index]}</Text>
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
  tickMark: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#ffffff",
    borderColor: "#000000",
    borderWidth: 1,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  tickMarkActive: {
    backgroundColor: "#00ff00", // Green color for active tick mark
  },
  tickText: {
    fontSize: 20,
    color: "#000000",
  },
});

export default Books;
