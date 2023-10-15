import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles.js";
import { useNavigation } from "@react-navigation/native";
import { Video } from "expo-av";

const TakingInventory = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#000000" }}>
      <Video
        ref={video}
        style={styles.backgroundVideo}
        source={require("../../assets/inventory.mp4")}
        resizeMode="cover"
        isLooping
        onPlaybackStatusUpdate={setStatus}
        onLoad={() => {
          video.current.playAsync(0);
        }}
      />
      <View style={styles.subsection}>
        <Text style={styles.subheading}>Taking Inventory Home</Text>
        <Text style={styles.marginTopText}>
          Task: Write out a list of what is challenging you today. What problems
          and limitations do you encounter? What excuses are you making? Don’t
          hold back. Don’t be nice to yourself.
        </Text>
        <Text style={styles.text}>
          Mission: This list of excuses will fuel your future success.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Proceed to write...")}
        >
          <Text style={styles.buttonText}>Proceed to write...</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TakingInventory;
