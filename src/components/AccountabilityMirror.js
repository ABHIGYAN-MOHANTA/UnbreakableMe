import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles.js";
import { useNavigation } from "@react-navigation/native";

const AccountabilityMirror = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.subsection}>
      <Text style={styles.marginTopText}>
        Put Post-It notes all over the mirror you use in the morning of your
        goals. That way, they’re IN YOUR FACE every morning and
        night…coincidentally the best times of day to make things stick to your
        subconscious, too.
      </Text>
      <Text style={styles.text}>
        Make the goals fairly small and going towards your big goals. As an
        example, if you want to lose 40 pounds — put a goal of 5 lbs on the
        Post-It, so you can pull it down as completed sooner and get the
        momentum for it…as the 40 pounds sitting up there on the mirror can be
        pretty damn DE-motivating if it’s too big.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Mirror")}
      >
        <Text style={styles.buttonText}>Proceed to On the Go Mirror</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountabilityMirror;
