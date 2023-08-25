import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles.js";
import { useNavigation } from "@react-navigation/native";

const TakingInventory = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.subsection}>
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
  );
};

export default TakingInventory;
