import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../styles/styles.js";
import { Video } from "expo-av";

const ArmouredMind = () => {
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
  });
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  useEffect(() => {
    loadAnswers();
  }, []);

  const loadAnswers = async () => {
    try {
      const storedAnswers = await AsyncStorage.getItem("@armouredMindAnswers");
      if (storedAnswers !== null) {
        setAnswers(JSON.parse(storedAnswers));
      }
    } catch (error) {
      console.error("Error loading answers from AsyncStorage:", error);
    }
  };

  const saveAnswers = async () => {
    try {
      await AsyncStorage.setItem(
        "@armouredMindAnswers",
        JSON.stringify(answers)
      );
    } catch (error) {
      console.error("Error saving answers to AsyncStorage:", error);
    }
  };

  const updateAnswer = (question, text) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: text,
    }));
  };

  return (
    <View style={{ flex: 1 }}>
      <Video
        ref={video}
        style={styles.backgroundVideo}
        source={require("../../assets/armourmind.mp4")}
        resizeMode="cover"
        isLooping
        onPlaybackStatusUpdate={setStatus}
        onLoad={() => {
          video.current.playAsync(0);
        }}
      />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          padding: 20,
        }}
      >
        <View style={styles.subsection}>
          <Text style={[styles.subheading, { marginTop: -35 }]}>
            Armoured Mind
          </Text>
          <Text style={styles.marginTopText}>
            Task: Visualize your success. It isn't simply daydreaming about a
            trophy ceremony! Visualize all the challenges you have to face and
            how to overcome them!
          </Text>
          <Text style={styles.text}>
            Have answers to these questions in your fingertips:
          </Text>
          <Text style={styles.text}>WHY ARE YOU DOING THIS?</Text>
          <TextInput
            style={{
              height: 100,
              borderWidth: 1,
              borderColor: "#B0D9B1",
              borderRadius: 4,
              marginBottom: 10,
              color: "#B0D9B1",
              paddingHorizontal: 20,
              backgroundColor: "#00000080",
              borderRadius: 10,
              padding: 10,
            }}
            multiline
            placeholder="Your answer here..."
            value={answers.question1}
            onChangeText={(text) => updateAnswer("question1", text)}
            onBlur={saveAnswers}
          />
          <Text style={styles.text}>
            WHAT'S DRIVING YOU TOWARDS ACHIEVEMENT?
          </Text>
          <TextInput
            style={{
              height: 100,
              borderWidth: 1,
              borderColor: "#B0D9B1",
              borderRadius: 4,
              marginBottom: 10,
              color: "#B0D9B1",
              paddingHorizontal: 20,
              backgroundColor: "#00000080",
              borderRadius: 10,
              padding: 10,
            }}
            multiline
            placeholder="Your answer here..."
            value={answers.question2}
            onChangeText={(text) => updateAnswer("question2", text)}
            onBlur={saveAnswers}
          />
          <Text style={styles.text}>
            WHERE DOES THE STRENGTH YOU ARE USING COME FROM?
          </Text>
          <TextInput
            style={{
              height: 100,
              borderWidth: 1,
              borderColor: "#B0D9B1",
              borderRadius: 4,
              marginBottom: 10,
              color: "#B0D9B1",
              paddingHorizontal: 20,
              backgroundColor: "#00000080",
              borderRadius: 10,
              padding: 10,
            }}
            multiline
            placeholder="Your answer here..."
            value={answers.question3}
            onChangeText={(text) => updateAnswer("question3", text)}
            onBlur={saveAnswers}
          />
          <Text style={styles.text}>WHAT HAS CALLOUSED YOUR MIND?</Text>
          <TextInput
            style={{
              height: 100,
              borderWidth: 1,
              borderColor: "#B0D9B1",
              borderRadius: 4,
              marginBottom: 10,
              color: "#B0D9B1",
              paddingHorizontal: 20,
              backgroundColor: "#00000080",
              borderRadius: 10,
              padding: 10,
            }}
            multiline
            placeholder="Your answer here..."
            value={answers.question4}
            onChangeText={(text) => updateAnswer("question4", text)}
            onBlur={saveAnswers}
          />
          <Text style={styles.text}>
            You need to answer these, so that when you hit a wall, you can feed
            off these!
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ArmouredMind;
