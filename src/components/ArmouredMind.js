import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/styles.js";

const ArmouredMind = () => {
  return (
    <View style={styles.subsection}>
      <Text style={styles.subheading}>Armoured Mind</Text>
      <Text style={styles.marginTopText}>
        Task: Visualize you success. It isn't simply day dreaming some trophy
        ceremony! Visualize all the challenges you have to face and how to
        overcome it!
      </Text>
      <Text style={styles.text}>
        Mission: Also have answers to these questions in your fingertips:
      </Text>
      <Text style={styles.text}>WHY ARE YOU DOING THIS?</Text>
      <Text style={styles.text}>WHAT'S DRIVING YOU TOWARDS ACHIEVEMENT?</Text>
      <Text style={styles.text}>
        WHERE DOES THE STRENGTH YOU ARE USING COME FROM?
      </Text>
      <Text style={styles.text}>WHAT HAS CALLOUSED YOUR MIND?</Text>

      <Text style={styles.text}>
        You need to answer these, so that when you hit a wall, you can feed off
        these!
      </Text>
    </View>
  );
};

export default ArmouredMind;
