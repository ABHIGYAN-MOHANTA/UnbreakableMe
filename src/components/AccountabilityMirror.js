import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { styles } from "../styles/styles.js";
import { useNavigation } from "@react-navigation/native";

const AccountabilityMirror = () => {
  const navigation = useNavigation();
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={{ flex: 1, backgroundColor: "#000000" }}>
      <Image
        source={require("../../assets/inventory.jpg")}
        style={styles.backgroundImage}
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
