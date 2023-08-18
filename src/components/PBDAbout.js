import React from "react";
import { View, Text, Linking, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles.js";
import { FontAwesome } from "@expo/vector-icons";

const PBDAbout = () => {
  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.subsection}>
      <Text style={styles.subheading}>About PBD</Text>
      <Text style={styles.marginTopText}>
        Valuetainment is one of the best sources of Mentorship you can find on
        the internet! Patrick Bet David is has been a huge inspiration to me
        personally and this is just a way for me to share this inspiration with
        you guys!
      </Text>
      <Text style={styles.text}></Text>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <TouchableOpacity
          onPress={() => handleLinkPress("https://twitter.com/patrickbetdavid")}
        >
          <FontAwesome name="twitter" size={30} color="grey" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            handleLinkPress("https://www.youtube.com/@VALUETAINMENT")
          }
        >
          <FontAwesome name="youtube" size={30} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleLinkPress("https://www.patrickbetdavid.com/")}
        >
          <FontAwesome name="globe" size={30} color="grey" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PBDAbout;
