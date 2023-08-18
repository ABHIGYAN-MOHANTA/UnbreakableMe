import React from "react";
import { View, Text, Linking, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles.js";
import { FontAwesome } from "@expo/vector-icons";

const About = () => {
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.subsection}>
      <Text style={styles.marginTopText}>
        Welcome to UnbreakableMe, a platform born out of the unwavering
        determination inspired by David Goggins' life and his book, "Can't Hurt
        Me: Master Your Mind and Defy the Odds." I believe that every individual
        possesses the strength to overcome their darkest moments and rise above
        the challenges life presents. UnbreakableMe is a supportive space
        dedicated to empowering those who are facing depression or burnout. Our
        mission is to provide a helping hand, a source of inspiration, and a
        community of like-minded individuals who understand the struggles you
        may be going through. What sets UnbreakableMe apart is our commitment to
        the core principles that drive David Goggins. I encourage you to
        confront your fears, embrace discomfort, and take control of your life's
        narrative. Through a series of motivational resources, engaging content,
        and user interactions, I aim to foster resilience, mental toughness, and
        personal growth.
      </Text>
      <Text style={styles.text}></Text>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <TouchableOpacity
          onPress={() => handleLinkPress("https://github.com/ABHIGYAN-MOHANTA")}
        >
          <FontAwesome name="github" size={30} color="grey" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleLinkPress("https://twitter.com/MohantaAbhigyan")}
        >
          <FontAwesome name="twitter" size={30} color="grey" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            handleLinkPress("https://www.linkedin.com/in/abhigyan-mohanta/")
          }
        >
          <FontAwesome name="linkedin" size={30} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            handleLinkPress(
              "https://www.youtube.com/channel/UCNh2M7dsGe_iaho_JP-khCA"
            )
          }
        >
          <FontAwesome name="youtube" size={30} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleLinkPress("https://abhigyan.start.page/")}
        >
          <FontAwesome name="globe" size={30} color="grey" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default About;
