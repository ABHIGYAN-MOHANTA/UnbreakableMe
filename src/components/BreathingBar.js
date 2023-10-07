import React, { useState, useEffect } from "react";
import { View, Animated, Text } from "react-native";

const BreathingBar = () => {
  const [barWidth] = useState(new Animated.Value(0));

  const animateBar = () => {
    Animated.sequence([
      Animated.timing(barWidth, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: false,
      }),
      Animated.delay(7000),
      Animated.timing(barWidth, {
        toValue: 0,
        duration: 8000,
        useNativeDriver: false,
      }),
    ]).start(() => animateBar());
  };

  useEffect(() => {
    animateBar();
  }, []);

  const barStyle = {
    width: barWidth.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"],
    }),
    height: 20,
    backgroundColor: "#4CAF50",
  };

  return (
    <View>
      <Text
        style={{
          backgroundColor: "#000000",
          color: "#F0E68C",
          marginVertical: 10,
        }}
      >
        Follow this for the 4-7-8 Breathing Style! Breathe in for 4 secs, hold
        for 7 and release for 8 seconds!
      </Text>
      <View style={{ width: "100%", height: 20, backgroundColor: "#F0E68C" }}>
        <Animated.View style={barStyle} />
      </View>
    </View>
  );
};

export default BreathingBar;
