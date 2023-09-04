import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/styles.js";

const RemoveTheGovernor = () => {
  return (
    <View style={styles.subsection}>
      <Text style={styles.subheading}>The 40% Rule</Text>
      <Text style={styles.marginTopText}>
        Remember that when you’re done…you’re not. You’ve got about 40% more
        left in the tank if you can just tap into that reserve. From what I’ve
        seen about this, the way that you do it is by practice. You keep
        reaching for more. You develop a calloused mind as Goggins calls it.
        This is done by spending a lot of time in the DIS-Comfort
        zone…physically and otherwise.
      </Text>
      <Text style={styles.text}>
        By continually pushing yourself past your perceived limits, you will
        develop a new inner dialogue and confidence when encountering difficult
        physical challenges, allowing you to go beyond what you thought was
        previously possible.
      </Text>
    </View>
  );
};

export default RemoveTheGovernor;
