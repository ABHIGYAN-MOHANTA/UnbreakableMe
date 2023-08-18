import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/styles.js";

const Schedule = () => {
  return (
    <View style={styles.subsection}>
      <Text style={styles.subheading}>Optimize your Schedule</Text>
      <Text style={styles.marginTopText}>
        Week 1: Take notes on your daily routines and habits. How often are you
        on your phone or watching TV? How long do you take to eat and commute to
        work?
      </Text>
      <Text style={styles.text}>
        Week 2: Build a schedule to optimize your time. Use 15–30 minute block
        intervals. When you work, only focus on one thing at a time.
      </Text>
      <Text style={styles.text}>
        Week 3: Your schedule should be optimized!
      </Text>
      <Text style={styles.text}>
        End Goal: Stop wasting time. Maximize your effort in what you do every
        day without sacrificing sleep.
      </Text>
    </View>
  );
};

export default Schedule;
