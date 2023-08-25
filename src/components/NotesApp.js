import React, { useState, useEffect, useRef } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NotesApp = () => {
  const [note, setNote] = useState("");
  const [selectedColor, setSelectedColor] = useState("#F0E9D2"); // Initial color
  const textInputRef = useRef(null); // Ref to the TextInput component

  useEffect(() => {
    retrieveNote();
  }, []);

  const retrieveNote = async () => {
    try {
      const storedNote = await AsyncStorage.getItem("@userNote");
      if (storedNote !== null) {
        setNote(storedNote);
      }
    } catch (error) {
      console.error("Error retrieving note from AsyncStorage:", error);
    }
  };

  const saveNote = async (newNote) => {
    try {
      await AsyncStorage.setItem("@userNote", newNote);
    } catch (error) {
      console.error("Error saving note to AsyncStorage:", error);
    }
  };

  const handleNotePressIn = () => {
    textInputRef.current.focus();
  };

  const handleNoteChange = (text) => {
    setNote(text);
    saveNote(text);
  };

  const handleColorPress = (color) => {
    setSelectedColor(color);
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={textInputRef}
        style={[styles.textInput, { color: selectedColor }]}
        value={note}
        onChangeText={handleNoteChange}
        placeholder="Write your note here..."
        multiline={true}
        onPressIn={handleNotePressIn}
      />
      <View style={styles.colorPalette}>
        <TouchableOpacity
          style={[styles.colorButton, { backgroundColor: "#FF6B6B" }]}
          onPress={() => handleColorPress("#FF6B6B")}
        />
        <TouchableOpacity
          style={[styles.colorButton, { backgroundColor: "#6BFFB8" }]}
          onPress={() => handleColorPress("#6BFFB8")}
        />
        <TouchableOpacity
          style={[styles.colorButton, { backgroundColor: "#6B66FF" }]}
          onPress={() => handleColorPress("#6B66FF")}
        />
        <TouchableOpacity
          style={[styles.colorButton, { backgroundColor: "#FF6BD1" }]}
          onPress={() => handleColorPress("#FF6BD1")}
        />
        <TouchableOpacity
          style={[styles.colorButton, { backgroundColor: "#6BD9FF" }]}
          onPress={() => handleColorPress("#6BD9FF")}
        />
        <TouchableOpacity
          style={[styles.colorButton, { backgroundColor: "#D16BFF" }]}
          onPress={() => handleColorPress("#D16BFF")}
        />
        <TouchableOpacity
          style={[styles.colorButton, { backgroundColor: "#66FF9C" }]}
          onPress={() => handleColorPress("#66FF9C")}
        />
        <TouchableOpacity
          style={[styles.colorButton, { backgroundColor: "#FFAA6B" }]}
          onPress={() => handleColorPress("#FFAA6B")}
        />
        <TouchableOpacity
          style={[styles.colorButton, { backgroundColor: "#9CFF66" }]}
          onPress={() => handleColorPress("#9CFF66")}
        />
        <TouchableOpacity
          style={[styles.colorButton, { backgroundColor: "#FF6B95" }]}
          onPress={() => handleColorPress("#FF6B95")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    textAlignVertical: "bottom",
  },
  colorPalette: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  colorButton: {
    width: 40,
    height: 40,
  },
});

export default NotesApp;
