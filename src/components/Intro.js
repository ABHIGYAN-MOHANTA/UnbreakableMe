import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/styles.js";

const Intro = () => {
  return (
    <View style={styles.subsection}>
      <Text style={styles.marginTopText}>
        Try Swiping Down with Two Fingers!
      </Text>
      <Text style={styles.text}>
        Explore the Hamburger Menu on the top left( you can also open it by
        swipe a finger from the left edge towards right ) and the bottom nav bar
        too, just explore really, Cheers!
      </Text>
      <Text style={styles.text}>
        Whenever you want to go back, press the back button! I know this sounds
        silly! Lets say you left open the Mirror, when you come back it may
        appear to be a black screen, just use the back button to go back and
        have a fresh start!
      </Text>
      <Text style={styles.text}>
        Last but not least, this app doesn't store any of your data in servers,
        everything is stored locally in your device! So, you can be stress free!
        Stay safe!
      </Text>
    </View>
  );
};

export default Intro;
