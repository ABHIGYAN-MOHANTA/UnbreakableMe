import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "../styles/styles.js";
import { Video } from "expo-av";

const Schedule = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={{ flex: 1, backgroundColor: "#000000" }}>
      <Video
        ref={video}
        style={styles.backgroundVideo}
        source={require("../../assets/schedule.mp4")}
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
        }}
      >
        <View style={styles.subsection}>
          <Text style={styles.subheading}>Optimizing Schedule</Text>
          <Text style={styles.marginTopText}>
            Week 1: Take notes on your daily routines and habits. How often are
            you on your phone or watching TV? How long do you take to eat and
            commute to work?
          </Text>
          <Text style={styles.text}>
            Week 2: Build a schedule to optimize your time. Use 15–30 minute
            block intervals. When you work, only focus on one thing at a time.
          </Text>
          <Text style={styles.text}>
            Week 3: Your schedule should be optimized!
          </Text>
          <Text style={styles.text}>
            The ultimate objective is to stop wasting time. Maximize your effort
            in what you do every day without sacrificing sleep.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Schedule;
