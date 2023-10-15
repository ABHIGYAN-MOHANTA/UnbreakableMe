import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "../styles/styles.js";
import { Video } from "expo-av";

const RemoveTheGovernor = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={{ flex: 1, backgroundColor: "#000000" }}>
      <Video
        ref={video}
        style={styles.backgroundVideo}
        source={require("../../assets/removeg.mp4")}
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
          <Text style={styles.subheading}>The 40% Rule</Text>
          <Text style={styles.marginTopText}>
            Remember that when you’re done…you’re not. You’ve got about 40% more
            left in the tank if you can just tap into that reserve. You keep
            reaching for more. You develop a calloused mind as Goggins calls it.
            This is done by spending a lot of time in the DIS-Comfort
            zone…physically and otherwise.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default RemoveTheGovernor;
