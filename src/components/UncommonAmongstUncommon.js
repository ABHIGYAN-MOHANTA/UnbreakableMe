import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/styles.js";

const UncommonAmongstUncommon = () => {
  return (
    <View style={styles.subsection}>
      <Text style={styles.subheading}>Uncommon Amongst Uncommon</Text>
      <Text style={styles.marginTopText}>
        Greatness is not something that if you meet it once it stays with you
        forever. That shit evaporates like a flash of oil in a hot pan.
      </Text>
      <Text style={styles.text}>
        To be uncommon amongst uncommon, it requires sustaining greatness for a
        longer period of time. It requires staying in constant pursuit and
        putting an ending effort. This may sound appealing but will require
        everything you have to give and then some. Its easy to stand out amongst
        everyday people and be a big fish ina small pond. It is much more
        difficult task when you are wolf amongst wolves.
      </Text>
    </View>
  );
};

export default UncommonAmongstUncommon;
