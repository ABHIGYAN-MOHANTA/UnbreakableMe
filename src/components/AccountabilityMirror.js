import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "../styles/styles.js";
import { useNavigation } from "@react-navigation/native";
import { Video } from "expo-av";

const AccountabilityMirror = () => {
  const navigation = useNavigation();
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={{ flex: 1 }}>
      <Video
        ref={video}
        style={styles.backgroundVideo}
        source={require("../../assets/mirror.mp4")}
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
          <Text style={styles.subheading}>Accountability Mirror</Text>
          <Text style={styles.marginTopText}>
            Put Post-It notes all over the mirror you use in the morning of your
            goals. That way, they’re IN YOUR FACE every morning and
            night…coincidentally the best times of day to make things stick to
            your subconscious, too.Make the goals fairly small and going towards
            your big goals.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Mirror")}
          >
            <Text style={styles.buttonText}>Proceed to On the Go Mirror</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default AccountabilityMirror;
